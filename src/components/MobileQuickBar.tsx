"use client";

import React from "react";
import Link from "next/link";
import { Star, Clock, CalendarCheck, MapPin } from "lucide-react";
import { BUSINESS_INFO } from "@/data/businessData";

export default function MobileQuickBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-gray-200/90 py-2.5 px-4 sm:hidden shadow-2xl flex items-center justify-between">
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <div className="flex text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-amber-500" />
            ))}
          </div>
          <span className="text-[11px] font-black text-charcoal">5.0 (6 Reviews)</span>
        </div>
        <span className="text-[10px] text-emerald-700 font-bold flex items-center gap-1 mt-0.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Open 24 Hours • Bellandur
        </span>
      </div>

      <div className="flex items-center gap-2">
        <a
          href={BUSINESS_INFO.mapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-xl bg-surface-subtle border border-gray-200 text-charcoal"
          title="Google Maps"
        >
          <MapPin className="w-4 h-4 text-primary" />
        </a>
        <Link
          href="/contact"
          className="inline-flex items-center gap-1.5 bg-primary hover:bg-primary-hover text-white text-xs font-extrabold px-4 py-2.5 rounded-xl shadow-md"
        >
          <CalendarCheck className="w-3.5 h-3.5 text-accent" />
          <span>Book Now</span>
        </Link>
      </div>
    </div>
  );
}
