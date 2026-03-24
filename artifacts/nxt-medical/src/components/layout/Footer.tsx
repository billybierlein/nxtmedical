import { Link } from "wouter";
import { siteConfig, footerLinks, ctas } from "@/content/site";
import GoogleSchedulingButton from "@/components/GoogleSchedulingButton";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <img
                src={`${import.meta.env.BASE_URL}images/nxt-logo.png`}
                alt="NXT Medical"
                className="h-14 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-sm leading-relaxed text-gray-500 max-w-sm">
              Helping medical practices improve patient outcomes and unlock new revenue — through expert implementation, operational support, and ongoing patient engagement.
            </p>
            <div className="mt-6 flex flex-col gap-1 text-sm">
              <span className="text-gray-500">
                Phone:{" "}
                <span className="text-gray-400">{siteConfig.contact.phone}</span>
              </span>
              <span className="text-gray-500">
                Email:{" "}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Who We Serve */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
              Who We Serve
            </h3>
            <ul className="space-y-3">
              {footerLinks.whoWeServe.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <GoogleSchedulingButton />
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Remote Patient Monitoring &bull; Chronic Care Management &bull; Remote Therapeutic
            Monitoring
          </p>
        </div>
      </div>
    </footer>
  );
}
