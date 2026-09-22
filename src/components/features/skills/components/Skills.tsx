import { profile } from "@/components/features/profile";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillsProficiency } from "./SkillsProficiency";

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Skills & Tech Stack"
          title={
            <>
              The tools I use to <span className="text-gradient">ship great products</span>
            </>
          }
          description="A battle-tested stack refined across enterprise travel, aviation, e-commerce, energy, and education projects."
        />

        <Reveal variant="up">
          <SkillsProficiency />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {profile.skills.map((group, gi) => (
            <Reveal key={group.group} delay={gi * 0.08} variant="up">
              <div className="glass group relative h-full overflow-hidden rounded-3xl p-6 transition-all hover:-translate-y-1 hover:border-cyan-400/30">
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-400/10 blur-2xl transition-all group-hover:bg-cyan-400/20" />
                <div className="relative">
                  <p className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-cyan-300">
                    0{gi + 1} · {group.group}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-cyan-400/40 hover:text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}