"use client";

import { motion } from "framer-motion";
import { profile } from "@/components/features/profile";

export function SkillsProficiency() {
  return (
    <div className="glass mb-10 rounded-3xl p-7 sm:p-10">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-300">
            Core Proficiency
          </p>
          <h3 className="mt-2 font-display text-xl font-bold text-white sm:text-2xl">
            How sharp my tools are
          </h3>
        </div>
        <p className="text-xs text-slate-500">Self-assessed · refined on real projects</p>
      </div>

      <div className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
        {profile.proficiencies.map((skill, i) => (
          <div key={skill.name}>
            <div className="mb-2 flex items-center justify-between gap-3">
              <span className="text-sm font-medium text-slate-300">{skill.name}</span>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, margin: "-40px" }}
                transition={{ delay: 0.5 + i * 0.06 }}
                className="font-mono text-xs text-cyan-300"
              >
                {skill.level}%
              </motion.span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/[0.06]">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: false, margin: "-40px" }}
                transition={{ duration: 1.2, delay: 0.2 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-violet-500"
              >
                <span className="absolute right-0 top-0 h-full w-3 rounded-full bg-white/40 blur-sm" />
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}