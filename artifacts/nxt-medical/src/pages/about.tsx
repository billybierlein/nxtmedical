import { Helmet } from "react-helmet-async";
import Hero from "@/components/sections/Hero";
import CTABand from "@/components/sections/CTABand";
import GoogleSchedulingButton from "@/components/GoogleSchedulingButton";
import { ctas } from "@/content/site";
import { CheckCircle2 } from "lucide-react";

const coreValues = [
  {
    title: "Operational Depth",
    description:
      "We don't just provide software access and walk away. NXT Medical operates the program — clinical staff, workflows, patient engagement, and documentation — on behalf of your practice.",
  },
  {
    title: "Provider Alignment",
    description:
      "We work for providers, not patients directly. Our programs are designed to generate value for the practice — better outcomes, sustainable revenue, and reduced operational burden.",
  },
  {
    title: "Compliance Integrity",
    description:
      "Every program we run is built on CMS compliance standards and HIPAA-aligned workflows. We take documentation and billing integrity seriously.",
  },
  {
    title: "Practical Implementation",
    description:
      "We've seen what makes remote care programs succeed and fail. Our implementation model is built around avoiding the common pitfalls — minimal disruption, clear timelines, and measurable results.",
  },
];

const whatWeHandle = [
  "Program enrollment and patient consent",
  "Device procurement, shipping, and patient setup",
  "Daily clinical monitoring and data review",
  "Threshold-based escalation protocols",
  "Care plan creation and ongoing management",
  "Monthly patient outreach and coordination",
  "Therapy adherence tracking and coaching",
  "CMS-compliant time logging and documentation",
  "Billing support and reimbursement guidance",
  "Ongoing practice reporting and performance review",
];

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About NXT Medical — Remote Care Partner for Medical Practices</title>
        <meta
          name="description"
          content="NXT Medical is a remote patient care partner for medical practices. We provide fully managed RPM, CCM, and RTM programs — clinical staff, operations, and support included."
        />
      </Helmet>

      <Hero
        size="medium"
        badge="About NXT Medical"
        headline="A Hands-On Remote Care Partner"
        subheadline="NXT Medical was built to solve the operational gap that stops most practices from running successful remote care programs — by providing the clinical staff and infrastructure to run them directly."
        secondaryCta={{ label: ctas.contactUs, href: "/contact" }}
      />

      {/* Mission section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Why NXT Medical Exists
              </h2>
              <p className="mt-4 text-gray-500 text-base leading-relaxed">
                Remote patient monitoring and care management programs create real value for
                patients and providers — but most practices never successfully implement them.
                The reason isn't desire or intent. It's operational burden.
              </p>
              <p className="mt-4 text-gray-500 text-base leading-relaxed">
                Practices that try to build remote care programs internally often run into the
                same wall: not enough staff time, unclear documentation requirements, and
                uncertain billing processes. Programs get started, then quietly abandoned.
              </p>
              <p className="mt-4 text-gray-500 text-base leading-relaxed">
                NXT Medical exists to solve that problem. We provide everything a practice needs
                to run RPM, CCM, and RTM programs — without requiring internal staff to absorb
                the operational load. We are your remote care department.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-8">
              <h3 className="font-semibold text-gray-900 text-base mb-5">
                What We Handle Directly
              </h3>
              <ul className="space-y-3">
                {whatWeHandle.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 size={15} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-500 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              How We Work
            </h2>
            <p className="mt-3 text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
              Our approach to remote care is shaped by what actually works in practice — not by what sounds good in a sales pitch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreValues.map((val, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="font-semibold text-gray-900 text-base mb-2">{val.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner positioning */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Beyond Implementation
          </h2>
          <p className="mt-4 text-gray-500 text-base leading-relaxed max-w-2xl mx-auto">
            We don't consider our job done once a practice goes live. NXT Medical stays engaged
            through the entire lifecycle of your remote care program — monitoring performance,
            adjusting enrollment, supporting billing, and optimizing outcomes over time.
          </p>
          <p className="mt-4 text-gray-500 text-base leading-relaxed max-w-2xl mx-auto">
            Our goal is a program your practice is still running and growing two years from now —
            not a pilot that stalls after three months.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <GoogleSchedulingButton />
            <a
              href="/contact"
              className="w-full sm:w-auto px-6 py-3 text-sm font-medium text-gray-600 border border-gray-200 hover:border-gray-300 hover:bg-gray-50 rounded-lg transition-colors"
            >
              {ctas.contactUs}
            </a>
          </div>
        </div>
      </section>

      <CTABand
        heading="Let's talk about your practice"
        subheading="Tell us about your patient population and goals — we'll show you which programs make the most sense to start with."
      />
    </>
  );
}
