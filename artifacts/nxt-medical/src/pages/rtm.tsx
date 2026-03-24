import { Helmet } from "react-helmet-async";
import { CheckCircle2, ScanFace, TrendingUp, ShieldCheck, Gamepad2, BarChart3, Sparkles, Activity, Eye } from "lucide-react";
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

      {/* Technology Differentiation */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading block */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-primary text-sm font-medium uppercase tracking-wide">
              How It Works
            </span>
            <h2 className="mt-3 text-2xl md:text-3xl font-bold text-gray-900">
              How We Turn Patient Progress Into Measurable, Billable Data
            </h2>
            <p className="mt-4 text-gray-500 text-base leading-relaxed">
              Most monitoring programs rely on subjective feedback. NXT Medical uses advanced
              AI-based facial scanning technology to objectively track patient progress — giving
              you real clinical insight while supporting compliant RTM billing.
            </p>
          </div>

          {/* 3-column cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 — How It Works */}
            <div className="bg-white rounded-2xl border border-gray-100 p-8 flex flex-col gap-5">
              <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center flex-shrink-0">
                <ScanFace size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg mb-3">How It Works</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">
                  Patients complete a quick scan using their smartphone or tablet — no equipment,
                  no learning curve.
                </p>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">
                  Our system analyzes subtle facial movements and neuromuscular patterns to generate
                  measurable data on patient function and response to therapy.
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Each scan creates a baseline, allowing us to track changes over time and identify
                  meaningful progress or setbacks.
                </p>
              </div>
            </div>

            {/* Card 2 — Why More Effective */}
            <div className="bg-white rounded-2xl border border-gray-100 p-8 flex flex-col gap-5">
              <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center flex-shrink-0">
                <TrendingUp size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg mb-3">Why This Is More Effective</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Traditional care relies heavily on patient-reported symptoms, in-office assessments,
                  and limited visibility between visits. With NXT:
                </p>
                <ul className="space-y-2">
                  {[
                    "Progress is objectively measured, not estimated",
                    "Monitoring happens continuously, not just in-office",
                    "Small issues can be identified before they become setbacks",
                    "Each interaction contributes to documented clinical value",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 size={15} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-500 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 3 — Why NXT Is Different */}
            <div className="bg-white rounded-2xl border border-gray-100 p-8 flex flex-col gap-5">
              <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center flex-shrink-0">
                <ShieldCheck size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg mb-3">Why This Is Unique to NXT Medical</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Most RTM programs stop at data collection. NXT delivers a complete, done-for-you
                  system:
                </p>
                <ul className="space-y-2 mb-4">
                  {[
                    "We manage patient engagement and monitoring",
                    "We structure the data into actionable progress reports",
                    "We support documentation aligned with RTM billing requirements",
                    "Your team stays focused on patient care and clinical decisions",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 size={15} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-500 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">
                  No new workflows. No additional staff. No extra burden.
                </p>
              </div>
            </div>
          </div>

          {/* Closing statement */}
          <p className="mt-12 text-center text-gray-700 text-base font-medium max-w-2xl mx-auto leading-relaxed">
            You get the benefits of advanced remote monitoring — without changing how your practice
            operates.
          </p>
        </div>
      </section>

      {/* Transition: Measurement + Engagement bridge */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary text-sm font-medium uppercase tracking-wide">
            Why This Approach Works
          </span>
          <h2 className="mt-3 text-xl md:text-2xl font-bold text-gray-900 leading-snug">
            Better Monitoring Happens When Measurement and Engagement Work Together
          </h2>
          <div className="mt-5 space-y-3 text-gray-500 text-[15px] leading-relaxed max-w-2xl mx-auto">
            <p>Objective data helps show what is happening.</p>
            <p>Consistent patient participation helps influence what happens next.</p>
            <p>
              NXT Medical combines both — giving providers a more complete RTM model built
              around measurable progress, ongoing engagement, and practical clinical
              visibility between visits.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {[
              {
                icon: BarChart3,
                label: "Measure",
                text: "Track patient function and response over time using objective technology-supported data.",
              },
              {
                icon: Activity,
                label: "Engage",
                text: "Keep patients involved through structured activities designed to support consistency and adherence.",
              },
              {
                icon: Eye,
                label: "Act",
                text: "Give providers clearer visibility and better reporting to support timely clinical decisions.",
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center">
                  <item.icon size={18} className="text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">{item.label}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-gray-600 text-sm font-medium leading-relaxed">
            This is what transforms remote monitoring from passive tracking into an active
            care model.
          </p>
        </div>
      </section>

      {/* Patient Engagement / Game-Based Therapy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading + intro */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-primary text-sm font-medium uppercase tracking-wide">
              Patient Engagement
            </span>
            <h2 className="mt-3 text-2xl md:text-3xl font-bold text-gray-900">
              Keeping Patients Engaged Is What Drives Results
            </h2>
            <p className="mt-4 text-gray-500 text-base leading-relaxed">
              Most remote monitoring programs fail for one simple reason — patients stop
              participating. NXT Medical solves this by incorporating structured, game-based
              therapeutic activities designed to keep patients consistently engaged while
              supporting measurable clinical outcomes.
            </p>
          </div>

          {/* Research-backed highlight block */}
          <div className="max-w-4xl mx-auto mb-14 bg-primary/[0.03] border border-primary/10 rounded-2xl p-8 md:p-10">
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Sparkles size={22} className="text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 text-base mb-3">
                  Backed by Cognitive Engagement Research
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  Research on structured, game-like cognitive exercises has shown that consistent
                  participation can support memory, processing, learning, and other meaningful
                  cognitive functions over time. This is not passive screen time — it is active
                  therapeutic engagement designed to encourage adherence and reinforce better
                  long-term participation.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    "Structured cognitive activities support active engagement",
                    "Consistency is a major driver of measurable benefit",
                    "Interactive participation can outperform passive monitoring alone",
                  ].map((point, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 bg-white/70 rounded-lg px-3.5 py-2.5 border border-primary/5"
                    >
                      <CheckCircle2 size={14} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-xs leading-relaxed">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 3 content cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 — How We Keep Patients Engaged */}
            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-8 flex flex-col gap-5">
              <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center flex-shrink-0">
                <Gamepad2 size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg mb-3">
                  How We Keep Patients Engaged
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">
                  NXT patients do more than simply check in.
                </p>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">
                  We provide structured, game-based therapeutic activities that are designed for
                  regular participation, simple daily use, and long-term adherence.
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  These activities make it easier for patients to stay involved in the program
                  without adding complexity or frustration.
                </p>
              </div>
            </div>

            {/* Card 2 — Why Engagement Improves Outcomes */}
            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-8 flex flex-col gap-5">
              <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center flex-shrink-0">
                <BarChart3 size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg mb-3">
                  Why Engagement Improves Outcomes
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Consistent participation is what makes remote therapeutic monitoring effective.
                  When patients remain engaged:
                </p>
                <ul className="space-y-2 mb-4">
                  {[
                    "Adherence improves",
                    "Drop-off decreases",
                    "Providers gain better visibility into real-world activity",
                    "Progress becomes easier to measure over time",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 size={15} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-500 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">
                  Engagement is what turns monitoring into meaningful care.
                </p>
              </div>
            </div>

            {/* Card 3 — Unique to NXT */}
            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-8 flex flex-col gap-5">
              <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center flex-shrink-0">
                <ShieldCheck size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg mb-3">
                  Why This Is Unique to NXT Medical
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Most RTM programs rely on passive tracking, occasional reminders, or limited
                  patient interaction. NXT builds engagement directly into the care model:
                </p>
                <ul className="space-y-2 mb-4">
                  {[
                    "Structured therapeutic activities",
                    "Ongoing patient participation",
                    "Monitoring support handled on your behalf",
                    "Progress reporting tied back to the program",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 size={15} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-500 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-500 text-sm leading-relaxed">
                  This helps create a more sustainable RTM experience for both the patient and
                  the provider.
                </p>
              </div>
            </div>
          </div>

          {/* Closing statement */}
          <p className="mt-12 text-center text-gray-700 text-base font-medium max-w-2xl mx-auto leading-relaxed">
            Engaged patients produce better outcomes — and a stronger, more sustainable RTM
            program.
          </p>
        </div>
      </section>

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
