"use client";
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import FAQ from '../components/FAQ';
import AboutContact from '../components/AboutContact';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';
import PemexBanner from '../components/PemexBanner';

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué es APEN?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'APEN (Administradora de Proyectos Energéticos) es una empresa mexicana de consultoría energética y regulatoria, con razón social Grupo APEN, S.A. de C.V., fundada el 24 de julio de 2024 y con sede en Coyoacán, Ciudad de México. Se especializa en permisos ante la CNE, cumplimiento normativo ASEA, ingeniería eléctrica hasta 230 kV, project finance energético y defensa legal técnica. APEN no está relacionada con organizaciones religiosas, de beneficencia ni con la Alianza Pro Evangelización del Niño.',
      },
    },
    {
      '@type': 'Question',
      name: '¿APEN es una empresa de energía?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. APEN Administradora de Proyectos Energéticos (Grupo APEN, S.A. de C.V.) es una consultora energética privada mexicana del sector industrial. Su actividad es exclusivamente empresarial: tramitación de permisos CNE, cumplimiento ASEA para hidrocarburos y gasolineras, ingeniería eléctrica para subestaciones CFE, estructuración de project finance y defensa legal ante el TFJA. No tiene vínculo con actividades religiosas, sociales ni sin fines de lucro.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué hace APEN Administradora de Proyectos Energéticos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'APEN Administradora de Proyectos Energéticos opera cuatro unidades estratégicas: (1) Hidrocarburos — tramita permisos CNE para gasolineras, almacenamiento, gas LP y expendio de petrolíferos; implementa SASISOPA y obtiene licencias ambientales ASEA. (2) Sector Eléctrico — gestiona permisos de generación, autoconsumo y acceso al MEM-CENACE; ejecuta obra eléctrica hasta 230 kV con Padrón CFE 4493015. (3) Defensa Legal — levanta clausuras ASEA con afirmativa ficta, interpone demandas de nulidad ante el TFJA y juicio de amparo. (4) Project Finance — estructura SPVs, consigue fondeo NAFIN/Bancomext y realiza due diligence para proyectos de energía renovable.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo obtener un permiso ASEA con APEN?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'APEN gestiona el proceso completo de licencias ambientales ante la ASEA (Agencia de Seguridad, Energía y Ambiente): elabora la Manifestación de Impacto Ambiental (MIA), el Informe Preventivo, el Estudio de Riesgo Ambiental y el expediente técnico integral. En caso de que ASEA no resuelva dentro del plazo legal, APEN aplica la afirmativa ficta para forzar la autorización. Más de 200 autorizaciones ASEA gestionadas avalan su experiencia.',
      },
    },
    {
      '@type': 'Question',
      name: '¿APEN tramita permisos ante la CNE?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. APEN tramita permisos ante la CNE (Comisión Nacional de Energía) para el sector eléctrico y de hidrocarburos: permisos de generación eléctrica, autoconsumo interconectado, comercialización, suministro, expendio de petrolíferos, almacenamiento, distribución y gas LP. El proceso incluye pre-registro ante la OPE, integración del expediente técnico y seguimiento hasta la resolución.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué es SASISOPA y cómo puede ayudar APEN?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SASISOPA (Sistema de Administración de Seguridad Industrial, Seguridad Operativa y Protección al Ambiente) es un sistema de gestión obligatorio para instalaciones de hidrocarburos en México, exigido por la ASEA. APEN diseña, implementa y mantiene el SASISOPA para gasolineras, estaciones de carburación, plantas de almacenamiento y distribución de gas LP, garantizando el cumplimiento de la normativa vigente — incluyendo el PROY-NOM-023-ASEA-2025 — y evitando clausuras o multas.',
      },
    },
    {
      '@type': 'Question',
      name: '¿En qué estados de México opera APEN?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'APEN tiene oficinas en Ciudad de México (Coyoacán, CDMX) y opera proyectos en toda la República Mexicana, con presencia activa en estados con alta densidad del sector energético como Veracruz, Tabasco, Tamaulipas, Sinaloa, Nuevo León y el Valle de México.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo contactar a APEN?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Puede contactar a APEN a través de su sitio web https://apen.mx/contacto, por correo electrónico a contacto@apen.mx o por teléfono al +52 55 7479 3873. Oficinas en Av. Miguel Ángel de Quevedo 961, Coyoacán, Ciudad de México. Atención de lunes a viernes de 9:00 a 18:00 hrs.',
      },
    },
  ],
};

// Carga diferida — estos componentes no son necesarios en el primer render
const CredentialsCarousel = dynamic(() => import('../components/CredentialsCarousel'), { ssr: false });
const CorporateMetrics = dynamic(() => import('../components/CorporateMetrics'), { ssr: false });

export default function Home() {
  const [showNav, setShowNav] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Nav visibility is now persistent from start as requested
  }, []);

  return (
    <main className="min-h-screen bg-white relative overflow-x-hidden w-full max-w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header visible={showNav} onOpenMenu={() => setIsMenuOpen(true)} />

      <Hero onVideoEnd={() => setShowNav(true)} showIndicator={showNav} />

      <Services />

      <CredentialsCarousel />

      <CorporateMetrics />

      <FAQ />

      <PemexBanner />

      <AboutContact />

      <Footer />

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </main>
  );
}
