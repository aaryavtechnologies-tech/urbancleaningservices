"use client";

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { 
  Send, 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  Home, 
  Sparkles, 
  Clock, 
  AlertCircle,
  Copy,
  Printer,
  ChevronRight,
  ShieldCheck
} from "lucide-react";
import { SERVICES, SERVICE_AREAS, BUSINESS_INFO } from "@/data/businessData";

interface EnquiryFormProps {
  defaultService?: string;
  defaultHomeSize?: string;
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function EnquiryForm({
  defaultService,
  defaultHomeSize,
  title = "Ready for a Cleaner Home?",
  subtitle = "Tell us what your home needs. Get in touch with us to discuss your cleaning requirements.",
  className = "",
}: EnquiryFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    serviceRequired: defaultService || SERVICES[0].name,
    homeSize: defaultHomeSize || "2 BHK Apartment",
    preferredDate: "",
    locationArea: "Bellandur (Near Mantri Espana)",
    additionalRequirements: "",
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<any>(null);
  const [copied, setCopied] = useState(false);

  // Set minimum date to today (YYYY-MM-DD)
  const todayStr = new Date().toISOString().split("T")[0];

  useEffect(() => {
    if (defaultService) {
      setFormData((prev) => ({ ...prev, serviceRequired: defaultService }));
    }
  }, [defaultService]);

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errs.fullName = "Please enter your full name (minimum 2 characters)";
    }

    const cleanMobile = formData.mobileNumber.replace(/\D/g, "");
    if (!cleanMobile) {
      errs.mobileNumber = "Mobile number is required";
    } else if (cleanMobile.length !== 10) {
      errs.mobileNumber = "Please enter a valid 10-digit Indian mobile number (e.g. 9876543210)";
    }

    if (!formData.serviceRequired) {
      errs.serviceRequired = "Please select a cleaning service";
    }

