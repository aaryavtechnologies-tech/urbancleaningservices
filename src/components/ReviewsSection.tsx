import React from "react";
import { 
  Star, 
  ExternalLink, 
  ShieldCheck, 
  CheckCircle, 
  MessageSquare,
  Sparkles
} from "lucide-react";
import { BUSINESS_INFO } from "@/data/businessData";

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-16 lg:py-24 bg-surface-subtle border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint text-primary-dark font-bold text-xs uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-accent text-accent" />
            <span>VERIFIED REVIEWS &amp; RATINGS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal tracking-tight mb-4">
            What Our Customers Say
          </h2>
          <p className="text-base text-charcoal-muted leading-relaxed">
            Real satisfaction from Bangalore residents who trust us with their home deep cleaning needs.
          </p>
        </div>

        {/* Highlight Showcase Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-surface-border shadow-premium text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Google Verified Business Profile</span>
          </div>

          {/* Rating Number & Stars */}
          <div className="flex flex-col items-center justify-center gap-3 mb-6">
            <div className="text-6xl sm:text-7xl font-extrabold text-charcoal tracking-tight font-mono">
              5.0 <span className="text-2xl sm:text-3xl font-normal text-charcoal-light">/ 5.0</span>
            </div>

            {/* Stars */}
            <div className="flex items-center gap-1.5 text-accent">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-7 h-7 sm:w-8 sm:h-8 fill-accent text-accent drop-shadow-sm"
                />
              ))}
            </div>

            <p className="text-base sm:text-lg font-bold text-charcoal mt-1">
              Based on 6 Google reviews.
            </p>
          </div>

          {/* Trust Transparency Statement */}
          <div className="max-w-2xl mx-auto bg-surface-subtle p-5 rounded-2xl border border-gray-200/80 mb-8 text-xs sm:text-sm text-charcoal-muted leading-relaxed text-left sm:text-center">
            <p>
              <strong className="text-charcoal font-semibold block mb-1">
                Authenticity &amp; Integrity Guarantee:
              </strong>
              We uphold strict authenticity. Every review shown on our Google listing represents real Bangalore homeowners who booked and experienced our deep cleaning services. We do not use fabricated testimonials or generated reviewer profiles.
            </p>
          </div>

          {/* CTA Link to Google Reviews */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={BUSINESS_INFO.mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all group"
            >
              <span>View Verified Reviews on Google Maps</span>
              <ExternalLink className="w-4 h-4 text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href={BUSINESS_INFO.mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-charcoal hover:text-primary font-semibold text-sm px-6 py-3.5 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-primary" />
              <span>Leave a Review on Google</span>
            </a>
          </div>

          {/* Bottom Review Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-10 mt-10 border-t border-gray-100 text-left">
            <div className="flex items-start gap-3 p-3 rounded-xl bg-surface-subtle">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-xs text-charcoal block">100% 5-Star Track Record</span>
                <span className="text-[11px] text-charcoal-light">Unanimous 5.0 score from all 6 reviewers</span>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-xl bg-surface-subtle">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-xs text-charcoal block">Verified Homeowners</span>
                <span className="text-[11px] text-charcoal-light">Serving Bellandur &amp; Bangalore communities</span>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-xl bg-surface-subtle">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-xs text-charcoal block">Women-Owned Excellence</span>
                <span className="text-[11px] text-charcoal-light">Trusted for detail and reliability</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
