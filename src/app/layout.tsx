import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'APEN | Administradora de Proyectos Energéticos',
  description: 'Soluciones integrales en hidrocarburos, electricidad, petroquímica y minería. Consultoría técnica, ingeniería y cumplimiento normativo.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
