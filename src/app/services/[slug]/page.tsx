import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  ArrowLeft, 
  ArrowRight,
  HeartHandshake,
  MapPin,
  CalendarCheck
} from "lucide-react";
import { SERVICES, BUSINESS_INFO } from "@/data/businessData";
import EnquiryForm from "@/components/EnquiryForm";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.name} in Bangalore | Urban Cleaning`,
    description: `${service.shortDescription} Professional ${service.name.toLowerCase()} in Bellandur & Bangalore by Urban Full Home Deep Cleaning Services. Open 24 Hours.`,
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = SERVICES.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const otherServices = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <div className="bg-white">
      {/* Top Breadcrumb & Header Banner */}
      <section className="bg-gradient-to-b from-primary/10 via-surface-subtle to-white py-12 lg:py-16 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-dark uppercase tracking-wider"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to All Services</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint text-primary-dark font-bold text-xs uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span>BANGALORE DEEP CLEANING SPECIALTY</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-charcoal tracking-tight">
                {service.name}
              </h1>
              <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed max-w-2xl">
                {service.shortDescription}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2 text-xs">
                <span className="inline-flex items-center gap-1.5 bg-white border border-gray-200 px-3 py-1.5 rounded-xl font-medium text-charcoal">
                  <Clock className="w-4 h-4 text-primary" />
                  Est. Duration: {service.durationEstimate}
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white border border-gray-200 px-3 py-1.5 rounded-xl font-medium text-charcoal">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Corner-to-Corner Standard
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white border border-gray-200 px-3 py-1.5 rounded-xl font-medium text-charcoal">
                  <HeartHandshake className="w-4 h-4 text-pink-600" />
                  Women-Owned Care
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <a
                href="#service-booking"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold text-sm px-7 py-3.5 rounded-xl shadow-lg transition-all"
              >
                <CalendarCheck className="w-4 h-4 text-accent" />
                <span>Enquire for {service.name}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Details */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Full Details */}
            <div className="lg:col-span-7 space-y-10">
              {/* Service Photograph */}
              <div className="relative h-[340px] sm:h-[420px] rounded-3xl overflow-hidden shadow-premium border-4 border-white">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Full Description */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-charcoal">
                  About Our {service.name}
                </h2>
                <p className="text-charcoal-muted leading-relaxed text-base">
                  {service.fullDescription}
                </p>
              </div>

              {/* Inclusions / Checklist */}
              <div className="p-7 rounded-3xl bg-surface-subtle border border-surface-border space-y-4">
                <h3 className="text-lg font-bold text-charcoal">
                  What&apos;s Included in this Service
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-charcoal">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scope & Areas Covered */}
              <div className="p-7 rounded-3xl bg-white border border-surface-border shadow-sm space-y-4">
                <h3 className="text-lg font-bold text-charcoal">
                  Scope of Work Covered
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.scope.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-surface-subtle border border-gray-100 text-xs font-semibold text-charcoal flex items-center gap-2"
                    >
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ideal For */}
              <div className="p-6 rounded-2xl bg-mint/50 border border-mint-border text-charcoal space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-primary-dark">
                  Recommended For
                </span>
                <p className="text-sm font-medium leading-relaxed">
                  {service.idealFor}
                </p>
              </div>
            </div>

            {/* Right Column: Sticky Booking Card & Quick Facts */}
            <div className="lg:col-span-5 space-y-8">
              <div id="service-booking" className="sticky top-28">
                <EnquiryForm
                  defaultService={service.name}
                  title={`Book ${service.name}`}
                  subtitle="Submit your details below to get a transparent quote based on your home size."
                  className="shadow-premium"
                />

                {/* Quick Info Sidebar */}
                <div className="mt-8 p-6 rounded-3xl bg-surface-subtle border border-surface-border space-y-4 text-xs text-charcoal-muted">
                  <div className="flex items-center gap-2 font-bold text-charcoal text-sm">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>Based in Bellandur, Bengaluru</span>
                  </div>
                  <p>
                    Kariyammana Agrahara Rd, Near Mantri Espana. Serving homes across Bellandur, Marathahalli, HSR Layout, Sarjapur Road, and all of Bangalore.
                  </p>
                  <div className="pt-2 flex items-center gap-2 text-emerald-800 font-semibold">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>Open 24 Hours • Ready for Quick Scheduling</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Explore Other Services */}
      <section className="py-16 bg-surface-subtle border-t border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-charcoal">
              Other Cleaning Services
            </h3>
            <Link
              href="/services"
              className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
            >
              <span>View All 6</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherServices.slice(0, 3).map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="p-5 rounded-2xl bg-white border border-surface-border hover:border-primary/40 shadow-sm hover:shadow transition-all group flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-bold text-charcoal group-hover:text-primary transition-colors text-base mb-1">
                    {item.name}
                  </h4>
                  <p className="text-xs text-charcoal-muted line-clamp-2">
                    {item.shortDescription}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-primary">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

