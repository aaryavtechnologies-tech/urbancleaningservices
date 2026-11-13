import React from "react";
import Link from "next/link";
import { 
  Users, 
  Sparkles, 
  Clock, 
  HeartHandshake, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Star,
  Zap,
  MapPin
} from "lucide-react";
import { BUSINESS_INFO } from "@/data/businessData";

export default function BentoGridSection() {
  return (
    <section id="why-choose-us" className="py-20 lg:py-28 bg-[#F8FAF9] border-b border-surface-border relative overflow-hidden">
      {/* Decorative ambient gradient blooms */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-mint/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-mint/90 border border-mint-border text-primary-dark font-extrabold text-xs uppercase tracking-wider mb-4 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span>THE URBAN CLEANING STANDARD</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-charcoal tracking-tight mb-5 leading-tight">
            Why Choose Urban Cleaning?
          </h2>
          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed">
            We prioritize customer satisfaction, meticulous corner detailing, 24-hour convenience, and women-led domestic care for homes across Bangalore.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Bento Card 1: Women-Owned Business (Spans 7 cols on desktop) */}
          <div className="md:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/80 shadow-premium hover:shadow-premium-hover card-modern-hover flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -right-12 -top-12 w-48 h-48 bg-pink-50 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 text-white flex items-center justify-center shadow-md">
                  <HeartHandshake className="w-7 h-7" />
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-pink-50 text-pink-700 border border-pink-200/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                  Pillar 01 • Women-Owned Business
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-charcoal tracking-tight mb-3">
                Proudly Women-Owned &amp; Operated
              </h3>

              <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed mb-6">
                Proudly identify as a women-owned business. We bring genuine domestic care, thorough hygiene empathy, dependable work ethics, and meticulous attention to creating healthy, spotless home sanctuaries.
              </p>

              {/* Highlights Micro Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-surface-subtle border border-gray-100 text-xs font-semibold text-charcoal">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Respectful &amp; Trustworthy Staff</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-surface-subtle border border-gray-100 text-xs font-semibold text-charcoal">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Pet &amp; Child Safe Cleaning Approach</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-surface-subtle border border-gray-100 text-xs font-semibold text-charcoal">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Special Care for Delicate Furnishings</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-surface-subtle border border-gray-100 text-xs font-semibold text-charcoal">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Uncompromising Domestic Hygiene</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-charcoal-light">
                Serving Bellandur &amp; All Bangalore Neighborhoods
              </span>
              <span className="text-xs font-bold text-pink-600">
                100% Genuine Care →
              </span>
            </div>
          </div>

          {/* Bento Card 2: 24-Hour Availability (Spans 5 cols on desktop) */}
          <div className="md:col-span-5 bg-gradient-to-br from-[#064e3b] to-[#042f24] text-white rounded-3xl p-8 sm:p-10 border border-emerald-900 shadow-premium hover:shadow-premium-hover card-modern-hover flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md text-mint border border-white/20 flex items-center justify-center shadow-inner">
                  <Clock className="w-7 h-7 text-accent" />
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-900/80 text-mint border border-emerald-500/40">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-glow-dot" />
                  Open 24 Hours
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-white tracking-tight mb-3">
                Available 24 Hours
              </h3>

              <p className="text-sm text-gray-200 leading-relaxed mb-6">
                Convenient availability around the clock to suit Bangalore&apos;s dynamic routines, shift schedules, early-morning handover deadlines, and weekend cleaning preferences.
              </p>

              <div className="space-y-2.5 text-xs text-mint">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-accent" />
                  <span>Early Morning Handover Slots Before Packers Arrive</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-accent" />
                  <span>Late Evening &amp; Weekend Deep Cleaning</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-accent" />
                  <span>24/7 Response to Direct Quotation Enquiries</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-gray-300">
                Operating 24/7/365
              </span>
              <Link
                href="/contact"
                className="text-xs font-bold text-accent hover:underline flex items-center gap-1"
              >
                <span>Book a Slot</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Bento Card 3: Detailed Home Cleaning (Spans 5 cols on desktop) */}
          <div className="md:col-span-5 bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/80 shadow-premium hover:shadow-premium-hover card-modern-hover flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-hover text-white flex items-center justify-center shadow-md">
                  <Sparkles className="w-7 h-7 text-accent" />
                </div>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-mint text-primary-dark">
                  Pillar 03 • Deep Precision
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-charcoal tracking-tight mb-3">
                Detailed Home Cleaning
              </h3>

              <p className="text-sm text-charcoal-muted leading-relaxed mb-6">
                Focus on making your living spaces fresh and clean. We target accumulated dust, hard water deposits on bathroom tiles, grease lines on kitchen cabinets, and window tracks.
              </p>

              {/* Tag Cloud */}
              <div className="flex flex-wrap gap-2">
                {[
                  "Hard Water Descaling",
                  "Kitchen Degreasing",
                  "Window Track Detailing",
                  "Floor Scrubbing",
                  "Balcony Grills",
                  "Mattress Vacuuming",
                  "Switchboard Detailing",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1.5 bg-surface-subtle border border-gray-200 rounded-lg text-charcoal"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <Link
                href="/services"
                className="text-xs font-bold text-primary hover:text-primary-dark flex items-center gap-1 group"
              >
                <span>Explore Full Room Checklist</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Bento Card 4: Customer-Focused Service & 5.0 Rating (Spans 7 cols on desktop) */}
          <div className="md:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/80 shadow-premium hover:shadow-premium-hover card-modern-hover flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center border border-amber-500/20 shadow-sm">
                  <Users className="w-7 h-7 text-amber-600" />
                </div>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  Pillar 04 • 5.0 Google Rating
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-charcoal tracking-tight mb-3">
                Customer-Focused Service
              </h3>

              <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed mb-6">
                We prioritize customer satisfaction and convenient cleaning solutions. We listen to your priorities before starting, tailor our focus to your concerns, and walk through the results to ensure total delight.
              </p>

              {/* Rating Showcase Bar */}
              <div className="p-4 sm:p-5 rounded-2xl bg-surface-subtle border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-3xl sm:text-4xl font-extrabold text-charcoal font-mono">
                    5.0
                  </span>
                  <div>
                    <div className="flex text-accent">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent" />
                      ))}
                    </div>
                    <span className="text-xs font-semibold text-charcoal-muted">
                      Based on 6 Google reviews
                    </span>
                  </div>
                </div>

                <a
                  href={BUSINESS_INFO.mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-primary-hover text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow-sm transition-colors flex items-center gap-1.5 shrink-0"
                >
                  <span>Verify on Google</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between text-xs text-charcoal-light">
              <span>Strict Transparency • No Fabricated Testimonials</span>
              <span className="font-semibold text-primary">100% Verified Feedback</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

