import { Helmet } from "react-helmet-async";
import { CheckCircle2 } from "lucide-react";
import Hero from "@/components/sections/Hero";
import BenefitsGrid from "@/components/sections/BenefitsGrid";
import FAQSection from "@/components/sections/FAQSection";
import CTABand from "@/components/sections/CTABand";
import { ccmFaqs } from "@/content/faqs";
import { ctas } from "@/content/site";
import { services } from "@/content/services";

const ccmBenefits = [
  {
    title: "Dedicated Care Managers",
    description:
      "NXT Medical provides trained care managers who handle monthly patient touchpoints, care plan maintenance, and coordination tasks.",
  },
  {
    title: "Care Plan Creation & Updates",
    description:
      "Initial care plans are built collaboratively with your team. Ongoing updates are managed by NXT Medical with provider oversight.",
  },
  {
    title: "Monthly Patient Outreach",
    description:
      "Each enrolled patient receives structured monthly contact — addressing their chronic conditions, medications, and care needs.",
  },
  {
    title: "Referral Coordination",
    description:
      "Care managers coordinate referrals, specialist follow-up, and community resource connections on behalf of enrolled patients.",
  },
  {
    title: "Medication Management Support",
    description:
      "Monthly interactions include structured medication review support, adherence coaching, and flagging for clinical follow-up.",
  },
  {
    title: "Billing-Ready Time Logging",
    description:
      "All care management time is logged and documented in a format that supports CCM billing under CMS requirements.",
  },
];

export default function CCMPage() {
  const ccm = services.ccm;

  return (
    <>
      <Helmet>
        <title>Chronic Care Management (CCM) for Medical Practices | NXT Medical</title>
        <meta
          name="description"
          content="NXT Medical's Chronic Care Management program provides monthly care coordination, care plan management, and patient outreach for practices managing complex chronic condition patients."
        />
      </Helmet>

      <Hero
        size="medium"
        badge="Chronic Care Management"
        headline="Ongoing Care for Your Most Complex Patients"
        subheadline="CCM gives your chronic condition patients structured monthly support — and gives your practice a recurring revenue stream from patients you are already managing."
        primaryCta={{ label: ctas.bookDemo, href: ctas.bookDemoHref }}
        secondaryCta={{ label: ctas.contactUs, href: "/contact" }}
      />

      {/* What is CCM */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                What is Chronic Care Management?
              </h2>
              <p className="mt-4 text-gray-500 text-base leading-relaxed">
                Chronic Care Management (CCM) is a Medicare-reimbursable service for patients
                with two or more chronic conditions expected to last at least 12 months.
                CCM covers monthly care coordination time — including care planning, medication
                review, referral coordination, and proactive patient outreach between appointments.
              </p>
              <p className="mt-4 text-gray-500 text-base leading-relaxed">
                For practices, CCM is an opportunity to provide a higher standard of care for
                complex patients while generating recurring monthly revenue without increasing
                appointment volume.
              </p>
              <p className="mt-4 text-gray-500 text-base leading-relaxed">
                NXT Medical provides the care managers, care planning infrastructure, and
                documentation workflows to operate a CCM program at scale — with your providers
                retaining full clinical responsibility.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl border border-gray-100 p-6">
                <h3 className="font-semibold text-gray-900 text-base mb-3">Who Qualifies</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{ccm.whoItIsFor}</p>
              </div>

              <div className="bg-gray-50 rounded-xl border border-gray-100 p-6">
                <h3 className="font-semibold text-gray-900 text-base mb-3">Program Highlights</h3>
                <ul className="space-y-2.5">
                  {ccm.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-500 text-sm leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BenefitsGrid
        benefits={ccmBenefits}
        heading="What NXT Medical Provides in CCM"
        subheading="From initial care plan creation to monthly patient outreach, we run the program — you retain clinical oversight."
        columns={3}
      />

      {/* Reimbursement framing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-gray-100 p-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">CCM Reimbursement Overview</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              CCM is reimbursable under Medicare as a monthly service, based on time thresholds
              for care management activity. Multiple CPT codes support different monthly time tiers
              and complexity levels.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  code: "99490",
                  label: "Standard CCM (20+ min)",
                  desc: "Monthly care management for patients with 2+ chronic conditions",
                },
                {
                  code: "99491",
                  label: "Physician-Led CCM",
                  desc: "Monthly care management performed by a physician or APRN",
                },
                {
                  code: "99487–99489",
                  label: "Complex CCM",
                  desc: "Higher-complexity patients with 60+ minutes of monthly care management",
                },
              ].map((item, i) => (
                <div key={i} className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="text-xs font-mono text-primary font-semibold mb-1">
                    CPT {item.code}
                  </div>
                  <div className="text-sm font-medium text-gray-900 mb-1">{item.label}</div>
                  <div className="text-xs text-gray-500 leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-gray-400 leading-relaxed">
              Reimbursement rates vary by payer and geography. NXT Medical provides documentation
              and billing guidance, but specific rates should be confirmed with your billing team.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={ccmFaqs} heading="CCM Frequently Asked Questions" />

      <CTABand
        heading="Launch a Chronic Care Management Program"
        subheading="NXT Medical provides the care managers, documentation, and ongoing operations. See how CCM fits your patient panel."
      />
    </>
  );
}
