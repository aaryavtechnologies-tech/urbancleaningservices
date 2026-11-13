import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { 
  MapPin, 
  Navigation, 
  Clock, 
  ExternalLink, 
  Building2, 
  CheckCircle2, 
  Sparkles,
  PhoneCall,
  CalendarCheck
} from "lucide-react";
import { BUSINESS_INFO, SERVICE_AREAS } from "@/data/businessData";
import LocationSection from "@/components/LocationSection";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Service Areas & Location in Bangalore | Urban Full Home Deep Cleaning",
  description:
    "Urban Full Home Deep Cleaning Services is located on Kariyammana Agrahara Rd, near Mantri Espana in Bellandur, Bengaluru. Serving Bellandur, HSR Layout, Sarjapur, Marathahalli, and all Bangalore homes. Open 24 Hours.",
};

export default function ServiceAreasPage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-primary/10 via-surface-subtle to-white py-14 lg:py-20 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint text-primary-dark font-bold text-xs uppercase tracking-wider mb-4">
            <MapPin className="w-4 h-4 text-primary" />
            <span>BANGALORE NEIGHBORHOOD COVERAGE</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-charcoal tracking-tight mb-4">
            Service Areas &amp; Location
          </h1>
          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed">
            Headquartered in Bellandur near Mantri Espana, we deploy professional deep cleaning teams across East Bangalore, the Outer Ring Road corridor, and surrounding neighborhoods 24 hours a day.
          </p>
        </div>
      </section>

      {/* Embedded Map Section */}
      <LocationSection />

      {/* Neighborhood Coverage Details */}
      <section className="py-16 lg:py-24 bg-surface-subtle border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-2">
              Fast Dispatch Corridors
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-charcoal">
              Neighborhoods We Frequently Serve
            </h2>
            <p className="text-sm sm:text-base text-charcoal-muted mt-2">
              Our teams are stationed strategically to provide prompt arrival for scheduled deep cleaning sessions throughout the region.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {SERVICE_AREAS.map((area) => (
              <div
                key={area.name}
                className="bg-white p-5 rounded-2xl border border-surface-border shadow-sm hover:border-primary/40 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-mint text-primary flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal text-base">
                      {area.name}
                    </h3>
                    <p className="text-xs text-charcoal-muted mt-0.5">
                      {area.landmark}
                    </p>
                    <span className="inline-block mt-2 text-[11px] font-mono font-semibold text-primary bg-primary-light px-2 py-0.5 rounded-md">
                      PIN: {area.zip}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-3xl bg-white border border-gray-200 text-center max-w-2xl mx-auto space-y-2">
            <h3 className="font-bold text-charcoal text-sm">
              Don&apos;t see your specific Bangalore society or layout listed?
            </h3>
            <p className="text-xs text-charcoal-muted">
              We service apartments, independent houses, gated communities, and duplexes across all Bangalore areas. Submit an enquiry with your location to discuss availability.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form Integration */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquiryForm />
        </div>
      </section>
    </div>
  );
}

