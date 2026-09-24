# Inventario de servicios APEN para reorganización

Fecha: 22 de septiembre de 2026.

## Resultado

Inventario editorial a partir del contenido local: **125 fichas individuales**, distribuidas en cuatro áreas. Las 125 rutas están implementadas en el catálogo local mediante una plantilla compartida y contenido por servicio. Esto no certifica 125 servicios comerciales independientes: incluye candidatos descritos únicamente en contenido secundario, marcados en sus notas, que requieren validación comercial antes de publicar.

Implementación: `src/data/services.ts`, `src/data/service-areas.ts` y `src/app/servicios/[area]/[slug]/page.tsx`. Las referencias de origen de este inventario corresponden al contenido previo a la reorganización.

| Área | Fichas propuestas |
|---|---:|
| Hidrocarburos | 54 |
| Sector eléctrico | 38 |
| Defensa legal | 11 |
| Financiamiento de proyectos | 22 |
| **Total** | **125** |

Las cuatro páginas de área, la portada general de servicios y las consultas AEO no se suman al total.

## Criterio de conteo

- Cada fila numerada representa una página de servicio propuesta.
- Se unifican nombres repetidos entre home, catálogo, páginas sectoriales, Capacidad ejecutiva, asistente y textos para agentes.
- Variantes, técnicas y entregables permanecen identificados en la columna de alcance; no desaparecen aunque compartan ficha.
- Compra, venta, manejo, importación, exportación y logística de coque se agrupan en una ficha destacada de petcoke.
- MISSE conserva diagnóstico social, mapeo, consulta, documento, gestión y seguimiento dentro de una ficha.
- Permisos de estaciones de servicio y autoconsumo, así como licuefacción y regasificación, se separan por ser solicitudes diferenciadas en intención del usuario. La nomenclatura jurídica exacta se revisará al redactar.
- Servicios transversales tienen una sola ficha canónica y enlaces desde otros sectores; no se duplican para inflar la cuenta.
- Las normas, códigos, registros propios y logotipos no se convierten automáticamente en servicios. Sí se cuenta la gestión del registro de un cliente cuando el contenido la ofrece expresamente.
- Una consulta informativa por sí sola no prueba que APEN venda ese servicio. Se señalan los candidatos apoyados solo por textos secundarios.

## Fuentes

Las claves de las tablas remiten a archivo y línea de la implementación actual. Son evidencia de lo que el sitio anuncia, no verificación legal ni comercial independiente.

- **H**: `src/app/servicios/hidrocarburos/page.client.tsx`.
- **E**: `src/app/servicios/energia/page.client.tsx`.
- **J**: `src/app/servicios/legal/page.client.tsx`.
- **P**: `src/app/servicios/project-finance/page.client.tsx`.
- **X**: `src/app/capacidad-ejecutiva/page.client.tsx`.
- **S**: `src/app/servicios/page.client.tsx`.
- **B**: `src/components/ChatBot.tsx`.
- **V**: `src/components/Services.tsx`.
- **F**: `src/components/Footer.tsx`.
- **Q**: `src/app/faqs/page.client.tsx`.
- **A**: `src/lib/agent-markdown.ts`.
- **L**: `public/llms.txt`.
- **I**: `public/agent-instructions.md`.
- **C**: `src/data/consultas.ts`.
- **Y**: `src/components/IdentityPurpose.tsx`.
- **Z**: `src/components/Ecosystem.tsx`.

## Hidrocarburos

### Cumplimiento ASEA (15)

