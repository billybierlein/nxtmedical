import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/sections/Hero";
import ServiceCard from "@/components/sections/ServiceCard";
import BenefitsGrid from "@/components/sections/BenefitsGrid";
import FAQSection from "@/components/sections/FAQSection";
import CTABand from "@/components/sections/CTABand";
import { services } from "@/content/services";
import { remoteCareOverviewFaqs } from "@/content/faqs";
import { ctas } from "@/content/site";

const workflowBenefits = [
  {
    title: "Enrollment & Device Logistics",
    description:
      "We handle patient consent, device selection, shipping, and setup — reducing the administrative load on your front desk.",
  },
  {
    title: "Daily Clinical Monitoring",
    description:
      "Our clinical staff reviews incoming data daily, flags exceptions, and manages escalation workflows when intervention is needed.",
  },
  {
    title: "Billing-Ready Documentation",
    description:
      "Every interaction and time-logged activity is documented according to CMS requirements — ready for your billing team.",
  },
  {
    title: "Care Plan Management",
    description:
      "Care plans are built, maintained, and updated by NXT Medical clinical staff with your oversight as the ordering provider.",
  },
  {
    title: "Patient Communication",
    description:
      "Patients receive regular outreach, education, and support between visits — improving engagement and adherence.",
  },
  {
    title: "Practice Reporting",
    description:
      "You receive regular reports on patient engagement, program performance, and billing activity across all enrolled patients.",
  },
];

export default function RemoteCarePage() {
  return (
    <>
      <Helmet>
        <title>Remote Care Overview — RPM, CCM & RTM | NXT Medical</title>
        <meta
          name="description"
          content="NXT Medical offers remote patient monitoring, chronic care management, and remote therapeutic monitoring programs for medical practices — fully staffed and managed."
        />
      </Helmet>

      <Hero
        size="medium"
        badge="Remote Care Services"
        headline="One Partner. Three Remote Care Programs."
        subheadline="NXT Medical delivers RPM, CCM, and RTM programs under a single operational model — giving your practice the infrastructure and clinical staff to run them without adding internal burden."
        primaryCta={{ label: ctas.bookDemo, href: "/contact#demo" }}
        secondaryCta={{ label: ctas.contactUs, href: "/contact" }}
      />

      {/* Programs overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Programs We Manage for Your Practice
            </h2>
            <p className="mt-3 text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
              Each program targets a distinct patient need — and many practices run all three
              simultaneously for different patient cohorts.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.values(services).map((service) => (
              <ServiceCard key={service.shortName} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Comparing the Three Programs
            </h2>
            <p className="mt-3 text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
              Use this reference to determine which programs fit your patient population.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left py-3 pr-6 font-semibold text-gray-900 w-40">Feature</th>
                  <th className="text-left py-3 px-4 font-semibold text-primary">RPM</th>
                  <th className="text-left py-3 px-4 font-semibold text-primary">CCM</th>
                  <th className="text-left py-3 px-4 font-semibold text-primary">RTM</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {[
                  {
                    feature: "Primary Focus",
                    rpm: "Physiological data monitoring",
                    ccm: "Care coordination & chronic condition management",
                    rtm: "Therapy adherence & musculoskeletal monitoring",
                  },
                  {
                    feature: "Patient Eligibility",
                    rpm: "Chronic conditions requiring ongoing monitoring",
                    ccm: "2+ chronic conditions lasting 12+ months",
                    rtm: "Therapy-dependent or post-procedure conditions",
                  },
                  {
                    feature: "Time Requirement",
                    rpm: "20+ min/month of clinical staff time",
                    ccm: "20+ min/month of care management time",
                    rtm: "20+ min/month of monitoring & interaction",
                  },
                  {
                    feature: "Device Required",
                    rpm: "Yes — connected monitoring devices",
                    ccm: "No — phone/digital communication",
                    rtm: "App or device-based engagement",
                  },
                  {
                    feature: "Common Specialties",
                    rpm: "Primary care, cardiology, endocrinology",
                    ccm: "Primary care, internal medicine",
                    rtm: "Physical therapy, orthopedics, neurology",
                  },
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="py-4 pr-6 font-medium text-gray-700">{row.feature}</td>
                    <td className="py-4 px-4 text-gray-500">{row.rpm}</td>
                    <td className="py-4 px-4 text-gray-500">{row.ccm}</td>
                    <td className="py-4 px-4 text-gray-500">{row.rtm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <BenefitsGrid
        benefits={workflowBenefits}
        heading="What NXT Medical Manages for You"
        subheading="We operate the full stack of remote care — from enrollment to documentation — so your practice can grow this service line without growing your overhead."
        columns={3}
      />

      {/* Revenue framing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-gray-100 p-10 text-center">
            <h2 className="text-2xl font-bold text-gray-900">
              Remote Care Is a Revenue Opportunity — Not Just a Care Obligation
            </h2>
            <p className="mt-4 text-gray-500 text-base leading-relaxed max-w-2xl mx-auto">
              RPM, CCM, and RTM are all covered under existing Medicare reimbursement codes.
              Practices that run these programs generate recurring monthly revenue from patients
              they are already serving — without adding new patients or increasing visit volume.
            </p>
            <p className="mt-4 text-gray-500 text-base leading-relaxed max-w-2xl mx-auto">
              NXT Medical helps you model expected reimbursement based on your actual patient panel.
              We also support your billing team with documentation and coding guidance from day one.
            </p>
            <Link
              href="/contact#demo"
              className="inline-block mt-8 px-6 py-3 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors"
            >
              {ctas.bookDemo}
            </Link>
          </div>
        </div>
      </section>

      <FAQSection
        faqs={remoteCareOverviewFaqs}
        heading="Remote Care FAQs"
      />

      <CTABand />
    </>
  );
}
