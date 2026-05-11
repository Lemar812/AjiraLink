import { createPageMetadata, MarketingPage } from "@/components/site/marketing-page";
import { pages } from "@/data/pages";

export const metadata = createPageMetadata("Team", pages.team.description);

export default function TeamPage() {
  return <MarketingPage config={pages.team} />;
}
