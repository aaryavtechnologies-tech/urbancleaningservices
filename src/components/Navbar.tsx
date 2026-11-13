"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  Sparkles, 
  ChevronDown, 
  Clock, 
  MapPin, 
  Star, 
  HeartHandshake,
  CalendarCheck,
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import { BUSINESS_INFO, SERVICES } from "@/data/businessData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { 
      name: "Services", 
      href: "/services", 
      hasDropdown: true 
    },
    { name: "Why Choose Us", href: "/why-choose-us" },
    { name: "Reviews", href: "/reviews" },
    { name: "Location", href: "/service-areas" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Notification / Trust Bar */}
      <div className="bg-[#05382B] text-white text-xs py-2 px-4 border-b border-primary/20 backdrop-blur-md hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 font-semibold text-mint bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-glow-dot" />
              Open 24 Hours • Ready for Immediate Booking
            </span>
            <span className="flex items-center gap-1.5 text-gray-200">
              <MapPin className="w-3.5 h-3.5 text-accent" />
              Kariyammana Agrahara Rd, Near Mantri Espana, Bellandur
            </span>
            <span className="flex items-center gap-1.5 text-pink-200 font-medium">
              <HeartHandshake className="w-3.5 h-3.5 text-pink-300" />
              Women-Owned Business
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Urban+full+home+deep+cleaning+services+Kariyammana+Agrahara+Bellandur+Bengaluru"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-accent transition-colors text-xs font-semibold group"
            >
              <div className="flex text-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-accent" />
                ))}
              </div>
              <span className="underline decoration-accent/60 group-hover:decoration-accent">
                5.0 (6 Google Reviews)
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "glass-nav shadow-premium border-b border-gray-200/80 py-3"
            : "bg-white/95 backdrop-blur-md border-b border-gray-100 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center gap-3 focus:outline-none"
            >
              <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-white flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                <Sparkles className="w-5 h-5 text-accent animate-pulse-slow" />
                <div className="absolute inset-0 rounded-2xl border border-white/25 pointer-events-none" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-charcoal leading-none">
                  URBAN <span className="text-primary font-black">CLEANING</span>
                </span>
                <span className="text-[11px] font-semibold text-charcoal-light tracking-wide mt-1">
                  {BUSINESS_INFO.tagline}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 bg-surface-subtle/80 p-1.5 rounded-2xl border border-gray-200/60 shadow-sm">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                      <Link
                        href={link.href}
                        className={`px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all ${
                          isActive || pathname.startsWith("/services")
                            ? "text-primary bg-white shadow-sm font-extrabold"
                            : "text-charcoal-muted hover:text-primary hover:bg-white/50"
                        }`}
                      >
                        {link.name}
                        <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                      </Link>

                      {/* Dropdown Menu */}
                      {servicesDropdownOpen && (
                        <div className="absolute top-full left-0 w-84 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100 py-3 px-2 mt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                          <div className="px-3 py-1.5 text-[11px] font-extrabold text-primary uppercase tracking-wider flex items-center justify-between">
                            <span>Deep Cleaning Specializations</span>
                            <span className="text-[10px] bg-mint text-primary-dark px-2 py-0.5 rounded-full font-bold">6 Services</span>
                          </div>
                          <div className="space-y-1 mt-1">
                            {SERVICES.map((service) => (
                              <Link
                                key={service.slug}
                                href={`/services/${service.slug}`}
                                className="flex flex-col p-2.5 rounded-xl hover:bg-primary-light/70 transition-colors group"
                              >
                                <span className="text-xs font-bold text-charcoal group-hover:text-primary flex items-center justify-between">
                                  <span>{service.name}</span>
                                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                                </span>
                                <span className="text-[11px] text-charcoal-light line-clamp-1 mt-0.5">
                                  {service.shortDescription}
                                </span>
                              </Link>
                            ))}
                          </div>
                          <div className="pt-2 mt-2 border-t border-gray-100 px-3">
                            <Link
                              href="/services"
                              className="text-xs font-bold text-primary hover:text-primary-dark flex items-center justify-between py-1"
                            >
                              <span>Explore All Services &amp; Checklist</span>
                              <span>→</span>
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                      isActive
                        ? "text-primary bg-white shadow-sm font-extrabold"
                        : "text-charcoal-muted hover:text-primary hover:bg-white/50"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Right Action Button */}
            <div className="hidden sm:flex items-center gap-3">
              <Link
                href="/contact"
                className="relative group inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-hover text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-xl shadow-md hover:shadow-premium-hover transition-all transform hover:-translate-y-0.5 overflow-hidden"
              >
                <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000" />
                <CalendarCheck className="w-4 h-4 text-accent" />
                <span>Book a Cleaning</span>
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <Link
                href="/contact"
                className="inline-flex sm:hidden items-center gap-1.5 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm"
              >
                <CalendarCheck className="w-3.5 h-3.5 text-accent" />
                <span>Book</span>
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-surface-subtle text-charcoal hover:text-primary hover:bg-gray-100 focus:outline-none transition-colors border border-gray-200"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-gray-200 px-4 pt-3 pb-6 shadow-2xl animate-in fade-in duration-200">
            <div className="space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                if (link.hasDropdown) {
                  return (
                    <div key={link.name} className="py-1">
                      <div className="flex items-center justify-between px-3 py-2 font-bold text-charcoal">
                        <Link
                          href={link.href}
                          className="text-sm font-extrabold text-primary uppercase tracking-wider"
                        >
                          {link.name}
                        </Link>
                      </div>
                      <div className="pl-4 space-y-1 mt-1 border-l-2 border-mint ml-3">
                        {SERVICES.map((s) => (
                          <Link
                            key={s.slug}
                            href={`/services/${s.slug}`}
                            className="block px-3 py-1.5 text-xs text-charcoal hover:text-primary font-medium"
                          >
                            {s.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`block px-3 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors ${
                      isActive
                        ? "text-primary bg-primary-light font-extrabold"
                        : "text-charcoal hover:text-primary hover:bg-gray-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Highlights & CTA */}
            <div className="mt-5 pt-5 border-t border-gray-100 space-y-3">
              <div className="flex flex-col gap-2 text-xs text-charcoal-muted px-2">
                <div className="flex items-center gap-2 font-medium">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>Open 24 Hours • Prompt Bangalore Dispatch</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Kariyammana Agrahara Rd, Near Mantri Espana</span>
                </div>
                <div className="flex items-center gap-2">
                  <HeartHandshake className="w-4 h-4 text-pink-600" />
                  <span>Women-Owned &amp; Operated</span>
                </div>
              </div>

              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold py-3 px-4 rounded-xl shadow-md text-xs uppercase tracking-wider transition-colors mt-3"
              >
                <CalendarCheck className="w-4 h-4 text-accent" />
                <span>Book a Cleaning Now</span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
