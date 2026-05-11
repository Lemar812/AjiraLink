import { createPageMetadata, MarketingPage } from "@/components/site/marketing-page";
import { pages } from "@/data/pages";

export const metadata = createPageMetadata("Opportunities", pages.opportunities.description);

export default function OpportunitiesPage() {
  return <MarketingPage config={pages.opportunities} />;
}
