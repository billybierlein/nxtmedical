import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import {
  Activity,
  ArrowUpRight,
  CheckCircle2,
  ClipboardList,
  HeartPulse,
  Mail,
  ShieldCheck,
  Smartphone,
  Users,
} from "lucide-react";
import Hero from "@/components/sections/Hero";
import CTABand from "@/components/sections/CTABand";
import { siteConfig } from "@/content/site";

const trustBullets = [
  "Official app publisher for NXT Medical products",
  "Patient and member access tools in development",
  "Connected to NXT Labs workflows",
  "Built for secure health and wellness experiences",
];

const productAreas = [
  {
    icon: HeartPulse,
    title: "NXT Labs",
    description:
      "A digital platform for lab testing, patient access, health tracking, and partner operations.",
  },
  {
    icon: Activity,
    title: "Patient and Member Tools",
    description:
      "Mobile experiences are being developed to support daily tracking, results access, and member workflows.",
  },
  {
    icon: Users,
    title: "Care Partner Workflows",
    description:
      "Operator and partner tools help teams support patients and members with clearer access and follow-up.",
  },
];

const appRoadmap = [
  {
    step: "01",
    title: "Access",
    description:
      "Patients and members sign in to view their health-related tools, account information, and supported workflows.",
  },
  {
    step: "02",
    title: "Track",
    description:
      "Health and wellness tracking tools help users follow habits, nutrition, activity, and progress over time.",
  },
  {
    step: "03",
    title: "Connect",
    description:
      "Future app releases are planned to connect patients, members, and approved care partners in one product ecosystem.",
  },
];

const companyRows = [
  ["Legal entity", "NXT Medical, Inc."],
  ["Primary product", "NXT Labs"],
  ["Product website", "www.nxtlabs.us"],
  ["Support contact", siteConfig.contact.email],
];

export default function AppsPage() {
  return (
    <>
      <Helmet>
        <title>NXT Medical Apps | Digital Health and Wellness Tools</title>
        <meta
          name="description"
          content="NXT Medical, Inc. builds and operates digital health and wellness technology, including NXT Labs and mobile applications for patient and member access."
        />
        <link rel="canonical" href={`${siteConfig.url}/apps`} />
      </Helmet>

      <Hero
        badge="NXT Medical Apps"
        headline="Digital Health Tools for Patients, Members, and Care Partners"
        subheadline="NXT Medical builds and operates secure digital products that support lab testing, patient access, health tracking, and connected wellness workflows."
        primaryCta={{ label: "Visit NXT Labs", href: "https://www.nxtlabs.us" }}
        secondaryCta={{ label: "Contact NXT Medical", href: "/contact" }}
      />

      <section className="bg-gray-950 pb-14 pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {trustBullets.map((item) => (
            <div key={item} className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-primary flex-shrink-0" />
              <span className="text-gray-400 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold uppercase text-primary">
                Company and app publisher
              </p>
              <h2 className="mt-3 text-2xl md:text-3xl font-bold text-gray-900">
                NXT Medical Extends Its Digital Health Platform Into Mobile Apps
              </h2>
              <p className="mt-4 text-gray-500 text-base leading-relaxed">
                NXT Medical is the company behind technology products that support
                patient access, health and wellness tracking, lab testing workflows,
                and care partner operations.
              </p>
              <p className="mt-4 text-gray-700 font-medium">
                Mobile applications are being developed to make those workflows easier
                for patients and members to use day to day.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center flex-shrink-0">
                  <Smartphone size={22} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    Mobile-first access is in development
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    NXT Medical apps are intended to support product access,
                    tracking, and operational workflows. They are not positioned as
                    medical diagnosis or emergency-care tools.
                  </p>
                </div>
              </div>

              <div className="mt-8 divide-y divide-gray-200">
                {companyRows.map(([label, value]) => (
                  <div key={label} className="grid grid-cols-[130px_1fr] gap-4 py-4">
                    <dt className="text-sm font-medium text-gray-500">{label}</dt>
                    <dd className="text-sm font-semibold text-gray-900">
                      {label === "Primary product" ? (
                        <a
                          href="https://www.nxtlabs.us"
                          className="text-primary hover:text-primary/80"
                        >
                          {value}
                        </a>
                      ) : label === "Product website" ? (
                        <a
                          href="https://www.nxtlabs.us"
                          className="text-primary hover:text-primary/80"
                        >
                          {value}
                        </a>
                      ) : label === "Support contact" ? (
                        <a
                          href={`mailto:${value}`}
                          className="text-primary hover:text-primary/80"
                        >
                          {value}
                        </a>
                      ) : (
                        value
                      )}
                    </dd>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Products and Workflows We Support
            </h2>
            <p className="mt-3 text-gray-500 text-base max-w-2xl mx-auto leading-relaxed">
              NXT Medical products are designed around practical access, tracking,
              and partner support workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productAreas.map((item) => (
              <div
                key={item.title}
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

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              How the App Experience Is Taking Shape
            </h2>
            <p className="mt-3 text-gray-500 text-base max-w-2xl mx-auto leading-relaxed">
              The app roadmap focuses on reliable access first, then daily tracking
              and connected partner workflows over time.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {appRoadmap.map((item) => (
              <div key={item.step}>
                <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center mb-4">
                  <ClipboardList size={20} className="text-primary" />
                </div>
                <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                  Step {item.step}
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-gray-100 p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-8 items-start">
              <div>
                <div className="flex items-center gap-2 text-primary text-sm font-semibold uppercase">
                  <ShieldCheck size={16} />
                  Responsible product scope
                </div>
                <h2 className="mt-3 text-2xl md:text-3xl font-bold text-gray-900">
                  Built for Access and Tracking, Not Diagnosis
                </h2>
                <p className="mt-4 text-gray-500 text-base leading-relaxed">
                  NXT Medical apps are intended to help users access supported products,
                  view account-related workflows, and track wellness information. They
                  are not a substitute for medical advice, diagnosis, emergency care, or
                  treatment from a licensed healthcare professional.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  "Secure account access",
                  "Health and wellness tracking",
                  "Patient and member workflows",
                  "Care partner visibility where authorized",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        heading="Questions About NXT Medical Apps?"
        subheading="Contact NXT Medical for app support, company details, product information, or publisher-related inquiries."
        primaryCta={{ label: "Email NXT Medical", href: `mailto:${siteConfig.contact.email}` }}
        secondaryCta={{ label: "Visit NXT Labs", href: "https://www.nxtlabs.us" }}
      />

      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80"
          >
            Contact NXT Medical
            <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
          <span className="mx-3 text-gray-300">/</span>
          <a
            href="https://www.nxtlabs.us"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80"
          >
            Visit NXT Labs
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <span className="mx-3 text-gray-300">/</span>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80"
          >
            <Mail size={14} aria-hidden="true" />
            {siteConfig.contact.email}
          </a>
        </div>
      </section>
    </>
  );
}
