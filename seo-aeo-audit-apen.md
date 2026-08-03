# Reporte de Auditoría Técnica de SEO y AEO
**Proyecto:** apen.mx (APEN — Administradora de Proyectos Energéticos)
**Fecha:** 2 de julio de 2026  
**Auditor:** Antigravity (AI Coding Assistant)  

---

## 1. Archivos de Configuración Base

*   **¿Existe `/public/robots.txt` y `src/app/robots.ts`?**  
    Sí. El sitio cuenta con ambos. El `robots.ts` y `robots.txt` habilitan explícitamente el acceso a todos los rastreadores estándar (`User-agent: *`, `Googlebot`). Adicionalmente, el `robots.txt` da acceso expreso y explícito a bots de Inteligencia Artificial (AEO) como `GPTBot`, `ChatGPT-User`, `Google-Extended` (clave para AI Overviews), `PerplexityBot`, `ClaudeBot` y `anthropic-ai`. 
*   **¿Existe `/public/llms.txt`?**  
    Sí, existe y es un documento extremadamente detallado (más de 100 líneas). Refleja todos los servicios actuales, incluyendo explícitamente "Project Finance — Estructuración Financiera Energética", especificando el modelado financiero, fondeo NAFIN/Bancomext y SPVs. Además, contiene una **fuerte desambiguación** para evitar que las IAs confundan a APEN con asociaciones religiosas ("Alianza Pro Evangelización del Niño"), lo cual es una brillante práctica de AEO preventivo.
*   **¿Existe `/public/sitemap.xml` o se genera dinámicamente?**  
    Se genera de forma dinámica mediante `src/app/sitemap.ts`. Contiene URLs jerarquizadas sin errores 404 ni rutas huérfanas:
    - `/` (Prioridad 1.0)
    - `/servicios`, `/servicios/hidrocarburos`, `/servicios/energia`, `/servicios/legal`, `/servicios/project-finance` (Prioridad 0.8)
    - `/nosotros`, `/capacidad-ejecutiva`, `/certificaciones`, `/faqs` (Prioridad 0.7)
    - `/diagnostico`, `/contacto` (Prioridad 0.6)
*   **¿Hay configuración global de canonical URLs?**  
    Sí, implementada directamente en el `layout.tsx` general (`metadataBase: new URL('https://apen.mx')` y `alternates: { canonical: 'https://apen.mx' }`), lo que evita canibalización por URLs con parámetros.

---

## 2. Meta Tags por Página

El sitio utiliza la API de metadatos de Next.js (App Router). La página de inicio (`/`) hereda la configuración robusta del `layout.tsx`. Las subpáginas tienen sus propias etiquetas dinámicas. 

| Página | Title | Meta Description | Canonical | OG/Twitter | Tipo |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Home (`/`)** | APEN \| Consultoría e Ingeniería... | Consultoría energética regulatoria en México: permisos CNE... | `https://apen.mx/` | Heredado de Layout | Global / Layout |
| **`/servicios/hidrocarburos`** | Trámites ASEA y Permisos CNE... | Tramitación de permisos CNE para expendio de petrolíferos... | Automático | Especificado dinámicamente | Específico |
| **`/servicios/energia`** | Permisos CNE de Generación y... | Tramitación de permisos CNE de generación, autoconsumo... | Automático | Especificado dinámicamente | Específico |
| **`/servicios/legal`** | Defensa Legal Energética: Clausuras ASEA... | Levantamiento inmediato de clausuras ASEA, afirmativa ficta... | Automático | Especificado dinámicamente | Específico |
| **`/servicios/project-finance`**| Project Finance Energético y... | Estructuración de project finance para proyectos de energía... | Automático | Especificado dinámicamente | Específico |
| **`/faqs`** | Preguntas Frecuentes \| Permisos CNE... | Respuestas expertas sobre permisos CNE, clausuras ASEA... | Automático | Especificado dinámicamente | Específico |
| **`/nosotros`** | Nosotros \| Consultoría Regulatoria... | Grupo APEN S.A. de C.V. — firma mexicana de consultoría... | Automático | Especificado dinámicamente | Específico |
| **`/contacto`** | Contacto \| APEN Administradora... | Consultoría energética directa con especialistas de APEN... | Automático | Especificado dinámicamente | Específico |

---

## 3. Schema Markup (JSON-LD)

El sitio implementa JSON-LD de forma agresiva y correcta, especialmente enfocado en Answer Engine Optimization (AEO):

*   **Implementados Actualmente (Principalmente en Layout y Home):**
    *   `Organization` / `LocalBusiness`: **Confirmado.** El layout inyecta ambos. Incluyen el NAP completo (Dirección en Coyoacán, Ciudad de México, teléfonos) y —lo más importante— inyecta las certificaciones (`hasCredential`) listando explícitamente el **Padrón CFE 4493015** y el **ID Achilles 00249023**.
    *   `WebSite` y `ProfessionalService`: Incluidos con área de servicio en México y un catálogo de ofertas (`hasOfferCatalog`).
    *   `SpeakableSpecification`: **Confirmado.** Excelente implementación para asistentes de voz y resúmenes de LLMs.
    *   `FAQPage`: **Confirmado.** La página de `/faqs` y el inicio incluyen el marcado semántico en JSON-LD, no solo componentes en acordeón.
