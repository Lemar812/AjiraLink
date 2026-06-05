"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/site/theme-toggle";
import { navLinks, systemRoutes } from "@/data/landing";
import { cn } from "@/lib/utils";

const ctas = [
  { label: "Login", href: systemRoutes.login, variant: "ghost" },
  { label: "Get Started", href: systemRoutes.youthRegister, variant: "secondary" },
  { label: "Post an Opportunity", href: systemRoutes.postOpportunity, variant: "primary" },
] as const;

function CtaLink({ href, label, variant }: (typeof ctas)[number]) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex h-9 items-center justify-center rounded-full px-4 text-[0.78rem] font-semibold tracking-[-0.01em] transition duration-300 hover:-translate-y-0.5",
        variant === "ghost" && "text-white/72 hover:bg-white/8 hover:text-white",
        variant === "secondary" &&
          "border border-white/14 bg-white/9 text-white shadow-sm shadow-black/10 backdrop-blur-xl hover:border-white/24 hover:bg-white/14",
        variant === "primary" &&
          "bg-[#FFC727] text-[#0A3D91] shadow-[0_12px_34px_rgba(255,199,39,0.22)] hover:bg-white",
      )}
    >
      {label}
    </Link>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      className="fixed left-0 right-0 top-4 z-100 px-3 sm:top-6 sm:px-5"
      initial={{ opacity: 0, y: -22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <nav
        className={cn(
          "navbar-shell mx-auto flex items-center justify-between px-4 py-2.5 rounded-full border",
          "bg-ajira-night/86 shadow-[0_18px_70px_rgba(0,0,0,0.32)] backdrop-blur-2xl",
          scrolled ? "border-white/18 shadow-[0_18px_80px_rgba(0,0,0,0.42)]" : "border-white/11",
        )}
      >
        {/* LEFT: Logo */}
        <Link href="/" aria-label="AjiraLink home" className="group flex items-center gap-2 shrink-0">
          <span className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-full bg-white p-1.5 shadow-[0_10px_28px_rgba(0,0,0,0.22)] ring-1 ring-[#FFC727]/35 transition duration-300 group-hover:ring-[#FFC727]/60 sm:h-12 sm:w-12">
            <Image
              src="/images/logos/ajiralink-logo-transparent.png"
              alt="AjiraLink"
              width={96}
              height={96}
              priority
              sizes="48px"
              className="h-full w-full object-contain transition duration-300 group-hover:scale-[1.04]"
            />
          </span>
          <span className="hidden text-lg font-black tracking-[-0.03em] text-white sm:block">AjiraLink</span>
        </Link>

        {/* CENTER: Nav links */}
        <div className="hidden xl:flex items-center gap-4 min-w-0">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative whitespace-nowrap py-2 text-[0.74rem] font-medium tracking-[-0.01em] text-white/68 transition duration-300 hover:text-white 2xl:text-[0.8rem]"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 rounded-full bg-[#FFC727] transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </div>

        {/* RIGHT: actions */}
        <div className="hidden lg:flex items-center gap-2.5 whitespace-nowrap">
          <ThemeToggle />
          {ctas.map((cta) => (
            <CtaLink key={cta.label} {...cta} />
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/10 text-white shadow-sm shadow-black/10 transition hover:bg-white/16 lg:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 top-0 z-[-1] bg-ajira-night/94 backdrop-blur-2xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="absolute inset-0 blue-grid opacity-20" />
            <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-[#FFC727]/14 blur-3xl" />
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="mx-auto mt-4 max-w-7xl overflow-hidden rounded-4xl border border-white/14 bg-white/[0.07] p-4 shadow-2xl shadow-black/30 backdrop-blur-2xl lg:hidden"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="grid gap-1 py-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: index * 0.035 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-medium text-white/78 transition hover:bg-white/10 hover:text-white"
                  >
                    {link.label}
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FFC727]/70" />
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="mt-4 grid gap-2 border-t border-white/10 pt-4 sm:grid-cols-[auto_1fr_1fr_1fr]">
              <ThemeToggle className="h-11 w-11 justify-self-start" />
              {ctas.map((cta) => (
                <CtaLink key={cta.label} {...cta} />
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
