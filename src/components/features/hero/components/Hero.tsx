"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform, type Variants } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { profile } from "@/components/features/profile";
import { Reveal } from "@/components/ui/Reveal";
import { FacebookIcon, GithubIcon, LinkedInIcon, XIcon } from "@/components/icons";

const MotionLink = motion.create(Link);

function useTypewriter(words: readonly string[], speed = 70, pause = 1600) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      timeout = setTimeout(() => {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      }, 0);
    } else {
      timeout = setTimeout(
        () => setText((prev) => (deleting ? prev.slice(0, -1) : word.slice(0, prev.length + 1))),
        deleting ? speed / 2 : speed,
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, speed, pause]);

  return text;
}

const socials = [
  { icon: GithubIcon, href: profile.socials.github, label: "GitHub" },
  { icon: LinkedInIcon, href: profile.socials.linkedin, label: "LinkedIn" },
  { icon: FacebookIcon, href: profile.socials.facebook, label: "Facebook" },
  { icon: XIcon, href: profile.socials.twitter, label: "Twitter" },
];

const nameWords = ["Ahsan", "Ahmed", "Rakib"];

const wordContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const wordItem: Variants = {
  hidden: { opacity: 0, y: 40, rotate: 4 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  const text = useTypewriter(profile.roles);
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const avatarY = useTransform(scrollY, [0, 700], [0, 90]);
  const badgeY = useTransform(scrollY, [0, 700], [0, -70]);
  const fade = useTransform(scrollY, [0, 500], [1, 0.4]);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="flex flex-col items-start gap-6">
          <Reveal variant="fade">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-4 py-1.5 text-xs font-medium text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Open to full-time & freelance opportunities
            </span>
          </Reveal>

          <motion.h1
            variants={wordContainer}
            initial={reduce ? false : "hidden"}
            animate="visible"
            className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-[4.2rem]"
          >
            Hi, I&apos;m{" "}
            <span className="relative whitespace-nowrap">
              {nameWords.map((word, i) => (
                <motion.span key={word} variants={wordItem} className="inline-block">
                  <span className="text-gradient">{word}</span>
                  {i < nameWords.length - 1 ? "\u00A0" : ""}
                </motion.span>
              ))}
              <svg
                viewBox="0 0 220 14"
                className="absolute -bottom-2 left-0 w-full text-cyan-400/60"
                fill="none"
                aria-hidden
              >
                <motion.path
                  d="M3 9.5C48 3.5 120 2.5 217 6.5"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.1, delay: 0.9, ease: "easeInOut" }}
                />
              </svg>
            </span>
          </motion.h1>

          <Reveal delay={0.16}>
            <div className="flex h-10 items-center gap-2 font-display text-xl font-semibold text-slate-200 sm:text-2xl">
              <span className="text-slate-400">—</span>
              <span>{text}</span>
              <span className="animate-caret -ml-1 inline-block h-7 w-0.75 bg-cyan-400 sm:h-8" />
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <p className="max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
              An <span className="text-slate-200">AI Agentic Developer</span> shipping{" "}
              <span className="text-slate-200">React.js & Next.js</span> applications — orchestrating
              opencode, Claude CLI, ChatGPT, Grok & MCP to deliver enterprise-grade products in the
              travel, aviation, and energy industries.
            </p>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="flex flex-wrap items-center gap-4">
              <MotionLink
                href="#projects"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="btn-sheen group inline-flex items-center gap-2 rounded-full bg-linear-to-r from-cyan-500 to-violet-500 px-7 py-3 text-sm font-semibold text-white transition-shadow hover:shadow-[0_0_28px_rgba(34,211,238,0.55)]"
              >
                View My Work
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
              </MotionLink>
              <MotionLink
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-cyan-400/50 hover:text-white"
              >
                Download Resume
              </MotionLink>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-2 flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <MotionLink
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -4, scale: 1.08 }}
                  whileTap={{ scale: 0.94 }}
                  transition={{ type: "spring", stiffness: 400, damping: 18 }}
                  className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/3 text-slate-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-300 hover:shadow-[0_8px_20px_rgba(34,211,238,0.15)]"
                >
                  <Icon className="h-5 w-5" />
                </MotionLink>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="hidden lg:block">
          <motion.div style={{ y: avatarY, opacity: fade }} className="relative mx-auto w-fit">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              <div className="absolute -inset-10 -z-10 animate-spin-slow rounded-full bg-[conic-gradient(from_0deg,transparent_0%,rgba(34,211,238,0.45)_18%,transparent_40%,transparent_55%,rgba(139,92,246,0.45)_75%,transparent_100%)] blur-md" />
              <div className="animate-float">
                <div className="glass ring-glow spotlight relative h-80 w-80 overflow-hidden rounded-4xl">
                  <Image
                    src={profile.avatar}
                    alt={profile.name}
                    fill
                    sizes="320px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-ink-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <motion.p
                      animate={reduce ? undefined : { opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="font-mono text-xs text-cyan-300"
                    >
                      {profile.location}
                    </motion.p>
                    <p className="font-display text-lg font-bold text-white">{profile.name}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              style={{ y: badgeY }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="glass absolute -left-16 top-10 hidden rounded-2xl px-4 py-3 sm:block"
            >
              <p className="font-display text-2xl font-bold text-gradient-fire">4+ yrs</p>
              <p className="text-[11px] text-slate-400">Experience</p>
            </motion.div>

            <motion.div
              style={{ y: badgeY }}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="glass absolute -right-10 bottom-16 hidden rounded-2xl px-4 py-3 sm:block"
            >
              <p className="font-display text-2xl font-bold text-gradient">15+</p>
              <p className="text-[11px] text-slate-400">Projects Shipped</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-float md:block">
        <Link href="#about" aria-label="Scroll down">
          <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-1.5">
            <motion.div
              animate={reduce ? undefined : { y: [0, 12, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="h-2 w-1 rounded-full bg-cyan-400"
            />
          </div>
        </Link>
      </div>
    </section>
  );
}