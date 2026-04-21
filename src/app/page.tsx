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
