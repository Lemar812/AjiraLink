import { createPageMetadata, MarketingPage } from "@/components/site/marketing-page";
import { pages } from "@/data/pages";

export const metadata = createPageMetadata("Institutions & Partners", pages.partners.description);

export default function InstitutionsPartnersPage() {
  return <MarketingPage config={pages.partners} />;
}
