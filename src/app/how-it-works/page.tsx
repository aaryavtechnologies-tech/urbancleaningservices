import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { 
  FileText, 
  MessageSquare, 
  Calculator, 
  Sparkles, 
  CheckCircle2, 
  HelpCircle,
  Clock,
  ShieldCheck,
  CalendarCheck
} from "lucide-react";
import { HOW_IT_WORKS } from "@/data/businessData";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "How It Works | Urban Full Home Deep Cleaning Services Bangalore",
  description:
    "Learn how our 4-step deep cleaning process works: Send enquiry, discuss requirements, receive your transparent quote, and enjoy a sparkling home in Bangalore.",
};

const iconMap: Record<string, React.ElementType> = {
  FileText,
  MessageSquare,
  Calculator,
  Sparkle: Sparkles,
};

export default function HowItWorksPage() {
  const faqs = [
    {
      q: "How long does a full home deep cleaning usually take?",
      a: "Depending on your apartment size and current condition, a 2 BHK typically takes between 4 to 6 hours, while a 3 BHK or large villa may take 6 to 8 hours for comprehensive corner-to-corner detailing.",
    },
    {
      q: "Do you operate on weekends and early mornings?",
      a: "Yes! We are open 24 hours daily. We accommodate weekend slots, early morning start times before packers arrive, and evening hours as needed.",
    },
    {
      q: "How is my quotation calculated?",
      a: "We do not believe in misleading flat prices. We evaluate your home size (1 BHK, 2 BHK, 3 BHK, Villa), specific focus areas (kitchen degreasing, bathroom descaling, balcony), and location in Bangalore to provide a clear and fair quotation.",
    },
    {
      q: "What should I do before the cleaning team arrives?",
      a: "We recommend storing personal documents, cash, jewelry, and delicate valuables in locked drawers, and pointing out any delicate or sensitive surfaces to our team upon arrival.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-primary/10 via-surface-subtle to-white py-14 lg:py-20 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint text-primary-dark font-bold text-xs uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>SEAMLESS 4-STEP PROCESS</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-charcoal tracking-tight mb-4">
            How It Works
          </h1>
          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed">
            Booking professional deep cleaning in Bangalore is straightforward and stress-free. Here is our simple 4-step journey.
          </p>
        </div>
      </section>

      {/* 4 Steps In-depth Walkthrough */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {HOW_IT_WORKS.map((step, idx) => {
              const Icon = iconMap[step.icon] || Sparkles;
              return (
                <div
                  key={step.step}
                  className="bg-surface-subtle p-8 rounded-3xl border border-surface-border flex flex-col justify-between shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="w-12 h-12 rounded-2xl bg-primary text-white font-extrabold text-base flex items-center justify-center shadow-md">
                        {step.step}
                      </span>
                      <div className="w-11 h-11 rounded-2xl bg-mint text-primary flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-charcoal mb-3">
                      {step.title}
                    </h3>

                    <p className="text-sm text-charcoal-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-200 text-xs font-semibold text-primary">
                    Stage {idx + 1} of 4
                  </div>
                </div>
              );
            })}
          </div>

          {/* Preparation Tips Box */}
          <div className="bg-primary-light/50 border border-primary/20 rounded-3xl p-8 sm:p-10 mb-20">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-2">
                Homeowner Checklist
              </span>
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                Helpful Tips Before Your Cleaning Appointment
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-charcoal">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>Secure delicate paperwork, money, and personal valuables.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>Ensure power and running water are active in the property.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>Highlight any sensitive marble, acrylic, or antique fittings.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>Keep pets in a quiet, comfortable room during cleaning.</span>
                </div>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-charcoal">
                Frequently Asked Questions
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-muted mt-2">
                Clear answers regarding our deep cleaning service in Bangalore.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-surface-subtle border border-surface-border space-y-2"
                >
                  <h4 className="font-bold text-charcoal text-base flex items-start gap-2.5">
                    <HelpCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{faq.q}</span>
                  </h4>
                  <p className="text-sm text-charcoal-muted pl-7 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Booking Form Integration */}
      <section className="py-16 bg-surface-subtle border-t border-surface-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquiryForm />
        </div>
      </section>
    </div>
  );
}

