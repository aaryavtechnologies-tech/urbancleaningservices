import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { 
  Star, 
  ExternalLink, 
  ShieldCheck, 
  CheckCircle, 
  MessageSquare,
  Sparkles,
  MapPin,
  CalendarCheck
} from "lucide-react";
import { BUSINESS_INFO } from "@/data/businessData";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Customer Reviews & Rating | Urban Full Home Deep Cleaning Services",
  description:
    "Verified 5.0 / 5.0 Google Rating based on 6 Google reviews for Urban Full Home Deep Cleaning Services in Bellandur, Bangalore.",
};

export default function ReviewsPage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-primary/10 via-surface-subtle to-white py-14 lg:py-20 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint text-primary-dark font-bold text-xs uppercase tracking-wider mb-4">
            <Star className="w-4 h-4 fill-accent text-accent" />
            <span>VERIFIED GOOGLE BUSINESS PROFILE</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-charcoal tracking-tight mb-4">
            Customer Reviews &amp; Ratings
          </h1>
          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed">
            We are proud to uphold a verified 5.0 out of 5.0 rating on Google from homeowners across Bellandur and Bangalore.
          </p>
        </div>
      </section>

      {/* Main Review Spotlight Card */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-surface-subtle rounded-3xl p-8 sm:p-14 border border-surface-border shadow-premium text-center">
            
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold px-4 py-1.5 rounded-full mb-6">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Authentic 100% Verified Rating</span>
            </div>

            {/* Score */}
            <div className="text-6xl sm:text-7xl font-extrabold text-charcoal font-mono tracking-tight mb-4">
              5.0 <span className="text-2xl sm:text-3xl font-normal text-charcoal-light">/ 5.0</span>
            </div>

            {/* Star Icons */}
            <div className="flex items-center justify-center gap-1.5 text-accent mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-8 h-8 fill-accent text-accent drop-shadow-sm"
                />
              ))}
            </div>

            <p className="text-lg font-bold text-charcoal mb-8">
              Based on 6 Google reviews.
            </p>

            {/* Strict Policy Statement */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 text-left space-y-3 mb-8">
              <h3 className="font-bold text-charcoal text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span>Our Transparent Review Policy</span>
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                In strict adherence to business ethics, Urban Full Home Deep Cleaning Services does not fabricate testimonials, invent reviewer personas, or display unverified quotes. All ratings come directly from our official Google Maps listing.
              </p>
              <p className="text-xs text-charcoal-light leading-relaxed">
                We invite all prospective clients to inspect our verified Google profile directly, where each review has been submitted by verified Bangalore residents.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={BUSINESS_INFO.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all group"
              >
                <span>Read Verified Reviews on Google Maps</span>
                <ExternalLink className="w-4 h-4 text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={BUSINESS_INFO.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-charcoal font-semibold text-sm px-6 py-3.5 rounded-xl border border-gray-200 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-primary" />
                <span>Submit Your Google Review</span>
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-10 mt-10 border-t border-gray-200 text-left">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-gray-100">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs text-charcoal">5.0 Star Average</h4>
                  <p className="text-[11px] text-charcoal-light mt-0.5">Top-tier consistency across customer handovers</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-gray-100">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs text-charcoal">Bellandur Local Hub</h4>
                  <p className="text-[11px] text-charcoal-light mt-0.5">Kariyammana Agrahara Rd, Near Mantri Espana</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-gray-100">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs text-charcoal">Women-Led Trust</h4>
                  <p className="text-[11px] text-charcoal-light mt-0.5">Known for hygiene discipline and careful handling</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Booking Form Integration */}
      <section className="py-16 bg-surface-subtle border-t border-surface-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquiryForm />
        </div>
      </section>
    </div>
  );
}
