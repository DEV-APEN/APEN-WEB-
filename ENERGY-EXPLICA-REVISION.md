# ENERGY EXPLICA — AUTO-AUDITORÍA

Fecha de revisión: 27 de agosto de 2026. Alcance: revisión solo-lectura de `/consultas`, `/consultas/que-es-pronagas`, `/consultas/lista-l-cne-timbrado` y `/consultas/que-es-el-sasisopa`, más su infraestructura compartida. Durante la auditoría no se modificó código de la app; este reporte es el único archivo fuente creado.

## 1. Resumen ejecutivo

Energy Explica quedó **listo con pendientes**. Las cuatro rutas solicitadas existen, se generan estáticamente y respondieron HTTP 200 sobre un build limpio; las tres fichas cumplen la estructura principal y sus respuestas rápidas tienen 44, 48 y 45 palabras (`src/data/consultas.ts:66`, `src/data/consultas.ts:161`, `src/data/consultas.ts:261`). La implementación se expandió de 3 a 43 fichas mediante una ruta dinámica (`src/app/consultas/[slug]/page.tsx:9`, `src/data/consultas.ts:54`). Los pendientes principales son lint sin configurar, citas legales demasiado genéricas en dos fichas, contraste insuficiente en botones cyan, un PNG prioritario de 733,945 bytes y hardcodes compartidos de fecha/servicio (`src/components/ConsultaArticle.tsx:60`, `src/components/ConsultaArticle.tsx:61`).

## 2. Archivos creados y modificados

Estado derivado de `git status --short`; los archivos globales pueden contener cambios de otras iteraciones, por lo que solo atribuyo a Energy Explica las líneas citadas.

```text
CREADOS
├─ public/visual/imagenes/energy-explica-banner.png — hero 1800×900 usado en home y metadatos (src/components/ConsultasIndex.tsx:73)
├─ public/visual/imagenes/energy-explica-menu-button.png — botón gráfico del menú (src/components/MobileMenu.tsx:150)
├─ public/visual/logos/sat.svg — logotipo vectorial SAT, no placeholder (public/visual/logos/sat.svg:1)
├─ src/app/consultas/page.tsx — home, metadata y schema de colección (src/app/consultas/page.tsx:6)
├─ src/app/consultas/[slug]/page.tsx — SSG, metadata y schemas de ficha (src/app/consultas/[slug]/page.tsx:9)
├─ src/components/ConsultaArticle.tsx — plantilla visual y semántica de fichas (src/components/ConsultaArticle.tsx:6)
├─ src/components/ConsultasFrame.tsx — shell con header, footer y menú (src/components/ConsultasFrame.tsx:8)
├─ src/components/ConsultasIndex.tsx — hero, buscador y grid (src/components/ConsultasIndex.tsx:55)
└─ src/data/consultas.ts — tipos y contenido estático de 43 fichas (src/data/consultas.ts:1)

MODIFICADOS
├─ public/llms.txt — URLs y descripciones del hub/fichas (public/llms.txt:71)
├─ src/app/sitemap.ts — URLs canónicas del hub/fichas (src/app/sitemap.ts:68)
├─ src/components/Footer.tsx — enlace de navegación a Energy Explica (src/components/Footer.tsx:7)
└─ src/components/MobileMenu.tsx — acceso visual a Energy Explica (src/components/MobileMenu.tsx:150)
```

## 3. Checklist contra los criterios de aceptación

