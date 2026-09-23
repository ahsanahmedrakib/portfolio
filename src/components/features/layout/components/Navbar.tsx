"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { profile } from "@/components/features/profile";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-white/10 bg-ink-950/80 backdrop-blur-xl" : "border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="#home" className="group flex items-center gap-3">
          <span className="relative flex h-9 w-9 overflow-hidden rounded-xl bg-linear-to-br from-cyan-400 to-violet-500 shadow-[0_0_20px_rgba(34,211,238,0.35)] transition-transform group-hover:scale-105">
            <Image
              src="/rakib.jpg"
              alt={profile.name}
              fill
              sizes="36px"
              className="object-cover"
            />
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-sm font-semibold tracking-wide text-gradient">
              Ahsan Ahmed Rakib
            </span>
            <span className="text-[10px] text-slate-400">AI-Enhanced Software Engineer</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="underline-swipe rounded-full px-4 py-2 text-sm text-slate-300 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="btn-sheen hidden rounded-full bg-linear-to-r from-cyan-500 to-violet-500 px-5 py-2 text-sm font-semibold text-white transition-all hover:shadow-[0_0_24px_rgba(34,211,238,0.5)] md:inline-flex"
          >
            Hire Me
          </Link>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-white md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "md:hidden",
          "overflow-hidden border-b border-white/10 bg-ink-950/95 backdrop-blur-xl transition-all duration-300",
          open ? "max-h-96 opacity-100" : "max-h-0 border-b-0 opacity-0",
        )}
      >
        <div className="flex flex-col gap-1 px-5 py-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}