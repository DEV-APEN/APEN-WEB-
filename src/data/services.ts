import { getServiceArea, type ServiceAreaId } from "./service-areas";

export type Service = {
  id: string; area: ServiceAreaId; category: string; slug: string; title: string;
  summary: string; inputs: string[]; deliverable: string;
};

export const services: Service[] = [
  {
    "id": "H01",
    "area": "hidrocarburos",
    "category": "cumplimiento-asea",
    "slug": "licencia-de-funcionamiento",
    "title": "Licencia de funcionamiento",
    "summary": "Integramos la información de la instalación para identificar la licencia de funcionamiento aplicable y preparar su gestión. Revisamos actividad, ubicación y antecedentes antes de definir la ruta de presentación.",
    "inputs": [
      "Actividad y ubicación de la instalación",
      "Licencias y antecedentes disponibles"
    ],
    "deliverable": "Expediente de solicitud y relación de observaciones por atender."
  },
  {
    "id": "H02",
    "area": "hidrocarburos",
    "category": "cumplimiento-asea",
    "slug": "licencia-ambiental-unica-lau",
    "title": "Licencia Ambiental Única (LAU)",
    "summary": "Organizamos la información operativa y ambiental necesaria para gestionar la Licencia Ambiental Única. El trabajo vincula equipos, procesos, emisiones y documentación del establecimiento.",
    "inputs": [
      "Inventario de equipos y procesos",
      "Información de emisiones y permisos ambientales"
    ],
    "deliverable": "Expediente ambiental integrado y seguimiento de su presentación."
  },
  {
    "id": "H03",
    "area": "hidrocarburos",
    "category": "cumplimiento-asea",
    "slug": "manifestacion-de-impacto-ambiental-mia",
    "title": "Manifestación de Impacto Ambiental (MIA)",
    "summary": "Elaboramos y gestionamos el estudio de impacto ambiental del proyecto a partir de su ubicación, obras y operación prevista. Integramos la descripción técnica, la identificación de impactos y las medidas propuestas para su evaluación.",
    "inputs": [
      "Ubicación, planos y descripción de obras",
      "Antecedentes del predio y autorizaciones existentes"
    ],
    "deliverable": "Estudio de impacto ambiental, anexos técnicos y expediente para presentación."
  },
  {
    "id": "H04",
    "area": "hidrocarburos",
    "category": "cumplimiento-asea",
    "slug": "informe-preventivo",
    "title": "Informe Preventivo",
    "summary": "Revisamos si el proyecto puede seguir la vía del Informe Preventivo y preparamos su documentación. La selección del instrumento depende de las características y antecedentes de la instalación.",
    "inputs": [
      "Descripción y ubicación del proyecto",
      "Planos, obras previstas y antecedentes ambientales"
    ],
    "deliverable": "Informe y anexos que documentan el alcance del proyecto."
  },
  {
    "id": "H05",
    "area": "hidrocarburos",
    "category": "cumplimiento-asea",
    "slug": "analisis-de-riesgo-del-sector-hidrocarburos",
    "title": "Análisis de riesgo del sector hidrocarburos",
    "summary": "Analizamos escenarios de riesgo asociados con sustancias, equipos y condiciones de operación. El estudio conecta la identificación de peligros con medidas de prevención y respuesta adecuadas a la instalación.",
    "inputs": [
      "Inventario de sustancias y capacidades",
      "Diagramas de proceso y condiciones operativas"
    ],
    "deliverable": "Análisis de escenarios, medidas propuestas y expediente técnico de riesgos."
  },
  {
    "id": "H06",
    "area": "hidrocarburos",
    "category": "cumplimiento-asea",
    "slug": "dictamen-de-operacion",
    "title": "Dictamen de operación",
    "summary": "Coordinamos la preparación documental y técnica para el dictamen de operación. Revisamos el estado de la instalación y acompañamos la atención de hallazgos con el dictaminador que corresponda.",
    "inputs": [
      "Dictámenes anteriores y observaciones",
      "Planos y registros de operación y mantenimiento"
    ],
    "deliverable": "Carpeta de evidencias y seguimiento de observaciones para la evaluación."
  },
  {
    "id": "H07",
    "area": "hidrocarburos",
    "category": "cumplimiento-asea",
    "slug": "protocolo-de-respuesta-a-emergencias",
    "title": "Protocolo de respuesta a emergencias",
    "summary": "Integramos el protocolo de respuesta a emergencias según los riesgos y recursos de la instalación. Definimos responsabilidades, comunicación y acciones de respuesta con el equipo operativo.",
    "inputs": [
      "Escenarios de riesgo y planos",
      "Personal, equipos y recursos de emergencia"
    ],
    "deliverable": "Protocolo documentado con responsables y secuencia de respuesta."
  },
  {
    "id": "H08",
    "area": "hidrocarburos",
    "category": "cumplimiento-asea",
    "slug": "registro-de-generacion-de-residuos-peligrosos-y-de-manejo-especial",
    "title": "Registro de generación de residuos peligrosos y de manejo especial",
    "summary": "Revisamos los residuos generados y la documentación de manejo para preparar los registros correspondientes. Se distingue el tipo de residuo y la autoridad competente antes de integrar cada expediente.",
    "inputs": [
      "Inventario y cantidades de residuos",
      "Procesos generadores y documentación de manejo"
    ],
    "deliverable": "Clasificación documental y expedientes de registro según el caso."
  },
  {
    "id": "H09",
    "area": "hidrocarburos",
    "category": "cumplimiento-asea",
    "slug": "cedula-de-operacion-anual-coa",
    "title": "Cédula de Operación Anual (COA)",
    "summary": "Preparamos la información de operación y desempeño ambiental para la Cédula de Operación Anual. Revisamos la consistencia de datos, registros y documentación del periodo reportado.",
    "inputs": [
      "Registros ambientales del periodo",
      "Consumos, emisiones, residuos y antecedentes"
    ],
    "deliverable": "Reporte integrado con soporte documental y seguimiento de presentación."
  },
  {
    "id": "H10",
    "area": "hidrocarburos",
    "category": "cumplimiento-asea",
    "slug": "registro-de-poliza-de-seguro-ante-asea",
    "title": "Registro de póliza de seguro ante ASEA",
    "summary": "Gestionamos la integración documental para registrar la póliza de seguro de la instalación ante ASEA. Revisamos titular, actividad, datos del establecimiento y documentación de la cobertura.",
    "inputs": [
      "Póliza y comprobantes disponibles",
      "Datos del titular y de la instalación"
    ],
    "deliverable": "Expediente de registro y relación de ajustes documentales necesarios."
  },
  {
    "id": "H11",
    "area": "hidrocarburos",
    "category": "cumplimiento-asea",
    "slug": "diseno-conformacion-autorizacion-e-implementacion-de-sasisopa",
    "title": "Diseño, conformación, autorización e implementación de SASISOPA",
    "summary": "Diseñamos e implementamos el SASISOPA en relación con la operación real de la empresa. El alcance distingue conformación, autorización por instalación y aplicación de procedimientos, responsables y evidencias.",
    "inputs": [
      "Organización y actividades de la empresa",
      "Instalaciones, procedimientos y evidencia existente"
    ],
    "deliverable": "Sistema documentado, ruta de gestión y plan de implementación por instalación."
  },
  {
    "id": "H12",
    "area": "hidrocarburos",
    "category": "cumplimiento-asea",
    "slug": "cumplimiento-nom-003-asea-2016",
    "title": "Cumplimiento NOM-003-ASEA-2016",
    "summary": "Revisamos los criterios técnicos aplicables de la NOM-003-ASEA-2016 en el contexto de la instalación. Organizamos la evidencia y las adecuaciones necesarias para atender su evaluación.",
    "inputs": [
      "Tipo de instalación y actividad",
      "Ingeniería, equipos y dictámenes disponibles"
    ],
    "deliverable": "Diagnóstico de brechas y plan de atención documental y técnica."
  },
  {
    "id": "H13",
    "area": "hidrocarburos",
    "category": "cumplimiento-asea",
    "slug": "cumplimiento-nom-005-asea-2016",
    "title": "Cumplimiento NOM-005-ASEA-2016",
    "summary": "Evaluamos la documentación y condiciones operativas frente a los criterios aplicables de la NOM-005-ASEA-2016. Coordinamos la atención de brechas y la evidencia de operación y mantenimiento.",
    "inputs": [
      "Planos y dictámenes de la estación",
      "Bitácoras y programas de mantenimiento"
    ],
    "deliverable": "Matriz de cumplimiento y expediente de acciones correctivas."
  },
  {
    "id": "H14",
    "area": "hidrocarburos",
    "category": "cumplimiento-asea",
    "slug": "integracion-y-seguimiento-de-bitacoras",
    "title": "Integración y seguimiento de bitácoras",
    "summary": "Organizamos bitácoras y registros para que la evidencia de operación, mantenimiento y seguridad corresponda con la instalación. El servicio define responsables, formatos y trazabilidad de las intervenciones.",
    "inputs": [
      "Equipos y programa de mantenimiento",
      "Formatos y registros utilizados actualmente"
    ],
    "deliverable": "Conjunto de registros y esquema de seguimiento de evidencias."
  },
  {
    "id": "H15",
    "area": "hidrocarburos",
    "category": "cumplimiento-asea",
    "slug": "regularizacion-renagas-pronagas",
    "title": "Regularización RENAGAS / PRONAGAS",
    "summary": "Revisamos los antecedentes RENAGAS y la situación de la instalación frente a PRONAGAS para ordenar su expediente de regularización. La ruta se determina con la documentación y comunicaciones oficiales del caso.",
    "inputs": [
      "Antecedentes de registro y notificaciones",
      "Autorizaciones, planos y dictámenes disponibles"
    ],
    "deliverable": "Diagnóstico documental y ruta de regularización por instalación."
  },
  {
    "id": "H16",
    "area": "hidrocarburos",
    "category": "permisos-cne",
    "slug": "pre-registro-en-oficialia-de-partes-electronicas-ope",
    "title": "Pre-registro en Oficialía de Partes Electrónicas (OPE)",
    "summary": "Preparamos la documentación de la empresa y su representación para gestionar el pre-registro en OPE. Revisamos que los datos corporativos coincidan con los del expediente regulatorio.",
    "inputs": [
      "Documentación corporativa y representación",
      "Datos del solicitante y medios de contacto"
    ],
    "deliverable": "Expediente de alta y acompañamiento en la gestión electrónica."
  },
  {
    "id": "H17",
    "area": "hidrocarburos",
    "category": "permisos-cne",
    "slug": "permiso-para-estaciones-de-servicio-expendio-de-petroliferos",
    "title": "Permiso para estaciones de servicio / expendio de petrolíferos",
    "summary": "Integramos y gestionamos el expediente del permiso para una estación de servicio de expendio de petrolíferos. Coordinamos información corporativa, ubicación, actividad e ingeniería para presentar una solicitud consistente.",
    "inputs": [
      "Datos del titular y del predio",
      "Descripción de la estación y documentación técnica"
    ],
    "deliverable": "Expediente del permiso y seguimiento de requerimientos de la solicitud."
  },
  {
    "id": "H18",
    "area": "hidrocarburos",
    "category": "permisos-cne",
    "slug": "permiso-para-autoconsumo-de-hidrocarburos",
    "title": "Permiso para autoconsumo de hidrocarburos",
    "summary": "Definimos la ruta documental para una instalación de autoconsumo de hidrocarburos según su operación. Revisamos producto, almacenamiento, usuarios y destino del combustible antes de preparar el expediente.",
    "inputs": [
      "Productos, capacidades y uso previsto",
      "Ubicación e ingeniería de la instalación"
    ],
    "deliverable": "Expediente de gestión adecuado a la modalidad de autoconsumo."
  },
  {
    "id": "H19",
    "area": "hidrocarburos",
    "category": "permisos-cne",
    "slug": "permiso-para-estaciones-de-carburacion",
    "title": "Permiso para estaciones de carburación",
    "summary": "Gestionamos el expediente para estaciones de carburación, vinculando el modelo de operación con la documentación del predio y la instalación. Coordinamos los frentes regulatorios necesarios para el proyecto.",
    "inputs": [
      "Ubicación y capacidad de la estación",
      "Ingeniería y documentación del titular"
    ],
    "deliverable": "Solicitud integrada y seguimiento de la ruta regulatoria."
  },
  {
    "id": "H20",
    "area": "hidrocarburos",
    "category": "permisos-cne",
    "slug": "permiso-para-plantas-de-distribucion",
    "title": "Permiso para plantas de distribución",
    "summary": "Preparamos la gestión de permisos para plantas de distribución conforme al producto y esquema operativo. Integramos capacidades, instalaciones, equipos y documentación de la empresa.",
    "inputs": [
      "Producto, capacidades y modalidad de distribución",
      "Predio, equipos y documentación corporativa"
    ],
    "deliverable": "Expediente de permiso y matriz de información pendiente."
  },
  {
    "id": "H21",
    "area": "hidrocarburos",
    "category": "permisos-cne",
    "slug": "permiso-de-almacenamiento",
    "title": "Permiso de almacenamiento",
    "summary": "Integramos la solicitud de almacenamiento de hidrocarburos o petrolíferos a partir del producto, capacidad y configuración de la terminal. Revisamos que la operación propuesta coincida con su documentación técnica.",
    "inputs": [
      "Productos y capacidades de almacenamiento",
      "Planos, instalaciones y documentos del titular"
    ],
    "deliverable": "Expediente de almacenamiento y seguimiento de su gestión."
  },
  {
    "id": "H22",
    "area": "hidrocarburos",
    "category": "permisos-cne",
    "slug": "permiso-de-distribucion-por-ductos-y-otros-medios",
    "title": "Permiso de distribución por ductos y otros medios",
    "summary": "Gestionamos permisos de distribución según el producto y los medios utilizados. Organizamos la información de instalaciones, ductos o unidades y el modelo de suministro que se pretende operar.",
    "inputs": [
      "Productos, rutas y medios de distribución",
      "Infraestructura y documentos de la empresa"
    ],
    "deliverable": "Expediente de la modalidad solicitada y soporte de la operación."
  },
  {
    "id": "H23",
    "area": "hidrocarburos",
    "category": "permisos-cne",
    "slug": "permiso-de-transporte-por-ductos-y-otros-medios",
    "title": "Permiso de transporte por ductos y otros medios",
    "summary": "Preparamos expedientes de transporte de hidrocarburos o petrolíferos por ductos y otros medios. El alcance considera la infraestructura, las unidades y la operación prevista por el solicitante.",
    "inputs": [
      "Producto, trayectos y medios de transporte",
      "Datos técnicos y documentación del titular"
    ],
    "deliverable": "Solicitud de transporte y documentación técnica de soporte."
  },
  {
    "id": "H24",
    "area": "hidrocarburos",
    "category": "permisos-cne",
    "slug": "permiso-de-licuefaccion",
    "title": "Permiso de licuefacción",
    "summary": "Integramos la ruta documental de proyectos de licuefacción, conectando el proceso industrial con capacidad, infraestructura y modelo operativo. La gestión se define conforme a la configuración específica del proyecto.",
    "inputs": [
      "Descripción del proceso y capacidad",
      "Ingeniería de instalaciones y documentación corporativa"
    ],
    "deliverable": "Expediente técnico-regulatorio para la solicitud correspondiente."
  },
  {
    "id": "H25",
    "area": "hidrocarburos",
    "category": "permisos-cne",
    "slug": "permiso-de-regasificacion",
    "title": "Permiso de regasificación",
    "summary": "Preparamos el expediente de proyectos de regasificación conforme a la infraestructura, capacidad y operación propuestas. Coordinamos la información técnica y corporativa necesaria para su gestión.",
    "inputs": [
      "Proceso de regasificación y capacidad",
      "Ubicación, equipos e ingeniería disponible"
    ],
    "deliverable": "Expediente de solicitud y seguimiento de información complementaria."
  },
  {
    "id": "H26",
    "area": "hidrocarburos",
    "category": "permisos-cne",
    "slug": "permiso-de-comercializacion-de-hidrocarburos",
    "title": "Permiso de comercialización de hidrocarburos",
    "summary": "Gestionamos el permiso de comercialización conforme a los productos y operaciones de la empresa. Revisamos el modelo comercial, los participantes y la documentación que sustenta la actividad solicitada.",
    "inputs": [
      "Productos y modelo de comercialización",
      "Documentos corporativos y antecedentes regulatorios"
    ],
    "deliverable": "Expediente de comercialización y seguimiento de la solicitud."
  },
  {
    "id": "H27",
    "area": "hidrocarburos",
    "category": "permisos-cne",
    "slug": "gestion-del-pago-de-supervision-anual",
    "title": "Gestión del pago de supervisión anual",
    "summary": "Acompañamos la identificación y atención del pago de supervisión anual asociado al permiso. Revisamos los datos del titular, la referencia de pago y la evidencia para mantener trazabilidad de la obligación.",
    "inputs": [
      "Permiso y datos del titular",
      "Antecedentes de pagos y notificaciones"
    ],
    "deliverable": "Carpeta de referencias y comprobantes de la gestión realizada."
  },
  {
    "id": "H28",
    "area": "hidrocarburos",
    "category": "permisos-cne",
    "slug": "informe-de-pruebas-de-laboratorio-nom-016-cre-2016",
    "title": "Informe de pruebas de laboratorio NOM-016-CRE-2016",
    "summary": "Coordinamos las pruebas de calidad del producto y la integración de resultados de laboratorio vinculados con NOM-016-CRE-2016. El alcance se ajusta al combustible, punto de muestreo y documentación disponible.",
    "inputs": [
      "Producto y puntos de muestreo",
      "Resultados anteriores y trazabilidad de suministro"
    ],
    "deliverable": "Informe de resultados y soporte de pruebas con el laboratorio participante."
  },
  {
    "id": "H29",
    "area": "hidrocarburos",
    "category": "permisos-cne",
    "slug": "dictamen-de-calidad-de-producto-nom-016-cre-2016",
    "title": "Dictamen de calidad de producto NOM-016-CRE-2016",
    "summary": "Gestionamos la preparación y revisión documental para el dictamen de calidad del producto. Se vinculan resultados de laboratorio, trazabilidad y datos de la operación con la evaluación correspondiente.",
    "inputs": [
      "Resultados de laboratorio del producto",
      "Documentación de origen, suministro y operación"
    ],
    "deliverable": "Expediente de calidad y coordinación del dictamen con el evaluador correspondiente."
  },
  {
    "id": "H30",
    "area": "hidrocarburos",
    "category": "permisos-cne",
    "slug": "reporte-de-estructura-de-capital-social-en-ope",
    "title": "Reporte de estructura de capital social en OPE",
    "summary": "Preparamos el reporte de estructura de capital social para OPE. Verificamos la correspondencia entre documentos societarios, titular del permiso y cambios que deban comunicarse.",
    "inputs": [
      "Actas y estructura accionaria",
      "Permiso y antecedentes de reportes"
    ],
    "deliverable": "Reporte corporativo integrado y soporte de presentación."
  },
  {
    "id": "H31",
    "area": "hidrocarburos",
    "category": "permisos-cne",
    "slug": "acreditacion-de-procedencia-licita-del-producto",
    "title": "Acreditación de procedencia lícita del producto",
    "summary": "Organizamos la evidencia de origen y adquisición del producto para documentar su procedencia lícita. Vinculamos proveedores, operaciones y comprobantes con la trazabilidad del combustible.",
    "inputs": [
      "Facturas y documentos de adquisición",
      "Proveedores, contratos y registros de recepción"
    ],
    "deliverable": "Carpeta de trazabilidad y relación de inconsistencias documentales."
  },
  {
    "id": "H32",
    "area": "hidrocarburos",
    "category": "permisos-cne",
    "slug": "reporte-de-quejas-en-ope",
    "title": "Reporte de quejas en OPE",
    "summary": "Integramos reportes de quejas para OPE con información del periodo y del seguimiento realizado. Revisamos la consistencia de cada registro y su documentación de atención.",
    "inputs": [
      "Registro de quejas del periodo",
      "Evidencias de atención y datos del permiso"
    ],
    "deliverable": "Reporte de quejas y soporte documental de seguimiento."
  },
  {
    "id": "H33",
    "area": "hidrocarburos",
    "category": "permisos-cne",
    "slug": "reporte-de-incidencias-en-ope",
    "title": "Reporte de incidencias en OPE",
    "summary": "Preparamos reportes de incidencias a partir de eventos documentados y medidas adoptadas. Ordenamos la información de la instalación para su presentación y seguimiento en OPE.",
    "inputs": [
      "Bitácoras de incidencias y acciones realizadas",
      "Datos de la instalación y del permiso"
    ],
    "deliverable": "Reporte de incidencias con evidencia de atención."
  },
  {
    "id": "H34",
    "area": "hidrocarburos",
    "category": "permisos-cne",
    "slug": "seguimiento-de-ope",
    "title": "Seguimiento de OPE",
    "summary": "Damos seguimiento al expediente electrónico, notificaciones y obligaciones de OPE. Organizamos pendientes, responsables y documentación para facilitar la atención oportuna de cada asunto.",
    "inputs": [
      "Permisos y trámites activos",
      "Notificaciones y calendario de obligaciones"
    ],
    "deliverable": "Registro de seguimiento con pendientes, responsables y evidencias."
  },
  {
    "id": "H35",
    "area": "hidrocarburos",
    "category": "permisos-cne",
    "slug": "cesion-de-permisos-cne",
    "title": "Cesión de permisos CNE",
    "summary": "Revisamos la operación propuesta y los documentos del titular y adquirente para estructurar una cesión de permiso. El servicio organiza la ruta de autorización y la continuidad documental de la actividad.",
    "inputs": [
      "Permiso vigente y datos de las partes",
      "Documentos de la operación y antecedentes del titular"
    ],
    "deliverable": "Diagnóstico de cesión y expediente para la gestión procedente."
  },
  {
    "id": "H36",
    "area": "hidrocarburos",
    "category": "impacto-social",
    "slug": "gestion-de-impacto-social-misse-evis",
    "title": "Gestión de impacto social (MISSE / EVIS)",
    "summary": "Integramos la gestión de impacto social del proyecto desde el diagnóstico territorial hasta el seguimiento de compromisos. El alcance comprende actores, participación social, documentación y acompañamiento ante SENER.",
    "inputs": [
      "Ubicación, alcance y etapas del proyecto",
      "Información territorial y antecedentes sociales"
    ],
    "deliverable": "Documento de impacto social, mapa de actores y plan de seguimiento."
  },
  {
    "id": "H37",
    "area": "hidrocarburos",
    "category": "impacto-social",
    "slug": "permiso-de-importacion-de-petroliferos",
    "title": "Permiso de importación de petrolíferos",
    "summary": "Preparamos la gestión de permisos de importación de petrolíferos según producto, volumen y operación comercial. Coordinamos la documentación sectorial y los elementos que deban revisarse para aduanas.",
    "inputs": [
      "Producto, volumen y origen",
      "Modelo de importación y documentos del solicitante"
    ],
    "deliverable": "Expediente de importación y coordinación documental de la operación."
  },
  {
    "id": "H38",
    "area": "hidrocarburos",
    "category": "impacto-social",
    "slug": "permiso-de-importacion-de-gas-natural",
    "title": "Permiso de importación de gas natural",
    "summary": "Integramos expedientes para la importación de gas natural, considerando suministro, volúmenes y destino. Revisamos la documentación del solicitante y la articulación con su operación energética.",
    "inputs": [
      "Origen, volúmenes y destino del gas",
      "Acuerdos de suministro y documentación del titular"
    ],
    "deliverable": "Expediente de gestión y relación de condiciones documentales a atender."
  },
  {
    "id": "H39",
    "area": "hidrocarburos",
    "category": "impacto-social",
    "slug": "permiso-de-exportacion-de-petroliferos",
    "title": "Permiso de exportación de petrolíferos",
    "summary": "Revisamos la ruta documental de exportación de petrolíferos según producto, destino y operación. El alcance se define con el expediente comercial y los trámites que correspondan al caso.",
    "inputs": [
      "Producto, volúmenes y país de destino",
      "Contratos y documentos corporativos"
    ],
    "deliverable": "Ruta de gestión y expediente de soporte de exportación."
  },
  {
    "id": "H40",
    "area": "hidrocarburos",
    "category": "control-volumetrico",
    "slug": "implementacion-y-cumplimiento-de-controles-volumetricos",
    "title": "Implementación y cumplimiento de controles volumétricos",
    "summary": "Coordinamos la integración de medición, registros y documentación de controles volumétricos. Se revisa la consistencia entre equipos, operación, información fiscal y evidencias del sistema utilizado.",
    "inputs": [
      "Equipos y software de medición",
      "Registros operativos, reportes y documentación técnica"
    ],
    "deliverable": "Diagnóstico del sistema y plan de integración de evidencias y reportes."
  },
  {
    "id": "H41",
    "area": "hidrocarburos",
    "category": "control-volumetrico",
    "slug": "regularizacion-de-lista-l-cne-y-timbrado-del-complemento-de-hidrocarburos",
    "title": "Regularización de Lista L_CNE y timbrado del Complemento de Hidrocarburos",
    "summary": "Analizamos discrepancias entre permiso, datos fiscales y validación del Complemento de Hidrocarburos. Coordinamos la revisión regulatoria y la información necesaria para atender incidencias de timbrado.",
    "inputs": [
      "Mensaje de error y datos del permiso",
      "RFC, razón social y ejemplos de comprobantes"
    ],
    "deliverable": "Diagnóstico de la incidencia y ruta de corrección documental."
  },
  {
    "id": "H42",
    "area": "hidrocarburos",
    "category": "ingenieria-y-ejecucion",
    "slug": "ingenieria-para-instalaciones-de-proceso",
    "title": "Ingeniería para instalaciones de proceso",
    "summary": "Desarrollamos ingeniería para instalaciones de proceso de acuerdo con su operación y necesidades de ejecución. Coordinamos disciplinas y documentación para que equipos, procesos y obras compartan una base técnica.",
    "inputs": [
      "Bases de diseño y condiciones del proceso",
      "Planos existentes y alcance de obra"
    ],
    "deliverable": "Paquete de ingeniería con planos, especificaciones y documentación del proyecto."
  },
  {
    "id": "H43",
    "area": "hidrocarburos",
    "category": "ingenieria-y-ejecucion",
    "slug": "obra-electrica-en-zonas-clasificadas",
    "title": "Obra eléctrica en zonas clasificadas",
    "summary": "Coordinamos obra eléctrica en áreas clasificadas de instalaciones de hidrocarburos. Revisamos clasificación del área, equipos y condiciones de instalación antes de definir el alcance técnico de los trabajos.",
    "inputs": [
      "Clasificación de áreas y planos eléctricos",
      "Especificaciones de equipos y condiciones operativas"
    ],
    "deliverable": "Plan de intervención y documentación de ejecución y verificación."
  },
  {
    "id": "H44",
    "area": "hidrocarburos",
    "category": "ingenieria-y-ejecucion",
    "slug": "instrumentacion-y-control-industrial",
    "title": "Instrumentación y control industrial",
    "summary": "Integramos instrumentación y control para procesos industriales, vinculando señales, equipos y necesidades de operación. El alcance puede comprender integración o modernización de sistemas existentes.",
    "inputs": [
      "Diagramas de proceso y lista de instrumentos",
      "Arquitectura de control y necesidades operativas"
    ],
    "deliverable": "Diseño de integración, documentación de señales y verificaciones funcionales."
  },
  {
    "id": "H45",
    "area": "hidrocarburos",
    "category": "ingenieria-y-ejecucion",
    "slug": "integracion-de-sistemas-de-seguridad",
    "title": "Integración de sistemas de seguridad",
    "summary": "Coordinamos la integración de sistemas de seguridad industrial según las funciones requeridas por el proceso. Revisamos interfaces, instrumentación y documentación técnica para definir la solución y su verificación.",
    "inputs": [
      "Análisis de riesgos y funciones de seguridad",
      "Arquitectura de control y equipos disponibles"
    ],
    "deliverable": "Especificación de integración y evidencia de verificación funcional."
  },
  {
    "id": "H46",
    "area": "hidrocarburos",
    "category": "ingenieria-y-ejecucion",
    "slug": "gestion-de-contratistas-y-proyectos-multisede",
    "title": "Gestión de contratistas y proyectos multisede",
    "summary": "Gestionamos la coordinación de contratistas y frentes de trabajo en una o varias instalaciones. Integramos programación, responsabilidades, control documental y seguimiento de avances bajo la dirección del proyecto.",
    "inputs": [
      "Alcances de contratos y ubicaciones",
      "Programa de obra y matriz de responsables"
    ],
    "deliverable": "Plan de coordinación y reportes de avance y pendientes por frente."
  },
  {
    "id": "H47",
    "area": "hidrocarburos",
    "category": "ingenieria-y-ejecucion",
    "slug": "unidades-tanque-y-autotanques",
    "title": "Unidades tanque y autotanques",
    "summary": "Revisamos las necesidades de unidades tanque y autotanques dentro de la operación de hidrocarburos. Definimos el alcance técnico, documental y logístico de la participación de APEN para cada unidad y operación.",
    "inputs": [
      "Producto, capacidades y uso de las unidades",
      "Inventario, ubicación y documentación técnica"
    ],
    "deliverable": "Propuesta de alcance por unidad y ruta de atención técnica-operativa."
  },
  {
    "id": "H48",
    "area": "hidrocarburos",
    "category": "ingenieria-y-ejecucion",
    "slug": "instalaciones-de-gas",
    "title": "Instalaciones de gas",
    "summary": "Coordinamos proyectos e intervenciones en instalaciones de gas según su uso y configuración. El trabajo comienza con la revisión de ingeniería, equipos y condiciones de seguridad para definir el alcance.",
    "inputs": [
      "Tipo de gas y operación prevista",
      "Planos, equipos y condiciones de la instalación"
    ],
    "deliverable": "Alcance técnico y programa de intervención de la instalación."
  },
  {
    "id": "H49",
    "area": "hidrocarburos",
    "category": "ingenieria-y-ejecucion",
    "slug": "montaje-de-tanques",
    "title": "Montaje de tanques",
    "summary": "Coordinamos el montaje de tanques conforme a su función, capacidad y condiciones del sitio. Integramos planeación de maniobras, interfaces de obra y documentación técnica de ejecución.",
    "inputs": [
      "Especificaciones del tanque y planos",
      "Condiciones del sitio y programa de obra"
    ],
    "deliverable": "Plan de montaje y expediente de ejecución y revisión."
  },
  {
    "id": "H50",
    "area": "hidrocarburos",
    "category": "ingenieria-y-ejecucion",
    "slug": "mantenimiento-de-tanques",
    "title": "Mantenimiento de tanques",
    "summary": "Organizamos mantenimiento de tanques a partir de su condición, producto y antecedentes de servicio. Definimos intervenciones, disponibilidad operativa y evidencia necesaria para documentar los trabajos.",
    "inputs": [
      "Inventario y condición de tanques",
      "Inspecciones previas y programa de operación"
    ],
    "deliverable": "Programa de mantenimiento y registro de intervenciones realizadas."
  },
  {
    "id": "H51",
    "area": "hidrocarburos",
    "category": "ingenieria-y-ejecucion",
    "slug": "participacion-y-ejecucion-de-proyectos-en-licitaciones-pemex",
    "title": "Participación y ejecución de proyectos en licitaciones PEMEX",
    "summary": "Participamos en proyectos y procesos de contratación vinculados con PEMEX, integrando capacidad técnica y coordinación de ejecución. La propuesta se define conforme al objeto de contratación y responsabilidades del proyecto.",
    "inputs": [
      "Bases o alcance del proyecto",
      "Especificaciones, calendario y responsabilidades"
    ],
    "deliverable": "Propuesta de participación y plan técnico de ejecución del alcance acordado."
  },
  {
    "id": "H52",
    "area": "hidrocarburos",
    "category": "proveedores",
    "slug": "registro-de-proveedor-pemex-achilles",
    "title": "Registro de proveedor PEMEX / Achilles",
    "summary": "Acompañamos la preparación de información para el registro de proveedores en el entorno PEMEX y Achilles. Revisamos documentación corporativa, capacidad técnica y categorías de interés para integrar el perfil.",
    "inputs": [
      "Documentación corporativa y financiera",
      "Oferta de productos, servicios y evidencias de experiencia"
    ],
    "deliverable": "Expediente de registro y seguimiento de observaciones documentales."
  },
  {
    "id": "H53",
    "area": "hidrocarburos",
    "category": "proveedores",
    "slug": "ampliacion-de-categorias-achilles",
    "title": "Ampliación de categorías Achilles",
    "summary": "Preparamos la documentación para ampliar categorías de un registro Achilles existente. Vinculamos cada categoría solicitada con evidencia de capacidad técnica, experiencia y procesos de la empresa.",
    "inputs": [
      "Registro vigente y categorías objetivo",
      "Contratos, experiencia y documentación técnica"
    ],
    "deliverable": "Expediente de ampliación con evidencias por categoría."
  },
  {
    "id": "H54",
    "area": "hidrocarburos",
    "category": "coque-de-petroleo",
    "slug": "coque-de-petroleo-petcoke",
    "title": "Coque de petróleo (petcoke)",
    "summary": "APEN compra, vende, maneja, importa y exporta coque de petróleo por cuenta propia. Estructuramos el suministro de petcoke con acceso a PEMEX, fuentes alternativas de abastecimiento y coordinación logística según el volumen, destino y perfil de cada operación.",
    "inputs": [
      "Volumen, especificación y uso industrial del petcoke",
      "Origen o destino, frecuencia y condiciones de entrega"
    ],
    "deliverable": "Propuesta comercial y logística para la operación de suministro acordada."
  },
  {
    "id": "E01",
    "area": "energia",
    "category": "cumplimiento-regulatorio",
    "slug": "permisos-de-generacion-electrica",
    "title": "Permisos de generación eléctrica",
    "summary": "Gestionamos expedientes de generación eléctrica para proyectos renovables, convencionales y de cogeneración. Revisamos capacidad, esquema operativo y documentación técnica para definir la ruta aplicable y coordinar su presentación.",
    "inputs": [
      "Capacidad, tecnología y ubicación",
      "Ingeniería y modelo de operación"
    ],
    "deliverable": "Expediente de generación y seguimiento de la gestión regulatoria."
  },
  {
    "id": "E02",
    "area": "energia",
    "category": "cumplimiento-regulatorio",
    "slug": "autoconsumo-y-gestion-de-permisos-de-autoabasto-existentes",
    "title": "Autoconsumo y gestión de permisos de autoabasto existentes",
    "summary": "Revisamos proyectos de autoconsumo y permisos existentes de autoabasto para definir la ruta documental correspondiente. Distinguimos el régimen del permiso y la configuración de la instalación antes de proponer una gestión.",
    "inputs": [
      "Permiso existente o esquema previsto",
      "Capacidad, centros de carga e ingeniería"
    ],
    "deliverable": "Diagnóstico del régimen aplicable y expediente de gestión."
  },
  {
    "id": "E03",
    "area": "energia",
    "category": "cumplimiento-regulatorio",
    "slug": "comercializacion-de-energia-electrica",
    "title": "Comercialización de energía eléctrica",
    "summary": "Preparamos la gestión regulatoria para comercialización de energía según el modelo de participación de la empresa. Integramos documentación corporativa, operativa y comercial de la actividad propuesta.",
    "inputs": [
      "Modelo de comercialización y participantes",
      "Documentos corporativos y contratos disponibles"
    ],
    "deliverable": "Expediente de comercialización y seguimiento de la solicitud."
  },
  {
    "id": "E04",
    "area": "energia",
    "category": "cumplimiento-regulatorio",
    "slug": "suministro-electrico",
    "title": "Suministro eléctrico",
    "summary": "Organizamos la documentación para gestionar la actividad de suministro eléctrico según el esquema del proyecto. Revisamos participantes, operación y antecedentes para definir el alcance regulatorio.",
    "inputs": [
      "Modalidad de suministro y clientes previstos",
      "Documentación del titular y antecedentes"
    ],
    "deliverable": "Expediente de suministro y ruta de atención de requerimientos."
  },
  {
    "id": "E05",
    "area": "energia",
    "category": "cumplimiento-regulatorio",
    "slug": "importacion-de-energia-electrica",
    "title": "Importación de energía eléctrica",
    "summary": "Integramos expedientes de importación de energía eléctrica conforme a la operación propuesta. Revisamos origen, punto de intercambio y relaciones contractuales para coordinar los frentes técnicos y regulatorios.",
    "inputs": [
      "Origen de la energía y punto de intercambio",
      "Contratos, capacidades y datos del solicitante"
    ],
    "deliverable": "Expediente de gestión y soporte de la operación de importación."
  },
  {
    "id": "E06",
    "area": "energia",
    "category": "cumplimiento-regulatorio",
    "slug": "exportacion-de-energia-electrica",
    "title": "Exportación de energía eléctrica",
    "summary": "Preparamos la ruta documental de exportación de energía según el proyecto y sus relaciones comerciales. Coordinamos la información de generación, intercambio y documentación corporativa.",
    "inputs": [
      "Destino, capacidad y punto de intercambio",
      "Contratos y características de la central"
    ],
    "deliverable": "Expediente técnico-comercial para la gestión de exportación."
  },
  {
    "id": "E07",
    "area": "energia",
    "category": "cumplimiento-regulatorio",
    "slug": "reportes-de-obligaciones-periodicas-cne",
    "title": "Reportes de obligaciones periódicas CNE",
    "summary": "Preparamos y damos seguimiento a reportes periódicos vinculados con permisos del sector eléctrico. Ordenamos información de operación, obligaciones y constancias de presentación del titular.",
    "inputs": [
      "Permiso y calendario de obligaciones",
      "Registros del periodo y reportes anteriores"
    ],
    "deliverable": "Reportes integrados y control de evidencia de presentación."
  },
  {
    "id": "E08",
    "area": "energia",
    "category": "cumplimiento-regulatorio",
    "slug": "cumplimiento-de-terminos-y-condiciones-del-permiso",
    "title": "Cumplimiento de términos y condiciones del permiso",
    "summary": "Revisamos las condiciones particulares del permiso para traducirlas en obligaciones, responsables y evidencia de cumplimiento. El seguimiento se ajusta a la etapa y operación del proyecto.",
    "inputs": [
      "Permiso y resoluciones relacionadas",
      "Información operativa y evidencia de cumplimiento"
    ],
    "deliverable": "Matriz de obligaciones y plan de atención por responsable."
  },
  {
    "id": "E09",
    "area": "energia",
    "category": "cumplimiento-regulatorio",
    "slug": "seguimiento-de-cambios-regulatorios",
    "title": "Seguimiento de cambios regulatorios",
    "summary": "Damos seguimiento a cambios regulatorios que puedan afectar permisos y operación eléctrica. Identificamos su relación con el proyecto y organizamos las acciones documentales o técnicas necesarias.",
    "inputs": [
      "Permisos y descripción de la operación",
      "Obligaciones y procedimientos actuales"
    ],
    "deliverable": "Reporte de cambios aplicables y plan de adecuación del cumplimiento."
  },
  {
    "id": "E10",
    "area": "energia",
    "category": "cumplimiento-regulatorio",
    "slug": "modificacion-y-actualizacion-de-permisos",
    "title": "Modificación y actualización de permisos",
    "summary": "Integramos solicitudes de modificación o actualización del permiso cuando cambia el proyecto o sus datos. Revisamos el cambio propuesto frente al expediente y condiciones existentes.",
    "inputs": [
      "Permiso vigente y expediente original",
      "Descripción técnica y corporativa del cambio"
    ],
    "deliverable": "Expediente de modificación y seguimiento de la gestión."
  },
  {
    "id": "E11",
    "area": "energia",
    "category": "cumplimiento-regulatorio",
    "slug": "estudios-y-gestion-de-interconexion-y-conexion-al-sen",
    "title": "Estudios y gestión de interconexión y conexión al SEN",
    "summary": "Coordinamos la preparación técnica y documental para interconexión o conexión al Sistema Eléctrico Nacional. El trabajo incluye revisión preliminar de viabilidad y seguimiento de estudios e información requerida.",
    "inputs": [
      "Ubicación y punto de conexión propuesto",
      "Capacidad, tecnología y diagrama unifilar"
    ],
    "deliverable": "Expediente técnico de conexión y seguimiento de estudios y condiciones."
  },
  {
    "id": "E12",
    "area": "energia",
    "category": "cumplimiento-regulatorio",
    "slug": "contratos-de-interconexion-en-media-y-alta-tension",
    "title": "Contratos de interconexión en media y alta tensión",
    "summary": "Acompañamos la integración y formalización documental de contratos de interconexión en media y alta tensión. Revisamos estudios, obras y condiciones técnicas vinculadas con el proyecto.",
    "inputs": [
      "Estudios y condiciones de interconexión",
      "Documentación corporativa y alcance de obras"
    ],
    "deliverable": "Carpeta contractual y seguimiento de condiciones para formalización."
  },
  {
    "id": "E13",
    "area": "energia",
    "category": "cumplimiento-regulatorio",
    "slug": "coordinacion-con-cfe-transmision-y-distribucion",
    "title": "Coordinación con CFE Transmisión y Distribución",
    "summary": "Coordinamos interfaces técnicas y documentales con CFE Transmisión y Distribución para proyectos eléctricos. Organizamos requerimientos, obras asociadas y seguimiento de acuerdos del proyecto.",
    "inputs": [
      "Estudios y comunicaciones del proyecto",
      "Ingeniería y programa de obras"
    ],
    "deliverable": "Matriz de interfaces y seguimiento de acuerdos técnicos."
  },
  {
    "id": "E14",
    "area": "energia",
    "category": "cumplimiento-regulatorio",
    "slug": "cumplimiento-y-representacion-en-codigo-de-red",
    "title": "Cumplimiento y representación en Código de Red",
    "summary": "Diagnosticamos el cumplimiento del Código de Red y organizamos acciones, mediciones y evidencia. El alcance parte de las características del centro de carga o instalación y sus condiciones reales de operación.",
    "inputs": [
      "Diagrama unifilar y datos de demanda",
      "Mediciones, equipos y documentación eléctrica"
    ],
    "deliverable": "Diagnóstico, plan de acciones y carpeta de evidencia técnica."
  },
  {
    "id": "E15",
    "area": "energia",
    "category": "cumplimiento-regulatorio",
    "slug": "registro-y-acceso-al-mercado-electrico-mayorista",
    "title": "Registro y acceso al Mercado Eléctrico Mayorista",
    "summary": "Gestionamos la preparación documental para el registro y acceso al Mercado Eléctrico Mayorista. Revisamos el tipo de participación, capacidades y condiciones operativas del interesado.",
    "inputs": [
      "Tipo de participante y modelo de negocio",
      "Permisos, activos y documentación corporativa"
    ],
    "deliverable": "Expediente de participación y ruta de cumplimiento de requisitos."
  },
  {
    "id": "E16",
    "area": "energia",
    "category": "cumplimiento-regulatorio",
    "slug": "estrategia-de-despacho-y-ofertas-de-energia",
    "title": "Estrategia de despacho y ofertas de energía",
    "summary": "Apoyamos la preparación de estrategias de despacho y ofertas de energía a partir del perfil del activo y sus compromisos. Integramos información técnica, comercial y de operación para evaluar alternativas.",
    "inputs": [
      "Perfil de generación o demanda",
      "Contratos, restricciones y datos de operación"
    ],
    "deliverable": "Análisis de escenarios y propuesta de estrategia de participación."
  },
  {
    "id": "E17",
    "area": "energia",
    "category": "cumplimiento-regulatorio",
    "slug": "gestion-de-certificados-de-energias-limpias-cel",
    "title": "Gestión de Certificados de Energías Limpias (CEL)",
    "summary": "Organizamos la gestión y seguimiento de Certificados de Energías Limpias en relación con la actividad del participante. Revisamos registros, obligaciones y evidencia disponible.",
    "inputs": [
      "Datos del participante y activos",
      "Registros de certificados y obligaciones"
    ],
    "deliverable": "Control documental y seguimiento de gestiones relacionadas con CEL."
  },
  {
    "id": "E18",
    "area": "energia",
    "category": "cumplimiento-regulatorio",
    "slug": "representacion-tecnica-ante-cenace",
    "title": "Representación técnica ante CENACE",
    "summary": "Representamos técnicamente al proyecto ante CENACE para revisar ajustes, observaciones o diferencias operativas. Integramos evidencia y argumentos técnicos; la defensa judicial se atiende como un alcance específico.",
    "inputs": [
      "Comunicaciones y antecedentes del asunto",
      "Estudios, mediciones y registros operativos"
    ],
    "deliverable": "Expediente técnico de respuesta y seguimiento de acuerdos."
  },
  {
    "id": "E19",
    "area": "energia",
    "category": "cumplimiento-regulatorio",
    "slug": "registro-y-renovacion-del-padron-de-contratistas-cfe",
    "title": "Registro y renovación del padrón de contratistas CFE",
    "summary": "Acompañamos la integración de documentos para alta o renovación en el padrón de contratistas CFE. Revisamos información corporativa, capacidades y evidencia de experiencia del solicitante.",
    "inputs": [
      "Documentación corporativa y financiera",
      "Experiencia, personal y capacidades técnicas"
    ],
    "deliverable": "Carpeta de registro o renovación y atención de observaciones."
  },
  {
    "id": "E20",
    "area": "energia",
    "category": "cumplimiento-regulatorio",
    "slug": "generacion-distribuida",
    "title": "Generación distribuida",
    "summary": "Revisamos proyectos de generación distribuida para ordenar su ingeniería y ruta de interconexión. El alcance se define según capacidad, instalación, demanda y configuración del sistema propuesto.",
    "inputs": [
      "Capacidad y tecnología del sistema",
      "Datos del suministro, demanda y sitio"
    ],
    "deliverable": "Diagnóstico del proyecto y expediente técnico de interconexión."
  },
  {
    "id": "E21",
    "area": "energia",
    "category": "cumplimiento-regulatorio",
    "slug": "almacenamiento-de-energia",
    "title": "Almacenamiento de energía",
    "summary": "Definimos la ruta regulatoria y documental de sistemas de almacenamiento de energía según su configuración. Revisamos su relación con centrales, centros de carga y red antes de estructurar el expediente.",
    "inputs": [
      "Potencia, capacidad y tecnología de almacenamiento",
      "Diagrama, operación prevista y punto de conexión"
    ],
    "deliverable": "Diagnóstico de configuración y ruta técnico-regulatoria del proyecto."
  },
  {
    "id": "E22",
    "area": "energia",
    "category": "ingenieria-y-ejecucion",
    "slug": "construccion-y-modernizacion-de-subestaciones-hasta-230-kv",
    "title": "Construcción y modernización de subestaciones hasta 230 kV",
    "summary": "Ejecutamos construcción y modernización de subestaciones hasta 230 kV bajo dirección técnica. Coordinamos ingeniería, obra civil, montaje electromecánico y documentación para la puesta en servicio.",
    "inputs": [
      "Bases de diseño y capacidad",
      "Predio, ingeniería y programa de obra"
    ],
    "deliverable": "Plan de ejecución y expediente técnico de la subestación."
  },
  {
    "id": "E23",
    "area": "energia",
    "category": "ingenieria-y-ejecucion",
    "slug": "suministro-e-integracion-de-tableros-electricos",
    "title": "Suministro e integración de tableros eléctricos",
    "summary": "Coordinamos suministro e integración de tableros de control y distribución eléctrica. El alcance incorpora equipos de media y alta tensión, celdas y barras según ingeniería y necesidades de operación.",
    "inputs": [
      "Diagramas unifilares y especificaciones",
      "Niveles de tensión y condiciones de instalación"
    ],
    "deliverable": "Paquete de integración, documentación de equipos y pruebas acordadas."
  },
  {
    "id": "E24",
    "area": "energia",
    "category": "ingenieria-y-ejecucion",
    "slug": "obra-civil-y-montaje-electromecanico",
    "title": "Obra civil y montaje electromecánico",
    "summary": "Ejecutamos obra civil y montaje electromecánico para infraestructura energética. Organizamos frentes de trabajo, interfaces y controles de ejecución conforme a la ingeniería del proyecto.",
    "inputs": [
      "Ingeniería y catálogo de conceptos",
      "Condiciones del sitio y programa de ejecución"
    ],
    "deliverable": "Programa de obra y expediente de avances y verificaciones."
  },
  {
    "id": "E25",
    "area": "energia",
    "category": "ingenieria-y-ejecucion",
    "slug": "lineas-de-transmision-y-distribucion",
    "title": "Líneas de transmisión y distribución",
    "summary": "Coordinamos proyectos de líneas de transmisión y distribución, integrando ingeniería, obra y montaje. El alcance considera el trazado, condiciones del sitio e interfaces con la infraestructura existente.",
    "inputs": [
      "Trazo, tensión y capacidad",
      "Ingeniería y condiciones de acceso al sitio"
    ],
    "deliverable": "Plan de ejecución y documentación técnica de la línea."
  },
  {
    "id": "E26",
    "area": "energia",
    "category": "ingenieria-y-ejecucion",
    "slug": "ingenieria-electrica-basica-y-de-detalle",
    "title": "Ingeniería eléctrica básica y de detalle",
    "summary": "Desarrollamos y revisamos ingeniería eléctrica básica y de detalle, vinculando diseño con construcción y operación. Atendemos observaciones técnicas e integramos planos, cálculos y especificaciones del proyecto.",
    "inputs": [
      "Bases de diseño y unifilares",
      "Ingeniería existente y observaciones recibidas"
    ],
    "deliverable": "Paquete de ingeniería y registro de atención de observaciones."
  },
  {
    "id": "E27",
    "area": "energia",
    "category": "ingenieria-y-ejecucion",
    "slug": "licitaciones-cfe",
    "title": "Licitaciones CFE",
    "summary": "Integramos propuestas y participación en licitaciones CFE conforme a las bases del procedimiento. Coordinamos alcance técnico, documentación, presentación y seguimiento de la propuesta.",
    "inputs": [
      "Bases y anexos de la licitación",
      "Capacidad técnica, costos y calendario"
    ],
    "deliverable": "Expediente de propuesta y control de entregables del procedimiento."
  },
  {
    "id": "E28",
    "area": "energia",
    "category": "ingenieria-y-ejecucion",
    "slug": "direccion-y-supervision-tecnica-en-campo",
    "title": "Dirección y supervisión técnica en campo",
    "summary": "Tomamos la dirección técnica de los trabajos en campo, coordinando ingeniería, contratistas y programa de ejecución. El seguimiento vincula avance físico, calidad y documentación del proyecto.",
    "inputs": [
      "Contratos, planos y programa de obra",
      "Frentes de trabajo y responsables"
    ],
    "deliverable": "Reportes de supervisión, incidencias y seguimiento de avance."
  },
  {
    "id": "E29",
    "area": "energia",
    "category": "ingenieria-y-ejecucion",
    "slug": "mantenimiento-civil-de-infraestructura",
    "title": "Mantenimiento civil de infraestructura",
    "summary": "Organizamos mantenimiento civil de instalaciones energéticas a partir del estado de estructuras, accesos y elementos de obra. Priorizamos intervenciones y su coordinación con la operación del sitio.",
    "inputs": [
      "Inventario y condición de infraestructura",
      "Inspecciones y restricciones operativas"
    ],
    "deliverable": "Programa de intervención y registro de trabajos de mantenimiento."
  },
  {
    "id": "E30",
    "area": "energia",
    "category": "ingenieria-y-ejecucion",
    "slug": "administracion-integral-de-proyectos-y-contratos",
    "title": "Administración integral de proyectos y contratos",
    "summary": "Administramos contratos y ejecución de proyectos mediante planeación, estimaciones y seguimiento físico-financiero. Coordinamos responsables y evidencias para relacionar avance de obra, costos y compromisos contractuales.",
    "inputs": [
      "Contratos, presupuesto y programa",
      "Estimaciones y avances disponibles"
    ],
    "deliverable": "Plan de control y reportes físico-financieros del proyecto."
  },
  {
    "id": "E31",
    "area": "energia",
    "category": "mantenimiento-y-pruebas",
    "slug": "mantenimiento-de-transformadores-y-activos-electricos",
    "title": "Mantenimiento de transformadores y activos eléctricos",
    "summary": "Desarrollamos programas de mantenimiento preventivo, predictivo y correctivo para transformadores y activos eléctricos. Integramos antecedentes, condición de equipos y disponibilidad de operación para priorizar intervenciones.",
    "inputs": [
      "Inventario e historial de equipos",
      "Pruebas, fallas y programa operativo"
    ],
    "deliverable": "Programa de mantenimiento y trazabilidad de intervenciones y hallazgos."
  },
  {
    "id": "E32",
    "area": "energia",
    "category": "mantenimiento-y-pruebas",
    "slug": "termografia-y-ultrasonido-industrial",
    "title": "Termografía y ultrasonido industrial",
    "summary": "Coordinamos diagnóstico de activos mediante termografía y ultrasonido industrial. Las inspecciones ayudan a documentar condiciones de equipo y priorizar revisiones e intervenciones.",
    "inputs": [
      "Inventario y puntos de inspección",
      "Condiciones de acceso y operación"
    ],
    "deliverable": "Reporte de hallazgos y recomendaciones de atención por equipo."
  },
  {
    "id": "E33",
    "area": "energia",
    "category": "mantenimiento-y-pruebas",
    "slug": "servicios-de-campo-para-activos-criticos",
    "title": "Servicios de campo para activos críticos",
    "summary": "Organizamos atención técnica de campo para activos críticos según la condición y necesidad operativa. El alcance y la ventana de atención se acuerdan conforme a ubicación, especialidad y recursos requeridos.",
    "inputs": [
      "Ubicación y equipo afectado",
      "Síntomas, antecedentes y condiciones de acceso"
    ],
    "deliverable": "Propuesta de intervención y reporte de atención en campo."
  },
  {
    "id": "E34",
    "area": "energia",
    "category": "mantenimiento-y-pruebas",
    "slug": "gestion-de-refacciones-y-repuestos",
    "title": "Gestión de refacciones y repuestos",
    "summary": "Gestionamos la identificación y coordinación de refacciones para activos eléctricos e industriales. Relacionamos especificaciones, compatibilidad y criticidad con las necesidades del programa de mantenimiento.",
    "inputs": [
      "Modelos y especificaciones de equipos",
      "Inventario de repuestos y necesidades operativas"
    ],
    "deliverable": "Lista técnica de refacciones y plan de abastecimiento acordado."
  },
  {
    "id": "E35",
    "area": "energia",
    "category": "mantenimiento-y-pruebas",
    "slug": "pruebas-fat-y-sat",
    "title": "Pruebas FAT y SAT",
    "summary": "Coordinamos pruebas de aceptación en fábrica y en sitio para equipos e instalaciones eléctricas. Definimos protocolos, criterios y evidencias de acuerdo con el alcance contractual y la ingeniería.",
    "inputs": [
      "Especificaciones y protocolos de aceptación",
      "Equipos, calendario y responsables"
    ],
    "deliverable": "Protocolos ejecutados, resultados y relación de observaciones."
  },
  {
    "id": "E36",
    "area": "energia",
    "category": "mantenimiento-y-pruebas",
    "slug": "commissioning-y-puesta-en-marcha",
    "title": "Commissioning y puesta en marcha",
    "summary": "Coordinamos la puesta en marcha de infraestructura eléctrica nueva o modernizada. Integramos verificaciones, secuencias de energización, maniobras y documentación de entrega antes de la operación acordada.",
    "inputs": [
      "Ingeniería y pruebas previas",
      "Condiciones de energización y programa"
    ],
    "deliverable": "Plan de puesta en marcha y expediente técnico de resultados y entrega."
  },
  {
    "id": "E37",
    "area": "energia",
    "category": "mantenimiento-y-pruebas",
    "slug": "coordinacion-de-protecciones-y-ajuste-de-reles",
    "title": "Coordinación de protecciones y ajuste de relés",
    "summary": "Revisamos y coordinamos protecciones eléctricas para relacionar ajustes, selectividad y condiciones de falla. El servicio integra información de la red y equipos con la configuración de relés.",
    "inputs": [
      "Unifilar, equipos y parámetros eléctricos",
      "Ajustes actuales y estudios disponibles"
    ],
    "deliverable": "Estudio de coordinación y documentación de ajustes de protecciones."
  },
  {
    "id": "E38",
    "area": "energia",
    "category": "mantenimiento-y-pruebas",
    "slug": "verificacion-funcional-de-scada",
    "title": "Verificación funcional de SCADA",
    "summary": "Verificamos funciones e interfaces de sistemas SCADA conforme al alcance de supervisión y control del proyecto. Revisamos señales, alarmas y comunicación con los equipos de campo.",
    "inputs": [
      "Arquitectura de comunicaciones y señales",
      "Protocolos y funciones requeridas"
    ],
    "deliverable": "Matriz de pruebas funcionales y registro de hallazgos del sistema."
  },
  {
    "id": "J01",
    "area": "legal",
    "category": "defensa-y-regularizacion",
    "slug": "defensa-ante-falta-de-resolucion-de-autorizaciones-asea",
    "title": "Defensa ante falta de resolución de autorizaciones ASEA",
    "summary": "Revisamos solicitudes de autorización sin resolución para definir la estrategia jurídica procedente. Analizamos expediente, actuaciones y plazos del caso, incluida la posibilidad de hacer valer afirmativa ficta cuando corresponda.",
    "inputs": [
      "Solicitud, anexos y acuses de presentación",
      "Notificaciones y cronología del procedimiento"
    ],
    "deliverable": "Diagnóstico jurídico y estrategia de actuación con escritos y evidencias."
  },
  {
    "id": "J02",
    "area": "legal",
    "category": "defensa-y-regularizacion",
    "slug": "atencion-a-prevenciones-y-requerimientos",
    "title": "Atención a prevenciones y requerimientos",
    "summary": "Preparamos respuestas a prevenciones y requerimientos de ASEA, CNE o SENER. Vinculamos los puntos solicitados con la evidencia técnica y jurídica disponible para integrar una contestación consistente.",
    "inputs": [
      "Requerimiento completo y notificación",
      "Expediente presentado y documentación de soporte"
    ],
    "deliverable": "Escrito de respuesta y anexos organizados por requerimiento."
  },
  {
    "id": "J03",
    "area": "legal",
    "category": "defensa-y-regularizacion",
    "slug": "levantamiento-de-clausuras",
    "title": "Levantamiento de clausuras",
    "summary": "Coordinamos la defensa y regularización necesarias para solicitar el levantamiento de una clausura. Revisamos el acta, causas y medidas de corrección para construir una ruta técnico-jurídica de reapertura.",
    "inputs": [
      "Acta de clausura y notificaciones",
      "Permisos, dictámenes y evidencias de corrección"
    ],
    "deliverable": "Estrategia de atención y expediente para solicitar el levantamiento."
  },
  {
    "id": "J04",
    "area": "legal",
    "category": "defensa-y-regularizacion",
    "slug": "respuesta-a-emplazamientos-de-autoridad",
    "title": "Respuesta a emplazamientos de autoridad",
    "summary": "Analizamos emplazamientos de autoridad y preparamos la respuesta jurídica con sus pruebas. La atención parte del documento recibido, la fecha de notificación y los antecedentes del procedimiento.",
    "inputs": [
      "Emplazamiento y constancia de notificación",
      "Antecedentes y documentos relacionados"
    ],
    "deliverable": "Contestación y carpeta de pruebas para la etapa correspondiente."
  },
  {
    "id": "J05",
    "area": "legal",
    "category": "defensa-y-regularizacion",
    "slug": "defensa-en-procedimientos-administrativos-de-sancion",
    "title": "Defensa en procedimientos administrativos de sanción",
    "summary": "Representamos al regulado en procedimientos administrativos de sanción, integrando argumentos y evidencia técnica. Seguimos las etapas del expediente y los actos de autoridad relacionados con la defensa.",
    "inputs": [
      "Acto de inicio y notificaciones",
      "Permisos, inspecciones y pruebas disponibles"
    ],
    "deliverable": "Estrategia de defensa, escritos y control del expediente del procedimiento."
  },
  {
    "id": "J06",
    "area": "legal",
    "category": "defensa-y-regularizacion",
    "slug": "impugnacion-de-multas-y-resoluciones",
    "title": "Impugnación de multas y resoluciones",
    "summary": "Revisamos multas y resoluciones del sector energético para determinar la vía de impugnación. El análisis considera el acto, su notificación, los antecedentes y los efectos sobre la operación.",
    "inputs": [
      "Resolución completa y notificación",
      "Expediente administrativo y evidencia técnica"
    ],
    "deliverable": "Diagnóstico de vías procedentes y expediente de defensa del acto."
  },
  {
    "id": "J07",
    "area": "legal",
    "category": "defensa-y-regularizacion",
    "slug": "juicio-de-amparo",
    "title": "Juicio de amparo",
    "summary": "Integramos la estrategia y representación en juicio de amparo contra actos de autoridad. Revisamos procedencia, antecedentes y afectaciones para preparar la demanda y las actuaciones del caso.",
    "inputs": [
      "Acto reclamado y notificaciones",
      "Antecedentes, representación y pruebas"
    ],
    "deliverable": "Demanda y seguimiento procesal de acuerdo con la estrategia definida."
  },
  {
    "id": "J08",
    "area": "legal",
    "category": "defensa-y-regularizacion",
    "slug": "demanda-de-nulidad-ante-tfja",
    "title": "Demanda de nulidad ante TFJA",
    "summary": "Preparamos demandas de nulidad y representación ante el Tribunal Federal de Justicia Administrativa. Vinculamos argumentos jurídicos con expediente administrativo y soporte técnico del proyecto.",
    "inputs": [
      "Resolución impugnada y notificación",
      "Expediente previo y medios de prueba"
    ],
    "deliverable": "Demanda, anexos probatorios y seguimiento del juicio."
  },
  {
    "id": "J09",
    "area": "legal",
    "category": "defensa-y-regularizacion",
    "slug": "recursos-de-revision",
    "title": "Recursos de revisión",
    "summary": "Analizamos la procedencia de recursos de revisión y preparamos los argumentos contra la resolución administrativa. Revisamos su relación con otras vías de defensa antes de definir la actuación.",
    "inputs": [
      "Resolución y fecha de notificación",
      "Antecedentes y evidencia de inconformidad"
    ],
    "deliverable": "Recurso y soporte documental conforme a la vía definida."
  },
  {
    "id": "J10",
    "area": "legal",
    "category": "defensa-y-regularizacion",
    "slug": "integracion-y-regularizacion-de-expedientes-tecnico-juridicos",
    "title": "Integración y regularización de expedientes técnico-jurídicos",
    "summary": "Reconstruimos e integramos expedientes técnico-jurídicos para regularizar proyectos energéticos. Ordenamos autorizaciones, actos de autoridad, ingeniería y evidencias para identificar faltantes y coordinar su atención.",
    "inputs": [
      "Permisos y notificaciones",
      "Planos, dictámenes y registros operativos"
    ],
    "deliverable": "Expediente unificado y ruta de regularización interinstitucional."
  },
  {
    "id": "J11",
    "area": "legal",
    "category": "defensa-y-regularizacion",
    "slug": "ingenieria-correctiva-y-documentacion-as-built",
    "title": "Ingeniería correctiva y documentación As-Built",
    "summary": "Integramos ingeniería correctiva y documentación As-Built para que el expediente corresponda con la instalación real. El trabajo puede incluir levantamientos, planos, unifilares, memorias y soporte técnico para regularización.",
    "inputs": [
      "Ingeniería existente y observaciones",
      "Acceso a instalación y datos de equipos"
    ],
    "deliverable": "Planos y documentación técnica actualizada con relación de correcciones."
  },
  {
    "id": "P01",
    "area": "financiamiento-de-proyectos",
    "category": "estructuracion",
    "slug": "modelado-financiero-capex-opex",
    "title": "Modelado financiero CAPEX/OPEX",
    "summary": "Construimos modelos financieros que relacionan inversión, costos operativos y flujos del proyecto. Revisamos los supuestos técnicos y comerciales para evaluar escenarios de financiamiento y operación.",
    "inputs": [
      "Presupuesto CAPEX/OPEX y calendario",
      "Proyecciones de ingresos y supuestos técnicos"
    ],
    "deliverable": "Modelo financiero con supuestos y escenarios documentados."
  },
  {
    "id": "P02",
    "area": "financiamiento-de-proyectos",
    "category": "estructuracion",
    "slug": "sindicacion-de-deuda",
    "title": "Sindicación de deuda",
    "summary": "Estructuramos esquemas de deuda con participación de distintos financiadores. Organizamos necesidades de recursos, capacidad de pago y documentación para la evaluación de alternativas.",
    "inputs": [
      "Monto y destino de recursos",
      "Flujos previstos y condiciones de financiamiento"
    ],
    "deliverable": "Propuesta de estructura de deuda y expediente para evaluación."
  },
  {
    "id": "P03",
    "area": "financiamiento-de-proyectos",
    "category": "estructuracion",
    "slug": "creditos-puente",
    "title": "Créditos puente",
    "summary": "Analizamos necesidades temporales de liquidez durante desarrollo o construcción para estructurar financiamiento puente. Revisamos el destino de recursos y la fuente prevista de repago.",
    "inputs": [
      "Calendario de desembolsos y necesidades de caja",
      "Fuente de repago y documentación del proyecto"
    ],
    "deliverable": "Estructura propuesta de financiamiento puente y carpeta de presentación."
  },
  {
    "id": "P04",
    "area": "financiamiento-de-proyectos",
    "category": "estructuracion",
    "slug": "estructuracion-de-spv",
    "title": "Estructuración de SPV",
    "summary": "Estructuramos vehículos de propósito específico para organizar activos, contratos y participación en el proyecto. Coordinamos la definición financiera y contractual con los participantes y sus asesores.",
    "inputs": [
      "Estructura societaria y participantes",
      "Activos, contratos y esquema de inversión"
    ],
    "deliverable": "Diseño del vehículo y matriz de relaciones y responsabilidades."
  },
  {
    "id": "P05",
    "area": "financiamiento-de-proyectos",
    "category": "estructuracion",
    "slug": "evaluacion-de-rentabilidad-tir-vpn",
    "title": "Evaluación de rentabilidad TIR/VPN",
    "summary": "Evaluamos rentabilidad mediante flujos y escenarios de inversión, utilizando indicadores como TIR y VPN. Documentamos supuestos y sensibilidad para que los resultados sean comparables y verificables.",
    "inputs": [
      "Inversión, ingresos y costos previstos",
      "Calendario, vida del proyecto y supuestos"
    ],
    "deliverable": "Evaluación financiera y análisis de sensibilidad de rentabilidad."
  },
  {
    "id": "P06",
    "area": "financiamiento-de-proyectos",
    "category": "estructuracion",
    "slug": "analisis-y-gestion-de-riesgos-financieros",
    "title": "Análisis y gestión de riesgos financieros",
    "summary": "Analizamos riesgos financieros, cambiarios y sectoriales que puedan afectar los flujos del proyecto. Relacionamos exposición, contratos y supuestos para plantear alternativas de mitigación.",
    "inputs": [
      "Monedas, financiamiento y contratos",
      "Supuestos de precios, ingresos y costos"
    ],
    "deliverable": "Matriz de riesgos y evaluación de medidas de mitigación."
  },
  {
    "id": "P07",
    "area": "financiamiento-de-proyectos",
    "category": "estructuracion",
    "slug": "fideicomisos-de-administracion",
    "title": "Fideicomisos de administración",
    "summary": "Diseñamos esquemas de fideicomiso de administración para organizar recursos y obligaciones del proyecto. El alcance define participantes, flujos y reglas a revisar con las instituciones y asesores correspondientes.",
    "inputs": [
      "Origen y destino de recursos",
      "Participantes, contratos y reglas propuestas"
    ],
    "deliverable": "Esquema de administración y documentación para su estructuración."
  },
  {
    "id": "P08",
    "area": "financiamiento-de-proyectos",
    "category": "estructuracion",
    "slug": "contratos-de-participacion",
    "title": "Contratos de participación",
    "summary": "Estructuramos contratos de participación vinculados con inversión y desarrollo de proyectos. Revisamos aportaciones, distribución de resultados y obligaciones para documentar la relación entre participantes.",
    "inputs": [
      "Participantes y aportaciones",
      "Modelo de negocio y acuerdos preliminares"
    ],
    "deliverable": "Propuesta contractual y matriz de derechos y obligaciones."
  },
  {
    "id": "P09",
    "area": "financiamiento-de-proyectos",
    "category": "estructuracion",
    "slug": "sindicacion-y-levantamiento-de-capital-equity",
    "title": "Sindicación y levantamiento de capital (equity)",
    "summary": "Organizamos el levantamiento y la sindicación de capital para proyectos energéticos. Definimos necesidades de inversión, participación y documentación para presentar la oportunidad a potenciales inversionistas.",
    "inputs": [
      "Necesidad de capital y valoración del proyecto",
      "Estructura accionaria y plan de negocio"
    ],
    "deliverable": "Estructura de participación y carpeta de inversión."
  },
  {
    "id": "P10",
    "area": "financiamiento-de-proyectos",
    "category": "estructuracion",
    "slug": "optimizacion-de-costos-financieros",
    "title": "Optimización de costos financieros",
    "summary": "Revisamos la estructura de costos del financiamiento para comparar alternativas y su efecto en los flujos. Consideramos tasas, comisiones, plazos y condiciones de las opciones disponibles.",
    "inputs": [
      "Ofertas o contratos de financiamiento",
      "Modelo financiero y calendario de pagos"
    ],
    "deliverable": "Comparativo de alternativas y propuesta de optimización financiera."
  },
  {
    "id": "P11",
    "area": "financiamiento-de-proyectos",
    "category": "fondeo",
    "slug": "fondeo-con-fondos-de-inversion-y-banca-de-desarrollo",
    "title": "Fondeo con fondos de inversión y banca de desarrollo",
    "summary": "Vinculamos proyectos con fuentes de fondeo según etapa, tamaño y perfil de riesgo. Preparamos información para fondos institucionales, capital privado o banca de desarrollo; cada institución conserva su evaluación y decisión.",
    "inputs": [
      "Proyecto, monto y destino del financiamiento",
      "Modelo financiero, permisos y contratos"
    ],
    "deliverable": "Carpeta de fondeo y ruta de acercamiento a fuentes compatibles."
  },
  {
    "id": "P12",
    "area": "financiamiento-de-proyectos",
    "category": "fondeo",
    "slug": "presentacion-ante-comites-de-inversion",
    "title": "Presentación ante comités de inversión",
    "summary": "Preparamos la presentación del proyecto ante comités de inversión. Organizamos tesis, supuestos, riesgos y evidencia para sostener una propuesta financiera y técnica coherente.",
    "inputs": [
      "Modelo financiero y plan de negocio",
      "Permisos, contratos y documentación técnica"
    ],
    "deliverable": "Presentación de inversión y soporte de preguntas y observaciones."
  },
  {
    "id": "P13",
    "area": "financiamiento-de-proyectos",
    "category": "fondeo",
    "slug": "roadshows-de-financiamiento",
    "title": "Roadshows de financiamiento",
    "summary": "Coordinamos presentaciones institucionales de financiamiento ante potenciales inversionistas. Estructuramos narrativa, información y seguimiento para mantener consistencia entre las distintas reuniones.",
    "inputs": [
      "Carpeta de inversión y objetivos de fondeo",
      "Perfil de inversionistas y disponibilidad del equipo"
    ],
    "deliverable": "Agenda de presentación, materiales y seguimiento de contactos."
  },
  {
    "id": "P14",
    "area": "financiamiento-de-proyectos",
    "category": "fondeo",
    "slug": "busqueda-de-socios-estrategicos",
    "title": "Búsqueda de socios estratégicos",
    "summary": "Identificamos perfiles de socios que puedan aportar capital o capacidades al proyecto. Revisamos complementariedad, objetivos y esquema de participación para organizar el acercamiento.",
    "inputs": [
      "Necesidades del proyecto y aportaciones buscadas",
      "Modelo de negocio y condiciones de participación"
    ],
    "deliverable": "Perfil de socios objetivo y propuesta de vinculación."
  },
  {
    "id": "P15",
    "area": "financiamiento-de-proyectos",
    "category": "evaluacion",
    "slug": "valuacion-tecnica-de-activos",
    "title": "Valuación técnica de activos",
    "summary": "Evaluamos técnicamente activos energéticos para apoyar decisiones de inversión y financiamiento. Revisamos características, condición y documentación que sustenta su valor en el proyecto.",
    "inputs": [
      "Inventario y características de activos",
      "Costos, condición y documentación técnica"
    ],
    "deliverable": "Informe de valuación con supuestos y alcance de la revisión."
  },
  {
    "id": "P16",
    "area": "financiamiento-de-proyectos",
    "category": "evaluacion",
    "slug": "auditoria-de-viabilidad-operativa",
    "title": "Auditoría de viabilidad operativa",
    "summary": "Auditamos la viabilidad operativa del proyecto para identificar brechas que afecten su ejecución o financiamiento. Conectamos ingeniería, operación y contratos con los supuestos del modelo financiero.",
    "inputs": [
      "Ingeniería y programa operativo",
      "Permisos, contratos y proyecciones financieras"
    ],
    "deliverable": "Informe de viabilidad y relación de condiciones pendientes."
  },
  {
    "id": "P17",
    "area": "financiamiento-de-proyectos",
    "category": "evaluacion",
    "slug": "validacion-de-expedientes-ante-fondos",
    "title": "Validación de expedientes ante fondos",
    "summary": "Preparamos y revisamos expedientes técnicos y financieros para su evaluación por fondos. Coordinamos documentación y respuestas a observaciones conforme a los criterios del inversionista participante.",
    "inputs": [
      "Requisitos del fondo y carpeta del proyecto",
      "Modelo, ingeniería y contratos disponibles"
    ],
    "deliverable": "Expediente organizado y seguimiento de observaciones del evaluador."
  },
  {
    "id": "P18",
    "area": "financiamiento-de-proyectos",
    "category": "garantias",
    "slug": "gestion-de-garantias-y-colaterales-financieros-tecnicos",
    "title": "Gestión de garantías y colaterales financieros/técnicos",
    "summary": "Estructuramos la información de garantías y colaterales que respalda una propuesta de financiamiento. Revisamos activos, flujos y condiciones del proyecto para evaluar alternativas con los participantes.",
    "inputs": [
      "Activos y derechos disponibles",
      "Condiciones del financiamiento y contratos"
    ],
    "deliverable": "Matriz de garantías y propuesta documental de estructura."
  },
  {
    "id": "P19",
    "area": "financiamiento-de-proyectos",
    "category": "garantias",
    "slug": "gestion-de-fianzas-tecnicas",
    "title": "Gestión de fianzas técnicas",
    "summary": "Coordinamos la preparación documental para gestionar fianzas técnicas relacionadas con el proyecto. Revisamos obligaciones, beneficiarios y condiciones que deban evaluarse con la institución emisora.",
    "inputs": [
      "Contrato y obligación a garantizar",
      "Datos de las partes y documentación financiera"
    ],
    "deliverable": "Expediente de gestión de fianza y seguimiento con la institución."
  },
  {
    "id": "P20",
    "area": "financiamiento-de-proyectos",
    "category": "garantias",
    "slug": "gestion-de-seguros-de-infraestructura",
    "title": "Gestión de seguros de infraestructura",
    "summary": "Organizamos información técnica y contractual para gestionar seguros de infraestructura con los participantes correspondientes. Revisamos activos, etapas y riesgos para definir el alcance de cobertura a evaluar.",
    "inputs": [
      "Inventario y características de infraestructura",
      "Contratos, etapas y riesgos del proyecto"
    ],
    "deliverable": "Carpeta técnica para evaluación de coberturas y condiciones."
  },
  {
    "id": "P21",
    "area": "financiamiento-de-proyectos",
    "category": "garantias",
    "slug": "blindaje-legal-del-capital",
    "title": "Blindaje legal del capital",
    "summary": "Estructuramos mecanismos contractuales y de organización para proteger el capital invertido. Revisamos riesgos, derechos y relaciones entre participantes con enfoque en el proyecto y sus activos.",
    "inputs": [
      "Estructura de inversión y contratos",
      "Activos, participantes y riesgos identificados"
    ],
    "deliverable": "Propuesta de protección contractual y matriz de acciones."
  },
  {
    "id": "P22",
    "area": "financiamiento-de-proyectos",
    "category": "garantias",
    "slug": "garantias-de-cumplimiento",
    "title": "Garantías de cumplimiento",
    "summary": "Gestionamos la estructuración documental de garantías de cumplimiento vinculadas con contratos del proyecto. Revisamos obligación, vigencia y condiciones para coordinar su evaluación y formalización.",
    "inputs": [
      "Contrato y obligaciones garantizadas",
      "Datos de las partes y condiciones requeridas"
    ],
    "deliverable": "Expediente de garantía y control documental de condiciones."
  }
];

export function serviceHref(service: Service) { return `/servicios/${service.area}/${service.slug}`; }
export function getService(area: string, slug: string) { return services.find(s => s.area === area && s.slug === slug); }
export function getServicesForArea(area: string) { return services.filter(s => s.area === area); }
export function getServiceById(id: string) { return services.find(s => s.id === id); }
export function getServiceCategory(service: Service) { return getServiceArea(service.area)!.categories.find(c => c.id === service.category)!; }

