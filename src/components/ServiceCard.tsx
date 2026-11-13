import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Home, 
  Utensils, 
  Droplets, 
  Bed, 
  Armchair, 
  Truck, 
  ArrowRight, 
  Check, 
  Sparkles,
  Clock
} from "lucide-react";
import { CleaningService } from "@/data/businessData";

interface ServiceCardProps {
  service: CleaningService;
}

const iconMap: Record<string, React.ElementType> = {
  Home,
  Utensils,
  Droplets,
  Bed,
  Armchair,
  Truck,
};

export default function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = iconMap[service.iconName] || Sparkles;

  return (
    <div className="group bg-white rounded-[28px] overflow-hidden border border-gray-200/90 hover:border-primary/50 shadow-card hover:shadow-premium-hover card-modern-hover flex flex-col h-full transform hover:-translate-y-1.5 transition-all duration-300">
      {/* Image Container with Badge */}
      <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-gray-100">
        <Image
          src={service.image}
          alt={service.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-black/25 to-transparent" />
        
        {/* Floating icon badge */}
        <div className="absolute top-4 left-4 w-12 h-12 rounded-2xl bg-white/95 backdrop-blur-md text-primary flex items-center justify-center shadow-lg border border-white/60">
          <IconComponent className="w-6 h-6 text-primary" />
        </div>

        {/* Floating duration badge */}
        <div className="absolute top-4 right-4 bg-charcoal/70 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-mint flex items-center gap-1.5 border border-white/10">
          <Clock className="w-3 h-3 text-accent" />
          <span>{service.durationEstimate.split("(")[0]}</span>
        </div>

        {/* Bottom image title */}
        <div className="absolute bottom-4 left-5 right-5 text-white">
          <h3 className="text-xl font-black tracking-tight text-white drop-shadow-md">
            {service.name}
          </h3>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between space-y-5">
        <div>
          <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed line-clamp-2">
            {service.shortDescription}
          </p>

          {/* Key Checklist Highlights */}
          <div className="mt-4 space-y-2 border-t border-gray-100 pt-4">
            {service.features.slice(0, 3).map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-charcoal">
                <div className="w-4 h-4 rounded-full bg-mint text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
                <span className="line-clamp-1 font-medium">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons: Enquire Now & View Details */}
        <div className="pt-3 border-t border-gray-100 flex items-center gap-2.5">
          <Link
            href={`/contact?service=${encodeURIComponent(service.name)}`}
            className="flex-1 bg-gradient-to-r from-primary to-primary-hover hover:from-primary-dark hover:to-primary text-white text-xs font-extrabold uppercase tracking-wider py-3 px-3 rounded-xl text-center shadow-sm hover:shadow-md transition-all"
          >
            Enquire Now
          </Link>
          <Link
            href={`/services/${service.slug}`}
            className="px-4 py-3 rounded-xl border border-gray-200 hover:border-primary/50 hover:bg-surface-subtle text-charcoal text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
            title="Read Service Details"
          >
            <span>Details</span>
            <ArrowRight className="w-3.5 h-3.5 text-primary group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
