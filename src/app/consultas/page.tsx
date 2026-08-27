import type { Metadata } from "next";
import ConsultasFrame from "@/components/ConsultasFrame";
import ConsultasIndex from "@/components/ConsultasIndex";
import { consultations } from "@/data/consultas";

export const metadata: Metadata = {
  title: "Energy Explica | Consultas sobre ASEA, CNE y regulación energética",
  description: "Respuestas claras sobre PRONAGAS, SASISOPA, Lista L_CNE, timbrado de gasolina y regulación energética en México.",
  keywords: [
    "qué es PRONAGAS",
    "qué es el SASISOPA",
    "Lista L_CNE SAT",
    "no puedo timbrar mi gasolina",
    "regulación energética México",
  ],
  alternates: { canonical: "https://apen.mx/consultas" },
  openGraph: {
    title: "Energy Explica | APEN",
    description: "Respuestas claras a la regulación energética de México.",
    url: "https://apen.mx/consultas",
    type: "website",
    locale: "es_MX",
    images: [{
      url: "https://apen.mx/visual/imagenes/energy-explica-banner.webp",
      width: 1800,
      height: 900,
      alt: "Energy Explica, guía regulatoria de APEN",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Energy Explica | APEN",
    description: "Respuestas claras a la regulación energética de México.",
    images: ["https://apen.mx/visual/imagenes/energy-explica-banner.webp"],
  },
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://apen.mx/consultas#collection",
  name: "Energy Explica",
  description: "Centro de consulta sobre regulación energética de México.",
  url: "https://apen.mx/consultas",
  isPartOf: { "@id": "https://apen.mx/#website" },
  hasPart: consultations.filter((item) => item.revisado).map((item) => ({
    "@type": "Article",
    name: item.title,
    url: `https://apen.mx/consultas/${item.slug}`,
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://apen.mx" },
    { "@type": "ListItem", position: 2, name: "Energy Explica", item: "https://apen.mx/consultas" },
  ],
};

export default function ConsultasPage() {
  return (
    <ConsultasFrame>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ConsultasIndex items={consultations} />
    </ConsultasFrame>
  );
}