| Requisito | Estado | Evidencia | Nota |
|---|---|---|---|
| `/consultas` + 3 fichas existen y cargan | ✅ Cumple | `src/app/consultas/page.tsx:62`; `src/app/consultas/[slug]/page.tsx:48`; `src/data/consultas.ts:55`, `150`, `250` | Build limpio + `next start`: las 4 devolvieron 200. |
| Estático, sin BD ni dependencias nuevas | ✅ Cumple | `src/app/consultas/[slug]/page.tsx:9`; `src/data/consultas.ts:54`; `package.json:11` | Datos en array tipado y SSG; los manifiestos no aparecen modificados. |
| Stack/convenciones/colores respetados | 🟡 Parcial | `package.json:19`; `package.json:20`; `src/components/ConsultaArticle.tsx:24` | Usa Next/React/TS/Tailwind/Lucide, pero cambió los hex pedidos `#0D3D8E/#00AEEF` por `#0B2341/#008CDE`. |
| Respuesta rápida de 40–60 palabras | ✅ Cumple | `src/data/consultas.ts:66`; `161`; `261`; `src/components/ConsultaArticle.tsx:116` | Conteos: 44/48/45. |
| Índice/TOC | ✅ Cumple | `src/components/ConsultaArticle.tsx:101` | Sticky en desktop, anclas a respuesta, tabla, H2, FAQ y fuentes. |
| Ficha regulatoria en tabla | ✅ Cumple | `src/components/ConsultaArticle.tsx:121`; `src/data/consultas.ts:67`, `162`, `262` | Existe; no incluye una fila explícita de “sanción” en las tres fichas. |
| Badge de riesgo/urgencia | ✅ Cumple | `src/components/ConsultaArticle.tsx:24`; `src/data/consultas.ts:60`, `155`, `255` | PRONAGAS/L_CNE críticos; SASISOPA “Vigente 2026”. |
| Términos relacionados | ✅ Cumple | `src/components/ConsultaArticle.tsx:174`; `src/data/consultas.ts:117`, `214`, `312` | Enlaces internos reales. |
| FAQ acordeón + FAQPage | ✅ Cumple | `src/components/ConsultaArticle.tsx:183`; `src/app/consultas/[slug]/page.tsx:65` | `details/summary` y schema generado desde los mismos datos. |
| Fuentes + disclaimer | 🟡 Parcial | `src/components/ConsultaArticle.tsx:195`; `206`; `src/data/consultas.ts:132`, `227`, `325` | Presentes; L_CNE y SASISOPA usan enlaces genéricos/terceros en lugar de citas oficiales profundas. |
| CTA intermedio y final | ✅ Cumple | `src/components/ConsultaArticle.tsx:157`; `209` | Ambos reutilizan `/contacto`. |
| Energy anfitrión + hero | ✅ Cumple | `src/components/ConsultasIndex.tsx:73`; `src/components/ConsultaArticle.tsx:33` | Mascota en banner y línea de Energy por ficha. |
| Iconos por sección | 🟡 Parcial | `src/components/ConsultaArticle.tsx:3`; `123`; `151`; `168` | Hay iconos por bloques clave, no un icono representativo distinto en cada H2. |
| JSON-LD ficha: DefinedTerm + FAQPage + Article | ✅ Cumple | `src/app/consultas/[slug]/page.tsx:53`; `65`; `74`; `98` | Añade también BreadcrumbList. |
| JSON-LD home: CollectionPage + BreadcrumbList | ✅ Cumple | `src/app/consultas/page.tsx:38`; `53`; `65` | El breadcrumb es solo schema; no hay breadcrumb visible en el home. |
| OG/Twitter + title/description únicos | ✅ Cumple | `src/app/consultas/[slug]/page.tsx:13`; `23`; `39`; `src/data/consultas.ts:57`, `152`, `252` | Texto dinámico por ficha; imagen social compartida. |
| `llms.txt`, sitemap y navegación | ✅ Cumple | `public/llms.txt:73`; `src/app/sitemap.ts:69`; `src/components/Footer.tsx:11`; `src/components/MobileMenu.tsx:151` | Se enlaza el hub y las tres fichas. |
| Enlace a `/servicios/hidrocarburos` | ✅ Cumple | `src/components/ConsultaArticle.tsx:61`; `src/data/consultas.ts:124`, `219`, `317` | Correcto para estas tres fichas; incorrecto globalmente para las fichas eléctricas/legales/financieras. |

## 4. Estado por ruta