| ID | Página de servicio propuesta | Alcance y criterio de agrupación | Fuente |
|---|---|---|---|
| H01 | Licencia de funcionamiento | Trámite y expediente correspondiente. | `H:152` |
| H02 | Licencia Ambiental Única (LAU) | Integración y gestión. | `H:153` |
| H03 | Manifestación de Impacto Ambiental (MIA) | Elaboración y gestión ambiental; la defensa ante falta de resolución se enlaza a Legal. | `H:154` |
| H04 | Informe Preventivo | Elaboración e ingreso del instrumento. | `H:155` |
| H05 | Análisis de riesgo del sector hidrocarburos | Incluye la denominación Estudio de Riesgo Ambiental presente en otros listados. | `H:156`; `S:30` |
| H06 | Dictamen de operación | Gestión del dictamen y seguimiento; no asumir que APEN lo emite directamente. | `H:176` |
| H07 | Protocolo de respuesta a emergencias | Integración documental. | `H:177` |
| H08 | Registro de generación de residuos peligrosos y de manejo especial | Dos variantes conservadas dentro de la ficha; precisar competencias al redactar. | `H:178` |
| H09 | Cédula de Operación Anual (COA) | Preparación y presentación. | `H:179` |
| H10 | Registro de póliza de seguro ante ASEA | Registro regulatorio, distinto de intermediación de seguros. | `H:180` |
| H11 | Diseño, conformación, autorización e implementación de SASISOPA | La ficha conserva cada etapa y distingue razón social e instalación. | `S:30`; `Q:86` |
| H12 | Cumplimiento NOM-003-ASEA-2016 | Servicio mencionado en el catálogo general. | `S:30`; `B:45` |
| H13 | Cumplimiento NOM-005-ASEA-2016 | Diagnóstico y adecuación; vinculado al dictamen de operación sin duplicarlo. | `S:30`; `Q:119` |
| H14 | Integración y seguimiento de bitácoras | Mención en versión para agentes; confirmar alcance comercial. | `A:130` |
| H15 | Regularización RENAGAS / PRONAGAS | Una ficha con diferencias y etapas; mención en textos para agentes y consultas. | `A:132`; `I:27` |

### Permisos y obligaciones CNE (20)

| ID | Página de servicio propuesta | Alcance y criterio de agrupación | Fuente |
|---|---|---|---|
| H16 | Pre-registro en Oficialía de Partes Electrónicas (OPE) | Alta y expediente inicial. | `H:240` |
| H17 | Permiso para estaciones de servicio / expendio de petrolíferos | Separado del permiso de comercialización. | `H:252` |
| H18 | Permiso para autoconsumo de hidrocarburos | Variante separada del expendio al público. | `H:252` |
| H19 | Permiso para estaciones de carburación | Gas LP. | `H:253` |
| H20 | Permiso para plantas de distribución | Incluye distribución de Gas LP según modalidad. | `H:253` |
| H21 | Permiso de almacenamiento | Modalidades según producto e instalación. | `H:254` |
| H22 | Permiso de distribución por ductos y otros medios | Modalidades en una ficha. | `H:255` |
| H23 | Permiso de transporte por ductos y otros medios | Modalidades en una ficha. | `H:256` |
| H24 | Permiso de licuefacción | Separado de regasificación. | `H:257` |
| H25 | Permiso de regasificación | Separado de licuefacción. | `H:257` |
| H26 | Permiso de comercialización de hidrocarburos | No confundir con la venta directa de petcoke de APEN. | `H:258` |
| H27 | Gestión del pago de supervisión anual | Obligación periódica. | `H:289` |
| H28 | Informe de pruebas de laboratorio NOM-016-CRE-2016 | Gestión de pruebas e informe. | `H:290` |
| H29 | Dictamen de calidad de producto NOM-016-CRE-2016 | Distinto del informe de laboratorio. | `H:291` |
| H30 | Reporte de estructura de capital social en OPE | Actualización corporativa del permisionario. | `H:292` |
| H31 | Acreditación de procedencia lícita del producto | Trazabilidad documental. | `H:293` |
| H32 | Reporte de quejas en OPE | Preparación y presentación. | `H:294` |
| H33 | Reporte de incidencias en OPE | Preparación y presentación. | `H:295` |
| H34 | Seguimiento de OPE | Seguimiento periódico y notificaciones. | `H:296` |
| H35 | Cesión de permisos CNE | Candidato mencionado en instrucciones para agentes y consulta; confirmar oferta. | `I:22`; `C:1626` |

