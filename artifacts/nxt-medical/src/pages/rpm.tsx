import { Helmet } from "react-helmet-async";
import Hero from "@/components/sections/Hero";
import BenefitsGrid from "@/components/sections/BenefitsGrid";
import FAQSection from "@/components/sections/FAQSection";
import CTABand from "@/components/sections/CTABand";
import { rpmFaqs } from "@/content/faqs";
import { ctas } from "@/content/site";
import { services } from "@/content/services";
import { CheckCircle2 } from "lucide-react";

const rpmBenefits = [
  {
    title: "No Internal Staff Required",
    description:
      "NXT Medical provides the clinical staff who review data, contact patients, and document time — at no additional burden to your team.",
  },
  {
    title: "Device Supply & Logistics",
    description:
      "We handle device ordering, shipping, patient setup, and replacement — end to end, without your front desk involved.",
  },
  {
    title: "Threshold-Based Alerts",
    description:
      "When a patient's readings fall outside their care plan parameters, our team follows an escalation protocol and alerts your practice when needed.",
  },
  {
    title: "CMS-Compliant Documentation",
    description:
      "All time is logged, interactions are recorded, and documentation is prepared to meet CMS RPM billing requirements.",
  },
  {
    title: "Monthly Billing Support",
    description:
      "We provide billing-ready reports for CPT codes 99453–99458 and support your billing team in understanding the reimbursement structure.",
  },
  {
    title: "Patient Engagement Focus",
    description:
      "Regular check-ins and education keep enrolled patients engaged with their devices and their care — improving adherence and outcomes.",
  },
];

export default function RPMPage() {
  const rpm = services.rpm;

  return (
    <>
      <Helmet>
        <title>Remote Patient Monitoring (RPM) for Medical Practices | NXT Medical</title>
        <meta
          name="description"
          content="NXT Medical's Remote Patient Monitoring program provides daily data review, device logistics, and billing-ready documentation for medical practices managing chronic conditions."
        />
      </Helmet>

      <Hero
        size="medium"
        badge="Remote Patient Monitoring"
        headline="Real-Time Monitoring Between Visits"
        subheadline="NXT Medical manages the full RPM workflow — devices, daily data review, patient outreach, and documentation — so your clinical team gets the data without the overhead."
        secondaryCta={{ label: ctas.contactUs, href: "/contact" }}
      />

      {/* What is RPM */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                What is Remote Patient Monitoring?
              </h2>
              <p className="mt-4 text-gray-500 text-base leading-relaxed">
                Remote Patient Monitoring (RPM) is a CMS-reimbursable care model that uses
                connected devices to collect patient health data between clinic visits.
                Patients use devices — blood pressure cuffs, glucometers, pulse oximeters, or
                weight scales — at home, and that data is transmitted to a clinical team for review.
              </p>
              <p className="mt-4 text-gray-500 text-base leading-relaxed">
                For practices, RPM creates a direct line of visibility into what is happening
                with high-risk patients between appointments — enabling earlier interventions and
                fewer avoidable escalations.
              </p>
              <p className="mt-4 text-gray-500 text-base leading-relaxed">
                NXT Medical provides the complete operational infrastructure: device supply,
                clinical staff, daily monitoring, patient communication, and billing documentation.
                Your practice retains clinical authority; we run the program.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl border border-gray-100 p-6">
                <h3 className="font-semibold text-gray-900 text-base mb-3">Who It Is For</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{rpm.whoItIsFor}</p>
              </div>

              <div className="bg-gray-50 rounded-xl border border-gray-100 p-6">
                <h3 className="font-semibold text-gray-900 text-base mb-3">Program Highlights</h3>
                <ul className="space-y-2.5">
                  {rpm.benefits.map((b, i) => (
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
        benefits={rpmBenefits}
        heading="What NXT Medical Provides in RPM"
        subheading="We handle the operational complexity so your team stays focused on clinical care."
        columns={3}
      />

      {/* Reimbursement framing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-gray-100 p-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Understanding RPM Reimbursement
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              RPM is reimbursable under Medicare and many commercial payer contracts using a
              defined set of CPT codes. Eligibility is based on patient qualification, device
              transmission, and clinical staff time logged each month.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { code: "99453", label: "Setup & Education", desc: "Initial device setup and patient education" },
                { code: "99454", label: "Device Supply", desc: "Monthly fee for device supply and data transmission" },
                { code: "99457–99458", label: "Clinical Time", desc: "Monthly clinical staff time (20+ min required)" },
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
              Reimbursement rates vary by payer and geographic location. NXT Medical provides
              billing guidance and documentation support, but specific rate estimates should be
              confirmed with your billing team or payer contracts.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={rpmFaqs} heading="RPM Frequently Asked Questions" />

      <CTABand
        heading="Start a Remote Patient Monitoring Program"
        subheading="NXT Medical handles enrollment, device logistics, and daily monitoring. Book a demo to see how it works for your practice."
      />
    </>
  );
}
