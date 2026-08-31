import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import type { MouseEvent } from "react";
import { interests } from "@/lib/portfolio-data";
import { SectionHeading } from "./Reveal";

function TiltCard({ data, index }: { data: (typeof interests)[number]; index: number }) {
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [8, -8]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(mx, [0, 1], [-8, 8]), { stiffness: 200, damping: 20 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={onMove}
      onMouseLeave={() => {
        mx.set(0.5);
        my.set(0.5);
      }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card/50 p-8 transition-colors duration-500 hover:border-olive/60"
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-olive/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
      <span className="font-mono text-xs tracking-[0.3em] text-olive">{data.no}</span>
      <h3 className="mt-6 font-display text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
        {data.title}
      </h3>
      <ul className="mt-6 space-y-2.5">
        {data.items.map((i) => (
          <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
            <span className="h-px w-6 bg-olive/60 transition-all duration-500 group-hover:w-10" />
            {i}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function Interests() {
  return (
    <section className="relative border-t border-border/60 px-5 py-28 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="02 / Area of interest" title="What I Love Building" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {interests.map((d, i) => (
            <TiltCard key={d.no} data={d} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
