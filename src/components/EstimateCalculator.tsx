"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Calculator, 
  Clock, 
  Home, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck
} from "lucide-react";

export default function EstimateCalculator() {
  const [homeType, setHomeType] = useState("2bhk");
  const [serviceType, setServiceType] = useState("full-home");
  const [addons, setAddons] = useState<string[]>(["balcony"]);

  const toggleAddon = (id: string) => {
    setAddons((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  const calculateEstimate = () => {
    let baseHours = 4;
    let label = "2 BHK Apartment";

    if (homeType === "1bhk") {
      baseHours = 3.5;
      label = "1 BHK Apartment";
    } else if (homeType === "2bhk") {
      baseHours = 5;
      label = "2 BHK Apartment";
    } else if (homeType === "3bhk") {
      baseHours = 6.5;
      label = "3 BHK Apartment";
    } else if (homeType === "4bhk") {
      baseHours = 8;
      label = "4+ BHK / Villa";
    }

    if (serviceType === "kitchen") {
      baseHours = Math.max(2, baseHours * 0.45);
    } else if (serviceType === "bathroom") {
      baseHours = Math.max(2, baseHours * 0.4);
    } else if (serviceType === "move-in") {
      baseHours = baseHours * 1.25;
    }

    // Add extra time for selected addons
    const totalHours = Math.round((baseHours + addons.length * 0.5) * 10) / 10;

    return {
      label,
      hours: `${totalHours - 0.5} to ${totalHours + 1} Hours`,
      focusSummary: `Comprehensive treatment tailored to ${label}`,
    };
  };

  const estimate = calculateEstimate();

  return (
    <section className="py-16 bg-white border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint text-primary-dark font-bold text-xs uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5 text-primary" />
            <span>INTERACTIVE CLEANING SCOPE ESTIMATOR</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-charcoal tracking-tight mb-3">
            Plan Your Cleaning Scope
          </h2>
          <p className="text-sm sm:text-base text-charcoal-muted">
            Configure your home size and requirements to see estimated cleaning duration and scope recommendations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-surface-subtle p-6 sm:p-10 rounded-3xl border border-surface-border shadow-premium">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Left Controls */}
            <div className="md:col-span-7 space-y-6">
              {/* Home Size Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2.5">
                  1. Select Your Home Size
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: "1bhk", label: "1 BHK" },
                    { id: "2bhk", label: "2 BHK" },
                    { id: "3bhk", label: "3 BHK" },
                    { id: "4bhk", label: "4+ BHK / Villa" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setHomeType(item.id)}
                      className={`py-3 px-2 rounded-xl text-xs font-bold border transition-all text-center ${
                        homeType === item.id
                          ? "bg-primary text-white border-primary shadow-sm"
                          : "bg-white text-charcoal border-gray-200 hover:border-primary/40"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Service Focus */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2.5">
                  2. Select Primary Cleaning Scope
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: "full-home", label: "Full Home Deep Clean" },
                    { id: "kitchen", label: "Kitchen Deep Clean" },
                    { id: "bathroom", label: "Bathrooms Only" },
                    { id: "move-in", label: "Move-In / Move-Out" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setServiceType(item.id)}
                      className={`py-3 px-3 rounded-xl text-xs font-bold border transition-all text-left flex items-center justify-between ${
                        serviceType === item.id
                          ? "bg-primary text-white border-primary shadow-sm"
                          : "bg-white text-charcoal border-gray-200 hover:border-primary/40"
                      }`}
                    >
                      <span>{item.label}</span>
                      {serviceType === item.id && (
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add-on Priorities */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2.5">
                  3. Key Bangalore Focus Areas (Optional)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    { id: "balcony", label: "Balcony & Grills Dusting" },
                    { id: "hardwater", label: "Hard Water Stain Treatment" },
                    { id: "chimney", label: "Exhaust & Chimney Degreasing" },
                    { id: "mattress", label: "Mattress Vacuuming" },
                  ].map((addon) => {
                    const isSelected = addons.includes(addon.id);
                    return (
                      <button
                        key={addon.id}
                        type="button"
                        onClick={() => toggleAddon(addon.id)}
                        className={`p-2.5 rounded-xl text-xs font-medium border text-left flex items-center justify-between transition-colors ${
                          isSelected
                            ? "bg-mint border-primary text-primary-dark font-semibold"
                            : "bg-white border-gray-200 text-charcoal hover:border-gray-300"
                        }`}
                      >
                        <span>{addon.label}</span>
                        <span
                          className={`w-4 h-4 rounded-md border flex items-center justify-center text-[10px] ${
                            isSelected
                              ? "bg-primary text-white border-primary"
                              : "border-gray-300"
                          }`}
                        >
                          {isSelected ? "✓" : ""}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Summary Card */}
            <div className="md:col-span-5 bg-white p-6 sm:p-7 rounded-2xl border border-surface-border shadow-sm flex flex-col justify-between h-full space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-1">
                  Scope Overview
                </span>
                <h3 className="text-xl font-extrabold text-charcoal">
                  {estimate.label}
                </h3>
                <p className="text-xs text-charcoal-muted mt-1">
                  {estimate.focusSummary}
                </p>

                <div className="mt-5 p-4 rounded-xl bg-surface-subtle border border-gray-100 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-charcoal-muted flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-primary" />
                      Estimated Duration:
                    </span>
                    <span className="font-bold text-primary text-sm">
                      {estimate.hours}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-charcoal-muted flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      Service Type:
                    </span>
                    <span className="font-semibold text-charcoal capitalize">
                      {serviceType.replace("-", " ")}
                    </span>
                  </div>

                  <div className="text-xs pt-2 border-t border-gray-200">
                    <span className="text-charcoal-muted block mb-1">
                      Priority Add-ons:
                    </span>
                    <span className="font-medium text-charcoal">
                      {addons.length > 0
                        ? `${addons.length} special focus area(s) selected`
                        : "Standard thorough checklist"}
                    </span>
                  </div>
                </div>

                <p className="text-[11px] text-charcoal-light mt-3 leading-tight">
                  Transparent quotation based on your exact layout. We never quote fabricated flat rates without understanding your specific requirements.
                </p>
              </div>

              <Link
                href={`/contact?homeSize=${encodeURIComponent(
                  estimate.label
                )}&service=${encodeURIComponent(
                  serviceType === "full-home"
                    ? "Full Home Deep Cleaning"
                    : serviceType === "kitchen"
                    ? "Kitchen Deep Cleaning"
                    : serviceType === "bathroom"
                    ? "Bathroom Deep Cleaning"
                    : "Move-In / Move-Out Cleaning"
                )}`}
                className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold text-sm py-3 px-4 rounded-xl shadow-md transition-all group"
              >
                <span>Get a Quote for this Setup</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
