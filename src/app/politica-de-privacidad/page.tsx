import type { Metadata } from "next";
import LegalDocumentPage from "@/components/LegalDocumentPage";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Conoce cómo APEN recopila, utiliza, resguarda y gestiona los datos personales y de contacto obtenidos a través de su sitio web institucional.",
  openGraph: {
    title: "Política de Privacidad | APEN",
    description:
      "Tratamiento de datos personales y de contacto recopilados por APEN mediante su sitio institucional y sus herramientas de comunicación.",
    url: "https://apen.mx/politica-de-privacidad",
    siteName: "APEN",
    locale: "es_MX",
    type: "website",
  },
};

const sections = [
  {
    title: "1. Identidad y alcance de esta política",
    paragraphs: [
      "APEN reconoce la importancia de tratar la información personal con responsabilidad, discreción y criterios consistentes con un entorno corporativo de alta exigencia técnica y regulatoria. Esta Política de Privacidad describe de forma clara cómo se recopilan, utilizan, resguardan y gestionan los datos obtenidos a través de este sitio web y de sus canales de contacto vinculados.",
      "La presente política aplica al uso del portal institucional de APEN, así como a formularios, botones de contacto, integraciones y medios digitales orientados a atender consultas, solicitudes comerciales, acercamientos profesionales o requerimientos informativos.",
    ],
  },
  {
    title: "2. Datos personales que pueden recopilarse",
    paragraphs: [
      "Dependiendo de la interacción del usuario con el sitio, APEN puede recopilar datos de identificación y contacto indispensables para atender solicitudes y mantener comunicación institucional o comercial. La información se limita, en principio, a lo razonablemente necesario para la finalidad correspondiente.",
    ],
    bullets: [
      "Nombre de la persona de contacto.",
      "Empresa, cargo o área de responsabilidad.",
      "Correo electrónico y número telefónico.",
      "Mensaje, requerimiento, contexto del proyecto o consulta enviada por el usuario.",
      "Datos técnicos de navegación, dispositivo, dirección IP aproximada, interacción con el sitio o métricas de uso cuando existan herramientas analíticas habilitadas.",
    ],
  },
  {
    title: "3. Medios de recopilación de información",
    paragraphs: [
      "La información puede recabarse cuando el usuario la proporciona directamente o cuando se genera de forma técnica durante la navegación dentro del sitio. APEN procura que estos mecanismos sean proporcionales al carácter institucional del portal y a sus fines legítimos de operación, atención y mejora.",
    ],
    bullets: [
      "Formularios de contacto o solicitud de información.",
      "Botones de WhatsApp u otros medios de mensajería vinculados al sitio.",
      "Correos electrónicos enviados a cuentas institucionales.",
      "Herramientas de analítica, cookies o tecnologías similares utilizadas para medir desempeño y experiencia de navegación.",
      "Integraciones de terceros, como mapas, videos embebidos o enlaces externos, cuando el usuario interactúa con ellas.",
    ],
  },
  {
    title: "4. Finalidades del uso de la información",
    paragraphs: [
      "Los datos recabados se utilizan para atender de forma profesional la relación iniciada por el usuario con APEN y para sostener la operación razonable del sitio. En ningún caso se recaban con fines ajenos a la actividad institucional o comercial legítima de la empresa.",
    ],
    bullets: [
      "Dar respuesta a solicitudes de contacto, consulta técnica o acercamiento comercial.",
      "Evaluar de manera preliminar necesidades relacionadas con proyectos energéticos, regulatorios, industriales o de cumplimiento.",
      "Canalizar requerimientos al área interna correspondiente y dar seguimiento institucional.",
      "Mejorar la experiencia de navegación, desempeño del sitio y claridad del contenido publicado.",
      "Generar métricas agregadas de comportamiento para toma de decisiones digitales y de comunicación.",
      "Cumplir con obligaciones legales, requerimientos de autoridad o necesidades razonables de seguridad operativa.",
    ],
  },
  {
    title: "5. Herramientas analíticas, cookies e integraciones",
    paragraphs: [
      "El sitio puede utilizar cookies, etiquetas de medición, servicios de analítica u otras tecnologías equivalentes para conocer patrones generales de uso, secciones de mayor interés, tiempos de interacción, procedencia del tráfico y desempeño técnico del portal.",
      "Asimismo, algunas secciones pueden incorporar servicios de terceros, como mapas, enlaces a WhatsApp, reproductores, fuentes externas o componentes similares. La interacción con estas herramientas puede implicar tratamiento de información técnica conforme a las políticas del proveedor correspondiente.",
    ],
  },
  {
    title: "6. Compartición con terceros",
    paragraphs: [
      "APEN no comercializa datos personales ni los cede indiscriminadamente a terceros. No obstante, cierta información puede ser tratada por proveedores tecnológicos que apoyan la operación del sitio, la mensajería, el alojamiento, la analítica o la comunicación digital, siempre dentro de un marco funcional razonable.",
      "En caso de ser necesario, APEN también podrá compartir información cuando exista mandato legal, requerimiento de autoridad competente, necesidad de proteger derechos propios o cuando ello sea indispensable para la continuidad operativa y segura de sus servicios digitales.",
    ],
  },
  {
    title: "7. Resguardo y seguridad de la información",
    paragraphs: [
      "APEN adopta medidas administrativas, técnicas y organizacionales razonables para proteger la información bajo su control frente a accesos no autorizados, pérdida, uso indebido, alteración o divulgación improcedente. Sin embargo, ningún entorno digital puede garantizar seguridad absoluta.",
      "Por ello, el tratamiento de datos se realiza bajo criterios de prudencia, necesidad operativa y acceso limitado, procurando que solo el personal o proveedores autorizados intervengan en los procesos estrictamente necesarios.",
    ],
  },
  {
    title: "8. Conservación de los datos",
    paragraphs: [
      "La información se conserva durante el tiempo que resulte razonablemente necesario para atender la solicitud del usuario, dar seguimiento a relaciones comerciales o institucionales, documentar interacciones relevantes o cumplir con requerimientos legales y operativos aplicables.",
      "Cuando los datos dejan de ser necesarios para esas finalidades, APEN procurará su supresión, bloqueo o depuración conforme a sus procesos internos y a la normativa aplicable.",
    ],
  },
  {
    title: "9. Derechos del usuario sobre sus datos",
    paragraphs: [
      "El titular de los datos podrá solicitar información sobre el tratamiento de su información personal y, en su caso, requerir su actualización, corrección o eliminación cuando ello resulte procedente conforme al marco legal aplicable y a la naturaleza de la relación sostenida con APEN.",
      "También podrá manifestar su oposición al uso de ciertos datos o limitar su tratamiento para finalidades específicas, siempre que la solicitud no impida el cumplimiento de obligaciones legales, contractuales, de seguridad o de seguimiento institucional legítimo.",
    ],
  },
  {
    title: "10. Contacto para temas de privacidad",
    paragraphs: [
      "Para consultas, aclaraciones o solicitudes relacionadas con privacidad y tratamiento de información, el usuario podrá dirigirse a APEN a través de los medios institucionales publicados en el sitio. Se recomienda incluir datos suficientes para identificar la interacción o solicitud correspondiente y facilitar su atención.",
    ],
    bullets: [
      "Correo electrónico de contacto: contacto@apen.mx",
      "Teléfono de atención institucional: +52 (55) 0000 0000",
      "Domicilio de referencia: Av. Miguel Ángel de Quevedo 961, El Rosedal, Coyoacán, C.P. 04330, Ciudad de México.",
    ],
  },
] as const;

export default function Page() {
  return (
    <LegalDocumentPage
      eyebrow="Protección de Datos"
      title="Política de Privacidad"
      summary="Esta política explica qué información puede recabar APEN a través de su sitio web institucional, con qué finalidad la utiliza, qué medidas adopta para su resguardo y qué vías de contacto ofrece a los usuarios para atender temas relacionados con privacidad, datos personales y comunicaciones digitales."
      effectiveDate="14 de abril de 2026"
      sections={sections}
    />
  );
}
