import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ConsultaArticle from "@/components/ConsultaArticle";
import ConsultasFrame from "@/components/ConsultasFrame";
import { consultations, getConsultation } from "@/data/consultas";

type PageProps = { params: { slug: string } };

export function generateStaticParams() {
  return consultations.map((consultation) => ({ slug: consultation.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const consultation = getConsultation(params.slug);
  if (!consultation) return {};

  const canonical = `https://apen.mx/consultas/${consultation.slug}`;
  return {
    title: consultation.shortTitle,
    description: consultation.description,
    keywords: consultation.keywords,
    alternates: { canonical },
    robots: {
      index: consultation.revisado,
      follow: true,
    },
    openGraph: {
      title: `${consultation.shortTitle} | Energy Explica`,
      description: consultation.description,
      url: canonical,
      siteName: "APEN",
      type: "article",
      locale: "es_MX",
      publishedTime: consultation.datePublished,
      modifiedTime: consultation.dateModified,
      images: [{
        url: "https://apen.mx/visual/imagenes/energy-explica-banner.webp",
        width: 1800,
        height: 900,
        alt: `${consultation.shortTitle} — Energy Explica`,
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${consultation.shortTitle} | Energy Explica`,
      description: consultation.description,
      images: ["https://apen.mx/visual/imagenes/energy-explica-banner.webp"],
    },
  };
}

export default function ConsultationPage({ params }: PageProps) {
  const consultation = getConsultation(params.slug);
  if (!consultation) notFound();

  const pageUrl = `https://apen.mx/consultas/${consultation.slug}`;
  const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: consultation.shortTitle.replace(/[¿?]/g, ""),
    description: consultation.quickAnswer,
    url: pageUrl,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "Energy Explica",
      url: "https://apen.mx/consultas",
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: consultation.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: consultation.title,
    description: consultation.description,
    datePublished: consultation.datePublished,
    dateModified: consultation.dateModified,
    mainEntityOfPage: pageUrl,
    image: "https://apen.mx/visual/imagenes/energy-explica-banner.webp",
    author: { "@type": "Organization", name: "Grupo APEN", url: "https://apen.mx" },
    publisher: { "@id": "https://apen.mx/#organization" },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://apen.mx" },
      { "@type": "ListItem", position: 2, name: "Energy Explica", item: "https://apen.mx/consultas" },
      { "@type": "ListItem", position: 3, name: consultation.shortTitle, item: pageUrl },
    ],
  };

  return (
    <ConsultasFrame>
      {[definedTermSchema, faqSchema, articleSchema, breadcrumbSchema].map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <ConsultaArticle consultation={consultation} />
    </ConsultasFrame>
  );
}