### Impacto social y comercio exterior (4)

| ID | Página de servicio propuesta | Alcance y criterio de agrupación | Fuente |
|---|---|---|---|
| H36 | Gestión de impacto social (MISSE / EVIS) | Incluye diagnóstico de viabilidad, mapeo de actores, consulta y participación, documento, gestión ante SENER y seguimiento de compromisos. Enlace cruzado desde Electricidad. | `H:350`; `H:363` |
| H37 | Permiso de importación de petrolíferos | Incluye coordinación documental SENER/SAT. | `H:390` |
| H38 | Permiso de importación de gas natural | Incluye coordinación documental SENER/SAT. | `H:391` |
| H39 | Permiso de exportación de petrolíferos | Mencionado en textos para agentes; confirmar alcance. | `A:133`; `L:30` |

### Control volumétrico y facturación (2)

| ID | Página de servicio propuesta | Alcance y criterio de agrupación | Fuente |
|---|---|---|---|
| H40 | Implementación y cumplimiento de controles volumétricos | Equipos, sistemas de medición, documentación y reportes; alcance mencionado en textos secundarios. | `L:31`; `I:41` |
| H41 | Regularización de Lista L_CNE y timbrado del Complemento de Hidrocarburos | Gestión de discrepancias del permiso y coordinación de timbrado; no prometer desarrollo de software propio. | `Q:38`; `Q:44`; `I:41` |

### Ingeniería, operación y proyectos PEMEX (10)

| ID | Página de servicio propuesta | Alcance y criterio de agrupación | Fuente |
|---|---|---|---|
| H42 | Ingeniería para instalaciones de proceso | Incluye básica, extendida y de detalle en el alcance por precisar. | `X:80`; `S:34` |
| H43 | Obra eléctrica en zonas clasificadas | Conserva la referencia ATEX del catálogo como alcance por verificar. | `X:81` |
| H44 | Instrumentación y control industrial | Incluye integración y modernización de sistemas. | `X:82` |
| H45 | Integración de sistemas de seguridad | Conserva SIL como referencia técnica del contenido existente. | `X:83` |
| H46 | Gestión de contratistas y proyectos multisede | Coordinación de ejecución. | `X:85` |
| H47 | Unidades tanque y autotanques | Solo mencionado en el asistente; falta precisar si es suministro, habilitación, mantenimiento u operación. | `B:47` |
| H48 | Instalaciones de gas | Solo mencionado en el asistente; alcance por detallar. | `B:47` |
| H49 | Montaje de tanques | Mencionado en el asistente. | `B:47` |
| H50 | Mantenimiento de tanques | Mencionado en el asistente. | `B:47` |
| H51 | Participación y ejecución de proyectos en licitaciones PEMEX | Capacidad de APEN por cuenta propia. Distinguir de asesoría licitatoria a terceros. | `A:207`; `F:82` |

### Registros de proveedores (2)

| ID | Página de servicio propuesta | Alcance y criterio de agrupación | Fuente |
|---|---|---|---|
| H52 | Registro de proveedor PEMEX / Achilles | Asistencia para terceros, distinta de exhibir la credencial propia. | `I:40`; `Q:229` |
| H53 | Ampliación de categorías Achilles | Servicio descrito en FAQ. | `Q:234` |

### Comercialización destacada (1)

| ID | Página de servicio propuesta | Alcance y criterio de agrupación | Fuente |
|---|---|---|---|
| H54 | Coque de petróleo (petcoke) | Página destacada con compra, venta, manejo, logística, importación, exportación y suministro nacional/internacional. | `H:434` |


## Sector eléctrico

### Cumplimiento regulatorio y mercado eléctrico (21)

