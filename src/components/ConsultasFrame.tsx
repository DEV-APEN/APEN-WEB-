"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MobileMenu from "@/components/MobileMenu";

export default function ConsultasFrame({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <Header visible onOpenMenu={() => setIsMenuOpen(true)} />
      {children}
      <Footer />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </main>
  );
}
