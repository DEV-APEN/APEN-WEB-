import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        apen: {
          blue: '#0B2341', // Azul corporativo muy oscuro
          electric: '#005BB5', // Azul eléctrico para acentos (botones, íconos)
          light: '#F8FAFC', // Fondo muy claro para secciones
          gray: '#334155', // Texto general
        }
      },
      backgroundImage: {
         // Placeholder industrial/enérgético para el hero. Se asegura alto contraste con un overlay.
        'hero-pattern': "linear-gradient(to right bottom, rgba(11, 35, 65, 0.9), rgba(11, 35, 65, 0.7)), url('https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
      }
    },
  },
  plugins: [],
}
export default config
