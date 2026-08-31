import { motion } from "motion/react";

/** Abstract, on-theme SVG visuals — no stock imagery. */
export function ProjectVisual({ variant }: { variant: "neural" | "rails" }) {
  return (
    <div className="relative h-56 w-full overflow-hidden rounded-xl border border-border bg-background/60 sm:h-full sm:min-h-[280px]">
      <div className="absolute inset-0 grid-lines opacity-40" />
      <div className="absolute -left-10 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-olive/15 blur-3xl" />
      {variant === "neural" ? <Neural /> : <Rails />}
    </div>
  );
}

function Neural() {
  const layers = [3, 5, 4, 2];
  const w = 400;
  const h = 260;
  const nodes = layers.map((count, li) =>
    Array.from({ length: count }, (_, ni) => ({
      x: 50 + (li * (w - 100)) / (layers.length - 1),
      y: (h / (count + 1)) * (ni + 1),
    })),
  );
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="absolute inset-0 h-full w-full">
      {nodes.slice(0, -1).map((layer, li) =>
        layer.map((a, ai) =>
          nodes[li + 1]!.map((b, bi) => (
            <motion.line
              key={`${li}-${ai}-${bi}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="rgba(140,154,85,0.35)"
              strokeWidth="0.8"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: li * 0.2 + ai * 0.03 }}
            />
          )),
        ),
      )}
      {nodes.flat().map((n, i) => (
        <motion.circle
          key={i}
          cx={n.x}
          cy={n.y}
          r="4.5"
          fill="rgb(160,175,100)"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.04, type: "spring", stiffness: 260, damping: 16 }}
        />
      ))}
    </svg>
  );
}

function Rails() {
  return (
    <svg viewBox="0 0 400 260" className="absolute inset-0 h-full w-full">
      {[70, 130, 190].map((y, i) => (
        <motion.line
          key={y}
          x1="20"
          y1={y}
          x2="380"
          y2={y}
          stroke="rgba(140,154,85,0.45)"
          strokeWidth="1.4"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: i * 0.15 }}
        />
      ))}
      {Array.from({ length: 14 }, (_, i) => (
        <motion.rect
          key={i}
          x={26 + i * 26}
          y="58"
          width="4"
          height="144"
          fill="rgba(140,154,85,0.18)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + i * 0.04 }}
        />
      ))}
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={i}
          r="5"
          cy={70 + i * 60}
          fill="rgb(170,185,110)"
          initial={{ cx: 20 }}
          animate={{ cx: [20, 380] }}
          transition={{ duration: 5 + i, repeat: Infinity, ease: "linear", delay: i * 0.8 }}
        />
      ))}
      {[80, 200, 300].map((x, i) => (
        <rect
          key={x}
          x={x}
          y={215}
          width="46"
          height="26"
          rx="4"
          fill="none"
          stroke="rgba(140,154,85,0.5)"
          strokeDasharray={i === 1 ? "4 3" : undefined}
        />
      ))}
    </svg>
  );
}