*   **Schemas Faltantes:**
    *   Faltan schemas específicos tipo `Service` en las rutas individuales (ej. en `/servicios/energia` no hay un JSON-LD aislado detallando el servicio). 
    *   Falta `BreadcrumbList` en las subrutas.
    *   Falta especializar `/servicios/legal` con schema `LegalService` o `Attorney`, y `/servicios/project-finance` con schema `FinancialService`.

---

## 4. Renderizado Server-Side vs Cliente

*   **Dependencia JS:** Archivos como el `Home` (`page.tsx`) utilizan la directiva `"use client"`. En Next.js 13+ con App Router, esto significa que el componente interactivo se hidrata en el cliente, pero el HTML inicial **SÍ** se pre-renderiza en el servidor. Por lo tanto, crawlers básicos como Googlebot seguirán viendo el contenido inicial.
*   **Peligro Potencial:** Si contadores de estadísticas (ej. "Más de 200 juicios ganados") utilizan librerías de animación (`framer-motion` o react-spring) y su estado inicial en el servidor es `0`, los crawlers básicos indexarán el `0` en lugar de la cifra real. Se recomienda inicializar el `useState` con el valor final para SSR.

---

## 5. Estructura de Contenido / Headings

*   **Jerarquía:** Las páginas cuentan con títulos `<h1>` claros orientados a palabras clave, sin embargo, al ser un sitio rico en componentes modulares, algunas vistas de React pueden tener múltiples etiquetas `<h1>` (como la iteración de servicios si no se usa `<h2>` o `<h3>`).
*   **FAQs:** Además de existir en JSON-LD, el HTML es semántico. Se encuentran dentro de listas o bloques de texto legibles, lo cual facilita la fragmentación para la IA.

---

## 6. Performance / Core Web Vitals

*   **Imágenes desde GitHub Raw:** Actualmente, el `layout.tsx` y otras rutas apuntan a imágenes alojadas en `raw.githubusercontent.com`. **Esto es un riesgo moderado:**
    *   *Desventaja 1:* GitHub Raw no es un CDN optimizado; no soporta escalado dinámico ni conversión a WebP/AVIF al vuelo.
    *   *Desventaja 2:* Si el repositorio se vuelve privado o se exceden límites de ancho de banda, las imágenes fallarán. 
    *   *Recomendación:* Mover estos assets a la carpeta `/public` y servirlos mediante el componente `next/image` (`<Image src="/visual/imagenes/..." />`).
*   **Carga de componentes:** Se utiliza Lazy Loading de React (`next/dynamic`) para componentes pesados como el `ChatBot`, lo que mejora drásticamente el First Input Delay (FID) y el LCP de la página.

---

## 7. Internacionalización

*   A diferencia de otros proyectos, **APEN está estrictamente enfocado en un solo locale (`es-MX`)**. El atributo `lang="es"` está correctamente colocado en el `<html>` dentro de `layout.tsx`. No se requieren etiquetas `hreflang` complejas ya que su cobertura geográfica es exclusivamente para la República Mexicana.

---

## 8. Resumen Ejecutivo

### 🔴 Top 5 Problemas Críticos y Riesgos
1.  **Imágenes alojadas en GitHub Raw:** Genera cuellos de botella de red y riesgo de ruptura de enlaces. Impide optimización automática WebP.
2.  **Uso generalizado de "use client" en Home:** Podría causar que algunos bots muy rudimentarios no indexen correctamente contenido renderizado tardíamente.
3.  **Falta de schemas específicos (`LegalService`, `FinancialService`):** Oportunidad perdida para dominar nichos altamente competidos en Google.
4.  **Falta de `BreadcrumbList`:** Disminuye la comprensión de la jerarquía del sitio para los buscadores.
5.  **Estado inicial de contadores animados:** Riesgo de que las IAs indexen "0" autorizaciones ganadas si el componente inicializa en cero.

### 🟢 Top 5 Quick Wins (Alto impacto, bajo esfuerzo)
1.  Migrar las imágenes de GitHub Raw a la carpeta `/public` local.
2.  Añadir el schema `BreadcrumbList` en el layout general de servicios.
3.  Inyectar JSON-LD de `Service` en las 4 landing pages de servicios de forma aislada.
4.  Revisar y asentar el valor inicial real en cualquier componente de contadores de números.
5.  Refinar la estructura `<h1>` en el home para garantizar que solo haya un titular principal visible para rastreadores.

### 📋 Lista Priorizada de Acciones Reales
1.  **INMEDIATO:** Reemplazar URLs de GitHub Raw por rutas absolutas en el propio dominio y aprovechar el componente `<Image>` nativo de Next.js.
2.  **CORTO PLAZO:** Expandir los JSON-LD a nivel de página (Service schema) para cada línea de negocio (Energía, Hidrocarburos, Project Finance y Legal).
3.  **CORTO PLAZO:** Auditar el DOM generado sin JS para confirmar que el componente de estadísticas/hitos renderiza "200" y no "0" por culpa de animaciones.
4.  **MEDIANO PLAZO:** Implementar Breadcrumbs visuales y en JSON-LD para enriquecer los snippets de resultados en Google.