| ID | Página de servicio propuesta | Alcance y criterio de agrupación | Fuente |
|---|---|---|---|
| E01 | Permisos de generación eléctrica | Renovables, convencional y cogeneración como variantes de la ficha. | `E:157` |
| E02 | Autoconsumo y gestión de permisos de autoabasto existentes | El sitio usa ambas denominaciones; precisar el régimen aplicable al redactar. | `E:158`; `A:117` |
| E03 | Comercialización de energía eléctrica | Separada de suministro. | `E:159` |
| E04 | Suministro eléctrico | Modalidades en la ficha. | `E:159` |
| E05 | Importación de energía eléctrica | Separada de exportación. | `E:160` |
| E06 | Exportación de energía eléctrica | Separada de importación. | `E:160` |
| E07 | Reportes de obligaciones periódicas CNE | Seguimiento continuo. | `E:176` |
| E08 | Cumplimiento de términos y condiciones del permiso | Obligaciones específicas del titular. | `E:177` |
| E09 | Seguimiento de cambios regulatorios | Actualización y adecuación del cumplimiento. | `E:178` |
| E10 | Modificación y actualización de permisos | Gestión del expediente. | `E:179` |
| E11 | Estudios y gestión de interconexión y conexión al SEN | Incluye preanálisis de viabilidad citado en FAQ; no se cuenta dos veces. | `E:242`; `Q:181` |
| E12 | Contratos de interconexión en media y alta tensión | Gestión de formalización. | `E:243` |
| E13 | Coordinación con CFE Transmisión y Distribución | No presentarla automáticamente como un permiso independiente de transmisión. | `E:244`; `H:269` |
| E14 | Cumplimiento y representación en Código de Red | Diagnóstico, evidencia y acciones aplicables. | `E:245` |
| E15 | Registro y acceso al Mercado Eléctrico Mayorista | Registro y acceso según participante. | `E:264` |
| E16 | Estrategia de despacho y ofertas de energía | Operación en mercado. | `E:265` |
| E17 | Gestión de Certificados de Energías Limpias (CEL) | Gestión y seguimiento. | `E:266` |
| E18 | Representación técnica ante CENACE | Disputas y ajustes técnicos; litigio enlazado a Legal. | `E:267` |
| E19 | Registro y renovación del padrón de contratistas CFE | Asistencia a terceros explícita en FAQ; distinta de la credencial propia. | `Q:165` |
| E20 | Generación distribuida | Candidato con oferta en textos para agentes; alcance por precisar. | `I:24` |
| E21 | Almacenamiento de energía | Candidato con oferta en textos para agentes; no asumir suministro de BESS. | `I:25` |

### Ingeniería y ejecución (9)

| ID | Página de servicio propuesta | Alcance y criterio de agrupación | Fuente |
|---|---|---|---|
| E22 | Construcción y modernización de subestaciones hasta 230 kV | Incluye 115 kV y 230 kV. | `E:334`; `X:33` |
| E23 | Suministro e integración de tableros eléctricos | MT/AT, control, distribución, celdas blindadas y barras; variantes en una ficha. | `E:335`; `X:17` |
| E24 | Obra civil y montaje electromecánico | Ejecución de infraestructura. | `E:336`; `X:38` |
| E25 | Líneas de transmisión y distribución | Construcción e integración; no confundir con gestión regulatoria. | `E:336`; `X:39` |
| E26 | Ingeniería eléctrica básica y de detalle | Revisión/corrección DCCSED01 y DCCSET01, evaluación de riesgos y documentación CFE. | `E:337`; `Q:175`; `S:32` |
| E27 | Licitaciones CFE | Estructuración, presentación, seguimiento y participación; precisar alcance propio/para terceros. | `E:355` |
| E28 | Dirección y supervisión técnica en campo | Coordinación de ingeniería y ejecución. | `E:356` |
| E29 | Mantenimiento civil de infraestructura | Mención en catálogo general PEMEX; servicio compartido con Hidrocarburos. | `S:33` |
| E30 | Administración integral de proyectos y contratos | Planeación, contratos, estimaciones y avances físico-financieros. Enlazable desde Hidrocarburos; precios unitarios y MSC solo figuran en componente sin uso detectado. | `Y:23`; `Z:13` |