| Ruta | Archivo/render | Bloques obligatorios |
|---|---|---|
| `/consultas` | Home en `src/app/consultas/page.tsx:62`; renderiza `ConsultasIndex` en `:67` | Hero/buscador `src/components/ConsultasIndex.tsx:71`; grid `:118`; CTA `:155`; CollectionPage/Breadcrumb `src/app/consultas/page.tsx:38`. Falta breadcrumb visible. |
| `/consultas/que-es-pronagas` | Dato `src/data/consultas.ts:55`; SSG compartido `src/app/consultas/[slug]/page.tsx:9` | Respuesta `:66`; tabla `:67`; 4 H2 `:74`; relacionados `:117`; FAQ `:126`; fuentes `:132`; CTA `:136`; visual `:140`. |
| `/consultas/lista-l-cne-timbrado` | Dato `src/data/consultas.ts:150`; SSG compartido `src/app/consultas/[slug]/page.tsx:9` | Respuesta `:161`; tabla `:162`; 4 H2 `:169`; relacionados `:214`; FAQ `:221`; fuentes `:227`; CTA `:234`; visual `:238`. |
| `/consultas/que-es-el-sasisopa` | Dato `src/data/consultas.ts:250`; SSG compartido `src/app/consultas/[slug]/page.tsx:9` | Respuesta `:261`; tabla `:262`; 4 H2 `:269`; relacionados `:312`; FAQ `:319`; fuentes `:325`; CTA `:329`; visual `:333`. |

Prueba HTTP final sobre `next start -p 3020`: las cuatro rutas devolvieron `STATUS=200`, canonical presente y JSON-LD presente. Una prueba previa falló por `.next/server/vendor-chunks/motion-dom.js` ausente mientras había artefactos concurrentes; al liberar puertos, reconstruir y arrancar de nuevo, el fallo no se reprodujo.

## 5. Datos y verificación (crítico)

- **TODO literales:** no quedó ningún comentario `TODO:` en los archivos de Energy Explica. Sí quedaron verificaciones publicadas como texto: fundamento SASISOPA (`src/data/consultas.ts:264`), plazos SASISOPA (`:266`) y disclaimer general (`src/components/ConsultaArticle.tsx:206`). El ejemplo de nomenclatura CNE también pide confirmación por resolución (`src/data/consultas.ts:196`).
- **Placeholders de assets:** ninguno. Banner, botón, imágenes y logos referenciados existen; SAT es un SVG real (`public/visual/logos/sat.svg:1`). El `placeholder` de `src/components/ConsultasIndex.tsx:100` es solo texto de ayuda del buscador.
- **PRONAGAS:** sí se publicó la expansión “Programa de Ordenamiento Nacional de Instalaciones de Gasolinas y Gas Licuado de Petróleo” y la fecha 1 de mayo de 2026 (`src/data/consultas.ts:66`). Esto contradice el dato preliminar “agosto de 2026” y el TODO del prompt original, pero ahora está respaldado por una página oficial ASEA y el acuerdo DOF enlazados en `src/data/consultas.ts:133-134`. La expansión, por tanto, ya no es inventada; sí hubo desviación documentable respecto del insumo inicial.
- **PRONAGAS omitido:** las cifras entregadas de aproximadamente 4,310 inspecciones y 2,291 estaciones sin registro no se publicaron. No hay coincidencias en `src/data/consultas.ts`; la ficha usa otra síntesis (`src/data/consultas.ts:66`).
- **Lista L_CNE:** la fecha 24 de abril de 2026, el bloqueo de timbrado y la reforma CNE se publican en `src/data/consultas.ts:161-167` y `:195-196`. Son hechos proporcionados por el prompt, no números creados en código, pero la bibliografía actual solo enlaza una página general SAT, el home del DOF y tres medios (`src/data/consultas.ts:227-232`); falta citar directamente el Anexo 29 RMF 2026 y el decreto aplicable. El hecho entregado sobre verificación de calidad desde el 1 de enero de 2026 no se incluyó.
- **SASISOPA:** definición y alcance están en `src/data/consultas.ts:261-267`; el propio contenido evita fijar fundamento/plazos no verificados. La cita DOF es genérica (`src/data/consultas.ts:325-327`) y los archivos `apen-propuesta-hub-consulta.md` / `apen-ficha-modelo-sasisopa.md` no existen hoy en el repo, así que no puede probarse que el molde se haya seguido “exactamente”.
- **Conclusión de integridad:** no encontré una cifra o contacto evidentemente fabricado en estas tres fichas, pero no puedo certificar “cero afirmaciones sin respaldo” mientras L_CNE y SASISOPA no tengan citas oficiales profundas. Fechas editoriales se codificaron en datos (`src/data/consultas.ts:138-139`, `236-237`, `331-332`), mientras la plantilla imprime una fecha fija (`src/components/ConsultaArticle.tsx:60`, `206`).

