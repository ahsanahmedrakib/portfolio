"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { projects, projectCategories } from "../data/projects.data";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";
import { GithubIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

export function Projects() {
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <section id="projects" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Portfolio"
          title={
            <>
              Recent projects, <span className="text-gradient">explained end to end</span>
            </>
          }
          description="Ten of my latest builds — from CMS-driven corporate websites to full e-commerce, school management systems, a flight booking platform, and a 100% AI-driven REST API. Every card opens into a complete case study."
        />

        <Reveal variant="fade">
          <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
            {["All", ...projectCategories].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "rounded-full px-4 py-2 text-xs font-semibold transition-all sm:text-sm",
                  filter === cat
                    ? "bg-linear-to-r from-cyan-500 to-violet-500 text-white shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                    : "border border-white/10 bg-white/3 text-slate-300 hover:border-cyan-400/40 hover:text-white",
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.slug}
                layout
                className="h-full"
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.35 }}
              >
                <TiltCard>
                  <ProjectCard project={project} />
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <Reveal delay={0.1} className="mt-12 text-center">
          <Link
            href="https://github.com/ahsanahmedrakib?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-cyan-400/50 hover:text-white"
          >
            <GithubIcon className="h-4 w-4" />
            Explore all repositories
          </Link>
        </Reveal>
      </div>
    </section>
  );
}