import { MetadataRoute } from "next";
import { SERVICES } from "@/data/businessData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://urbanleaning.pages.dev";

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/why-choose-us",
    "/how-it-works",
    "/reviews",
    "/service-areas",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const serviceRoutes = SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...serviceRoutes];
}

