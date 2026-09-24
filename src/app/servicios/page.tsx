import ServiceAreaPage from "@/components/services/ServiceAreaPage";
import { serviceMetadata } from "@/lib/service-metadata";
export const metadata = serviceMetadata("Servicios de hidrocarburos, electricidad, defensa legal y financiamiento", "Catálogo APEN: cumplimiento regulatorio, ingeniería, mantenimiento, defensa legal, financiamiento de proyectos y comercialización de coque de petróleo.", "/servicios", "/visual/imagenes/heroserv.webp");
export default function Page() { return <ServiceAreaPage />; }
