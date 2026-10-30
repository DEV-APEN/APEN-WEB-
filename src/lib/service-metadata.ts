import type { Metadata } from "next";
import { getServiceArea } from "@/data/service-areas";
import { type Service, serviceHref } from "@/data/services";
import { serviceContent, serviceAreaSearchTitles } from "@/data/service-content";
export function serviceMetadata(title: string, description: string, path: string, image: string): Metadata {
  return { title, description, alternates: { canonical: "https://apen.mx" + path },
    openGraph: { title: title + " | APEN", description, url: "https://apen.mx" + path, locale: "es_MX", siteName: "APEN", type: "website", images: [{ url: "https://apen.mx" + image, alt: title }] },
    twitter: { card: "summary_large_image", title: title + " | APEN", description, images: ["https://apen.mx" + image] } };
}
export function areaMetadata(id: string) { const a = getServiceArea(id)!; return serviceMetadata(serviceAreaSearchTitles[id] ?? a.title, a.description, "/servicios/" + id, a.image); }
export function detailMetadata(s: Service) {
  const content = serviceContent[s.id];
  return serviceMetadata(content?.title ?? s.title, content?.description ?? s.summary, serviceHref(s), getServiceArea(s.area)!.image);
}
