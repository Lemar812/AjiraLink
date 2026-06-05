import { SupportUsPageContent } from "@/components/site/future-work-pages";
import { createPageMetadata } from "@/components/site/marketing-page";

export const metadata = createPageMetadata(
  "Support Us",
  "Invest in the future of African youth through AjiraLink's youth employment and career opportunity ecosystem.",
);

export default function SupportUsPage() {
  return <SupportUsPageContent />;
}
