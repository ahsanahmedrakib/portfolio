import { Award, GraduationCap, HeartHandshake, Languages } from "lucide-react";
import { profile } from "@/components/features/profile";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Education & More"
          title={
            <>
              The foundation behind <span className="text-gradient">the work</span>
            </>
          }
        />

        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal variant="left">
            <div className="space-y-5">
              {profile.education.map((edu) => (
                <div key={edu.degree} className="glass rounded-3xl p-6 transition-colors hover:border-cyan-400/25 sm:p-7">
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 text-cyan-300">
                      <GraduationCap className="h-6 w-6" />
                    </span>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="font-display text-lg font-bold text-white">{edu.degree}</h3>
                        <span className="rounded-full bg-cyan-400/10 px-3 py-1 font-mono text-xs text-cyan-300">
                          {edu.period}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-slate-300">{edu.school}</p>
                      <p className="mt-2 text-xs font-medium text-slate-500">{edu.note}</p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="glass rounded-3xl p-6 sm:p-7">
                <div className="mb-4 flex items-center gap-3">
                  <Languages className="h-5 w-5 text-violet-300" />
                  <h3 className="font-display text-lg font-bold text-white">Languages</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {profile.languages.map((lang) => (
                    <span
                      key={lang.name}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300"
                    >
                      <span className="font-semibold text-white">{lang.name}</span> · {lang.level}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal variant="right" delay={0.1}>
            <div className="space-y-6">
              <div className="glass rounded-3xl p-6 sm:p-7">
                <h3 className="mb-5 font-display text-lg font-bold text-white">
                  Professional Training
                </h3>
                <div className="space-y-3">
                  {profile.training.map((t) => (
                    <div
                      key={t.name}
                      className="flex items-center justify-between gap-4 rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-3"
                    >
                      <div>
                        <p className="text-sm font-semibold text-slate-200">{t.name}</p>
                        <p className="text-xs text-slate-500">{t.org}</p>
                      </div>
                      <span className="rounded-full bg-white/5 px-3 py-1 font-mono text-xs text-slate-400">
                        {t.year}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass rounded-3xl p-6 sm:p-7">
                <div className="mb-5 flex items-center gap-3">
                  <Award className="h-5 w-5 text-amber-300" />
                  <h3 className="font-display text-lg font-bold text-white">Awards</h3>
                </div>
                <ul className="space-y-3">
                  {profile.awards.map((award) => (
                    <li key={award} className="flex items-start gap-3 text-sm text-slate-300">
                      <Award className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />
                      {award}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass rounded-3xl p-6 sm:p-7">
                <div className="mb-5 flex items-center gap-3">
                  <HeartHandshake className="h-5 w-5 text-rose-300" />
                  <h3 className="font-display text-lg font-bold text-white">Volunteering</h3>
                </div>
                <div className="space-y-4">
                  {profile.volunteering.map((v) => (
                    <div key={v.title}>
                      <p className="text-sm font-semibold text-slate-200">{v.title}</p>
                      <p className="text-xs text-slate-500">{v.org}</p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-400">{v.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}