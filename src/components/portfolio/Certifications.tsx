import { motion } from "motion/react";
import { Award } from "lucide-react";
import { certifications } from "@/lib/portfolio-data";
import { SectionHeading } from "./Reveal";

export function Certifications() {
  return (
    <section
      id="certifications"
      className="relative border-t border-border/60 px-5 py-28 sm:px-8 sm:py-36"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="07 / Credentials" title="Certifications" />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/50 p-7 transition-colors hover:border-olive/60"
            >
              <div className="absolute inset-0 grid-lines opacity-20" />
              <div className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-olive/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <span className="grid h-10 w-10 place-items-center rounded-full border border-olive/40 text-olive-light transition-all duration-500 group-hover:bg-olive/15">
                  <Award className="h-4.5 w-4.5" />
                </span>
                <h3 className="mt-6 font-display text-lg font-semibold leading-snug tracking-tight">
                  {c.title}
                </h3>
                {c.meta && (
                  <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    {c.meta}
                  </p>
                )}
                <span className="mt-6 block h-px w-full bg-border transition-colors duration-500 group-hover:bg-olive/50" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
