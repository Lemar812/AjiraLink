import { CareerGuidancePageContent } from "@/components/site/future-work-pages";
import { createPageMetadata } from "@/components/site/marketing-page";
import { pages } from "@/data/pages";

export const metadata = createPageMetadata("Career Guidance", pages.guidance.description);

export default function CareerGuidancePage() {
  return <CareerGuidancePageContent />;
}
