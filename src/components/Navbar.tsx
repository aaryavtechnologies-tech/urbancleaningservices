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
  CalendarCheck
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

  // Close mobile menu on route change
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
      <div className="bg-[#054D37] text-white text-xs py-2 px-4 border-b border-primary-dark/40 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 font-medium text-mint">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Open 24 Hours
            </span>
            <span className="flex items-center gap-1.5 text-gray-200">
              <MapPin className="w-3.5 h-3.5 text-accent" />
              Bellandur, Bengaluru (Near Mantri Espana)
            </span>
            <span className="flex items-center gap-1.5 text-gray-200">
              <HeartHandshake className="w-3.5 h-3.5 text-pink-300" />
              Women-Owned Business
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Urban+full+home+deep+cleaning+services+Kariyammana+Agrahara+Bellandur+Bengaluru"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-accent transition-colors text-xs font-medium"
            >
              <div className="flex text-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-accent" />
                ))}
              </div>
              <span className="underline decoration-accent/60">5.0 (6 Google Reviews)</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "glass-nav shadow-premium border-b border-gray-100 py-3"
            : "bg-white/95 backdrop-blur-md border-b border-gray-100 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center gap-3 focus:outline-none"
            >
              <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shadow-md group-hover:bg-primary-hover transition-colors">
                <Sparkles className="w-5 h-5 text-accent animate-pulse-slow" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-charcoal leading-none">
                  URBAN <span className="text-primary">CLEANING</span>
                </span>
                <span className="text-xs font-medium text-charcoal-light tracking-wide mt-1">
                  {BUSINESS_INFO.tagline}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
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
                        className={`px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-1 transition-colors ${
                          isActive || pathname.startsWith("/services")
                            ? "text-primary bg-primary-light font-semibold"
                            : "text-charcoal hover:text-primary hover:bg-gray-50"
                        }`}
                      >
                        {link.name}
                        <ChevronDown className="w-4 h-4 opacity-70" />
                      </Link>

                      {/* Dropdown Menu */}
                      {servicesDropdownOpen && (
                        <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 px-2 mt-1 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                          <div className="px-3 py-1.5 text-xs font-semibold text-charcoal-light uppercase tracking-wider">
                            Cleaning Services
                          </div>
                          {SERVICES.map((service) => (
                            <Link
                              key={service.slug}
                              href={`/services/${service.slug}`}
                              className="flex flex-col p-2.5 rounded-xl hover:bg-primary-light/60 transition-colors group"
                            >
                              <span className="text-sm font-semibold text-charcoal group-hover:text-primary">
                                {service.name}
                              </span>
                              <span className="text-xs text-charcoal-light line-clamp-1">
                                {service.shortDescription}
                              </span>
                            </Link>
                          ))}
                          <div className="pt-2 mt-2 border-t border-gray-100 px-3">
                            <Link
                              href="/services"
                              className="text-xs font-bold text-primary hover:text-primary-dark flex items-center justify-between"
                            >
                              <span>View All 6 Services</span>
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
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "text-primary bg-primary-light font-semibold"
                        : "text-charcoal hover:text-primary hover:bg-gray-50"
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
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <CalendarCheck className="w-4 h-4 text-accent" />
                Book a Cleaning
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <Link
                href="/contact"
                className="inline-flex sm:hidden items-center gap-1 bg-primary text-white text-xs font-semibold px-3 py-1.5 rounded-lg"
              >
                Book
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-charcoal hover:text-primary hover:bg-gray-100 focus:outline-none transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 shadow-xl animate-in fade-in duration-200">
            <div className="space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                if (link.hasDropdown) {
                  return (
                    <div key={link.name} className="py-1">
                      <div className="flex items-center justify-between px-3 py-2 font-medium text-charcoal">
                        <Link
                          href={link.href}
                          className="text-base font-semibold text-primary"
                        >
                          {link.name}
                        </Link>
                      </div>
                      <div className="pl-4 space-y-1 mt-1 border-l-2 border-mint ml-3">
                        {SERVICES.map((s) => (
                          <Link
                            key={s.slug}
                            href={`/services/${s.slug}`}
                            className="block px-3 py-1.5 text-sm text-charcoal-muted hover:text-primary"
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
                    className={`block px-3 py-2.5 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? "text-primary bg-primary-light font-bold"
                        : "text-charcoal hover:text-primary hover:bg-gray-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Highlights & CTA */}
            <div className="mt-6 pt-5 border-t border-gray-100 space-y-3">
              <div className="flex flex-col gap-2 text-xs text-charcoal-muted px-2">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>Open 24 Hours • Ready for Immediate Booking</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Kariyammana Agrahara Rd, Near Mantri Espana, Bellandur</span>
                </div>
                <div className="flex items-center gap-2">
                  <HeartHandshake className="w-4 h-4 text-pink-600" />
                  <span>Proudly Women-Owned Business</span>
                </div>
              </div>

              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white font-semibold py-3 px-4 rounded-xl shadow-md text-sm transition-colors mt-3"
              >
                <CalendarCheck className="w-4 h-4 text-accent" />
                Book a Cleaning
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
