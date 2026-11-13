import React from "react";
import { 
  MapPin, 
  Navigation, 
  Clock, 
  ExternalLink, 
  Building2, 
  Compass, 
  Sparkles,
  CheckCircle2
} from "lucide-react";
import { BUSINESS_INFO, SERVICE_AREAS } from "@/data/businessData";

export default function LocationSection() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    BUSINESS_INFO.address.full
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="location" className="py-16 lg:py-24 bg-white border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint text-primary-dark font-bold text-xs uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-primary" />
            <span>BELLANDUR &amp; SURROUNDING BANGALORE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal tracking-tight mb-4">
            Serving Homes Across Bangalore
          </h2>
          <p className="text-base text-charcoal-muted leading-relaxed">
            Conveniently located near Mantri Espana in Bellandur, providing 24-hour prompt dispatch to apartments, villas, and residences throughout the tech corridor and beyond.
          </p>
        </div>

        {/* Split Grid: Details on Left, Embedded Map on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Location Info Card */}
          <div className="lg:col-span-5 bg-surface-subtle p-7 sm:p-9 rounded-3xl border border-surface-border flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              {/* Address Highlight */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-2">
                  Operating Hub &amp; Address
                </span>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-charcoal text-base sm:text-lg leading-snug">
                      Urban Full Home Deep Cleaning Services
                    </h3>
                    <p className="text-xs text-primary font-semibold mt-0.5">
                      Near MANTRI ESPANA
                    </p>
                    <p className="text-sm text-charcoal-muted mt-2 leading-relaxed">
                      {BUSINESS_INFO.address.full}
                    </p>
                  </div>
                </div>
              </div>

              {/* 24 Hours Indicator */}
              <div className="p-4 rounded-2xl bg-white border border-gray-200/80 shadow-sm space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-xs font-bold uppercase tracking-wider text-charcoal">
                      Operating Hours
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-mint text-primary-dark">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Open 24 Hours
                  </span>
                </div>
                <p className="text-xs text-charcoal-light">
                  Continuous day and night support for early morning, urgent, or weekend deep cleaning requirements.
                </p>
              </div>

              {/* Key Nearby Landmark Areas */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-charcoal-muted block mb-3">
                  Quick Dispatch Coverage
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {SERVICE_AREAS.slice(0, 6).map((area) => (
                    <div
                      key={area.name}
                      className="flex items-center gap-1.5 bg-white px-3 py-2 rounded-xl border border-gray-100"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span className="font-medium text-charcoal truncate">
                        {area.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Get Directions CTA */}
            <div className="pt-4 border-t border-gray-200">
              <a
                href={BUSINESS_INFO.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold text-sm py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all group"
              >
                <Navigation className="w-4 h-4 text-accent group-hover:rotate-45 transition-transform" />
                <span>Get Google Maps Directions</span>
                <ExternalLink className="w-4 h-4 opacity-75" />
              </a>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="lg:col-span-7 h-[420px] lg:h-auto min-h-[380px] rounded-3xl overflow-hidden border-2 border-surface-border shadow-premium relative bg-gray-100">
            <iframe
              src={mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Urban Full Home Deep Cleaning Services Google Map Location in Bellandur, Bengaluru"
              className="w-full h-full"
            />
            
            {/* Overlay badge on map corner */}
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-md border border-gray-100 hidden sm:flex items-center gap-2 text-xs font-bold text-charcoal">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span>Bellandur • Kariyammana Agrahara</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