Fuentes efectivamente publicadas:

- **PRONAGAS:** página oficial ASEA y PDF del acuerdo DOF (`src/data/consultas.ts:132-134`).
- **Lista L_CNE:** SAT Controles Volumétricos, home DOF, Volumetrics México, Review Energy y Energy Magazine (`src/data/consultas.ts:227-232`).
- **SASISOPA:** página ASEA SASISOPA y home DOF (`src/data/consultas.ts:325-327`).

## 6. Contacto / CTA

Se reutilizó `/contacto` en los CTA intermedio y final (`src/components/ConsultaArticle.tsx:160`, `212`), ruta ya usada en el footer (`src/components/Footer.tsx:64`) y menú (`src/components/MobileMenu.tsx:196`). No existe un `wa.me` implementado en Energy Explica. No se añadió número; el correo institucional preexistente es `contacto@apen.mx` (`src/components/Footer.tsx:111`).

## 7. Build, tipos y lint

```text
npm.cmd run build     -> PASS (exit 0)
Next 14.2.35; compiló, validó tipos y generó 64 páginas.
/consultas: estática, 8.79 kB / 155 kB First Load JS.
/consultas/[slug]: SSG, 3.14 kB / 150 kB; 43 rutas.

npm.cmd exec tsc -- --noEmit -> PASS (exit 0, sin salida)

npm.cmd run lint -> FAIL/NO EJECUTADO (exit 1)
`next lint` abrió el asistente “How would you like to configure ESLint?”;
no existe configuración ESLint reconocida y no se alteró el repo para crearla.
```

Comandos definidos en `package.json:5-9`; TypeScript está en modo `strict` y `noEmit` (`tsconfig.json:6-7`). Existe desalineación de versiones: Next 14.2.35 con `eslint-config-next` 16.2.6 (`package.json:20`, `30`).

## 8. Accesibilidad, responsive y performance

- **Bien:** `next/image`, `alt`, `sizes` y contenedores con `aspect-ratio` reducen CLS (`src/components/ConsultasIndex.tsx:73-81`; `src/components/ConsultaArticle.tsx:42-51`). Logos tienen dimensiones estables y `alt` (`src/components/ConsultaArticle.tsx:81-89`).
- **Bien:** H1 único en home (visualmente oculto) y ficha, seguido por H2; TOC etiquetado y tablas con `th scope="row"` (`src/components/ConsultasIndex.tsx:85`; `src/components/ConsultaArticle.tsx:38`, `102`, `131`). FAQ usa controles nativos `details/summary` (`src/components/ConsultaArticle.tsx:187`).
- **Responsive:** grid pasa de una a tres columnas (`src/components/ConsultasIndex.tsx:119`), cabecera y CTA cambian a fila en breakpoints (`src/components/ConsultaArticle.tsx:19`, `158`). Riesgo: la tabla no tiene estrategia móvil específica más allá de `overflow-hidden` y puede comprimir etiquetas largas (`src/components/ConsultaArticle.tsx:126-132`).
- **Contraste:** navy/blanco es sólido; texto blanco de 10 px sobre `#008CDE` tiene contraste aproximado 3.6:1 y no alcanza 4.5:1 WCAG AA para texto normal (`src/components/ConsultaArticle.tsx:212`; `src/components/ConsultasIndex.tsx:161`).
- **Performance:** el banner prioritario mide 1800×900 y 733,945 bytes, y se sirve como PNG (`src/components/ConsultasIndex.tsx:75-80`); conviene WebP/AVIF. El home hidrata buscador y 43 tarjetas en un componente cliente (`src/components/ConsultasIndex.tsx:1`, `118`), por lo que el alcance expandido aumenta payload. Los assets sí reciben cache largo (`next.config.mjs:25-30`).

