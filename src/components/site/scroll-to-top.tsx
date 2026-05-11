"use client";

import { ArrowUp } from "lucide-react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useState } from "react";

export function ScrollToTop() {
  const { scrollYProgress } = useScroll();
  const [enabled, setEnabled] = useState(false);
  const opacity = useTransform(scrollYProgress, [0, 0.45, 0.74, 1], [0, 0, 0.72, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.55, 0.82], [0.86, 0.92, 1]);
  const borderOpacity = useTransform(scrollYProgress, [0.55, 1], [0.16, 0.42]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setEnabled(latest > 0.55);
  });

  return (
    <motion.button
      type="button"
      aria-label="Scroll to top"
      className="scroll-top-button fixed bottom-5 right-4 z-40 grid h-12 w-12 place-items-center rounded-full border bg-[#061a3f]/70 text-[#FFC727] shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-2xl transition hover:-translate-y-1 hover:bg-[#0A3D91] sm:bottom-7 sm:right-7"
      style={{
        opacity,
        scale,
        borderColor: `rgb(255 199 39 / ${borderOpacity})`,
        pointerEvents: enabled ? "auto" : "none",
      }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ArrowUp size={19} />
    </motion.button>
  );
}
