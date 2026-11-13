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
  Sparkles 
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
    <div className="group bg-white rounded-3xl overflow-hidden border border-surface-border hover:border-primary/40 shadow-card hover:shadow-premium-hover transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">
      {/* Image Container with Badge */}
      <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-gray-100">
        <Image
          src={service.image}
          alt={service.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-black/20 to-transparent" />
        
        {/* Floating icon badge */}
        <div className="absolute top-4 left-4 w-11 h-11 rounded-2xl bg-white/95 backdrop-blur-sm text-primary flex items-center justify-center shadow-md">
          <IconComponent className="w-5 h-5 text-primary" />
        </div>

        {/* Bottom image title */}
        <div className="absolute bottom-3 left-4 right-4 text-white">
          <h3 className="text-lg font-bold tracking-tight text-white drop-shadow-sm">
            {service.name}
          </h3>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
        <div>
          <p className="text-sm text-charcoal-muted leading-relaxed line-clamp-2">
            {service.shortDescription}
          </p>

          {/* Key Checklist Highlights */}
          <div className="mt-4 space-y-2 border-t border-gray-100 pt-3">
            {service.features.slice(0, 3).map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-charcoal-light">
                <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                <span className="line-clamp-1">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons: Enquire Now & View Details */}
        <div className="pt-2 border-t border-gray-100 flex items-center gap-2">
          <Link
            href={`/contact?service=${encodeURIComponent(service.name)}`}
            className="flex-1 bg-primary hover:bg-primary-hover text-white text-xs font-bold py-2.5 px-3 rounded-xl text-center shadow-sm hover:shadow transition-colors"
          >
            Enquire Now
          </Link>
          <Link
            href={`/services/${service.slug}`}
            className="px-3 py-2.5 rounded-xl border border-gray-200 hover:border-primary/40 hover:bg-surface-subtle text-charcoal text-xs font-semibold flex items-center gap-1 transition-colors"
            title="Read Service Details"
          >
            <span>Details</span>
            <ArrowRight className="w-3.5 h-3.5 text-primary" />
          </Link>
        </div>
      </div>
    </div>
  );
}
