import React from "react";
import { Check, Sparkles, ShieldCheck } from "lucide-react";
import { BANGALORE_CLEANING_CHECKLIST } from "@/data/businessData";

export default function ChecklistSection() {
  return (
    <section className="py-16 lg:py-20 bg-surface-subtle border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint text-primary-dark font-bold text-xs uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span>HYGIENE &amp; QUALITY STANDARDS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight mb-4">
            Our Detailed Cleaning Checklist
          </h2>
          <p className="text-base text-charcoal-muted leading-relaxed">
            We leave no corner untouched. Here is a breakdown of what our thorough deep cleaning covers in each zone of your home.
          </p>
        </div>

        {/* 4 Quadrants Checklist */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BANGALORE_CLEANING_CHECKLIST.map((zone) => (
            <div
              key={zone.category}
              className="bg-white rounded-3xl p-6 border border-surface-border shadow-card flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 pb-4 mb-4 border-b border-gray-100">
                  <div className="w-8 h-8 rounded-lg bg-mint text-primary flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="font-bold text-charcoal text-base">
                    {zone.category}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {zone.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-charcoal-muted leading-relaxed">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-3 border-t border-gray-100 text-[11px] font-semibold text-primary">
                Included in Full Deep Cleaning
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
