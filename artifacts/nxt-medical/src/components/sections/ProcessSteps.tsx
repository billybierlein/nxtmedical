interface Step {
  step: string;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  steps: Step[];
  heading?: string;
  subheading?: string;
}

export default function ProcessSteps({ steps, heading, subheading }: ProcessStepsProps) {
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              {/* Connector line — visible between steps on desktop */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-full w-full h-px bg-gray-100 -translate-y-px z-0 ml-4 mr-4" />
              )}
              <div className="relative z-10">
                <div className="text-4xl font-bold text-gray-100 mb-4 leading-none select-none">
                  {step.step}
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
