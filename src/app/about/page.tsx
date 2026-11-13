import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  HeartHandshake, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Home,
  Check
} from "lucide-react";
import { BUSINESS_INFO } from "@/data/businessData";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "About Us | Urban Full Home Deep Cleaning Services in Bangalore",
  description:
    "Learn about Urban Full Home Deep Cleaning Services in Bellandur, Bangalore. A dedicated, women-owned cleaning service operating 24 hours.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-primary/10 via-surface-subtle to-white py-14 lg:py-20 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint text-primary-dark font-bold text-xs uppercase tracking-wider mb-4">
            <HeartHandshake className="w-4 h-4 text-pink-600" />
            <span>WOMEN-OWNED • 24 HOURS • BELLANDUR</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-charcoal tracking-tight mb-4">
            About Urban Cleaning
          </h1>
          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed">
            Making Bangalore Homes Cleaner, Fresher &amp; Healthier. Dedicated to helping apartments and houses in Bellandur and across Bangalore stay spotless and comfortable.
          </p>
        </div>
      </section>

      {/* Main Story & Values */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Our Commitment
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-charcoal tracking-tight leading-tight">
                Making Every Corner of Your Home Shine.
              </h2>
              <p className="text-base text-charcoal-muted leading-relaxed">
                Urban Full Home Deep Cleaning Services is dedicated to helping homes in Bangalore stay fresh, clean and comfortable. We focus on detailed home cleaning and creating cleaner living environments for our customers.
              </p>
              <p className="text-sm text-charcoal-light leading-relaxed">
                Bangalore living presents unique domestic challenges—from urban dust along the Outer Ring Road corridor to stubborn hard water residue on bathroom tiles and heavy cooking grease on kitchen surfaces. We approach every home with meticulous attention, ensuring that corners, edges, and concealed spaces receive the detailed care they require.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Home-focused cleaning solutions designed for urban residences",
                  "Meticulous attention to cleaning details in every room",
                  "Convenient 24-hour service availability to fit your calendar",
                  "Customer-focused approach built on trust and respect",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-charcoal">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-premium border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                  alt="Spotless, refreshed modern apartment living space"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

          </div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-surface-subtle border border-surface-border">
              <div className="w-12 h-12 rounded-2xl bg-pink-100 text-pink-700 flex items-center justify-center mb-5">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2">
                Women-Owned Business
              </h3>
              <p className="text-sm text-charcoal-muted leading-relaxed">
                Proudly identify as a women-owned business. We bring genuine care, domestic hygiene empathy, dependable work ethics, and meticulous attention to creating healthy home sanctuaries.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-surface-subtle border border-surface-border">
              <div className="w-12 h-12 rounded-2xl bg-mint text-primary flex items-center justify-center mb-5">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2">
                Available 24 Hours
              </h3>
              <p className="text-sm text-charcoal-muted leading-relaxed">
                We operate 24 hours a day to cater to Bangalore&apos;s dynamic schedules, shift timings, urgent move-in deadlines, and weekend cleaning preferences.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-surface-subtle border border-surface-border">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-5">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2">
                Based in Bellandur
              </h3>
              <p className="text-sm text-charcoal-muted leading-relaxed">
                Conveniently located on Kariyammana Agrahara Rd, near Mantri Espana in Bellandur, ensuring swift response and dedicated local presence across Bangalore.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Booking Form Integration */}
      <section className="py-16 bg-gradient-to-b from-white to-surface-subtle border-t border-surface-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquiryForm />
        </div>
      </section>
    </div>
  );
}