    if (!formData.locationArea.trim()) {
      errs.locationArea = "Please specify your area in Bangalore";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    validate();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#087F5B", "#DDF7EA", "#F5C95D", "#065A40"],
      });
    } catch (e) {
      // safe fallback if canvas is unavailable
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setTouched({
      fullName: true,
      mobileNumber: true,
      serviceRequired: true,
      locationArea: true,
    });

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmissionSuccess(data);
        triggerConfetti();

        // Store enquiry in localStorage for client record
        try {
          const existing = JSON.parse(
            localStorage.getItem("urban_cleaning_enquiries") || "[]"
          );
          existing.unshift(data.enquiry);
          localStorage.setItem(
            "urban_cleaning_enquiries",
            JSON.stringify(existing.slice(0, 10))
          );
        } catch (storageErr) {
          console.warn("Could not save enquiry to localStorage", storageErr);
        }
      } else {
        setErrors({
          form: data.message || "Something went wrong. Please check your inputs.",
        });
      }
    } catch (err) {
      setErrors({
        form: "Unable to submit enquiry right now. Please check your connection.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyBookingId = () => {
    if (submissionSuccess?.bookingId) {
      navigator.clipboard.writeText(submissionSuccess.bookingId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const resetForm = () => {
    setSubmissionSuccess(null);
    setFormData({
      fullName: "",
      mobileNumber: "",
      serviceRequired: defaultService || SERVICES[0].name,
      homeSize: "2 BHK Apartment",
      preferredDate: "",
      locationArea: "Bellandur (Near Mantri Espana)",
      additionalRequirements: "",
    });
    setTouched({});
    setErrors({});
  };

  return (
    <div id="booking" className={`w-full ${className}`}>
      {submissionSuccess ? (
        <div className="bg-white rounded-[32px] p-8 sm:p-12 shadow-premium-hover border-2 border-mint animate-in fade-in zoom-in-95 duration-300">
          <div className="text-center max-w-lg mx-auto">
            <div className="w-20 h-20 bg-gradient-to-tr from-mint to-emerald-100 text-primary rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-md border border-mint-border">
              <CheckCircle2 className="w-12 h-12 text-primary" />
            </div>

            <span className="inline-block px-4 py-1.5 bg-mint text-primary-dark font-extrabold text-xs rounded-full uppercase tracking-wider mb-3">
              Enquiry Logged Successfully
            </span>

            <h3 className="text-2xl sm:text-3xl font-black text-charcoal mb-2">
              Thank You, {submissionSuccess.enquiry.fullName}!
            </h3>

            <p className="text-sm text-charcoal-muted mb-8 leading-relaxed">
              Your cleaning enquiry has been registered. Our team coordinator will review your requirements and provide your transparent quote.
            </p>

            {/* Reference Card */}
            <div className="bg-surface-subtle border border-gray-200/80 rounded-2xl p-6 mb-6 text-left space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                <span className="text-xs font-bold text-charcoal-muted uppercase tracking-wider">
                  Booking Reference ID
                </span>
                <div className="flex items-center gap-2">
                  <span className="font-mono font-black text-primary text-lg">
                    {submissionSuccess.bookingId}
                  </span>
                  <button
                    onClick={copyBookingId}
                    type="button"
                    className="p-1.5 rounded-lg bg-white border border-gray-200 text-gray-600 hover:text-primary transition-colors"
                    title="Copy Reference ID"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                  {copied && (
                    <span className="text-xs text-emerald-600 font-bold">
                      Copied!
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-charcoal-muted block font-medium">Service</span>
                  <span className="font-bold text-charcoal">
                    {submissionSuccess.enquiry.serviceRequired}
                  </span>
                </div>
                <div>
                  <span className="text-charcoal-muted block font-medium">Home Size</span>
                  <span className="font-bold text-charcoal">
                    {submissionSuccess.enquiry.homeSize}
                  </span>
                </div>
                <div>
                  <span className="text-charcoal-muted block font-medium">Location</span>
                  <span className="font-bold text-charcoal">
                    {submissionSuccess.enquiry.locationArea}
                  </span>
                </div>
                <div>
                  <span className="text-charcoal-muted block font-medium">Preferred Date</span>
                  <span className="font-bold text-charcoal">
                    {submissionSuccess.enquiry.preferredDate || "Earliest available"}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-4 text-xs text-charcoal mb-8 text-left flex items-start gap-3">
              <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <span className="font-black text-primary block mb-0.5">
                  24/7 Response Assurance:
                </span>
                We are open 24 hours. Because you are based in or around Bangalore, our team reviews details promptly to discuss customized scope and confirm timing.
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={resetForm}
                className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider border border-gray-300 hover:bg-gray-50 text-charcoal transition-colors"
              >
                Submit Another Enquiry
              </button>
              <a
                href={BUSINESS_INFO.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-primary hover:bg-primary-hover text-white transition-all shadow-md flex items-center justify-center gap-2"
              >
                <MapPin className="w-4 h-4 text-accent" />
                <span>View Bangalore Location</span>
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-[32px] p-6 sm:p-10 lg:p-12 shadow-premium-hover border border-gray-200/90 relative overflow-hidden">
          <div className="mb-8">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-mint text-primary-dark font-extrabold text-xs rounded-full uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              Direct Quote Request
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-charcoal tracking-tight">
              {title}
            </h3>
            <p className="text-sm text-charcoal-muted mt-2 leading-relaxed">
              {subtitle}
            </p>
          </div>

          {errors.form && (
            <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-start gap-2.5">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <span>{errors.form}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Full Name */}
              <div>
                <span className="block text-[11px] font-bold text-charcoal-light uppercase tracking-wider mb-1">
                  Format: First &amp; Last Name
                </span>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-charcoal mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  onBlur={() => handleBlur("fullName")}
                  placeholder="e.g. Priya Sharma"
                  className={`w-full px-4 py-3.5 rounded-2xl border text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all ${
                    touched.fullName && errors.fullName 
                      ? "border-red-400 bg-red-50/30" 
                      : "border-gray-200 bg-surface-subtle focus:bg-white"
                  }`}
                />
                {touched.fullName && errors.fullName && (
                  <p className="text-xs text-red-500 mt-1.5 font-medium flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Mobile Number */}
              <div>
                <span className="block text-[11px] font-bold text-charcoal-light uppercase tracking-wider mb-1">
                  Format: 10-digit Indian Mobile
                </span>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-charcoal mb-2">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold text-gray-500">
                    +91
                  </span>
                  <input
                    type="tel"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    onBlur={() => handleBlur("mobileNumber")}
                    maxLength={10}
                    placeholder="9876543210"
                    className={`w-full pl-14 pr-4 py-3.5 rounded-2xl border text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all ${
                      touched.mobileNumber && errors.mobileNumber 
                        ? "border-red-400 bg-red-50/30" 
                        : "border-gray-200 bg-surface-subtle focus:bg-white"
                    }`}
                  />
                </div>
                {touched.mobileNumber && errors.mobileNumber && (
                  <p className="text-xs text-red-500 mt-1.5 font-medium flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.mobileNumber}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Service Required */}
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-charcoal mb-2">
                  Service Required <span className="text-red-500">*</span>
                </label>
                <select
                  name="serviceRequired"
                  value={formData.serviceRequired}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 bg-surface-subtle text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Home Size (Optional) */}
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-charcoal mb-2">
                  Home Size <span className="text-gray-400 font-normal">(Optional)</span>
                </label>
                <select
                  name="homeSize"
                  value={formData.homeSize}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 bg-surface-subtle text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                >
                  <option value="1 BHK Apartment">1 BHK Apartment</option>
                  <option value="2 BHK Apartment">2 BHK Apartment</option>
                  <option value="3 BHK Apartment">3 BHK Apartment</option>
                  <option value="4+ BHK / Villa">4+ BHK / Independent Villa</option>
                  <option value="Duplex / Row House">Duplex / Row House</option>
                  <option value="Studio Apartment">Studio Apartment</option>
                  <option value="Single Room / Kitchen Only">Single Room / Kitchen Only</option>
                  <option value="Commercial / Office Space">Commercial / Office Space</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Preferred Date */}
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-charcoal mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="preferredDate"
                  min={todayStr}
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 bg-surface-subtle text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>

              {/* Location / Area */}
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-charcoal mb-2">
                  Location / Area in Bangalore <span className="text-red-500">*</span>
                </label>
                <select
                  name="locationArea"
                  value={formData.locationArea}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 bg-surface-subtle text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                >
                  <option value="Bellandur (Near Mantri Espana)">
                    Bellandur (Near Mantri Espana)
                  </option>
                  {SERVICE_AREAS.map((a) => (
                    <option key={a.name} value={`${a.name} (${a.landmark})`}>
                      {a.name} - {a.landmark}
                    </option>
                  ))}
                  <option value="Other Area in Bangalore">Other Area in Bangalore</option>
                </select>
              </div>
            </div>

            {/* Additional Requirements */}
            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-charcoal mb-2">
                Additional Requirements / Specific Areas to Focus
              </label>
              <textarea
                name="additionalRequirements"
                rows={3}
                value={formData.additionalRequirements}
                onChange={handleChange}
                placeholder="e.g. Heavy dust on balcony grills, hard water marks in master bathroom, kitchen chimney grease..."
                className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 bg-surface-subtle text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>

            {/* Privacy note */}
            <p className="text-xs text-charcoal-light flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>We respect your privacy. Your details are used strictly to coordinate your cleaning quotation.</span>
            </p>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-primary to-primary-hover hover:from-primary-dark hover:to-primary disabled:opacity-75 text-white font-extrabold text-sm sm:text-base py-4 px-8 rounded-2xl shadow-lg hover:shadow-premium-hover transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Submitting Your Enquiry...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
                  <span>Submit Enquiry</span>
                </>
              )}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
