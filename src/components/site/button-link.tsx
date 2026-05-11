import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function ButtonLink({ href, children, variant = "primary", className }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-black transition duration-300 hover:-translate-y-0.5",
        variant === "primary" &&
          "bg-[#FFC727] text-[#0A3D91] shadow-[0_18px_60px_rgba(255,199,39,0.26)] hover:bg-white",
        variant === "secondary" &&
          "border border-white/18 bg-white/10 text-white shadow-xl shadow-black/10 backdrop-blur-xl hover:bg-white/16",
        variant === "ghost" && "bg-white text-[#0A3D91] hover:bg-[#FFC727]",
        className,
      )}
    >
      {children}
      <ArrowRight size={16} className="transition group-hover:translate-x-1" />
    </Link>
  );
}
