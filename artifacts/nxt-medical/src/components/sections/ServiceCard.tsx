import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  shortName: string;
  fullName: string;
  tagline: string;
  description: string;
  href: string;
}

export default function ServiceCard({
  shortName,
  fullName,
  tagline,
  description,
  href,
}: ServiceCardProps) {
  return (
    <div className="group relative bg-white border border-gray-100 rounded-xl p-6 hover:border-gray-200 hover:shadow-md transition-all duration-200">
      <div className="flex items-start justify-between mb-4">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-primary/8 text-primary text-xs font-semibold tracking-wide">
          {shortName}
        </span>
        <Link
          href={href}
          className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-primary"
          aria-label={`Learn more about ${fullName}`}
        >
          <ArrowRight size={16} />
        </Link>
      </div>

      <h3 className="font-semibold text-gray-900 text-lg mb-1">{fullName}</h3>
      <p className="text-primary text-sm font-medium mb-3">{tagline}</p>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>

      <Link
        href={href}
        className="inline-flex items-center gap-1.5 mt-5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
      >
        Learn more <ArrowRight size={14} />
      </Link>
    </div>
  );
}
