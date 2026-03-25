import { Helmet } from "react-helmet-async";
import {
  CheckCircle2,
  XCircle,
  Users,
  ClipboardList,
  Settings,
  FileText,
  DollarSign,
  BarChart3,
  HeartPulse,
  ShieldCheck,
  Building,
  Eye,
} from "lucide-react";
import Hero from "@/components/sections/Hero";
import BenefitsGrid from "@/components/sections/BenefitsGrid";
import FAQSection from "@/components/sections/FAQSection";
import CTABand from "@/components/sections/CTABand";
import { primaryCareFaqs } from "@/content/faqs";
import GoogleSchedulingButton from "@/components/GoogleSchedulingButton";

const howItWorksSteps = [
  {
    icon: Users,
    step: "01",
    title: "Identify Eligible Patients",
    description:
      "We help identify Medicare patients who may qualify for remote care programs based on condition profiles and eligibility criteria.",
  },
  {
    icon: ClipboardList,
    step: "02",
    title: "Handle Enrollment and Setup",
    description:
      "Our team supports onboarding, patient education, and program activation so your staff stays focused on clinical care.",
  },
  {
    icon: HeartPulse,
    step: "03",
    title: "Monitor Progress Ongoing",
    description:
      "Patients participate through supported workflows while monitoring and engagement activities are maintained consistently.",
  },
  {
    icon: FileText,
    step: "04",
    title: "Deliver Reporting for Oversight",
    description:
      "Providers receive structured progress reporting and documentation support aligned with ongoing oversight needs.",
  },
];

const solutionItems = [
  {
    icon: Users,
    title: "Patient Identification & Eligibility",
    description: "Review and identify patients who may qualify for remote care programs.",
  },
  {
    icon: ClipboardList,
    title: "Enrollment & Onboarding",
    description: "Support patient activation, education, and program setup without burdening your front desk.",
  },
  {
    icon: HeartPulse,
    title: "Ongoing Monitoring & Engagement",
    description: "Maintain consistent patient interaction and adherence support between office visits.",
  },
  {
    icon: FileText,
    title: "Documentation & Reporting",
    description: "Structured reporting that supports provider oversight and compliance documentation.",
  },
  {
    icon: Settings,
    title: "Billing-Aligned Coordination",
    description: "Workflows designed to align with Medicare billing requirements and documentation standards.",
  },
  {
    icon: Eye,
    title: "Provider Visibility",
    description: "Clear insight into patient progress, engagement levels, and program performance.",
  },
];

const differentiators = [
  {
    title: "Done-for-You Implementation",
    description:
      "We handle program setup so your practice doesn't need to build infrastructure from scratch.",
  },
  {
    title: "Operational Partnership",
    description:
      "More than software access — NXT provides hands-on support for day-to-day program operations.",
  },
  {
    title: "Workflow-Conscious Design",
    description:
      "Programs are built to fit into primary care workflows, not disrupt them.",
  },
  {
    title: "Provider Reporting Structure",
    description:
      "Weekly reporting gives providers clear visibility without requiring them to chase data.",
  },
  {
    title: "Medicare-Aligned Processes",
    description:
      "Built to support Medicare-oriented care models and documentation requirements.",
  },
  {
    title: "Minimal Staff Burden",
    description:
      "Designed to reduce internal workload on office staff and clinical teams.",
  },
];

const bestFit = [
  "Primary care practices with Medicare patient volume",
  "Clinics managing chronic condition populations",
  "Groups looking for new revenue without adding major staff overhead",
  "Providers interested in better continuity and engagement between visits",
];

const notIdeal = [
  "Practices with little or no Medicare patient base",
  "Groups not interested in ongoing remote care workflows",
  "Organizations expecting a purely hands-off billing-only service",
];

