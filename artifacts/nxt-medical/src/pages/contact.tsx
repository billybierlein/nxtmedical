import { Helmet } from "react-helmet-async";
import { ArrowUpRight, CheckCircle2, Mail, Phone } from "lucide-react";
import Hero from "@/components/sections/Hero";
import CTABand from "@/components/sections/CTABand";
import { siteConfig } from "@/content/site";

const inquiryTypes = [
  "Remote care program questions",
  "Practice partnership inquiries",
  "NXT Labs or app support",
  "Billing, enrollment, or referral questions",
];

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact NXT Medical | Call or Email Our Team</title>
        <meta
          name="description"
          content="Contact NXT Medical by phone or email for remote care program questions, NXT Labs support, app support, partnership inquiries, or company information."
        />
      </Helmet>

      <Hero
        size="medium"
        badge="Contact Us"
        headline="Contact NXT Medical"
        subheadline="Call or email our team for program questions, product support, partnership inquiries, or company information."
        primaryCta={{ label: `Call ${siteConfig.contact.phone}`, href: `tel:${siteConfig.contact.phone.replace(/\D/g, "")}` }}
        secondaryCta={{ label: "Email Us", href: `mailto:${siteConfig.contact.email}` }}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 items-start">
            <div>
              <p className="text-sm font-semibold uppercase text-primary">
                How to reach us
              </p>
              <h2 className="mt-3 text-2xl md:text-3xl font-bold text-gray-900">
                Call or Email Directly
              </h2>
              <p className="mt-4 text-gray-500 text-base leading-relaxed max-w-2xl">
                We no longer use an embedded contact form on this site. Please contact
                NXT Medical directly by phone or email and a member of our team will
                follow up.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
                  className="group rounded-2xl border border-gray-100 bg-gray-50 p-6 transition-colors hover:border-primary/30 hover:bg-primary/5"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div className="mt-5 text-xs font-semibold uppercase text-gray-400">
                    Phone
                  </div>
                  <div className="mt-1 text-lg font-semibold text-gray-900">
                    {siteConfig.contact.phone}
                  </div>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary">
                    Call NXT Medical
                    <ArrowUpRight size={14} />
                  </div>
                </a>

                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="group rounded-2xl border border-gray-100 bg-gray-50 p-6 transition-colors hover:border-primary/30 hover:bg-primary/5"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div className="mt-5 text-xs font-semibold uppercase text-gray-400">
                    Email
                  </div>
                  <div className="mt-1 text-lg font-semibold text-gray-900 break-all">
                    {siteConfig.contact.email}
                  </div>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary">
                    Email our team
                    <ArrowUpRight size={14} />
                  </div>
                </a>
              </div>
            </div>

            <aside className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <h3 className="text-lg font-semibold text-gray-900">
                Common reasons to contact us
              </h3>
              <ul className="mt-6 space-y-4">
                {inquiryTypes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <CTABand
        heading="Need Help from NXT Medical?"
        subheading="Reach out directly by phone or email for product support, program questions, or company information."
        primaryCta={{ label: "Email NXT Medical", href: `mailto:${siteConfig.contact.email}` }}
        secondaryCta={{ label: "Visit NXT Labs", href: "https://www.nxtlabs.us" }}
      />
    </>
  );
}
