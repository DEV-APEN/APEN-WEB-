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
      name: '¿Qué es APEN y a qué se dedica?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'APEN (Administradora de Proyectos Energéticos) es una empresa mexicana especializada en ingeniería eléctrica, gestión de hidrocarburos y defensa legal técnica para el sector energético. Ofrece servicios de cumplimiento normativo ante ASEA y CFE, diseño de subestaciones, tramitación de permisos CNE y representación legal ante el TFJA.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuáles son los servicios principales de APEN?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'APEN ofrece tres unidades estratégicas: (1) Ingeniería Eléctrica y Obra Civil con subestaciones hasta 230 kV bajo estándares CFE. (2) Gestión y Regulación de Hidrocarburos con permisos ante CNE y ASEA. (3) Defensa Legal y Técnica Energética con levantamiento de clausuras y demandas ante el TFJA.',
      },
    },
    {
      '@type': 'Question',
      name: '¿APEN está certificada o registrada ante organismos gubernamentales?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. APEN cuenta con certificaciones ISO 9001, ISO 14001 e ISO 45001. Además está registrada como proveedor certificado en el Padrón CFE con el número 4493015 y en la Red Achilles PEMEX con el ID 00249023.',
      },
    },
    {
      '@type': 'Question',
      name: '¿En qué estados de México opera APEN?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'APEN tiene oficinas en Ciudad de México (Coyoacán) y opera proyectos en toda la República Mexicana, incluyendo estados con alta actividad en el sector energético como Veracruz, Tabasco, Tamaulipas, Sinaloa y el Valle de México.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué es la consultoría energética en México y cómo puede ayudar APEN?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La consultoría energética en México abarca el cumplimiento de regulaciones ante ASEA, CFE, SENER y CNE, así como la gestión de infraestructura eléctrica e hidrocarburos. APEN ayuda a empresas del sector a obtener permisos, cumplir normativas, construir infraestructura y resolver conflictos legales de manera integral.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo contactar a APEN?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Puede contactar a APEN a través de su sitio web https://apen.mx/contacto, por correo electrónico a contacto@apen.mx o visitando sus oficinas en Av. Miguel Ángel de Quevedo 961, Coyoacán, Ciudad de México. Horario de atención: lunes a viernes de 9:00 a 18:00 hrs.',
      },
    },
  ],
};

// Carga diferida — estos componentes no son necesarios en el primer render
const CredentialsCarousel = dynamic(() => import('../components/CredentialsCarousel'), { ssr: false });
const CorporateMetrics = dynamic(() => import('../components/CorporateMetrics'), { ssr: false });
const ChatBot = dynamic(() => import('../components/ChatBot'), { ssr: false });

export default function Home() {
  const [showNav, setShowNav] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && !showNav) setShowNav(true);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showNav]);

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
      <ChatBot visible={showNav} />

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </main>
  );
}
