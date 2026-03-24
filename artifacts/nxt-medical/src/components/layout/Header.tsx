import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { navItems, ctas } from "@/content/site";
import GoogleSchedulingButton from "@/components/GoogleSchedulingButton";

type NavChild = { label: string; href: string };
type NavItem = { label: string; href: string; children?: NavChild[] };

function DropdownItem({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  const ref = useRef<HTMLDivElement>(null);

  const isActive =
    location === item.href ||
    (item.children?.some((c) => location.startsWith(c.href)) ?? false);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          isActive
            ? "text-primary bg-primary/5"
            : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
        }`}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {item.label}
        <ChevronDown
          size={14}
          className={`transition-transform duration-150 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-1.5 w-64 bg-white rounded-xl border border-gray-100 shadow-lg py-1.5 z-50">
          {item.children?.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className={`block px-4 py-2.5 text-sm transition-colors ${
                location === child.href || location.startsWith(child.href)
                  ? "text-primary bg-primary/5 font-medium"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
              onClick={() => setOpen(false)}
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropOpen, setMobileDropOpen] = useState<string | null>(null);
  const [location] = useLocation();

  const isActive = (item: NavItem) => {
    if (item.href === "/") return location === "/";
    if (item.children) return item.children.some((c) => location.startsWith(c.href));
    return location.startsWith(item.href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <img
              src={`${import.meta.env.BASE_URL}images/nxt-logo.png`}
              alt="NXT Medical"
              className="h-28 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {(navItems as NavItem[]).map((item) =>
              item.children ? (
                <DropdownItem key={item.href} item={item} />
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item)
                      ? "text-primary bg-primary/5"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              {ctas.contactUs}
            </Link>
            <GoogleSchedulingButton />
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {(navItems as NavItem[]).map((item) =>
              item.children ? (
                <div key={item.href}>
                  <button
                    className={`flex items-center justify-between w-full px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(item)
                        ? "text-primary bg-primary/5"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                    onClick={() =>
                      setMobileDropOpen(mobileDropOpen === item.href ? null : item.href)
                    }
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-150 ${
                        mobileDropOpen === item.href ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileDropOpen === item.href && (
                    <div className="ml-4 mt-1 space-y-0.5 border-l-2 border-gray-100 pl-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                            location === child.href || location.startsWith(child.href)
                              ? "text-primary font-medium"
                              : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                          }`}
                          onClick={() => {
                            setMobileOpen(false);
                            setMobileDropOpen(null);
                          }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item)
                      ? "text-primary bg-primary/5"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="pt-3 flex flex-col gap-2">
              <Link
                href="/contact"
                className="block w-full text-center px-4 py-2 text-sm font-medium text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {ctas.contactUs}
              </Link>
              <div onClick={() => setMobileOpen(false)}>
                <GoogleSchedulingButton />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