### Mantenimiento y pruebas (8)

| ID | Página de servicio propuesta | Alcance y criterio de agrupación | Fuente |
|---|---|---|---|
| E31 | Mantenimiento de transformadores y activos eléctricos | Preventivo, predictivo y correctivo; metodologías RCM, análisis de aceite e historial de intervenciones. | `X:48` |
| E32 | Termografía y ultrasonido industrial | Técnicas de diagnóstico dentro de una ficha. | `X:53` |
| E33 | Servicios de campo para activos críticos | La página anuncia 24/7; verificar alcance operativo antes de reproducir esa promesa. | `X:54` |
| E34 | Gestión de refacciones y repuestos | Abastecimiento para mantenimiento. | `X:55` |
| E35 | Pruebas FAT y SAT | Pruebas de aceptación en fábrica y sitio. | `X:23` |
| E36 | Commissioning y puesta en marcha | Incluye pruebas de energización, maniobras y expediente técnico de entrega. | `X:64` |
| E37 | Coordinación de protecciones y ajuste de relés | Selectividad, ajustes y verificación. | `X:22`; `X:69` |
| E38 | Verificación funcional de SCADA | Servicio eléctrico; instrumentación de proceso se conserva en Hidrocarburos. | `X:71` |


## Defensa legal

### Defensa y regularización (11)

| ID | Página de servicio propuesta | Alcance y criterio de agrupación | Fuente |
|---|---|---|---|
| J01 | Defensa ante falta de resolución de autorizaciones ASEA | Análisis y ejercicio de mecanismos procedentes, incluida afirmativa ficta cuando aplique; MIA/IP se enlazan a Hidrocarburos. | `J:151` |
| J02 | Atención a prevenciones y requerimientos | ASEA, CNE y SENER. | `J:152` |
| J03 | Levantamiento de clausuras | Incluye ruta técnico-jurídica para reapertura. | `J:168` |
| J04 | Respuesta a emplazamientos de autoridad | Atención jurídica del procedimiento. | `J:169` |
| J05 | Defensa en procedimientos administrativos de sanción | Representación y expediente probatorio. | `J:190` |
| J06 | Impugnación de multas y resoluciones | Estrategia y defensa contra el acto; vincular vías específicas. | `J:191` |
| J07 | Juicio de amparo | Contra actos de autoridad. | `J:192` |
| J08 | Demanda de nulidad ante TFJA | Juicio contencioso administrativo. | `J:193` |
| J09 | Recursos de revisión | Mencionado en home y FAQ; no omitir por faltar en el listado principal de Legal. | `V:61`; `Q:153` |
| J10 | Integración y regularización de expedientes técnico-jurídicos | Regularización interinstitucional ante ASEA/CNE/SENER. | `V:63`; `B:82` |
| J11 | Ingeniería correctiva y documentación As-Built | Levantamientos arquitectónicos, planos, unifilares, memorias de cálculo y dictámenes para regularización; servicio transversal enlazado desde ambos sectores. | `B:81`; `A:150`; `S:34` |


## Financiamiento de proyectos

### Estructuración financiera y vehículos (10)

