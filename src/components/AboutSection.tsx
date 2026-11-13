import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Home, 
  Search, 
  Clock, 
  Users 
} from "lucide-react";
import { BUSINESS_INFO } from "@/data/businessData";

export default function AboutSection() {
  const pillars = [
    {
      title: "Home-Focused Cleaning Solutions",
      description: "Tailored treatments designed specifically for urban apartments, duplexes, and independent residences.",
      icon: Home,
    },
    {
      title: "Attention to Cleaning Details",
      description: "Focused care reaching neglected corners, tile grout lines, window sliders, and grease-prone areas.",
      icon: Search,
    },
    {
      title: "Convenient Service Availability",
      description: "Open 24 hours to accommodate your work commitments, travel timings, and busy Bangalore schedules.",
      icon: Clock,
    },
    {
      title: "Customer-Focused Approach",
      description: "Attentive listening to your priorities, transparent communication, and dedication to your peace of mind.",
      icon: Users,
    },
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-surface-subtle border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with Accent Badge */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              {/* Main clean interior image */}
              <div className="relative h-[380px] sm:h-[460px] rounded-3xl overflow-hidden shadow-premium border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
                  alt="Spotless and comfortable modern Bangalore apartment living area"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Floating verified badge */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white p-4 sm:p-5 rounded-2xl shadow-xl border border-gray-100 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-mint flex items-center justify-center text-primary shrink-0">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-bold text-primary block">
                      Local Excellence
                    </span>
                    <span className="text-sm font-bold text-charcoal block leading-snug">
                      Bellandur &amp; Beyond
                    </span>
                    <span className="text-xs text-charcoal-light">
                      Karnataka 560103
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Text & Pillars */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint text-primary-dark font-bold text-xs uppercase tracking-wider">
              <span>ABOUT URBAN CLEANING</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal tracking-tight leading-tight">
              Making Every Corner of Your Home Shine.
            </h2>

            <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed">
              Urban Full Home Deep Cleaning Services is dedicated to helping homes in Bangalore stay fresh, clean and comfortable. We focus on detailed home cleaning and creating cleaner living environments for our customers.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="p-4 rounded-2xl bg-white border border-surface-border shadow-sm hover:border-primary/30 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-mint text-primary flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-charcoal text-sm mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-charcoal-muted leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-dark transition-colors group"
              >
                <span>Read Our Full Story &amp; Approach</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <span className="text-gray-300">•</span>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-charcoal hover:text-primary transition-colors"
              >
                <span>Enquire About Your Home</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
