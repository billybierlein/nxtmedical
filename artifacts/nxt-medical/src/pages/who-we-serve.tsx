import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Hero from "@/components/sections/Hero";

const providerTypes = [
  {
    title: "Chiropractors",
    description:
      "See how chiropractic clinics can explore remote care programs that support eligible patients and create recurring revenue opportunities without adding major administrative burden.",
    href: "/for-chiropractors",
    cta: "View Chiropractor Page",
  },
];

export default function WhoWeServePage() {
  return (
    <>
      <Helmet>
        <title>Who We Serve | NXT Medical</title>
        <meta
          name="description"
          content="Explore the provider types NXT Medical serves, with solutions designed around care setting, workflow, and patient support needs."
        />
        <link rel="canonical" href="https://nxtmedical.us/who-we-serve" />
      </Helmet>

      <Hero
        badge="Provider Solutions"
        headline="Who We Serve"
        subheadline="NXT Medical supports provider groups looking to expand care delivery, improve patient engagement, and explore scalable operational models."
        primaryCta={{ label: "Explore Chiropractor Solutions", href: "/for-chiropractors" }}
        secondaryCta={null}
        size="medium"
      />

      {/* Intro copy */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Built for Provider-Specific Workflows
          </h2>
          <p className="mt-4 text-gray-500 text-base leading-relaxed">
            Different provider types have different patient populations, workflows,
            and operational needs. Our solutions are designed to align with the
            realities of each care setting, starting with chiropractic clinics.
          </p>
        </div>
      </section>

      {/* Provider cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {providerTypes.map((provider, i) => (
              <Link
                key={i}
                href={provider.href}
                className="group bg-white rounded-2xl border border-gray-100 p-8 flex flex-col gap-5 hover:border-primary/20 hover:shadow-sm transition-all"
              >
                <h3 className="font-semibold text-gray-900 text-lg">
                  {provider.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">
                  {provider.description}
                </p>
                <span className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                  {provider.cta}
                  <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Expanding support */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">
            Expanding Provider Support
          </h2>
          <p className="mt-4 text-gray-500 text-base leading-relaxed">
            NXT Medical is building provider-specific solutions for additional
            care models over time. As new verticals are launched, they will be
            added here.
          </p>
        </div>
      </section>

      {/* Final CTA — lighter than typical CTABand */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Looking for the Right Fit?
          </h2>
          <p className="mt-4 text-gray-500 text-base leading-relaxed">
            Start with the provider page that best matches your practice to see
            how NXT Medical approaches program support, workflow integration, and
            growth opportunities.
          </p>
          <div className="mt-8">
            <Link
              href="/for-chiropractors"
              className="inline-flex px-6 py-3 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors"
            >
              Explore Chiropractor Solutions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
