"use client";

import { useState } from "react";
import Header from "./Header";
import MobileMenu from "./MobileMenu";

export default function HomeShell({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white relative overflow-x-hidden w-full max-w-full">
      <Header visible={true} onOpenMenu={() => setIsMenuOpen(true)} />
      {children}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </main>
  );
}
