import { motion } from "motion/react";
import { MessageSquare, Puzzle } from "lucide-react";
import { skillGroups, softSkills } from "@/lib/portfolio-data";
import { Reveal, SectionHeading, item, stagger } from "./Reveal";

const icons = [MessageSquare, Puzzle];

export function Skills() {
  return (
    <section id="skills" className="relative border-t border-border/60 px-5 py-28 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="03 / Toolkit" title="Technical Skills" />

        <div className="mt-14 space-y-10">
          {skillGroups.map((g, gi) => (
            <Reveal key={g.group} delay={gi * 0.05}>
              <div className="grid gap-5 border-t border-border/60 pt-8 md:grid-cols-[220px_1fr]">
                <h3 className="label-eyebrow pt-1">{g.group}</h3>
                <motion.div
                  variants={stagger}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-60px" }}
                  className="flex flex-wrap gap-3"
                >
                  {g.items.map((s) => (
                    <motion.span
                      key={s}
                      variants={item}
                      whileHover={{ y: -6, scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 300, damping: 18 }}
                      data-cursor="hover"
                      className="group relative cursor-default overflow-hidden rounded-xl border border-border bg-card/60 px-5 py-3 font-display text-base font-semibold tracking-tight transition-colors hover:border-olive/70 sm:text-lg"
                    >
                      <span className="absolute inset-x-0 bottom-0 h-px bg-olive transition-all duration-500 group-hover:h-full group-hover:opacity-10" />
                      <span className="relative transition-colors group-hover:text-olive-light">{s}</span>
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-24">
          <Reveal>
            <h3 className="font-display text-2xl font-bold tracking-tight sm:text-4xl">Soft Skills</h3>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {softSkills.map((s, i) => {
              const Icon = icons[i] ?? MessageSquare;
              return (
                <Reveal key={s.title} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="group h-full rounded-2xl border border-border bg-card/50 p-7 transition-colors hover:border-olive/60"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-full border border-olive/40 text-olive-light transition-all duration-500 group-hover:bg-olive/15">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h4 className="mt-5 font-display text-xl font-semibold tracking-tight">{s.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
