import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Briefcase } from "lucide-react";
import { experience } from "@/lib/portfolio-data";
import { SectionHeading, item, stagger } from "./Reveal";

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 60%"] });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="relative border-t border-border/60 px-5 py-28 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="05 / Journey" title="Experience" />

        <div ref={ref} className="relative mt-14 pl-8 sm:pl-14">
          <div className="absolute left-2 top-0 h-full w-px bg-border sm:left-4">
            <motion.div style={{ height }} className="w-px bg-olive" />
          </div>

          {experience.map((e, i) => (
            <motion.div
              key={e.role}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-2xl border border-border bg-card/50 p-6 transition-colors hover:border-olive/60 sm:p-9"
            >
              <span className="absolute -left-8 top-9 grid h-5 w-5 place-items-center rounded-full border border-olive bg-background sm:-left-[3.05rem]">
                <span className="h-2 w-2 rounded-full bg-olive transition-transform duration-500 group-hover:scale-150" />
              </span>

              <div className="flex flex-wrap items-center gap-3">
                <Briefcase className="h-4 w-4 text-olive" />
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  {e.period}
                </span>
              </div>
              <h3 className="mt-4 font-display text-2xl font-bold tracking-tight sm:text-4xl">{e.role}</h3>
              <p className="mt-2 text-olive-light">{e.company}</p>

              <motion.ul
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mt-7 grid gap-2.5 sm:grid-cols-2"
              >
                {e.points.map((p) => (
                  <motion.li
                    key={p}
                    variants={item}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-olive" />
                    {p}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
