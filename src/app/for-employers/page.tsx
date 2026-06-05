import { createPageMetadata } from "@/components/site/marketing-page";
import { ForEmployersPageContent } from "@/components/site/for-employers-page";
import { pages } from "@/data/pages";

export const metadata = createPageMetadata("For Employers", pages.employers.description);

export default function ForEmployersPage() {
  return <ForEmployersPageContent />;
}
