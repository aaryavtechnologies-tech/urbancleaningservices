"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Check, ArrowRight, ShieldCheck } from "lucide-react";

export default function BeforeAfterShowcase() {
  const [activeTab, setActiveTab] = useState(0);

  const rooms = [
    {
      title: "Spotless Living Space",
      subtitle: "Airy, hygienic, and free of Bangalore street dust",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      highlights: [
        "Sofa fabric and cushion dry vacuuming",
        "French door and balcony slider glass polishing",
        "Balcony floor scrubbing and bird dropping cleanup",
        "Ceiling fan blades, cove lighting, and switches wiped",
      ],
      tag: "Living Room Transformation",
    },
    {
      title: "Pristine Kitchen & Slabs",
      subtitle: "Deep degreasing of cooking grease and cabinet exteriors",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
      highlights: [
        "Heavy oil and grease removal from backsplash tiles",
        "Chimney exterior and exhaust mesh degreasing",
        "Cabinet exterior wipe-down and handle disinfection",
        "Stainless sink descaling and drainage sanitization",
      ],
      tag: "Kitchen Grease Removal",
    },
    {
      title: "Limescale-Free Bathrooms",
      subtitle: "Eliminating Bangalore hard water deposits from tiles and glass",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
      highlights: [
        "Stubborn hard water stain removal from wall tiles",
        "Shower glass partition water drop spot eradication",
        "Commode and washbasin descaling and deep disinfection",
        "Chrome faucet and showerhead mirror shine restoration",
      ],
      tag: "Bathroom Hard Water Scrub",
    },
  ];

  const currentRoom = rooms[activeTab];

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-mint text-primary-dark font-extrabold text-xs uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>EXCELLENCE IN EVERY ROOM</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-charcoal tracking-tight mb-4">
            See the Urban Cleaning Standard
          </h2>
          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed">
            Experience the difference of a corner-to-corner professional deep clean tailored specifically for Bangalore residences.
          </p>

          {/* Interactive Room Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            {rooms.map((room, idx) => (
              <button
                key={room.tag}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                  activeTab === idx
                    ? "bg-primary text-white shadow-md scale-105"
                    : "bg-surface-subtle text-charcoal hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {room.tag}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Room Showcase Card */}
        <div className="bg-surface-subtle rounded-3xl p-6 sm:p-10 border border-surface-border shadow-premium">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Visual Image */}
            <div className="lg:col-span-7">
              <div className="relative h-[340px] sm:h-[440px] rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                <Image
                  src={currentRoom.image}
                  alt={currentRoom.title}
                  fill
                  className="object-cover transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-white/80 shadow-md flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-primary block">
                      Target Area
                    </span>
                    <h4 className="font-extrabold text-charcoal text-sm sm:text-base">
                      {currentRoom.title}
                    </h4>
                  </div>
                  <span className="text-xs font-bold text-primary bg-primary-light px-3 py-1 rounded-lg">
                    100% Detailed
                  </span>
                </div>
              </div>
            </div>

            {/* Checklist & Description */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-1">
                  Scope of Care
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-charcoal tracking-tight">
                  {currentRoom.title}
                </h3>
                <p className="text-sm text-charcoal-muted mt-2 leading-relaxed">
                  {currentRoom.subtitle}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {currentRoom.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-xl bg-white border border-gray-100 shadow-sm"
                  >
                    <div className="w-5 h-5 rounded-full bg-mint text-primary flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-primary stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-charcoal">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3 rounded-xl shadow-md transition-all"
                >
                  <span>Request Quote For This Area</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
