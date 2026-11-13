import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { 
  ShieldCheck, 
  Users, 
  Sparkles, 
  Clock, 
  HeartHandshake, 
  CheckCircle2, 
  ArrowRight,
  Star,
  MapPin,
  CalendarCheck
} from "lucide-react";
import { BUSINESS_INFO, WHY_CHOOSE_US } from "@/data/businessData";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Why Choose Us | Urban Full Home Deep Cleaning Services Bangalore",
  description:
    "Discover why homeowners in Bellandur and Bangalore choose Urban Full Home Deep Cleaning Services: Women-Owned, Available 24 Hours, Detailed Corner Cleaning, and a 5.0 Google Rating.",
};

export default function WhyChooseUsPage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-primary/10 via-surface-subtle to-white py-14 lg:py-20 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint text-primary-dark font-bold text-xs uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span>UNCOMPROMISING CLEANING INTEGRITY</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-charcoal tracking-tight mb-4">
            Why Choose Urban Cleaning?
          </h1>
          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed">
            We prioritize customer satisfaction, meticulous corner detailing, 24-hour convenience, and women-led care for homes across Bangalore.
          </p>
        </div>
      </section>

      {/* The 4 Pillars Detailed Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Pillar 1: Women-Owned Business */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-surface-subtle p-8 sm:p-12 rounded-3xl border border-surface-border">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-bold uppercase tracking-wider">
                <HeartHandshake className="w-4 h-4" />
                <span>Pillar 01 • Women-Owned Business</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal">
                Proudly Women-Led Care, Empathy &amp; Trust
              </h2>
              <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed">
                As a women-owned business, we recognize that your home is your sanctuary. We bring a high benchmark for domestic hygiene, attention to sensitive personal spaces, respectful handling of your belongings, and an uncompromising standard for real cleanliness.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-charcoal">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Respectful &amp; Courteous Staff</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-charcoal">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Emphasis on True Sanitization</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-charcoal">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Safe for Children &amp; Pets</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-charcoal">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Domestic Care &amp; Responsibility</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-gray-200 text-center space-y-3 shadow-sm">
              <div className="w-14 h-14 bg-pink-50 rounded-2xl flex items-center justify-center mx-auto text-pink-600">
                <HeartHandshake className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-charcoal text-base">
                Women-Owned Business
              </h3>
              <p className="text-xs text-charcoal-light">
                Verified badge of trust, ethical service, and dedicated domestic hygiene across Bangalore.
              </p>
            </div>
          </div>

          {/* Pillar 2: Available 24 Hours */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white p-8 sm:p-12 rounded-3xl border border-surface-border shadow-sm">
            <div className="lg:col-span-4 order-2 lg:order-1 bg-surface-subtle p-6 rounded-2xl border border-gray-200 text-center space-y-3">
              <div className="w-14 h-14 bg-mint rounded-2xl flex items-center justify-center mx-auto text-primary">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <div className="inline-block px-3 py-1 bg-mint text-primary-dark rounded-full text-xs font-bold">
                Open 24 Hours
              </div>
              <h3 className="font-bold text-charcoal text-base">
                24/7 Scheduling Flexibility
              </h3>
              <p className="text-xs text-charcoal-light">
                Accommodating Bangalore techies, early departures, and weekend transitions.
              </p>
            </div>

            <div className="lg:col-span-8 order-1 lg:order-2 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mint text-primary-dark text-xs font-bold uppercase tracking-wider">
                <Clock className="w-4 h-4" />
                <span>Pillar 02 • Available 24 Hours</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal">
                Round-the-Clock Availability Built for Bangalore
              </h2>
              <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed">
                In a city with diverse shift timings, urgent lease expiries, and sudden weekend move-ins, rigid 9-to-5 cleaning hours don&apos;t work. Our 24-hour service means you can request quotations and schedule deep cleans whenever it suits you best.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-charcoal">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Early Morning Handover Slots</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-charcoal">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Weekend &amp; Holiday Availability</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-charcoal">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Urgent Move-In Accommodations</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-charcoal">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>24/7 Enquiry Response</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 3: Detailed Home Cleaning */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-surface-subtle p-8 sm:p-12 rounded-3xl border border-surface-border">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mint text-primary-dark text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Pillar 03 • Detailed Home Cleaning</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal">
                Focus on Making Every Living Space Fresh &amp; Clean
              </h2>
              <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed">
                We go far beyond routine maid sweeps. We clean window slider tracks, bathroom tile grout discolored by hard water minerals, sticky kitchen grease over cabinet tops, dusty ceiling fan blades, and the neglected crevices behind furniture.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-charcoal">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Tile Grout &amp; Hard Water Treatment</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-charcoal">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Deep Degreasing for Kitchens</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-charcoal">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Window Tracks &amp; Glass Polishing</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-charcoal">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Floor Scrubbing &amp; Buffing Prep</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-gray-200 text-center space-y-3 shadow-sm">
              <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center mx-auto text-amber-600">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-charcoal text-base">
                Detailed Hygiene
              </h3>
              <p className="text-xs text-charcoal-light">
                Targeted treatments for Bangalore dust, grease, and hard water scale.
              </p>
            </div>
          </div>

          {/* Pillar 4: Customer-Focused Service */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white p-8 sm:p-12 rounded-3xl border border-surface-border shadow-sm">
            <div className="lg:col-span-4 order-2 lg:order-1 bg-surface-subtle p-6 rounded-2xl border border-gray-200 text-center space-y-3">
              <div className="w-14 h-14 bg-mint rounded-2xl flex items-center justify-center mx-auto text-primary">
                <Star className="w-8 h-8 text-accent fill-accent" />
              </div>
              <div className="inline-block px-3 py-1 bg-amber-50 text-amber-800 rounded-full text-xs font-bold">
                5.0 Google Rating
              </div>
              <h3 className="font-bold text-charcoal text-base">
                Customer Satisfaction
              </h3>
              <p className="text-xs text-charcoal-light">
                Backed by 6 verified Google reviews with 100% 5-star feedback.
              </p>
            </div>

            <div className="lg:col-span-8 order-1 lg:order-2 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mint text-primary-dark text-xs font-bold uppercase tracking-wider">
                <Users className="w-4 h-4" />
                <span>Pillar 04 • Customer-Focused Service</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal">
                Prioritizing Customer Satisfaction &amp; Clear Communication
              </h2>
              <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed">
                We believe in genuine transparency. Before starting, we discuss your priorities, note any delicate furnishings, and tailor our checklist to your expectations. No fabricated charges, no surprises—just dependable, professional care.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-charcoal">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Customized Scope Discussions</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-charcoal">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Transparent Quote Formulation</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-charcoal">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Post-Cleaning Inspection Walkthrough</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-charcoal">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Dedicated Bellandur Coordinator</span>
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

