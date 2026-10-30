type ServiceContent = {
  title: string;
  description: string;
  steps: string[];
  faqs: Array<{ question: string; answer: string }>;
};

// Commercial intent belongs in service pages; explanatory questions live in Energy Explica.
export const serviceContent: Record<string, ServiceContent> = {
  H02: {
    title: "Licencia Ambiental Única ASEA: requisitos y gestión",
    description: "Revisión de aplicabilidad de LAU y licencia de funcionamiento ASEA. Integramos el expediente según la actividad, emisiones y antecedentes de la instalación.",
    steps: [
      "Identificamos la actividad, jurisdicción y fuentes de emisión para distinguir la LAU de la licencia de funcionamiento aplicable a estaciones de servicio.",
      "Revisamos autorizaciones previas, inventario de equipos, combustibles, emisiones y documentos técnicos para integrar el expediente correspondiente.",
      "Preparamos la solicitud y acompañamos el seguimiento de requerimientos; relacionamos las condiciones autorizadas con las obligaciones de reporte que correspondan.",
    ],
    faqs: [
      { question: "¿Todas las gasolineras necesitan LAU?", answer: "No debe darse por hecho. La Licencia Ambiental Única y la licencia de funcionamiento tienen supuestos y trámites distintos. Primero se revisan actividad, equipos, emisiones y antecedentes para identificar el instrumento aplicable." },
      { question: "¿La LAU sustituye la MIA o la COA?", answer: "No. La autorización de impacto ambiental, el instrumento en materia de atmósfera y los reportes de operación atienden obligaciones diferentes. Su aplicabilidad se revisa por instalación." },
    ],
  },
  H09: {
    title: "COA para hidrocarburos: preparación y revisión del reporte",
    description: "Integramos información para la Cédula de Operación Anual del sector hidrocarburos: emisiones, residuos y evidencia de operación según el establecimiento.",
    steps: ["Identificamos si el establecimiento está obligado a presentar COA y qué información requiere su actividad.", "Conciliamos registros de operación, consumo, emisiones, residuos y documentos de respaldo del periodo a reportar.", "Organizamos la captura y revisión del reporte y el resguardo de acuses, sin sustituir la responsabilidad del sujeto obligado."],
    faqs: [{ question: "¿Se puede elaborar la COA sin registros del año?", answer: "La declaración debe sostenerse en información verificable. Antes de capturar, identificamos faltantes y fuentes de datos; no se inventan mediciones, consumos o cantidades para completar campos." }],
  },
  H11: {
    title: "SASISOPA ASEA: conformación, implementación y seguimiento",
    description: "Organizamos el expediente SASISOPA y la evidencia de implementación para hidrocarburos. Diagnóstico de brechas, procedimientos y seguimiento documental.",
    steps: ["Delimitamos las actividades reguladas, las instalaciones y los antecedentes de autorización del sistema.", "Revisamos procedimientos, responsables, análisis de riesgos y registros para construir una matriz de brechas y acciones.", "Acompañamos la implementación y la preparación de evidencia para seguimiento o auditoría, según el alcance contratado."],
    faqs: [
      { question: "¿Basta con tener un manual SASISOPA?", answer: "No. La implementación requiere evidencia operativa: responsables, capacitación, registros, controles y seguimiento acordes con las actividades del regulado." },
      { question: "¿APEN emite la auditoría externa como tercero autorizado?", answer: "Esta ficha ofrece preparación y acompañamiento documental. Si se requiere un dictamen de un tercero autorizado, se valida su autorización vigente y se establece una contratación y alcance específicos; no se presupone esa calidad de APEN." },
    ],
  },
  H14: {
    title: "Bitácoras ASEA para gasolineras: integración y seguimiento",
    description: "Organizamos bitácoras de operación, mantenimiento y seguridad para estaciones de servicio. Revisión de registros y evidencia vinculada con NOM-005 y SASISOPA.",
    steps: ["Identificamos los registros exigibles según actividad, equipos, procedimientos y disposiciones aplicables a la estación.", "Definimos responsables, datos mínimos y mecanismos de trazabilidad entre mantenimiento, incidencias y acciones correctivas.", "Revisamos la consistencia de registros y documentos de respaldo para detectar faltantes y preparar acciones de seguimiento."],
    faqs: [
      { question: "¿Una plantilla descargada acredita el cumplimiento?", answer: "No por sí sola. La bitácora debe corresponder con la instalación y registrar hechos reales, responsables y evidencia. El formato no sustituye la ejecución del mantenimiento ni las obligaciones aplicables." },
      { question: "¿Pueden reconstruirse registros faltantes?", answer: "Puede organizarse evidencia histórica existente y documentar los faltantes. No se deben fechar retroactivamente actividades no demostradas ni fabricar firmas, mediciones o mantenimientos." },
    ],
  },
  H20: {
    title: "Permiso de planta de distribución de Gas LP ante CNE",
    description: "Revisamos permisos y expediente de plantas de distribución de Gas LP: actividad autorizada, capacidad, documentación técnica y obligaciones CNE y ASEA.",
    steps: ["Distinguimos planta de distribución, transporte y estación de carburación para identificar el alcance del permiso.", "Revisamos titular, ubicación, capacidad, instalaciones y antecedentes de seguridad y ambiente del proyecto.", "Integramos la ruta de solicitud, modificación o regularización y las obligaciones de seguimiento aplicables a la operación."],
    faqs: [
      { question: "¿Un permiso de transporte permite operar una planta de distribución?", answer: "No debe asumirse. Son actividades y alcances distintos; se revisa el título, la infraestructura y la operación efectiva para identificar los instrumentos correspondientes." },
      { question: "¿El permiso CNE sustituye las obligaciones ASEA?", answer: "No. El permiso energético no elimina los requisitos aplicables en seguridad industrial, operación y protección ambiental, ni los de otras autoridades competentes." },
    ],
  },
  H36: {
    title: "MISSE: Manifestación de Impacto Social del Sector Energético",
    description: "Revisión de aplicabilidad y preparación de la MISSE ante SENER. Delimitamos proyecto, área de influencia, impactos sociales y documentación de soporte.",
    steps: ["Revisamos el proyecto, su etapa y antecedentes EVIS o MISSE para identificar la modalidad y las disposiciones aplicables.", "Delimitamos componentes del proyecto y área de influencia y organizamos la información necesaria para evaluar impactos sociales.", "Integramos el expediente y el plan de gestión social que corresponda, con seguimiento de requerimientos dentro del alcance contratado."],
    faqs: [
      { question: "¿MISSE y EVIS significan lo mismo?", answer: "Son denominaciones e instrumentos que deben entenderse en su marco normativo y temporal. Revisamos si existen antecedentes EVIS y cómo se relacionan con el régimen MISSE aplicable al proyecto; no se asume que deban duplicarse trámites." },
      { question: "¿Todo proyecto requiere la misma manifestación?", answer: "No. La aplicabilidad y el contenido dependen del tipo y características del proyecto y de las disposiciones vigentes. La revisión inicial evita ofrecer una modalidad sin sustento." },
    ],
  },
  H52: {
    title: "Proveedor PEMEX: expediente para registro HIIP 2.0",
    description: "Asesoría documental para proveedores PEMEX en HIIP 2.0. Revisamos antecedentes Achilles, información corporativa y capacidades, sin prometer contratos.",
    steps: ["Revisamos el estado del registro y sus antecedentes, distinguiendo constancias Achilles históricas de la plataforma actual HIIP 2.0.", "Ordenamos información corporativa, oferta y evidencia de capacidades para que el proveedor prepare su propio registro o actualización.", "Acompañamos la revisión documental y los requisitos del procedimiento de contratación, sin acceder con credenciales ajenas ni sustituir el autorregistro."],
    faqs: [
      { question: "¿El registro oficial PEMEX tiene costo?", answer: "PEMEX informa que su registro es gratuito. Cualquier honorario de APEN corresponde únicamente a asesoría documental contratada, no a un pago por inscripción, activación o garantía de adjudicación." },
      { question: "¿APEN puede registrar a mi empresa por mí?", answer: "PEMEX identifica el proceso como autorregistro del proveedor. APEN puede asesorar en la preparación del expediente; el proveedor conserva el control de su cuenta y carga su información en los canales oficiales." },
      { question: "¿Un ID Achilles demuestra vigencia en HIIP 2.0?", answer: "No debe presumirse equivalencia ni vigencia automática. Se revisa directamente el estado actual y los requisitos publicados por PEMEX para la empresa y el procedimiento concreto." },
    ],
  },
  H54: {
    title: "Compra y venta de coque de petróleo en México | Petcoke",
    description: "Comercialización de coque de petróleo: compra, venta, manejo, importación y exportación. Solicita evaluación por volumen, especificación y destino de entrega.",
    steps: ["Recibimos volumen, periodicidad, uso industrial, destino y especificación requerida: poder calorífico, azufre, humedad y granulometría, cuando corresponda.", "Evaluamos fuentes de abastecimiento, disponibilidad y logística; distinguimos origen, calidad ofrecida y condiciones de entrega de cada operación.", "Presentamos condiciones comerciales y alcance de manejo, compra, venta o comercio exterior sujetos a validación y aceptación contractual."],
    faqs: [
      { question: "¿Qué información necesito para cotizar petcoke?", answer: "Indica toneladas requeridas, periodicidad, destino, uso y especificación de calidad disponible. También conviene definir si necesitas entrega, manejo o coordinación de importación o exportación." },
      { question: "¿Se garantiza inventario, precio u origen PEMEX desde esta página?", answer: "No. Disponibilidad, origen, especificaciones, precio y logística se confirman en la propuesta de cada operación. Un registro de proveedor no demuestra por sí mismo un contrato de suministro ni inventario disponible." },
    ],
  },
  E02: {
    title: "Autoconsumo eléctrico y migración de autoabasto",
    description: "Revisión de permisos de autoabasto y cogeneración para evaluar migración a generación o autoconsumo. Expediente técnico y ruta ante las autoridades competentes.",
    steps: ["Revisamos el permiso existente, centrales, centros de carga, contratos y condiciones de interconexión.", "Comparamos el régimen actual con la alternativa de generación o autoconsumo y verificamos requisitos y ventanas oficiales aplicables.", "Organizamos el expediente y la coordinación de gestiones ante CNE, CENACE y demás participantes según el caso."],
    faqs: [{ question: "¿Manifestar interés equivale a obtener la migración?", answer: "No. La manifestación de interés y la solicitud de migración son etapas distintas, con requisitos y plazos propios. La autorización depende de la evaluación y resolución de las instancias competentes." }],
  },
  J03: {
    title: "Clausura ASEA: defensa y ruta para reabrir instalaciones",
    description: "Revisión de clausuras ASEA y medidas de seguridad. Integramos defensa, evidencia técnica y acciones correctivas para solicitar el levantamiento cuando proceda.",
    steps: ["Revisamos acta, acuerdo, notificación y expediente para identificar causas, autoridad y plazos de actuación.", "Coordinamos la estrategia jurídica con la evidencia técnica y las correcciones necesarias para atender los motivos de la medida.", "Preparamos las actuaciones procedentes y el seguimiento de la solicitud de levantamiento; no se reinicia operación sin el soporte legal requerido."],
    faqs: [
      { question: "¿El pago de una multa levanta automáticamente la clausura?", answer: "No necesariamente. La sanción y la medida de seguridad pueden tener fundamentos y condiciones diferentes. Debe revisarse el expediente y acreditarse lo que la autoridad requiera para el levantamiento." },
      { question: "¿Se garantiza la reapertura en un plazo fijo?", answer: "No. La estrategia depende de la notificación, evidencia, correcciones y vía procedente. Los tiempos y decisiones de la autoridad o tribunal no están bajo control de APEN." },
    ],
  },
  P11: {
    title: "Financiamiento de proyectos energéticos: fondeo y expediente",
    description: "Preparación de proyectos de energía para evaluación de fondos y banca de desarrollo: modelo financiero, riesgos, permisos y documentación del solicitante.",
    steps: ["Revisamos la etapa del proyecto, uso del capital, estructura societaria y antecedentes de permisos y contratos.", "Organizamos modelo financiero, escenarios, riesgos y documentación para evaluar su presentación ante posibles financiadores.", "Acompañamos la vinculación y evaluación de alternativas; términos, garantías y aprobación corresponden a cada entidad financiadora."],
    faqs: [{ question: "¿APEN otorga créditos o garantiza la aprobación?", answer: "Esta ficha describe estructuración y acompañamiento para la evaluación del proyecto, no una oferta de crédito aprobada. La decisión, tasa, garantías y condiciones dependen del financiador y del expediente." }],
  },
};

export const serviceAreaSearchTitles: Record<string, string> = {
  hidrocarburos: "Permisos CNE y cumplimiento ASEA en hidrocarburos",
  energia: "Permisos e ingeniería eléctrica en México",
  legal: "Defensa legal energética: multas y clausuras ASEA y CNE",
  "financiamiento-de-proyectos": "Financiamiento de proyectos energéticos en México",
};
