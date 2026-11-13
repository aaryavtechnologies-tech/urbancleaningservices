import React from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
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

      {/* Interactive Scope & Duration Estimator */}
      <EstimateCalculator />

      {/* Why Choose Us */}
      <WhyChooseUsSection />

      {/* How It Works (4 Steps) */}
      <HowItWorksSection />

      {/* Room by Room Detailed Checklist */}
      <ChecklistSection />

      {/* Verified Google Reviews & Rating Showcase */}
      <ReviewsSection />

      {/* Bangalore Location & Embedded Map */}
      <LocationSection />

      {/* Contact / Booking Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-surface-subtle to-mint/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquiryForm />
        </div>
      </section>
    </div>
  );
}
