import { Helmet } from "react-helmet-async";
import { CheckCircle2, Users, ClipboardList, Settings, FileText, DollarSign, ShieldCheck, Zap, Building } from "lucide-react";
import Hero from "@/components/sections/Hero";
import BenefitsGrid from "@/components/sections/BenefitsGrid";
import FAQSection from "@/components/sections/FAQSection";
import CTABand from "@/components/sections/CTABand";
import { chiropractorFaqs } from "@/content/faqs";

const howItWorksSteps = [
  {
    icon: Users,
    step: "01",
    title: "Identify Eligible Patients",
    description:
      "Your clinic provides a list of patients who may qualify based on age, insurance, and care profile.",
  },
  {
    icon: ClipboardList,
    step: "02",
    title: "NXT Handles Enrollment and Monitoring",
    description:
      "Our team supports onboarding, patient engagement, monitoring workflows, and operational coordination.",
  },
  {
    icon: Settings,
    step: "03",
    title: "We Manage Billing and Program Operations",
    description:
      "NXT handles the backend processes required to keep the program moving efficiently.",
  },
  {
    icon: FileText,
    step: "04",
    title: "You Review Progress Reports",
    description:
      "Your clinic stays informed through recurring progress updates without taking on day-to-day management.",
  },
];

const benefits = [
  {
    title: "Additional Recurring Revenue",
    description:
      "Create a new line of revenue tied to eligible patient participation.",
  },
  {
    title: "Minimal Administrative Burden",
    description:
      "Avoid building an in-house system to support monitoring, billing, and workflow management.",
  },
  {
    title: "Better Ongoing Patient Visibility",
    description:
      "Support continuity and engagement outside the clinic setting.",
  },
  {
    title: "Simple Practice Integration",
    description:
      "Designed to fit into clinic operations without requiring major workflow changes.",
  },
  {
    title: "Done-For-You Support",
    description:
      "NXT handles the operational complexity behind the scenes.",
  },
  {
    title: "Built for Scalable Growth",
    description:
      "Useful for clinics looking to grow without adding unnecessary overhead.",
  },
];

const clinicDoes = [
  "Identify or share potentially eligible patients",
  "Stay informed with progress updates",
  "Review reports as needed",
  "Decide whether the program is a fit for your practice",
];

const nxtDoes = [
  "Program onboarding support",
  "Patient monitoring coordination",
  "Operational follow-up workflows",
  "Billing and backend program support",
  "Ongoing reporting structure",
];

