import ServiceAreaPage from "@/components/services/ServiceAreaPage";
import { areaMetadata } from "@/lib/service-metadata";
export const metadata = areaMetadata("legal");
export default function Page() { return <ServiceAreaPage areaId="legal" />; }
