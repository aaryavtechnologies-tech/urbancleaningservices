import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Star, 
  Clock, 
  HeartHandshake, 
  ArrowRight, 
  CalendarCheck, 
  ShieldCheck, 
  Sparkles,
  MapPin,
  CheckCircle2,
  PhoneCall
} from "lucide-react";
import { BUSINESS_INFO } from "@/data/businessData";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-mint/30 via-[#FAFCFA] to-white pt-10 sm:pt-16 pb-20 lg:pb-28 border-b border-surface-border">
      {/* Decorative ambient background mesh blobs */}
      <div className="absolute top-0 right-10 w-[500px] h-[500px] bg-mint/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-mint-border text-primary-dark font-extrabold text-xs uppercase tracking-wider shadow-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-primary animate-glow-dot" />
              <span>YOUR TRUSTED HOME CLEANING SERVICE IN BANGALORE</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-charcoal tracking-tight leading-[1.12]">
              Experience a <span className="text-primary underline decoration-mint-border decoration-wavy decoration-2">Cleaner</span>, Fresher &amp; Healthier Home.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-charcoal-muted max-w-2xl leading-relaxed font-normal">
              Give your home the care it deserves with professional deep cleaning services. We help make your living space fresh, hygienic and beautifully clean.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 pt-1">
              <Link
                href="/contact"
                className="relative group inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-primary to-primary-hover text-white font-extrabold text-sm sm:text-base px-8 py-4 rounded-2xl shadow-lg hover:shadow-premium-hover transition-all transform hover:-translate-y-0.5 active:translate-y-0 overflow-hidden"
              >
                <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000" />
                <CalendarCheck className="w-5 h-5 text-accent" />
                <span>Book Your Cleaning</span>
              </Link>
              
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-charcoal font-bold text-sm sm:text-base px-7 py-4 rounded-2xl border border-gray-200/90 shadow-sm hover:shadow transition-all group"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Trust Indicators Bar */}
            <div className="pt-6 border-t border-gray-200/70">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                {/* 5.0 Google Rating */}
                <a
                  href={BUSINESS_INFO.mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-gray-200/80 hover:border-primary/40 shadow-sm transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
                    <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1 font-extrabold text-charcoal text-sm">
                      <span>5.0 Rating</span>
                      <div className="flex text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-2.5 h-2.5 fill-amber-500" />
                        ))}
                      </div>
                    </div>
                    <span className="text-xs text-charcoal-light font-medium">
                      6 Google Reviews
                    </span>
                  </div>
                </a>

                {/* 24-Hour Availability */}
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-gray-200/80 shadow-sm">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="font-extrabold text-charcoal text-sm block">
                      24-Hour Availability
                    </span>
                    <span className="text-xs text-emerald-700 font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Open 24 Hours
                    </span>
                  </div>
                </div>

                {/* Women-Owned Business */}
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-gray-200/80 shadow-sm">
                  <div className="w-11 h-11 rounded-xl bg-pink-50 flex items-center justify-center shrink-0">
                    <HeartHandshake className="w-5 h-5 text-pink-600" />
                  </div>
                  <div>
                    <span className="font-extrabold text-charcoal text-sm block">
                      Women-Owned
                    </span>
                    <span className="text-xs text-charcoal-light font-medium">
                      Domestic Care &amp; Trust
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Modern Interior Photography with Glassmorphic Floating Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Photo Frame */}
              <div className="relative h-[420px] sm:h-[500px] rounded-[32px] overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                  alt="Spotless, professionally cleaned modern home living room in Bangalore"
                  fill
                  priority
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-black/10 to-transparent" />
                
                {/* Floating Bottom Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/60 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-mint text-primary flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-black text-charcoal">
                        Bellandur &amp; Bangalore Hub
                      </p>
                      <p className="text-[11px] text-charcoal-light font-medium">
                        Near Mantri Espana • 24/7 Dispatch
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-black text-primary bg-primary-light px-3 py-1.5 rounded-xl border border-primary/20">
                    5.0 Verified
                  </span>
                </div>
              </div>

              {/* Floating Top Right Badge */}
              <div className="absolute -top-5 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-gray-100 hidden sm:flex items-center gap-3 animate-float">
                <div className="w-11 h-11 rounded-xl bg-mint flex items-center justify-center text-primary shadow-sm">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-black text-charcoal">
                    Hygiene Inspected
                  </p>
                  <p className="text-[11px] text-charcoal-light font-medium">
                    Corner-to-Corner Standard
                  </p>
                </div>
              </div>

              {/* Floating Left Pill */}
              <div className="absolute top-1/3 -left-6 bg-white/95 backdrop-blur-md py-2.5 px-4 rounded-2xl shadow-xl border border-gray-100 hidden sm:flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-glow-dot" />
                <span className="text-xs font-bold text-charcoal">Open 24 Hours Daily</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
