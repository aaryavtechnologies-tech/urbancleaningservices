import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { SERVICES } from "@/data/businessData";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-white border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint text-primary-dark font-bold text-xs uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span>OUR CLEANING SERVICES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal tracking-tight">
              Comprehensive Deep Cleaning for Bangalore Homes
            </h2>
            <p className="text-base text-charcoal-muted leading-relaxed">
              From individual rooms to full villa handovers, our specialized services target every area of your home with precision and hygienic care.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-dark bg-primary-light/70 hover:bg-primary-light px-5 py-2.5 rounded-xl transition-colors"
            >
              <span>Explore All Checklist Details</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Bottom Banner for Custom / Villa requests */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-primary-dark to-primary text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Need a Customized Cleaning Plan or Multiple Service Combo?
            </h3>
            <p className="text-xs sm:text-sm text-mint-light">
              We customize quotes based on your exact square footage, rooms, and priority areas across Bangalore.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 bg-accent hover:bg-accent-hover text-charcoal font-bold text-sm px-6 py-3 rounded-xl shadow-md transition-all transform hover:-translate-y-0.5"
          >
            Get a Quote
          </Link>
        </div>

      </div>
    </section>
  );
}
