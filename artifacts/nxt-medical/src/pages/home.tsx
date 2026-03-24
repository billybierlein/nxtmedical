import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import ServiceCard from "@/components/sections/ServiceCard";
import ProcessSteps from "@/components/sections/ProcessSteps";
import BenefitsGrid from "@/components/sections/BenefitsGrid";
import FAQSection from "@/components/sections/FAQSection";
import CTABand from "@/components/sections/CTABand";
import { services, processSteps, partnerBenefits } from "@/content/services";
import { homeFaqs } from "@/content/faqs";
import { ctas } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>NXT Medical — Remote Patient Care for Medical Practices</title>
        <meta
          name="description"
          content="NXT Medical delivers remote patient monitoring (RPM), chronic care management (CCM), and remote therapeutic monitoring (RTM) programs for medical practices. Hands-on implementation, clinical staffing, and ongoing support."
        />
      </Helmet>

      <Hero
        badge="Remote Care Programs for Providers"
        headline="Better Patient Care Between Visits"
        subheadline="NXT Medical delivers remote monitoring, care management, and therapeutic support programs — fully staffed and operationally managed, so your practice doesn't have to carry the load."
        primaryCta={{ label: ctas.bookDemo, href: ctas.bookDemoHref }}
        secondaryCta={{ label: "See Our Programs", href: "/remote-care" }}
      />

      <TrustStrip />

      {/* Care Between Visits value prop */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary text-sm font-medium uppercase tracking-wide">
                The Care Gap Problem
              </span>
              <h2 className="mt-3 text-2xl md:text-3xl font-bold text-gray-900">
                What happens between appointments matters
              </h2>
              <p className="mt-4 text-gray-500 text-base leading-relaxed">
                For patients managing chronic conditions, the time between clinic visits is where care
                breaks down. Missed readings, skipped medications, and unaddressed symptoms accumulate
                — until they require urgent intervention.
              </p>
              <p className="mt-4 text-gray-500 text-base leading-relaxed">
                NXT Medical bridges that gap. Our remote care programs provide continuous monitoring,
                clinical touchpoints, and proactive outreach that keeps patients engaged and on track —
                without requiring your staff to add hours to their day.
              </p>
              <Link
                href="/remote-care"
                className="inline-flex items-center mt-6 px-5 py-2.5 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors"
              >
                How remote care works
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  label: "Daily Data Review",
                  desc: "Clinical staff review patient readings every day — not just at appointments.",
                },
                {
                  label: "Proactive Outreach",
                  desc: "Patients are contacted when readings fall outside care plan thresholds.",
                },
                {
                  label: "Documented Care",
                  desc: "Every interaction is logged to support billing and continuity of care.",
                },
                {
                  label: "Your Oversight",
                  desc: "You retain full clinical authority. We handle the operational layer.",
                },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-gray-50 rounded-xl border border-gray-100">
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.label}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Remote Care Programs</h2>
            <p className="mt-3 text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
              Three distinct programs designed to address different patient needs — all managed by NXT Medical's clinical and operations team.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.values(services).map((service) => (
              <ServiceCard key={service.shortName} {...service} />
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps
        steps={processSteps}
        heading="How We Work Together"
        subheading="From initial discovery to ongoing operations, NXT Medical is with you every step of the way."
      />

      <BenefitsGrid
        benefits={partnerBenefits}
        heading="Why Providers Partner with NXT Medical"
        subheading="We're not a software vendor. We're an operational partner with skin in the game."
      />

      {/* FAQ preview */}
      <FAQSection
        faqs={homeFaqs}
        heading="Common Questions"
        subheading="Answers to what practices typically ask before getting started."
      />

      <CTABand />
    </>
  );
}
