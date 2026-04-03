# Resumen del Proyecto: APEN Web Infrastructure & Solutions

## 1. Visión General
Este proyecto es una plataforma web corporativa para **APEN (Administradora de Proyectos Energéticos)**. Está diseñada bajo una estética de **"Gabinete Técnico"**, lo que significa que prioriza la precisión, el rigor normativo y una imagen institucional de alta gama para el sector industrial y de hidrocarburos.

## 2. Tecnologías Utilizadas
*   **Next.js 14 (App Router)**: Estructura moderna de aplicaciones React.
*   **Tailwind CSS**: Para un diseño responsivo y control total sobre la densidad visual.
*   **Framer Motion**: Animaciones fluidas que simulan flujos eléctricos e interacciones premium.
*   **Lucide React**: Biblioteca de iconos técnicos minimalistas.
*   **TypeScript**: Garantiza la robustez del código mediante tipado estático.

## 3. Estructura de Archivos
*   `/src/app/page.tsx`: La página principal que orquesta todas las secciones.
*   `/src/components/`: Contiene los módulos individuales de la interfaz.
*   `/public/`: Almacena recursos estáticos como videos y logotipos.

## 4. Descripción de los Componentes

### 🔵 Header (Header.tsx)
Sistema de navegación persistente con efecto de desenfoque (glassmorphism). Incluye accesos directos a "Servicios", "Capacidades" y un botón destacado para "Contacto Técnico".

### 🎥 Hero (Hero.tsx)
El primer impacto visual. Utiliza un video de fondo que proyecta infraestructura energética y un gradiente suave hacia el contenido. Incluye un indicador de scroll animado.

### 💼 Servicios (Services.tsx)
Un portafolio interactivo dividido en 6 áreas clave:
1. Regulación y Normatividad
2. Ingeniería y Obras
3. Energía Eléctrica y Renovables
4. Upstream y Downstream
5. Sostenibilidad
6. Innovación Tecnológica

### 🔄 Ecosistema (Ecosystem.tsx)
Visualización circular del modelo de **"Integración 360°"**. Explica cómo APEN conecta la obra civil, la administración de proyectos, la consultoría y los servicios técnicos.

### ⚡ Diferenciador (Differentiator.tsx)
Sección estratégica que posiciona a APEN como **Socio Estratégico** comparando el modelo tradicional (fragmentado) contra el modelo APEN (integrado). Utiliza un lenguaje visual de "Gabinete Técnico" con un núcleo interactivo y nodos de trazabilidad técnica.

### 📐 Capacidades (Capabilities.tsx)
Presenta las ventajas competitivas como el dominio de las normas de CFE y la capacidad multidisciplinaria, usando tarjetas con diseño "glassmorphic".

### 🛡️ Ruta de Certeza (Certifications.tsx)
Es la sección más técnica. Muestra una línea de tiempo "eléctrica" que conecta las certificaciones **ISO (9001, 14001, 45001)** y registros oficiales en **PEMEX (Achilles)** y **CFE**.

### 🏗️ Identidad (IdentityPurpose.tsx)
Representa los tres pilares de la empresa (Ingeniería, Consultoría y Gestión) mediante un diagrama orbital que gira alrededor del núcleo de la marca.

### ✉️ Contacto y Nosotros (AboutContact.tsx)
Incluye una breve historia de la excelencia mexicana de APEN y un formulario técnico diseñado para captación de leads en licitaciones y proyectos.

## 5. Sistema de Diseño (tailwind.config.ts)
*   **Paleta APEN**:
    *   `apen-blue` (#0B2341): Azul profundo para autoridad.
    *   `apen-electric` (#005BB5): Azul vibrante para interacción.
    *   `apen-light` (#F8FAFC): Blancos técnicos para fondos limpios.
