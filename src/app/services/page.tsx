import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { 
  Sparkles, 
  ArrowRight, 
  Check, 
  Clock, 
  ShieldCheck, 
  Home, 
  Utensils, 
  Droplets, 
  Bed, 
  Armchair, 
  Truck 
} from "lucide-react";
import { SERVICES } from "@/data/businessData";
import ServiceCard from "@/components/ServiceCard";
import ChecklistSection from "@/components/ChecklistSection";
import EstimateCalculator from "@/components/EstimateCalculator";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Professional Home Cleaning Services in Bangalore",
  description:
    "Explore our complete range of deep cleaning services in Bangalore: Full Home Deep Cleaning, Kitchen Cleaning, Bathroom Cleaning, Bedroom Cleaning, Living Room Cleaning, and Move-In/Move-Out Cleaning.",
};

const iconMap: Record<string, React.ElementType> = {
  Home,
  Utensils,
  Droplets,
  Bed,
  Armchair,
  Truck,
};

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-primary/10 via-surface-subtle to-white py-14 lg:py-20 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint text-primary-dark font-bold text-xs uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>SPECIALIZED CLEANING SOLUTIONS</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-charcoal tracking-tight mb-4">
            Our Cleaning Services
          </h1>
          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed">
            Professional deep cleaning designed for Bangalore homes, apartments, and villas. Every service is backed by meticulous standards, 24/7 availability, and transparent quote discussions.
          </p>
        </div>
      </section>

      {/* Grid of 6 Services */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Scope Calculator */}
      <EstimateCalculator />

      {/* Detailed Checklist Section */}
      <ChecklistSection />

      {/* Bottom Booking Section */}
      <section className="py-16 lg:py-24 bg-surface-subtle border-t border-surface-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquiryForm />
        </div>
      </section>
    </div>
  );
}

