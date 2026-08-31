import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";
import { education } from "@/lib/portfolio-data";
import { SectionHeading } from "./Reveal";

export function Education() {
  return (
    <section id="education" className="relative border-t border-border/60 px-5 py-28 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="06 / Academics" title="Education" />

        <div className="mt-14 space-y-4">
          {education.map((e, i) => (
            <motion.div
              key={e.no}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ x: 8 }}
              className="group grid gap-5 rounded-2xl border border-border bg-card/40 p-6 transition-colors hover:border-olive/60 sm:grid-cols-[80px_1fr_auto] sm:items-center sm:p-8"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs tracking-[0.3em] text-olive">{e.no}</span>
                <GraduationCap className="h-4 w-4 text-olive/70 sm:hidden" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold leading-snug tracking-tight sm:text-2xl">
                  {e.degree}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{e.school}</p>
                <p className="text-sm text-muted-foreground">{e.board}</p>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-olive-light">
                  {e.period}
                </p>
              </div>
              {e.score && (
                <div className="text-left sm:text-right">
                  <div className="font-display text-2xl font-bold text-olive-light sm:text-3xl">
                    {e.score}
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">{e.scoreNote}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