export default function ForChiropractorsPage() {
  return (
    <>
      <Helmet>
        <title>Chiropractor Remote Care Program | NXT Medical</title>
        <meta
          name="description"
          content="See how NXT Medical helps chiropractors explore remote care programs that can create recurring revenue from eligible Medicare patients without adding operational burden."
        />
        <link rel="canonical" href="https://nxtmedical.us/for-chiropractors" />
      </Helmet>

      {/* 1. Hero */}
      <Hero
        badge="Remote Care for Chiropractic Clinics"
        headline="Turn Eligible Medicare Patients Into Monthly Recurring Revenue"
        subheadline="NXT Medical helps chiropractors add a new revenue stream through remote care programs without adding staff, managing billing, or taking on extra administrative work."
        primaryCta={{ label: "Book a Demo", href: "/contact#demo" }}
        secondaryCta={{ label: "Watch 2-Minute Overview", href: "#video" }}
      />

      {/* Hero supporting bullets */}
      <section className="bg-gray-950 pb-14 pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {[
            "No added staff required",
            "End-to-end program support",
            "Built for eligible Medicare patient populations",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-primary flex-shrink-0" />
              <span className="text-gray-400 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 2. How It Works — 4 steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              How It Works
            </h2>
            <p className="mt-3 text-gray-500 text-base max-w-2xl mx-auto leading-relaxed">
              We make it easy for chiropractic clinics to offer remote care
              services without creating more work for the practice.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorksSteps.map((step, i) => (
              <div key={i} className="relative">
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center mb-4">
                    <step.icon size={20} className="text-primary" />
                  </div>
                  <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                    Step {step.step}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Revenue Opportunity */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              A New Revenue Opportunity for the Right Patient Base
            </h2>
            <p className="mt-3 text-gray-500 text-base max-w-2xl mx-auto leading-relaxed">
              For clinics with eligible Medicare patients, remote care programs
              can create recurring monthly revenue while improving patient
              follow-through and visibility between visits.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: DollarSign,
                title: "Recurring Monthly Revenue Potential",
                description:
                  "Build predictable, recurring revenue from eligible patient participation in remote care programs.",
              },
              {
                icon: Users,
                title: "No Added Hiring Required",
                description:
                  "NXT manages the operational workload so your existing team can stay focused on patient care.",
              },
              {
                icon: Building,
                title: "Fits Existing Clinic Workflow",
                description:
                  "Designed to integrate into how your practice already operates without major changes.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 p-8 text-center flex flex-col items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center">
                  <card.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 text-base">
                  {card.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-gray-400 text-xs italic max-w-xl mx-auto">
            Revenue varies based on patient eligibility, participation, and
            program fit.
          </p>
        </div>
      </section>

      {/* 4. Your Clinic vs. NXT */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              You Stay Clinical. We Handle the Operational Load.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Your Clinic column */}
            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-8">
              <h3 className="font-semibold text-gray-900 text-lg mb-6">
                Your Clinic
              </h3>
              <ul className="space-y-4">
                {clinicDoes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2
                      size={16}
                      className="text-gray-400 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-gray-600 text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* NXT Medical column */}
            <div className="bg-primary/[0.03] rounded-2xl border border-primary/10 p-8">
              <h3 className="font-semibold text-gray-900 text-lg mb-6">
                NXT Medical
              </h3>
              <ul className="space-y-4">
                {nxtDoes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2
                      size={16}
                      className="text-primary flex-shrink-0 mt-0.5"
                    />
                    <span className="text-gray-700 text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Benefits */}
      <BenefitsGrid
        benefits={benefits}
        heading="Why Chiropractors Explore NXT Remote Care"
        columns={3}
      />

      {/* 6. Video Section */}
      <section id="video" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Watch the Quick Overview
          </h2>
          <p className="mt-3 text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
            See how the program works, what your clinic is responsible for, and
            why chiropractors are exploring this as a low-burden growth
            opportunity.
          </p>

          <div className="mt-10 relative rounded-2xl overflow-hidden aspect-video">
            <video
              className="w-full h-full object-cover rounded-2xl"
              controls
              preload="metadata"
              poster=""
            >
              <source
                src={`${import.meta.env.BASE_URL}videos/chiro-intro.mp4`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* 7. Trust / Credibility */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            A Structured, Support-Driven Approach
          </h2>
          <p className="mt-4 text-gray-500 text-base max-w-2xl mx-auto leading-relaxed">
            NXT's remote care model is designed to help practices explore new
            revenue opportunities without forcing the clinic to absorb all of
            the operational complexity.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {[
              { icon: FileText, label: "Provider-Facing Reporting" },
              { icon: Users, label: "Patient Support Workflows" },
              { icon: Zap, label: "Implementation Guidance" },
              { icon: Settings, label: "Operational Coordination" },
              { icon: ShieldCheck, label: "Compliance-Aware Processes" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-3 py-4"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center">
                  <item.icon size={18} className="text-primary" />
                </div>
                <span className="text-gray-700 text-xs font-medium text-center leading-snug">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <FAQSection faqs={chiropractorFaqs} />

      {/* 9. Final CTA */}
      <CTABand
        heading="See Whether This Fits Your Clinic"
        subheading="Book a quick demo to see how NXT Remote Care works, what your clinic would need to do, and whether your patient base may be a fit."
        primaryCta={{ label: "Book My Demo", href: "/contact#demo" }}
        secondaryCta={{ label: "Watch the Overview", href: "#video" }}
      />
    </>
  );
}
