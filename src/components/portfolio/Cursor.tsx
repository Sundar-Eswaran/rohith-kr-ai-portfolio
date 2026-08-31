import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    setEnabled(true);
    document.body.classList.add("custom-cursor-active");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement | null;
      setHovering(!!t?.closest("a,button,[data-cursor='hover']"));
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      document.body.classList.remove("custom-cursor-active");
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[999] hidden lg:block"
        style={{ x: sx, y: sy }}
      >
        <motion.div
          className="rounded-full border border-olive/70 bg-olive/10 backdrop-blur-[1px]"
          animate={{ width: hovering ? 56 : 28, height: hovering ? 56 : 28, opacity: hovering ? 1 : 0.8 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          style={{ marginLeft: "-50%", marginTop: "-50%", translateX: "-0%", translateY: "-0%" }}
        />
      </motion.div>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[999] hidden h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-olive-light lg:block"
        style={{ x, y }}
      />
    </>
  );
}