## 9. Desviaciones respecto al prompt original

1. Se construyeron 43 fichas, no solo 3 (`src/data/consultas.ts:54`; `src/components/ConsultasIndex.tsx:9-52`). Es una expansión funcional, pero ensancha contenido, QA y payload.
2. Los archivos fuente/molde exigidos no están en el repo; no se puede demostrar fidelidad exacta al molde. La implementación usa una plantilla propia tipada (`src/components/ConsultaArticle.tsx:6`; `src/data/consultas.ts:1`).
3. PRONAGAS publica expansión y fecha 1 de mayo, en vez de conservar el TODO/agosto del insumo inicial (`src/data/consultas.ts:66`). La fuente oficial actual sí respalda el cambio (`src/data/consultas.ts:133-134`).
4. Se omitieron 4,310 inspecciones y 2,291 instalaciones sin registro, y también el hecho L_CNE del 1 de enero de 2026. No aparecen en `src/data/consultas.ts`.
5. El home no muestra breadcrumb visible; solo BreadcrumbList JSON-LD (`src/app/consultas/page.tsx:53-59`; `src/components/ConsultasIndex.tsx:69`).
6. No todos los H2 tienen icono propio y las tablas no tienen fila explícita de sanción (`src/components/ConsultaArticle.tsx:140-156`; `src/data/consultas.ts:67`, `162`, `262`).
7. La paleta usa `#0B2341/#008CDE`, no los hex literales del prompt (`src/components/ConsultaArticle.tsx:24-27`).
8. La plantilla fija fecha y servicio de hidrocarburos para todas las 43 fichas (`src/components/ConsultaArticle.tsx:60-61`, `206`), correcto para las tres originales pero incorrecto para la expansión.

## 10. Cómo previsualizar

```powershell
cd "C:\Users\Christian Gonzalez\Desktop\apen web"
npm.cmd run dev
```

Abrir:

- `http://localhost:3000/consultas`
- `http://localhost:3000/consultas/que-es-pronagas`
- `http://localhost:3000/consultas/lista-l-cne-timbrado`
- `http://localhost:3000/consultas/que-es-el-sasisopa`

Para producción: `npm.cmd run build`, luego `npm.cmd start` (`package.json:7-8`). No ejecutar build y dev simultáneamente contra el mismo `.next`.

## 11. Pendientes para producción

- [ ] **P0:** añadir configuración ESLint compatible con Next 14 o alinear versiones; lograr que `npm run lint` sea no interactivo y pase (`package.json:9`, `30`).
- [ ] **P0:** reemplazar fuentes genéricas de L_CNE/SASISOPA por enlaces exactos al Anexo 29 RMF 2026 y disposiciones DOF (`src/data/consultas.ts:227-232`, `325-327`).
- [ ] **P0:** decidir y documentar qué hechos originales omitidos deben publicarse; mantener solo cifras verificadas (`src/data/consultas.ts:66`, `161`, `261`).
- [ ] **P1:** renderizar `dateModified` y el servicio relacionado desde datos, no con constantes globales (`src/components/ConsultaArticle.tsx:60-61`, `206`).
- [ ] **P1:** oscurecer el cyan de CTA o aumentar tamaño/peso para contraste WCAG AA (`src/components/ConsultaArticle.tsx:212`).
- [ ] **P1:** convertir/comprimir el banner PNG y volver a medir LCP (`src/components/ConsultasIndex.tsx:75`).
- [ ] **P1:** probar tabla, TOC, tarjetas y CTA en 320/375/768/1440 px; revisar overflow de tabla (`src/components/ConsultaArticle.tsx:126`).
- [ ] **P2:** añadir breadcrumb visible al home y valorar paginación/carga progresiva para 43 tarjetas (`src/components/ConsultasIndex.tsx:118`).
