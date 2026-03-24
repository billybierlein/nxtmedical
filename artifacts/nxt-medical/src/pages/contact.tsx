import { Helmet } from "react-helmet-async";
import { Mail, Phone } from "lucide-react";
import Hero from "@/components/sections/Hero";
import FormEmbed from "@/components/sections/FormEmbed";
import { siteConfig, ctas } from "@/content/site";

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact NXT Medical — Get in Touch or Book a Demo</title>
        <meta
          name="description"
          content="Contact NXT Medical to learn about our remote patient care programs, book a demo, or refer a patient. We work with medical practices, clinics, and provider groups."
        />
      </Helmet>

      <Hero
        size="medium"
        badge="Contact Us"
        headline="Let's Talk About Your Practice"
        subheadline="Whether you're exploring remote care programs, ready to get started, or want to refer a patient — we're here to help. Reach out and our team will be in touch promptly."
      />

      {/* Contact options + Forms */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Quick contact info */}
          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <div className="flex items-center gap-3 px-5 py-3.5 bg-gray-50 rounded-xl border border-gray-100">
              <Phone size={16} className="text-primary flex-shrink-0" />
              <div>
                <div className="text-xs text-gray-400 font-medium">Phone</div>
                <div className="text-sm font-medium text-gray-700">{siteConfig.contact.phone}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-5 py-3.5 bg-gray-50 rounded-xl border border-gray-100">
              <Mail size={16} className="text-primary flex-shrink-0" />
              <div>
                <div className="text-xs text-gray-400 font-medium">Email</div>
                <div className="text-sm font-medium text-gray-700">{siteConfig.contact.email}</div>
              </div>
            </div>
          </div>

          {/* Three form sections */}
          <div className="space-y-16">
            {/* General Contact */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className="text-primary text-sm font-medium uppercase tracking-wide">
                  General Inquiry
                </span>
                <h2 className="mt-2 text-2xl font-bold text-gray-900">Contact Us</h2>
                <p className="mt-3 text-gray-500 text-sm leading-relaxed">
                  Have a question about our programs or want to learn more before committing to a
                  demo? Fill out the form and we'll get back to you within one business day.
                </p>
                <ul className="mt-6 space-y-2">
                  {[
                    "Questions about RPM, CCM, or RTM",
                    "Understanding program eligibility",
                    "Billing and reimbursement questions",
                    "Partnership or referral inquiries",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-500 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <FormEmbed formKey="contactForm" />
            </div>

            <div className="border-t border-gray-100" />

            {/* Book a Demo */}
            <div id="demo" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className="text-primary text-sm font-medium uppercase tracking-wide">
                  {ctas.bookDemo}
                </span>
                <h2 className="mt-2 text-2xl font-bold text-gray-900">See NXT Medical in Action</h2>
                <p className="mt-3 text-gray-500 text-sm leading-relaxed">
                  Schedule a 30-minute walkthrough with our team. We'll cover how RPM, CCM, and RTM
                  programs work in practice, what we handle on your behalf, and what you can expect
                  from day one.
                </p>
                <ul className="mt-6 space-y-2">
                  {[
                    "Live walkthrough of program workflows",
                    "Enrollment and device logistics overview",
                    "Billing and reimbursement guidance",
                    "Revenue modeling for your patient panel",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-500 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full rounded-xl border border-gray-100 overflow-hidden bg-white shadow-sm">
                <iframe
                  src={ctas.bookDemoHref}
                  style={{ border: 0 }}
                  width="100%"
                  height="600"
                  title="Schedule a Demo with NXT Medical"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="border-t border-gray-100" />

            {/* Refer a Patient */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className="text-primary text-sm font-medium uppercase tracking-wide">
                  {ctas.referPatient}
                </span>
                <h2 className="mt-2 text-2xl font-bold text-gray-900">Refer a Patient</h2>
                <p className="mt-3 text-gray-500 text-sm leading-relaxed">
                  If your practice is already working with NXT Medical, use the form to refer a
                  patient into one of our remote care programs. Our team will confirm eligibility
                  and follow up with enrollment steps.
                </p>
                <ul className="mt-6 space-y-2">
                  {[
                    "RPM enrollment referrals",
                    "CCM program referrals",
                    "RTM program referrals",
                    "Multi-program patient referrals",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-500 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <FormEmbed formKey="referPatientForm" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
