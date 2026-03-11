// FormEmbed — wraps GoHighLevel embed code in a branded container
// To update a form: edit the corresponding key in src/content/forms.ts
// The component renders a placeholder UI when the embed code is a placeholder string

import { formEmbeds, formLabels } from "@/content/forms";

type FormKey = keyof typeof formEmbeds;

interface FormEmbedProps {
  formKey: FormKey;
  className?: string;
}

function isPlaceholder(code: string) {
  return code.startsWith("[GHL_");
}

export default function FormEmbed({ formKey, className = "" }: FormEmbedProps) {
  const embedCode = formEmbeds[formKey];
  const labels = formLabels[formKey];

  return (
    <div className={`bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden ${className}`}>
      <div className="px-8 py-8 border-b border-gray-50">
        <h3 className="text-xl font-semibold text-gray-900">{labels.heading}</h3>
        <p className="mt-2 text-gray-500 text-sm leading-relaxed">{labels.subheading}</p>
      </div>

      <div className="px-8 py-8">
        {isPlaceholder(embedCode) ? (
          // Placeholder state — shows a clear label while GHL embed is not yet configured
          <div className="min-h-[280px] flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 text-center px-6 py-12">
            <div className="text-xs font-mono text-gray-400 mb-2">{embedCode}</div>
            <p className="text-gray-400 text-sm">
              GoHighLevel form embed will appear here.
              <br />
              Update <code className="text-xs bg-gray-100 px-1 py-0.5 rounded">src/content/forms.ts</code> to add the embed code.
            </p>
          </div>
        ) : (
          // Actual GHL embed — renders raw HTML/iframe from the embed code
          <div
            className="ghl-form-container"
            dangerouslySetInnerHTML={{ __html: embedCode }}
          />
        )}
      </div>
    </div>
  );
}
