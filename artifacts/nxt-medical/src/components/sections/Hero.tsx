import { Link } from "wouter";
import { ctas } from "@/content/site";
import GoogleSchedulingButton from "@/components/GoogleSchedulingButton";

interface HeroProps {
  headline: string;
  subheadline: string;
  primaryCta?: { label: string; href: string } | "scheduling";
  secondaryCta?: { label: string; href: string } | null;
  badge?: string;
  size?: "large" | "medium";
}

export default function Hero({
  headline,
  subheadline,
  primaryCta = "scheduling",
  secondaryCta: secondaryCtaProp,
  badge,
  size = "large",
}: HeroProps) {
  const secondaryCta = secondaryCtaProp === null ? null : (secondaryCtaProp ?? { label: ctas.contactUs, href: "/contact" });

  return (
    <section
      className={`relative bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden ${
        size === "large" ? "py-28 md:py-36" : "py-20 md:py-28"
      }`}
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {badge && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-6">
            {badge}
          </div>
        )}

        <h1
          className={`font-bold tracking-tight text-white ${
            size === "large"
              ? "text-4xl md:text-5xl lg:text-6xl"
              : "text-3xl md:text-4xl lg:text-5xl"
          }`}
        >
          {headline}
        </h1>

        <p
          className={`mx-auto mt-6 text-gray-400 leading-relaxed ${
            size === "large" ? "text-lg md:text-xl max-w-2xl" : "text-base md:text-lg max-w-xl"
          }`}
        >
          {subheadline}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          {primaryCta === "scheduling" ? (
            <GoogleSchedulingButton />
          ) : primaryCta ? (
            primaryCta.href.startsWith("http") ? (
              <a
                href={primaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors text-center"
              >
                {primaryCta.label}
              </a>
            ) : (
              <Link
                href={primaryCta.href}
                className="w-full sm:w-auto px-6 py-3 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors"
              >
                {primaryCta.label}
              </Link>
            )
          ) : null}
          {secondaryCta && (
            secondaryCta.href.startsWith("#") ? (
              <a
                href={secondaryCta.href}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(secondaryCta.href)?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto px-6 py-3 text-sm font-medium text-gray-300 border border-gray-700 hover:border-gray-500 hover:text-white rounded-lg transition-colors text-center cursor-pointer"
              >
                {secondaryCta.label}
              </a>
            ) : (
              <Link
                href={secondaryCta.href}
                className="w-full sm:w-auto px-6 py-3 text-sm font-medium text-gray-300 border border-gray-700 hover:border-gray-500 hover:text-white rounded-lg transition-colors"
              >
                {secondaryCta.label}
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  );
}
