import { Link } from "wouter";
import { ctas } from "@/content/site";
import GoogleSchedulingButton from "@/components/GoogleSchedulingButton";

interface CTABandProps {
  heading?: string;
  subheading?: string;
  primaryCta?: { label: string; href: string } | "scheduling";
  secondaryCta?: { label: string; href: string };
}

export default function CTABand({
  heading = "Ready to bring remote care to your practice?",
  subheading = "NXT Medical handles the clinical operations, documentation, and patient support — so your team can focus on care.",
  primaryCta = "scheduling",
  secondaryCta = { label: ctas.contactUs, href: "/contact" },
}: CTABandProps) {
  return (
    <section className="bg-gray-950 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white">{heading}</h2>
        <p className="mt-4 text-gray-400 text-base leading-relaxed">{subheading}</p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          {primaryCta === "scheduling" ? (
            <GoogleSchedulingButton />
          ) : (
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
          )}
          <Link
            href={secondaryCta.href}
            className="w-full sm:w-auto px-6 py-3 text-sm font-medium text-gray-300 border border-gray-700 hover:border-gray-500 hover:text-white rounded-lg transition-colors"
          >
            {secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
