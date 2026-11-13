"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  MapPin, 
  Clock, 
  Star, 
  HeartHandshake, 
  ExternalLink, 
  CalendarCheck, 
  Navigation,
  FileText,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { BUSINESS_INFO } from "@/data/businessData";
import EnquiryForm from "@/components/EnquiryForm";

export default function ContactPage() {
  const [savedEnquiries, setSavedEnquiries] = useState<any[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("urban_cleaning_enquiries");
      if (stored) {
        setSavedEnquiries(JSON.parse(stored));
      }
    } catch (e) {
      console.warn("Could not read local enquiries", e);
    }
  }, []);

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-primary/10 via-surface-subtle to-white py-14 lg:py-20 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint text-primary-dark font-bold text-xs uppercase tracking-wider mb-4">
            <CalendarCheck className="w-4 h-4 text-primary" />
            <span>24/7 ENQUIRY &amp; BOOKING DESK</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-charcoal tracking-tight mb-4">
            Contact &amp; Book a Cleaning
          </h1>
          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed">
            Tell us what your home needs. Get in touch with us to discuss your cleaning requirements and receive your customized quote.
          </p>
        </div>
      </section>

      {/* Main Grid: Info on Left, Form on Right */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Business Details Card */}
              <div className="bg-surface-subtle p-7 rounded-3xl border border-surface-border space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-2">
                    Verified Business Details
                  </span>
                  <h3 className="text-xl font-extrabold text-charcoal">
                    {BUSINESS_INFO.name}
                  </h3>
                  <p className="text-xs text-charcoal-light mt-1">
                    House Cleaning Service • Women-Owned
                  </p>
                </div>

                <div className="space-y-4 text-sm text-charcoal">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-mint text-primary flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <span className="text-xs text-charcoal-muted block">Operating Address</span>
                      <span className="font-medium text-xs sm:text-sm">
                        {BUSINESS_INFO.address.full}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-mint text-primary flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <span className="text-xs text-charcoal-muted block">Working Hours</span>
                      <span className="font-semibold text-emerald-800 text-sm flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        Open 24 Hours Daily
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                      <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                    </div>
                    <div>
                      <span className="text-xs text-charcoal-muted block">Google Rating</span>
                      <span className="font-bold text-charcoal text-sm">
                        5.0 / 5.0 (6 Verified Reviews)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-gray-200">
                  <a
                    href={BUSINESS_INFO.mapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white text-xs font-bold py-3 px-4 rounded-xl shadow-sm transition-all"
                  >
                    <Navigation className="w-4 h-4 text-accent" />
                    <span>Get Google Maps Directions</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                  </a>
                </div>
              </div>

              {/* Saved Enquiries on this device */}
              {savedEnquiries.length > 0 && (
                <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-charcoal text-sm flex items-center gap-1.5">
                      <FileText className="w-4 h-4 text-primary" />
                      <span>Your Recent Submissions</span>
                    </h4>
                    <span className="text-xs text-charcoal-light">
                      Saved locally
                    </span>
                  </div>

                  <div className="space-y-3">
                    {savedEnquiries.slice(0, 3).map((enq, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-surface-subtle border border-gray-100 text-xs space-y-1.5"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-mono font-bold text-primary">
                            {enq.bookingId}
                          </span>
                          <span className="text-[11px] bg-emerald-50 text-emerald-700 font-semibold px-2 py-0.5 rounded-md">
                            Active
                          </span>
                        </div>
                        <p className="font-medium text-charcoal">
                          {enq.serviceRequired} • {enq.homeSize}
                        </p>
                        <p className="text-charcoal-light text-[11px]">
                          Area: {enq.locationArea}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Trust Box */}
              <div className="p-6 rounded-3xl bg-mint/40 border border-mint-border text-charcoal text-xs space-y-2">
                <span className="font-bold text-primary-dark block text-sm">
                  Transparent &amp; Direct Communication
                </span>
                <p className="text-charcoal-muted leading-relaxed">
                  We review every detail you submit to ensure accurate equipment preparation, scheduling, and transparent quote discussions tailored to your Bangalore residence.
                </p>
              </div>

            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7">
              <EnquiryForm />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
