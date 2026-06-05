import { createPageMetadata } from "@/components/site/marketing-page";
import { OpportunitiesPageContent } from "@/components/site/opportunities-page";
import { pages } from "@/data/pages";

export const metadata = createPageMetadata("Opportunities", pages.opportunities.description);

export default function OpportunitiesPage() {
  return <OpportunitiesPageContent />;
}
