import ProjectFinanceClient from "./page.client";

export const metadata = {
  title: 'Project Finance & Estructuración Financiera | APEN',
  description: 'Expertos en estructuración financiera, levantamiento de capital (Equity & Debt) y fondeo de proyectos de infraestructura energética en México. SPVs, Due Diligence técnico y blindaje financiero de activos críticos.',
  keywords: ['Project Finance México', 'Fondeo de proyectos energía', 'Estructuración financiera energética', 'Levantamiento de capital infraestructura', 'SPV energía México', 'Due Diligence técnico financiero', 'Inversión sector energético', 'APEN finanzas'],
};

export default function ProjectFinancePage() {
  return <ProjectFinanceClient />;
}
