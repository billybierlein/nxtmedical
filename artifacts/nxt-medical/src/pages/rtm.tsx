import { Helmet } from "react-helmet-async";
import { CheckCircle2 } from "lucide-react";
import Hero from "@/components/sections/Hero";
import BenefitsGrid from "@/components/sections/BenefitsGrid";
import FAQSection from "@/components/sections/FAQSection";
import CTABand from "@/components/sections/CTABand";
import { rtmFaqs } from "@/content/faqs";
import { ctas } from "@/content/site";
import { services } from "@/content/services";

const rtmBenefits = [
  {
    title: "Therapy Adherence Tracking",
    description:
      "Patients log therapy activity through app-based tools or connected devices, giving your clinical team visibility into real-world adherence.",
  },
  {
    title: "Early Non-Adherence Detection",
    description:
      "NXT Medical flags patients falling behind on prescribed therapy programs and facilitates outreach before small gaps become larger problems.",
  },
  {
    title: "Patient Education & Support",
    description:
      "Enrolled patients receive regular support and education to reinforce therapy protocols and address compliance barriers.",
  },
  {
    title: "Provider Alert Workflows",
    description:
      "When adherence drops or patient-reported data indicates concern, your clinical team receives timely, structured alerts.",
  },
  {
    title: "Operational Simplicity",
    description:
      "NXT Medical manages the monitoring workflow end to end — no additional software to learn, no new staff required.",
  },
  {
    title: "Documentation for Billing",
    description:
      "All monitoring interactions and time are documented to support RTM CPT code billing under current CMS guidelines.",
  },
];

export default function RTMPage() {
  const rtm = services.rtm;

  return (
    <>
      <Helmet>
        <title>Remote Therapeutic Monitoring (RTM) for Medical Practices | NXT Medical</title>
        <meta
          name="description"
          content="NXT Medical's Remote Therapeutic Monitoring program tracks therapy adherence and supports musculoskeletal and post-surgical care between visits — without adding staff burden."
        />
      </Helmet>

      <Hero
        size="medium"
        badge="Remote Therapeutic Monitoring"
        headline="Therapy Adherence, Tracked Between Visits"
        subheadline="RTM helps you monitor whether patients are following prescribed therapy programs — closing the gap between clinic visits and improving recovery outcomes."
        primaryCta={{ label: ctas.bookDemo, href: "/contact#demo" }}
        secondaryCta={{ label: ctas.contactUs, href: "/contact" }}
      />

      {/* What is RTM */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                What is Remote Therapeutic Monitoring?
              </h2>
              <p className="mt-4 text-gray-500 text-base leading-relaxed">
                Remote Therapeutic Monitoring (RTM) is a CMS-reimbursable care model focused on
                therapy adherence and patient-reported health data. Unlike RPM — which captures
                physiological readings from devices — RTM focuses on whether patients are following
                prescribed therapeutic programs between clinical encounters.
              </p>
              <p className="mt-4 text-gray-500 text-base leading-relaxed">
                RTM is particularly valuable for specialties managing musculoskeletal conditions,
                post-surgical recovery, or any chronic condition where therapy adherence is a
                primary driver of outcomes.
              </p>
              <p className="mt-4 text-gray-500 text-base leading-relaxed">
                NXT Medical provides the monitoring infrastructure, patient engagement, and clinical
                staff to operate RTM as a fully managed program — with your providers maintaining
                clinical oversight and ordering authority.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl border border-gray-100 p-6">
                <h3 className="font-semibold text-gray-900 text-base mb-3">Who It Is For</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{rtm.whoItIsFor}</p>
              </div>

              <div className="bg-gray-50 rounded-xl border border-gray-100 p-6">
                <h3 className="font-semibold text-gray-900 text-base mb-3">Program Highlights</h3>
                <ul className="space-y-2.5">
                  {rtm.benefits.map((b, i) => (
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
        benefits={rtmBenefits}
        heading="What NXT Medical Provides in RTM"
        subheading="We manage the monitoring, patient engagement, and documentation — your team focuses on clinical decisions."
        columns={3}
      />

      {/* Reimbursement framing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-gray-100 p-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">RTM Reimbursement Overview</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              RTM is reimbursable under current CMS guidelines using a set of dedicated CPT codes
              for device/data supply, monitoring, and clinical staff time. Codes apply on a monthly
              basis for patients with a valid therapeutic order.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  code: "98975–98976",
                  label: "Data Supply",
                  desc: "Device supply and data transmission for therapeutic monitoring",
                },
                {
                  code: "98977",
                  label: "Musculoskeletal Data",
                  desc: "Monthly supply of musculoskeletal-specific device and data transmission",
                },
                {
                  code: "98980–98981",
                  label: "Clinical Staff Time",
                  desc: "Monthly monitoring time for treatment adherence and therapeutic response",
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
              Confirm applicable codes and rates with your billing team. NXT Medical provides
              documentation support and coding guidance as part of the program.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={rtmFaqs} heading="RTM Frequently Asked Questions" />

      <CTABand
        heading="Add Remote Therapeutic Monitoring to Your Practice"
        subheading="NXT Medical provides the infrastructure and clinical support to run RTM without adding to your staff's workload."
      />
    </>
  );
}
