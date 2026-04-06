"use client";
import { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Ecosystem from '../components/Ecosystem';
import Differentiator from '../components/Differentiator';
import Capabilities from '../components/Capabilities';
import Certifications from '../components/Certifications';
import IdentityPurpose from '../components/IdentityPurpose';
import FAQ from '../components/FAQ';
import AboutContact from '../components/AboutContact';
import Footer from '../components/Footer';

export default function Home() {
  const [showNav, setShowNav] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      <Header visible={showNav} />
      <Hero onVideoEnd={() => setShowNav(true)} showIndicator={showNav} />
      
      {/* 1. EL QUÉ HACEMOS (Portafolio General) */}
      <Services />

      {/* 2. EL ECOSISTEMA (Integración 360) */}
      <Ecosystem />

      {/* 3. EL DIFERENCIADOR (SOCIO ESTRATÉGICO) */}
      <Differentiator />

      {/* 4. EL CÓMO LO HACEMOS (Infraestructura Técnica) */}
      <Capabilities />

      {/* 5. LA GARANTÍA (Escudo de Validación) */}
      <Certifications />
      
      {/* 6. QUIÉNES SOMOS (Misión y Valores) */}
      <IdentityPurpose />

      {/* 6.5. PREGUNTAS FRECUENTES (FAQ) */}
      <FAQ />

      {/* 7. CONTACTO Y CIERRE */}
      <AboutContact />
      <Footer />
    </main>
  );
}
