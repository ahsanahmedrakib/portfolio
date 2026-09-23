"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  GithubIcon,
  LinkedInIcon,
  MessengerIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { profile } from "@/components/features/profile";

const MotionLink = motion.create(Link);

export function SocialFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
    exit: {
      opacity: 0,
      transition: { staggerChildren: 0.06, staggerDirection: -1 },
    },
  };

  const item = {
    hidden: { opacity: 0, x: 32, scale: 0.6 },
    show: { opacity: 1, x: 0, scale: 1 },
    exit: { opacity: 0, x: 32, scale: 0.6 },
  };

  const buttons = [
    {
      href: profile.socials.github,
      label: "View GitHub profile",
      icon: GithubIcon,
      color:
        "hover:border-white/40 hover:bg-white/90 hover:shadow-[0_8px_30px_rgba(255,255,255,0.25)]",
    },
    {
      href: profile.socials.linkedin,
      label: "View LinkedIn profile",
      icon: LinkedInIcon,
      color:
        "hover:bg-[#0A66C2] hover:border-[#0A66C2]/40 hover:shadow-[0_8px_30px_rgba(10,102,194,0.35)]",
    },
    {
      href: profile.socials.whatsapp,
      label: "Chat on WhatsApp",
      icon: WhatsAppIcon,
      color:
        "hover:bg-[#25D366] hover:border-[#25D366]/40 hover:shadow-[0_8px_30px_rgba(37,211,102,0.35)]",
    },
    {
      href: profile.socials.messenger,
      label: "Chat on Messenger",
      icon: MessengerIcon,
      color:
        "hover:bg-[#0084FF] hover:border-[#0084FF]/40 hover:shadow-[0_8px_30px_rgba(0,132,255,0.35)]",
    },
  ];

  return (
    <div className="pointer-events-none fixed inset-0 z-[90]">
      <div className="flex h-full items-center justify-end pr-6">
        <AnimatePresence>
          {visible && (
            <motion.div
              key="social-float"
              variants={container}
              initial="hidden"
              animate="show"
              exit="exit"
              className="pointer-events-auto flex flex-col gap-3"
            >
          {buttons.map(({ href, label, icon: Icon, color }) => (
            <MotionLink
              key={label}
              variants={item}
              whileHover={{ scale: 1.15, x: -2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-ink-800/90 text-cyan-300 shadow-[0_8px_30px_rgba(4,7,13,0.7)] backdrop-blur transition-colors hover:text-white ${color}`}
            >
              <Icon className="h-5 w-5" />
            </MotionLink>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
      </div>
    </div>
  );
}