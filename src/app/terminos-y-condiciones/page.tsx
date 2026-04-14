import type { Metadata } from "next";
import LegalDocumentPage from "@/components/LegalDocumentPage";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description:
    "Consulta los términos y condiciones de uso del sitio institucional de APEN y el alcance del contenido técnico, corporativo e informativo publicado.",
  openGraph: {
    title: "Términos y Condiciones | APEN",
    description:
      "Condiciones de uso del sitio web institucional de APEN para navegación, consulta de información y contacto comercial.",
    url: "https://apen.mx/terminos-y-condiciones",
    siteName: "APEN",
    locale: "es_MX",
    type: "website",
  },
};

const sections = [
  {
    title: "1. Aceptación de los términos",
    paragraphs: [
      "El acceso, navegación y uso del sitio web de APEN implica la aceptación de los presentes Términos y Condiciones. Al utilizar este portal, el usuario reconoce que ha leído su contenido y que acepta sujetarse a las disposiciones aquí establecidas.",
      "Si el usuario no está de acuerdo con alguno de estos términos, deberá abstenerse de utilizar el sitio. APEN recomienda revisar este documento de forma periódica, ya que podrá actualizarse para reflejar cambios operativos, normativos o funcionales del portal institucional.",
    ],
  },
  {
    title: "2. Objeto del sitio web",
    paragraphs: [
      "Este sitio tiene un propósito estrictamente institucional, informativo y de vinculación comercial. Su finalidad es presentar el perfil corporativo de APEN, su experiencia técnica, su enfoque de cumplimiento regulatorio y las soluciones que ofrece a empresas, inversionistas, desarrolladores y actores de la cadena energética.",
      "El portal no opera como plataforma de comercio electrónico, no procesa pagos en línea ni formaliza por sí mismo contrataciones, adjudicaciones, órdenes de servicio o relaciones comerciales vinculantes.",
    ],
  },
  {
    title: "3. Uso adecuado del sitio",
    paragraphs: [
      "El usuario se compromete a utilizar este sitio de forma lícita, responsable y compatible con su naturaleza corporativa. No deberá emplearlo para realizar actividades que afecten su operación, comprometan su seguridad, distorsionen su contenido o vulneren derechos de APEN o de terceros.",
    ],
    bullets: [
      "Intentar acceder sin autorización a áreas restringidas, servidores, bases de datos o configuraciones internas.",
      "Introducir código malicioso, automatizaciones abusivas, herramientas de scraping no autorizadas o mecanismos destinados a alterar la disponibilidad del sitio.",
      "Publicar, transmitir o enviar información falsa, ofensiva, engañosa o que pueda generar confusión sobre la identidad, los servicios o la representación de APEN.",
      "Utilizar el sitio con fines ilegales, competitivos desleales o ajenos a la consulta institucional y al contacto profesional.",
    ],
  },
  {
    title: "4. Alcance informativo del contenido",
    paragraphs: [
      "La información publicada en este sitio se proporciona con fines exclusivamente informativos y de referencia comercial. Aunque APEN procura mantener contenidos actualizados, claros y técnicamente consistentes, su publicación no constituye una opinión jurídica formal, un dictamen técnico definitivo, una propuesta contractual ni una garantía de resultados para un proyecto específico.",
      "Toda decisión operativa, de inversión, cumplimiento, diseño, ejecución o defensa regulatoria deberá evaluarse caso por caso, con base en el alcance real del proyecto, el marco normativo aplicable y, en su caso, mediante una contratación formal con APEN o con los especialistas competentes.",
    ],
  },
  {
    title: "5. Propiedad intelectual",
    paragraphs: [
      "Los textos, estructuras, diseños, elementos visuales, marcas, logotipos, gráficos, documentos, fotografías, videos, diagramas, desarrollos y demás materiales contenidos en este sitio son propiedad de APEN o se utilizan con autorización de sus titulares, y se encuentran protegidos por la legislación aplicable en materia de propiedad intelectual.",
      "No se autoriza su reproducción, distribución, adaptación, comunicación pública, reutilización comercial o explotación parcial o total sin autorización previa y por escrito de APEN, salvo cuando el uso se limite a una consulta personal, interna y no comercial compatible con la finalidad informativa del portal.",
    ],
  },
  {
    title: "6. Limitación de responsabilidad",
    paragraphs: [
      "APEN no será responsable por daños directos o indirectos derivados del uso del sitio, de la imposibilidad de acceder a él, de errores involuntarios en la información publicada, de interrupciones temporales del servicio o de decisiones tomadas exclusivamente con base en la información aquí contenida.",
      "Tampoco será responsable por afectaciones derivadas de fallas atribuibles a terceros, proveedores tecnológicos, servicios de conectividad, integraciones externas, navegadores, dispositivos del usuario o eventos fuera de su control razonable.",
    ],
  },
  {
    title: "7. Enlaces y servicios de terceros",
    paragraphs: [
      "El sitio puede incorporar enlaces, botones o integraciones con servicios de terceros, incluyendo herramientas de mensajería, mapas, analítica, plataformas de video o sitios externos relacionados. Dichos servicios se ofrecen para facilitar la navegación o el contacto, pero operan bajo políticas, términos y condiciones propios.",
      "APEN no controla ni asume responsabilidad por el contenido, disponibilidad, prácticas de privacidad, seguridad o funcionamiento de plataformas ajenas. El acceso a ellas se realiza bajo responsabilidad del usuario.",
    ],
  },
  {
    title: "8. Modificaciones al sitio y a los términos",
    paragraphs: [
      "APEN podrá actualizar, ajustar, reestructurar, suspender o retirar parcial o totalmente contenidos, secciones, funcionalidades o accesos del sitio sin necesidad de aviso previo, cuando ello responda a decisiones operativas, mejoras tecnológicas, cambios regulatorios o necesidades corporativas.",
      "Asimismo, estos Términos y Condiciones podrán modificarse en cualquier momento. La versión vigente será la publicada en esta página y surtirá efectos desde su actualización.",
    ],
  },
  {
    title: "9. Legislación aplicable y jurisdicción",
    paragraphs: [
      "Para la interpretación y cumplimiento de estos Términos y Condiciones serán aplicables las leyes vigentes de los Estados Unidos Mexicanos. Cualquier controversia relacionada con el uso del sitio se atenderá conforme a la normatividad mexicana y ante las autoridades competentes que resulten aplicables.",
      "Lo anterior se entiende sin perjuicio de mecanismos de contacto o atención previa que permitan aclarar dudas operativas, institucionales o de cumplimiento antes de escalar cualquier diferencia.",
    ],
  },
  {
    title: "10. Medios de contacto",
    paragraphs: [
      "Para consultas relacionadas con el contenido del sitio, alcances institucionales, referencias técnicas o estos Términos y Condiciones, el usuario puede contactar a APEN a través de los canales institucionales publicados en este portal.",
    ],
    bullets: [
      "Correo electrónico: contacto@apen.mx",
      "Teléfono: +52 (55) 0000 0000",
      "Domicilio de referencia: Av. Miguel Ángel de Quevedo 961, El Rosedal, Coyoacán, C.P. 04330, Ciudad de México.",
    ],
  },
] as const;

export default function Page() {
  return (
    <LegalDocumentPage
      eyebrow="Marco de Uso"
      title="Términos y Condiciones"
      summary="Este documento establece las condiciones de acceso y uso del sitio institucional de APEN. Su propósito es ofrecer claridad sobre el alcance del portal, la naturaleza informativa de sus contenidos y las reglas mínimas de interacción aplicables a visitantes, prospectos, aliados y terceros que utilicen este entorno digital."
      effectiveDate="14 de abril de 2026"
      sections={sections}
    />
  );
}
