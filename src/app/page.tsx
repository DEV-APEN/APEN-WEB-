"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import CredentialsCarousel from '../components/CredentialsCarousel';
import Differentiator from '../components/Differentiator';
import FAQ from '../components/FAQ';
import AboutContact from '../components/AboutContact';
import CorporateMetrics from '../components/CorporateMetrics';
import Footer from '../components/Footer';
import ChatBot from '../components/ChatBot';
import Link from 'next/link';
import MobileMenu from '../components/MobileMenu';

export default function Home() {
  const [showNav, setShowNav] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // EFECTO DE VISIBILIDAD POR SCROLL
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && !showNav) {
        setShowNav(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showNav]);

  return (
    <main className="min-h-screen bg-white relative overflow-x-hidden w-full max-w-full">
      <Header 
        visible={showNav} 
        onOpenMenu={() => setIsMenuOpen(true)} 
      />
      
      <Hero onVideoEnd={() => setShowNav(true)} showIndicator={showNav} />
      
      <Services />

      <CredentialsCarousel />

      <CorporateMetrics />

      <FAQ />

      <AboutContact />
      
      <Footer />
      <ChatBot visible={showNav} />

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </main>
  );
}
