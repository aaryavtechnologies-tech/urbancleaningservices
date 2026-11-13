import React from "react";
import Link from "next/link";
import { 
  FileText, 
  MessageSquare, 
  Calculator, 
  Sparkles, 
  ArrowRight,
  CalendarCheck
} from "lucide-react";
import { HOW_IT_WORKS } from "@/data/businessData";

const iconMap: Record<string, React.ElementType> = {
  FileText,
  MessageSquare,
  Calculator,
  Sparkle: Sparkles,
};

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-white border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint text-primary-dark font-bold text-xs uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>SIMPLE &amp; TRANSPARENT PROCESS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal tracking-tight mb-4">
            How It Works
          </h2>
          <p className="text-base text-charcoal-muted leading-relaxed">
            From your first message to a sparkling, refreshed home, getting your Bangalore residence deep cleaned is fast, clear, and convenient.
          </p>
        </div>

        {/* 4 Steps Grid with Visual Connector */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {HOW_IT_WORKS.map((step, idx) => {
            const Icon = iconMap[step.icon] || Sparkles;
            return (
              <div
                key={step.step}
                className="relative bg-surface-subtle p-7 rounded-3xl border border-surface-border hover:border-primary/40 hover:bg-white shadow-sm hover:shadow-premium transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Step Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="w-10 h-10 rounded-xl bg-primary text-white font-extrabold text-sm flex items-center justify-center shadow-md">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-mint text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-charcoal mb-2 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-xs text-primary font-semibold">
                  <span>Step {idx + 1} of 4</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold text-sm px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            <CalendarCheck className="w-4 h-4 text-accent" />
            <span>Start Step 1: Send Your Enquiry</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
