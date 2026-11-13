import React from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import BeforeAfterShowcase from "@/components/BeforeAfterShowcase";
import BentoGridSection from "@/components/BentoGridSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import EstimateCalculator from "@/components/EstimateCalculator";
import ChecklistSection from "@/components/ChecklistSection";
import ReviewsSection from "@/components/ReviewsSection";
import LocationSection from "@/components/LocationSection";
import EnquiryForm from "@/components/EnquiryForm";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* About Us Highlight */}
      <AboutSection />

      {/* Cleaning Services Grid */}
      <ServicesSection />

      {/* Interactive Room-by-Room Clean Transformation Showcase */}
      <BeforeAfterShowcase />

      {/* Interactive Scope & Duration Estimator */}
      <EstimateCalculator />

      {/* Modern Bento Grid: Why Choose Us (Women-Owned, 24 Hours, Detailed, Customer-Focused) */}
      <BentoGridSection />

      {/* How It Works (4 Steps) */}
      <HowItWorksSection />

      {/* Room by Room Detailed Checklist */}
      <ChecklistSection />

      {/* Verified Google Reviews & Rating Showcase */}
      <ReviewsSection />

      {/* Bangalore Location & Embedded Map */}
      <LocationSection />

      {/* Contact / Booking Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-surface-subtle via-mint/20 to-surface-subtle border-t border-surface-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquiryForm />
        </div>
      </section>
    </div>
  );
}
