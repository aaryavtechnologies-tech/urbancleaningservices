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
  MapPin
} from "lucide-react";
import { BUSINESS_INFO } from "@/data/businessData";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-white to-white pt-8 sm:pt-14 pb-16 lg:pb-24 border-b border-surface-border">
      {/* Subtle decorative background circles */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-mint/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint/90 border border-mint-border text-primary-dark font-bold text-xs uppercase tracking-wider shadow-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>YOUR TRUSTED HOME CLEANING SERVICE IN BANGALORE</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-charcoal tracking-tight leading-[1.12]">
              Experience a <span className="text-primary underline decoration-mint-border decoration-wavy decoration-2">Cleaner</span>, Fresher &amp; Healthier Home.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-charcoal-muted max-w-2xl leading-relaxed">
              Give your home the care it deserves with professional deep cleaning services. We help make your living space fresh, hygienic and beautifully clean.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-1">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold text-base px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <CalendarCheck className="w-5 h-5 text-accent" />
                Book Your Cleaning
              </Link>
              
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-charcoal font-semibold text-base px-6 py-3.5 rounded-xl border border-gray-200 shadow-sm hover:shadow transition-all group"
              >
                Explore Services
                <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="pt-6 border-t border-gray-100">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* 5.0 Google Rating */}
                <a
                  href={BUSINESS_INFO.mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-2xl bg-surface-subtle border border-surface-border hover:border-primary/30 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
                    <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1 font-extrabold text-charcoal text-sm">
                      <span>5.0</span>
                      <div className="flex text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-2.5 h-2.5 fill-amber-500" />
                        ))}
                      </div>
                    </div>
                    <span className="text-xs text-charcoal-light">
                      6 Google Reviews
                    </span>
                  </div>
                </a>

                {/* 24-Hour Availability */}
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-surface-subtle border border-surface-border">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="font-extrabold text-charcoal text-sm block">
                      24-Hour Availability
                    </span>
                    <span className="text-xs text-emerald-700 font-medium">
                      Open 24 Hours Daily
                    </span>
                  </div>
                </div>

                {/* Women-Owned Business */}
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-surface-subtle border border-surface-border">
                  <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center shrink-0">
                    <HeartHandshake className="w-5 h-5 text-pink-600" />
                  </div>
                  <div>
                    <span className="font-extrabold text-charcoal text-sm block">
                      Women-Owned
                    </span>
                    <span className="text-xs text-charcoal-light">
                      Care &amp; Precision
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Modern Interior Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main clean spotless home photo */}
              <div className="relative h-[400px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                  alt="Spotless, professionally cleaned modern home living room in Bangalore"
                  fill
                  priority
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                
                {/* Floating pill inside image */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-lg border border-white/60 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                    <div>
                      <p className="text-xs font-bold text-charcoal">
                        Bellandur &amp; Bangalore Central
                      </p>
                      <p className="text-[11px] text-charcoal-light">
                        Deep Cleaning Teams On Call
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-extrabold text-primary bg-primary-light px-2.5 py-1 rounded-lg">
                    24/7 Service
                  </span>
                </div>
              </div>

              {/* Floating secondary badge */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-white p-3.5 rounded-2xl shadow-xl border border-gray-100 hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-mint flex items-center justify-center text-primary">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-charcoal">
                    Hygiene Inspected
                  </p>
                  <p className="text-[11px] text-charcoal-light">
                    Corner-to-Corner Detail
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
