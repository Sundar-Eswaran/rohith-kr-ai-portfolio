import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export function Preloader({ onDone }: { onDone: () => void }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setShow(false);
      onDone();
    }, 2100);
    return () => clearTimeout(t);
  }, [onDone]);

  const words = ["AI", "DATA", "INTELLIGENCE"];

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-background"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.h1
            className="font-display text-3xl font-bold tracking-[0.3em] sm:text-5xl"
            initial={{ opacity: 0, letterSpacing: "0.6em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          >
            ROHITH K R
          </motion.h1>
          <div className="mt-6 flex gap-3 label-eyebrow">
            {words.map((w, i) => (
              <motion.span
                key={w}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.18, duration: 0.5 }}
              >
                {w}
                {i < words.length - 1 && <span className="ml-3 text-olive/50">/</span>}
              </motion.span>
            ))}
          </div>
          <div className="mt-10 h-px w-48 overflow-hidden bg-border sm:w-72">
            <motion.div
              className="h-full bg-olive"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.8, ease: [0.65, 0, 0.35, 1] }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
