import React from "react";
import Link from "next/link";
import { Sparkles, Home, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white px-4">
      <div className="max-w-md w-full text-center py-16">
        <div className="w-16 h-16 bg-mint text-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
          <Sparkles className="w-8 h-8 text-primary" />
        </div>
        <h1 className="text-5xl font-extrabold text-charcoal mb-2 font-mono">404</h1>
        <h2 className="text-xl font-bold text-charcoal mb-3">Page Not Found</h2>
        <p className="text-sm text-charcoal-muted mb-8 leading-relaxed">
          The page you are looking for does not exist or has been moved. Explore our deep cleaning services or return to the homepage.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all shadow-md"
          >
            <Home className="w-4 h-4 text-accent" />
            <span>Return Home</span>
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 bg-surface-subtle hover:bg-gray-100 text-charcoal text-sm font-semibold px-6 py-3 rounded-xl border border-gray-200 transition-all"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-4 h-4 text-primary" />
          </Link>
        </div>
      </div>
    </div>
  );
}