| ID | Página de servicio propuesta | Alcance y criterio de agrupación | Fuente |
|---|---|---|---|
| P01 | Modelado financiero CAPEX/OPEX | Flujos y estructura de inversión. | `P:133` |
| P02 | Sindicación de deuda | Estructura de deuda y acreedores. | `P:134` |
| P03 | Créditos puente | Gestión y estructuración; APEN no se presenta como prestamista. | `P:134` |
| P04 | Estructuración de SPV | Vehículos de propósito específico; se unifican las dos menciones. | `P:135`; `P:217` |
| P05 | Evaluación de rentabilidad TIR/VPN | Unifica análisis institucional y evaluación de rentabilidad. | `P:136`; `P:231` |
| P06 | Análisis y gestión de riesgos financieros | Incluye riesgos cambiarios y del sector. | `P:137`; `P:231` |
| P07 | Fideicomisos de administración | Estructuración del vehículo. | `P:217` |
| P08 | Contratos de participación | Estructuración contractual del proyecto. | `P:217` |
| P09 | Sindicación y levantamiento de capital (equity) | Unifica sindicación de capital y gestión de equity. | `P:217` |
| P10 | Optimización de costos financieros | Revisión de la estructura de costos de financiamiento. | `P:177` |

### Fondeo y vinculación (4)

| ID | Página de servicio propuesta | Alcance y criterio de agrupación | Fuente |
|---|---|---|---|
| P11 | Fondeo con fondos de inversión y banca de desarrollo | Conexión con fuentes institucionales; NAFIN/Bancomext son referencias del contenido existente. | `P:168`; `A:164` |
| P12 | Presentación ante comités de inversión | Preparación y presentación de propuesta. | `P:173` |
| P13 | Roadshows de financiamiento | Vinculación y presentación institucional. | `P:174` |
| P14 | Búsqueda de socios estratégicos | Consorcios y coinversión según proyecto. | `P:176` |

### Evaluación técnica y financiera (3)

| ID | Página de servicio propuesta | Alcance y criterio de agrupación | Fuente |
|---|---|---|---|
| P15 | Valuación técnica de activos | Due diligence del activo. | `P:231` |
| P16 | Auditoría de viabilidad operativa | Evaluación técnica-operativa y bancabilidad del proyecto. | `P:231`; `A:165` |
| P17 | Validación de expedientes ante fondos | El texto actual dice 'Certificación ante fondos'; precisar quién valida y evitar atribuir acreditaciones no definidas. | `P:231` |

### Garantías y protección del capital (5)

| ID | Página de servicio propuesta | Alcance y criterio de agrupación | Fuente |
|---|---|---|---|
| P18 | Gestión de garantías y colaterales financieros/técnicos | Unifica dos menciones del catálogo. | `P:175`; `P:245` |
| P19 | Gestión de fianzas técnicas | Precisar si se gestiona mediante un tercero. | `P:245` |
| P20 | Gestión de seguros de infraestructura | Diferente del registro de póliza ante ASEA. | `P:245` |
| P21 | Blindaje legal del capital | Estructuración y protección contractual; enlazable desde Legal. | `P:245` |
| P22 | Garantías de cumplimiento | Gestión y estructuración. | `P:245` |

## Qué cambia de ubicación sin generar fichas duplicadas

- Los permisos eléctricos listados dentro de Hidrocarburos (H:267) pasan a Sector eléctrico: generación, comercialización, suministro, interconexión, conexión y mercado. Las menciones genéricas a transmisión/distribución se mantienen como alcance de coordinación y obra; no se inventa un permiso nuevo por el título actual.
- Las capacidades PEMEX de X:79 se reparten entre ingeniería de Hidrocarburos y cumplimiento ASEA. SASISOPA/NOM-016 no se cuentan otra vez por estar también en Capacidad ejecutiva.
- Los cuatro bloques técnicos de Capacidad ejecutiva se distribuyen en ingeniería, mantenimiento y pruebas eléctricas. Celdas/barras pertenecen a tableros; selectividad/relés a protecciones; energización y expediente final a puesta en marcha; historial a mantenimiento.
- MIA e Informe Preventivo se cuentan en Hidrocarburos. Legal conserva la defensa ante falta de resolución como servicio distinto y enlaza los instrumentos ambientales.
- Ingeniería correctiva/As-Built mantiene una ficha transversal en Legal, accesible desde Hidrocarburos y Electricidad. Conserva levantamientos, planos, diagramas y memorias.
- SPV, rentabilidad, equity, riesgos y colaterales estaban repetidos dentro de Project Finance y se unifican.
- La gestión social, administración de proyectos, mantenimiento civil y blindaje de capital pueden aparecer como enlaces en más de un área, con una sola página contada.

