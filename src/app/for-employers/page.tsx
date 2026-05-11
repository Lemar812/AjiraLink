import { createPageMetadata, MarketingPage } from "@/components/site/marketing-page";
import { pages } from "@/data/pages";

export const metadata = createPageMetadata("For Employers", pages.employers.description);

export default function ForEmployersPage() {
  return <MarketingPage config={pages.employers} />;
}
