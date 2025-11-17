import { LucideIcon, Check } from 'lucide-react';

interface AgentCardProps {
  icon: LucideIcon;
  name: string;
  tagline: string;
  description: string;
  features: string[];
}

export function AgentCard({
  icon: Icon,
  name,
  tagline,
  description,
  features,
}: AgentCardProps) {
  return (
    <div className="group bg-pacific border border-[rgba(199,204,216,0.15)] rounded-2xl p-10 transition-all duration-300 ease-out hover:border-[rgba(236,206,110,0.4)] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(12,17,32,0.3)]">
      {/* Background decoration (subtle) */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-[radial-gradient(circle_at_top_right,#ECCE6E,transparent_70%)]" />

      <div className="relative z-10">
        {/* Icon with animation */}
        <Icon className="w-12 h-12 text-gold mb-6 transition-transform duration-300 group-hover:scale-110" />

        {/* Name */}
        <h3 className="text-[28px] font-semibold text-moonlight mb-2 leading-tight">
          {name}
        </h3>

        {/* Tagline */}
        <p className="text-base text-softSky mb-6 font-medium">
          {tagline}
        </p>

        {/* Divider */}
        <div className="w-12 h-0.5 bg-[rgba(236,206,110,0.3)] mb-6" />

        {/* Description */}
        <p className="text-[15px] text-silver leading-[1.7] mb-8">
          {description}
        </p>

        {/* Features */}
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 text-sm text-silver">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[rgba(236,206,110,0.15)] flex items-center justify-center mt-0.5 group-hover:bg-[rgba(236,206,110,0.25)] transition-colors">
                <Check className="w-3 h-3 text-gold" />
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