## Entradas con alcance por confirmar

Ya están incluidas en el total; no son fichas adicionales.

- H14-H15: bitácoras y regularización RENAGAS/PRONAGAS aparecen en textos para agentes; no tienen desarrollo equivalente en la página principal.
- H35: cesión de permisos CNE aparece como caso de uso para agentes y consulta; confirmar alcance de contratación.
- H39: exportación de petrolíferos aparece en textos para agentes, mientras la página principal enumera importaciones.
- H40-H41: controles volumétricos y timbrado se describen en textos secundarios/FAQ; precisar implementación, gestión documental y participación de terceros.
- H47-H50: unidades tanque, instalaciones de gas, montaje y mantenimiento de tanques aparecen en el asistente, con alcance breve.
- H51: licitaciones PEMEX describen participación propia. No transformar automáticamente esa capacidad en asesoría a terceros.
- E20-E21: generación distribuida y almacenamiento se ofrecen en instrucciones para agentes; requieren alcance comercial concreto. Cogeneración se conserva dentro de generación (E01).
- E30: administración de proyectos está en IdentityPurpose. El componente Ecosystem añade precios unitarios y MSC, pero no se detectó su importación en la app; esos detalles no se dan por vigentes.
- P17: el rótulo actual 'Certificación ante fondos' no define emisor ni acreditación. Se propone un nombre descriptivo hasta precisar el servicio.

## Menciones conservadas sin contarlas como servicios adicionales

- Diagnóstico inicial, ruta documental, integración y seguimiento general: etapas comunes y CTA; /diagnostico ya existe (S:39).
- Defensa legal especializada y gestión interdisciplinaria: categorías paraguas cubiertas por J01-J11.
- ISO 9001/14001/45001 y los registros propios CFE/Achilles: credenciales. La asistencia al registro de terceros sí queda en H52-H53 y E19.
- SICT aparece como logotipo en src/app/certificaciones/page.client.tsx:72, sin un trámite específico que permita añadir una ficha.
- PROY-NOM-023 aparece como referencia en L:28 e I:27. No se crea un servicio independiente a partir de una mención de norma/proyecto; conservar en seguimiento de normas de estaciones y verificar al redactar.
- 'Ingeniería básica, extendida y de detalle' del catálogo general se conserva en la ingeniería sectorial y correctiva, sin duplicar títulos genéricos.
- El antiguo RESUMEN_PROYECTO.md menciona Upstream/Downstream, Sostenibilidad e Innovación como categorías. No coincide con el catálogo actual ni desglosa servicios; queda fuera del conteo vigente.
- Los temas de Energy Explica (por ejemplo, costos de apertura o qué es una autoridad) no se convierten todos automáticamente en páginas de venta.

## Antes de implementar

1. Revisar esta lista con APEN, especialmente los alcances secundarios señalados, y decidir si alguna variante requiere ficha separada.
2. Crear una ficha por entrada aceptada, vinculada a su área, categoría, autoridad cuando corresponda y consultas relacionadas.
3. Destacar petcoke en Hidrocarburos y usar el nombre visible Financiamiento de proyectos.
4. Reorganizar páginas sectoriales y navbar usando este catálogo como fuente única.
5. Retirar Capacidad ejecutiva solo cuando todo su contenido tenga destino, con redirección y actualización de navegación, sitemap y textos para agentes.

No se modificó código de la aplicación ni se crearon páginas en esta revisión. No se ejecutó build, commit ni push.
