import React from "react";
import Link from "next/link";
import { 
  Users, 
  Sparkles, 
  Clock, 
  HeartHandshake, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck 
} from "lucide-react";
import { WHY_CHOOSE_US } from "@/data/businessData";

const iconMap: Record<string, React.ElementType> = {
  Smile: Users,
  Sparkles: Sparkles,
  Clock: Clock,
  ShieldCheck: HeartHandshake,
};

export default function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="py-16 lg:py-24 bg-surface-subtle border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint text-primary-dark font-bold text-xs uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span>THE URBAN CLEANING DIFFERENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal tracking-tight mb-4">
            Why Choose Urban Cleaning?
          </h2>
          <p className="text-base text-charcoal-muted leading-relaxed">
            We bring thoughtful domestic care, 24-hour convenience, and meticulous attention to Bangalore households who refuse to settle for superficial cleaning.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-surface-border hover:border-primary/40 shadow-card hover:shadow-premium-hover transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1.5"
              >
                <div>
                  {/* Top Icon Badge & Step Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-mint text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                      <Icon className="w-6 h-6 transition-colors" />
                    </div>
                    <span className="text-xs font-bold text-gray-300 group-hover:text-primary transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-charcoal mb-2.5 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    {item.details}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Learn More Row */}
        <div className="mt-12 text-center">
          <Link
            href="/why-choose-us"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-dark transition-colors group"
          >
            <span>Read more about our standards &amp; women-led commitment</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
