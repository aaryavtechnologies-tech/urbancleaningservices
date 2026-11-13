import React from "react";
import Link from "next/link";
import { 
  Sparkles, 
  MapPin, 
  Clock, 
  Navigation, 
  ShieldCheck, 
  HeartHandshake, 
  ExternalLink,
  Star,
  CheckCircle2
} from "lucide-react";
import { BUSINESS_INFO, SERVICES } from "@/data/businessData";

export default function Footer() {
  return (
    <footer className="bg-[#05382B] text-white pt-16 pb-12 border-t-4 border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-12 border-b border-white/10 mb-12">
          <div className="flex items-start gap-3 bg-white/5 p-4 rounded-2xl border border-white/10">
            <div className="p-2.5 rounded-xl bg-primary text-white shrink-0">
              <Clock className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h4 className="font-semibold text-sm text-white">Open 24 Hours</h4>
              <p className="text-xs text-gray-300 mt-0.5">Round-the-clock service for Bangalore homes</p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white/5 p-4 rounded-2xl border border-white/10">
            <div className="p-2.5 rounded-xl bg-pink-700 text-white shrink-0">
              <HeartHandshake className="w-5 h-5 text-pink-200" />
            </div>
            <div>
              <h4 className="font-semibold text-sm text-white">Women-Owned</h4>
              <p className="text-xs text-gray-300 mt-0.5">Meticulous hygiene & trustworthy care</p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white/5 p-4 rounded-2xl border border-white/10">
            <div className="p-2.5 rounded-xl bg-amber-600 text-white shrink-0">
              <Star className="w-5 h-5 text-accent fill-accent" />
            </div>
            <div>
              <h4 className="font-semibold text-sm text-white">5.0 Google Rating</h4>
              <p className="text-xs text-gray-300 mt-0.5">Based on 6 verified customer reviews</p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white/5 p-4 rounded-2xl border border-white/10">
            <div className="p-2.5 rounded-xl bg-primary text-white shrink-0">
              <MapPin className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h4 className="font-semibold text-sm text-white">Bellandur Based</h4>
              <p className="text-xs text-gray-300 mt-0.5">Near Mantri Espana, serving all Bangalore</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shadow-lg">
                <Sparkles className="w-5 h-5 text-accent" />
              </div>
              <div>
                <span className="text-lg font-extrabold tracking-tight text-white block leading-tight">
                  URBAN FULL HOME DEEP CLEANING SERVICES
                </span>
                <span className="text-xs text-accent font-medium">
                  {BUSINESS_INFO.tagline}
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed">
              Making Bangalore Homes Cleaner, Fresher &amp; Happier. We deliver
              reliable, comprehensive, and detail-oriented home deep cleaning
              across Bellandur and Bangalore residences.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 bg-emerald-950/80 border border-emerald-500/30 rounded-xl px-3.5 py-2 text-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                <span className="font-medium text-emerald-200">
                  Currently Open &amp; Accepting Bangalore Enquiries 24/7
                </span>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-accent mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-white hover:underline transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white hover:underline transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white hover:underline transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/why-choose-us" className="hover:text-white hover:underline transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-white hover:underline transition-colors">
                  Customer Reviews
                </Link>
              </li>
              <li>
                <Link href="/service-areas" className="hover:text-white hover:underline transition-colors">
                  Service Areas
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white hover:underline transition-colors">
                  Book a Cleaning
                </Link>
              </li>
            </ul>
          </div>

          {/* Cleaning Services */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-accent mb-4">
              Cleaning Services
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="hover:text-white hover:underline transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-mint/50" />
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Address & Google Directions */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-accent mb-4">
              Our Location &amp; Hours
            </h4>

            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="leading-snug">
                  {BUSINESS_INFO.address.full}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-accent shrink-0" />
                <span className="font-semibold text-white">
                  Operating Hours: Open 24 Hours
                </span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={BUSINESS_INFO.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all shadow-md group"
              >
                <Navigation className="w-4 h-4 text-accent group-hover:rotate-45 transition-transform" />
                Get Google Maps Directions
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Mandatory Developer Credit */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            © 2026 Urban Full Home Deep Cleaning Services. All Rights Reserved.
          </div>

          {/* MANDATORY Developer Credit */}
          <div className="font-medium text-gray-300 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
            Designed &amp; Developed by{" "}
            <a
              href="https://aaryavtech.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-white underline font-semibold transition-colors inline-flex items-center gap-1"
            >
              Aaryav Technologies
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

