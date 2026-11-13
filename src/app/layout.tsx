import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BUSINESS_INFO } from "@/data/businessData";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://urbanleaning.pages.dev"),
  title: {
    default: "Urban Full Home Deep Cleaning Services in Bangalore | Home Cleaning",
    template: "%s | Urban Full Home Deep Cleaning Services",
  },
  description:
    "Looking for home deep cleaning services in Bangalore? Urban Full Home Deep Cleaning Services offers home cleaning solutions in Bellandur and surrounding areas. Open 24 hours.",
  keywords: [
    "home deep cleaning bangalore",
    "house cleaning service bellandur",
    "deep cleaning services near mantri espana",
    "full home cleaning bangalore",
    "kitchen deep cleaning bangalore",
    "bathroom deep cleaning bangalore",
    "move in cleaning bangalore",
    "women owned cleaning service bangalore",
    "24 hours cleaning services bangalore",
  ],
  authors: [{ name: "Urban Full Home Deep Cleaning Services" }],
  openGraph: {
    title: "Urban Full Home Deep Cleaning Services in Bangalore | Home Cleaning",
    description:
      "Looking for home deep cleaning services in Bangalore? Urban Full Home Deep Cleaning Services offers home cleaning solutions in Bellandur and surrounding areas. Open 24 hours.",
    url: "https://urbanleaning.pages.dev",
    siteName: "Urban Full Home Deep Cleaning Services",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Urban Full Home Deep Cleaning Services in Bangalore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Urban Full Home Deep Cleaning Services in Bangalore",
    description:
      "Professional home deep cleaning in Bellandur, Bangalore. Open 24 Hours. Women-Owned Business with 5.0 Google Rating.",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://urbanleaning.pages.dev",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HouseCleaning",
  name: BUSINESS_INFO.name,
  alternateName: BUSINESS_INFO.shortName,
  description:
    "Urban Full Home Deep Cleaning Services provides premium residential deep cleaning, kitchen cleaning, bathroom cleaning, bedroom cleaning, living room cleaning, and move-in/move-out cleaning in Bangalore.",
  url: "https://urbanleaning.pages.dev",
  priceRange: "$$",
  image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS_INFO.address.street,
    addressLocality: BUSINESS_INFO.address.area,
    addressRegion: BUSINESS_INFO.address.state,
    postalCode: BUSINESS_INFO.address.postalCode,
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 12.9298,
    longitude: 77.6888,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "6",
    reviewCount: "6",
  },
  areaServed: [
    { "@type": "City", name: "Bengaluru" },
    { "@type": "Place", name: "Bellandur" },
    { "@type": "Place", name: "Kariyammana Agrahara" },
    { "@type": "Place", name: "Kadubeesanahalli" },
    { "@type": "Place", name: "HSR Layout" },
    { "@type": "Place", name: "Sarjapur Road" },
    { "@type": "Place", name: "Marathahalli" },
    { "@type": "Place", name: "Whitefield" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Home Deep Cleaning Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Full Home Deep Cleaning",
          description: "Detailed cleaning for different areas of your home.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Kitchen Deep Cleaning",
          description: "Focus on kitchen surfaces, cabinets and everyday dirt buildup.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Bathroom Deep Cleaning",
          description: "Detailed cleaning of bathroom surfaces, tiles and fixtures.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Bedroom Cleaning",
          description: "Refresh your bedroom with detailed cleaning.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Living Room Cleaning",
          description: "Make your living spaces cleaner and more comfortable.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Move-In / Move-Out Cleaning",
          description: "Cleaning support when moving into or out of a home.",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jakarta.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white text-charcoal font-sans flex flex-col selection:bg-mint selection:text-primary-dark">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
