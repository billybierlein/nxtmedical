import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { ArrowUpRight, Mail, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/content/site";

const productNotes = [
  {
    title: "NXT Labs",
    description:
      "A platform for lab testing, patient access, health tracking, and partner/admin workflows.",
  },
  {
    title: "Patient and member apps",
    description:
      "Mobile applications are in development to support patient access, member tracking, and wellness workflows.",
  },
  {
    title: "Care partner tools",
    description:
      "Digital workflows help care partners and operators support patients and members with clear, secure access.",
  },
];

export default function AppsPage() {
  return (
    <>
      <Helmet>
        <title>NXT Medical Apps - Digital Health and Wellness Tools</title>
        <meta
          name="description"
          content="NXT Medical, Inc. builds and operates digital health and wellness technology, including NXT Labs and mobile applications for patient and member access."
        />
        <link rel="canonical" href={`${siteConfig.url}/apps`} />
      </Helmet>

      <section className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-primary">
              NXT Medical, Inc.
            </p>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-950 leading-tight">
              Digital health and wellness tools for patients, members, and care partners.
            </h1>
            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
              NXT Medical builds and operates technology that supports lab testing,
              patient access, health tracking, and connected care workflows.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="https://www.nxtlabs.us"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary/90 transition-colors"
              >
                Visit NXT Labs
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <Mail size={16} aria-hidden="true" />
                {siteConfig.contact.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {productNotes.map((item) => (
              <div key={item.title} className="rounded-lg border border-gray-200 bg-white p-6">
                <h2 className="text-base font-semibold text-gray-950">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-950">Company information</h2>
              <div className="mt-6 divide-y divide-gray-100 rounded-lg border border-gray-200 bg-white">
                <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-1 px-5 py-4">
                  <dt className="text-sm font-medium text-gray-500">Legal entity</dt>
                  <dd className="text-sm text-gray-900">NXT Medical, Inc.</dd>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-1 px-5 py-4">
                  <dt className="text-sm font-medium text-gray-500">Primary product</dt>
                  <dd className="text-sm text-gray-900">
                    <a
                      href="https://www.nxtlabs.us"
                      className="font-medium text-primary hover:text-primary/80"
                    >
                      NXT Labs
                    </a>
                  </dd>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-1 px-5 py-4">
                  <dt className="text-sm font-medium text-gray-500">Contact</dt>
                  <dd className="text-sm text-gray-900">
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="font-medium text-primary hover:text-primary/80"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </dd>
                </div>
              </div>
            </div>

            <aside className="rounded-lg border border-gray-200 bg-gray-50 p-6">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 text-primary" size={20} aria-hidden="true" />
                <div>
                  <h2 className="text-sm font-semibold text-gray-950">Conservative app scope</h2>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    NXT Medical applications are intended to support access, tracking, and
                    operational workflows. This site avoids medical diagnosis or treatment claims.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-gray-950 py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-xl font-semibold text-white">Need support or company details?</h2>
              <p className="mt-2 text-sm text-gray-400">
                Contact NXT Medical for app support, publishing inquiries, or product information.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-gray-950 hover:bg-gray-100 transition-colors"
            >
              Contact NXT Medical
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
