import { CheckCircle2 } from "lucide-react";

interface Benefit {
  title: string;
  description: string;
}

interface BenefitsGridProps {
  benefits: Benefit[];
  heading?: string;
  subheading?: string;
  columns?: 2 | 3 | 4;
}

export default function BenefitsGrid({
  benefits,
  heading,
  subheading,
  columns = 2,
}: BenefitsGridProps) {
  const colClass = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(heading || subheading) && (
          <div className="text-center mb-14">
            {heading && (
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{heading}</h2>
            )}
            {subheading && (
              <p className="mt-3 text-gray-500 text-base max-w-2xl mx-auto leading-relaxed">
                {subheading}
              </p>
            )}
          </div>
        )}

        <div className={`grid grid-cols-1 ${colClass} gap-6`}>
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="flex gap-4 p-6 bg-gray-50 rounded-xl border border-gray-100"
            >
              <CheckCircle2 size={20} className="flex-shrink-0 text-primary mt-0.5" />
              <div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{benefit.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
