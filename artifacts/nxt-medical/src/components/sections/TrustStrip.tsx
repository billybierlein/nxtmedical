import { Activity, ShieldCheck, TrendingUp, Users } from "lucide-react";

const trustItems = [
  {
    icon: Activity,
    title: "Better Patient Outcomes",
    description: "Daily monitoring and proactive outreach close the gap between visits.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance-Ready Workflows",
    description: "Documentation and data handling built around HIPAA and CMS requirements.",
  },
  {
    icon: Users,
    title: "No Staff Burden",
    description: "NXT Medical provides clinical staff and operations — not just software.",
  },
  {
    icon: TrendingUp,
    title: "Recurring Revenue",
    description: "Monthly reimbursable services generate reliable revenue beyond visit billing.",
  },
];

export default function TrustStrip() {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="flex flex-col items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/8 flex items-center justify-center">
                  <Icon size={18} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">{item.title}</h3>
                  <p className="text-gray-500 text-sm mt-1 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
