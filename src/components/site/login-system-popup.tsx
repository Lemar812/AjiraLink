"use client";

import { AnimatePresence, motion } from "framer-motion";
import { LogIn, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { systemRoutes } from "@/data/landing";

const popupIntervalMs = 120000;
const popupVisibleMs = 5000;

export function LoginSystemPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let showTimer: number | undefined;
    let hideTimer: number | undefined;

    const showPopup = () => {
      setVisible(true);
      hideTimer = window.setTimeout(() => setVisible(false), popupVisibleMs);
      showTimer = window.setTimeout(showPopup, popupIntervalMs);
    };

    showTimer = window.setTimeout(showPopup, popupIntervalMs);

    return () => {
      if (showTimer) {
        window.clearTimeout(showTimer);
      }
      if (hideTimer) {
        window.clearTimeout(hideTimer);
      }
    };
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.aside
          aria-live="polite"
          className="system-popup-shell fixed bottom-5 right-4 z-[120] w-[calc(100vw-2rem)] max-w-sm overflow-hidden rounded-3xl border p-4 shadow-[0_24px_80px_rgba(0,0,0,0.34)] backdrop-blur-2xl sm:right-5"
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 18, scale: 0.97 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-[#FFC727]" />
          <div className="flex items-start gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#FFC727] text-[#0A3D91] shadow-[0_12px_30px_rgba(255,199,39,0.24)]">
              <LogIn size={19} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-black tracking-[-0.01em]">AjiraLink system access</p>
              <p className="system-popup-desc mt-1 text-sm leading-6">
                Login to your account or continue registration inside the AjiraLink platform.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Link
                  href={systemRoutes.login}
                  className="inline-flex h-9 items-center justify-center rounded-full bg-[#FFC727] px-4 text-xs font-black text-[#0A3D91] transition hover:bg-white"
                >
                  Login
                </Link>
                <Link
                  href={systemRoutes.youthRegister}
                  className="system-popup-register inline-flex h-9 items-center justify-center rounded-full border px-4 text-xs font-bold transition"
                >
                  Register
                </Link>
              </div>
            </div>
            <button
              type="button"
              aria-label="Close login popup"
              onClick={() => setVisible(false)}
              className="system-popup-close grid h-8 w-8 shrink-0 place-items-center rounded-full border transition"
            >
              <X size={15} />
            </button>
          </div>
        </motion.aside>
      ) : null}
    </AnimatePresence>
  );
}
