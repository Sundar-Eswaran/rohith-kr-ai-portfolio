import { motion } from "motion/react";
import { focusAreas, stats } from "@/lib/portfolio-data";
import { Reveal, SectionHeading, item, stagger } from "./Reveal";

export function About() {
  return (
    <section id="about" className="relative border-t border-border/60 px-5 py-28 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="01 / About" title="About Me" />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <Reveal>
              <p className="text-lg leading-relaxed text-foreground/90 sm:text-2xl sm:leading-[1.5]">
                Motivated <span className="text-olive-light">Data Science</span> enthusiast with strong
                expertise in <span className="text-olive-light">Machine Learning</span> and{" "}
                <span className="text-olive-light">Computer Vision</span>, seeking to contribute to
                innovative, data-driven solutions.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
                Eager to leverage hands-on experience in predictive analytics and real-world projects to
                drive measurable business impact and organizational growth.
              </p>
            </Reveal>

            <motion.ul
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="mt-10 flex flex-wrap gap-2.5"
            >
              {focusAreas.map((f) => (
                <motion.li
                  key={f}
                  variants={item}
                  whileHover={{ y: -4 }}
                  className="rounded-full border border-border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:border-olive/70 hover:text-olive-light"
                >
                  {f}
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1"
          >
            {stats.map((s) => (
              <motion.div
                key={s.label}
                variants={item}
                whileHover={{ x: 6 }}
                className="group relative overflow-hidden rounded-xl border border-border bg-card/60 p-6 transition-colors hover:border-olive/60"
              >
                <span className="absolute inset-y-0 left-0 w-px bg-olive transition-all duration-500 group-hover:w-1" />
                <div className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                  {s.value}
                  <span className="text-olive-light">{s.suffix}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