export default function ForPrimaryCarePage() {
  return (
    <>
      <Helmet>
        <title>Primary Care Remote Care Solutions | NXT Medical</title>
        <meta
          name="description"
          content="Explore how NXT Medical helps primary care practices implement remote care programs with operational support, provider reporting, and recurring revenue potential."
        />
        <link rel="canonical" href="https://nxtmedical.us/for-primary-care" />
      </Helmet>

      {/* 1. Hero */}
      <Hero
        badge="Primary Care Solutions"
        headline="Increase Medicare Revenue Without Adding Staff Burden"
        subheadline="NXT Medical helps primary care practices implement remote care programs with end-to-end operational support, helping you create recurring revenue while improving patient engagement and ongoing care visibility."
        primaryCta="scheduling"
        secondaryCta={{ label: "Watch 2-Minute Overview", href: "#video" }}
      />

      {/* Hero trust bullets */}
      <section className="bg-gray-950 pb-14 pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {[
            "No upfront cost",
            "Fully managed support",
            "Medicare-aligned workflows",
            "Weekly provider reporting",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-primary flex-shrink-0" />
              <span className="text-gray-400 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Problem section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Primary Care Practices Need New Revenue Without More Administrative Strain
              </h2>
              <p className="mt-4 text-gray-500 text-base leading-relaxed">
                Primary care teams are already balancing chronic condition management, increasing patient needs, documentation demands, and staff capacity limits. While Medicare reimburses for remote care services, many practices do not have the infrastructure, staffing, or workflows needed to implement them effectively.
              </p>
              <p className="mt-4 text-gray-700 font-medium">
                NXT Medical helps close that gap by acting as an implementation and operations partner.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-8">
              <h3 className="font-semibold text-gray-900 text-lg mb-4">Common challenges we hear:</h3>
              <ul className="space-y-3">
                {[
                  "No time to build a remote care program internally",
                  "Staff already at capacity with existing patient load",
                  "Unclear on eligibility, billing, and compliance requirements",
                  "Worried about adding operational complexity",
                  "Aware of revenue opportunity but unsure how to capture it",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Solution overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              A Fully Managed Remote Care Program for Primary Care
            </h2>
            <p className="mt-3 text-gray-500 text-base max-w-2xl mx-auto leading-relaxed">
              NXT Medical supports the launch and ongoing operation of remote care programs designed to align with primary care workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutionItems.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 p-8 flex flex-col gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center">
                  <item.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 text-base">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. How it works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              How the Program Fits Into Your Practice
            </h2>
            <p className="mt-3 text-gray-500 text-base max-w-2xl mx-auto leading-relaxed">
              We designed the onboarding and ongoing workflow to minimize disruption and keep your team focused on what they do best.
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
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Revenue opportunity */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Create Recurring Revenue from Your Existing Medicare Patient Base
            </h2>
            <p className="mt-3 text-gray-500 text-base max-w-2xl mx-auto leading-relaxed">
              For practices with the right patient population, remote care programs can create meaningful recurring monthly revenue while supporting better continuity of care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: DollarSign,
                title: "Recurring Monthly Revenue",
                description:
                  "Revenue potential tied to eligible patient volume with a recurring monthly reimbursement structure.",
              },
              {
                icon: Building,
                title: "No New Infrastructure Needed",
                description:
                  "No need to build internal program infrastructure from scratch — NXT handles the operational build-out.",
              },
              {
                icon: BarChart3,
                title: "Transparent Reporting",
                description:
                  "Clear visibility into program performance, patient engagement, and revenue metrics.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 p-8 text-center flex flex-col items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center">
                  <card.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 text-base">{card.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <GoogleSchedulingButton label="Book a Demo" />
          </div>

          <p className="mt-6 text-center text-gray-400 text-xs italic max-w-xl mx-auto">
            Revenue varies based on patient eligibility, participation, and program fit.
          </p>
        </div>
      </section>

      {/* 6. Differentiators */}
      <BenefitsGrid
        benefits={differentiators}
        heading="Why Practices Partner with NXT Medical"
        columns={3}
      />

      {/* 7. Fit qualifier */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Who This Is Best For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-gray-100 p-8">
              <h3 className="font-semibold text-gray-900 text-lg mb-6 flex items-center gap-2">
                <CheckCircle2 size={20} className="text-green-600" />
                Best Fit
              </h3>
              <ul className="space-y-4">
                {bestFit.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-8">
              <h3 className="font-semibold text-gray-900 text-lg mb-6 flex items-center gap-2">
                <XCircle size={20} className="text-gray-400" />
                Not Ideal
              </h3>
              <ul className="space-y-4">
                {notIdeal.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <XCircle size={16} className="text-gray-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-500 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Video Section */}
      <section id="video" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Watch the Quick Overview
          </h2>
          <p className="mt-3 text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
            See how the program works, what your practice is responsible for, and how primary care providers are using this to create recurring revenue without adding operational burden.
          </p>

          <div className="mt-10 relative rounded-2xl overflow-hidden aspect-video">
            <video
              className="w-full h-full object-cover rounded-2xl"
              controls
              preload="metadata"
              poster=""
            >
              <source
                src={`${import.meta.env.BASE_URL}videos/primary-care-intro.mp4`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="mt-10">
            <GoogleSchedulingButton label="Book a Demo" />
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <FAQSection faqs={primaryCareFaqs} />

      {/* 9. Final CTA */}
      <CTABand
        heading="See What This Could Look Like for Your Practice"
        subheading="We'll walk you through how the program fits into a primary care setting, what patient eligibility may look like, and where recurring revenue opportunities may exist."
        primaryCta="scheduling"
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
