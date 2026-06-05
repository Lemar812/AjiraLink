"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { useLenis } from "@/hooks/use-lenis";
import { useScrollRestoration } from "@/hooks/use-scroll-restoration";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { ScrollToTop } from "@/components/site/scroll-to-top";

type SiteShellProps = {
  children: React.ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  useScrollRestoration();
  useLenis();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-gsap-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 56 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 84%" },
          },
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="theme-shell min-h-screen overflow-hidden bg-[#061a3f] text-white">
      <motion.div
        className="fixed left-0 right-0 top-0 z-[110] h-1 origin-left bg-[#FFC727]"
        style={{ scaleX }}
      />
      {children}
      <Navbar />
      <ScrollToTop />
      <Footer />
    </div>
  );
}
