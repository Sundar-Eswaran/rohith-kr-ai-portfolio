import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "motion/react";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/portfolio-data";
import { scrollToSection } from "./SmoothScroll";
import { DownloadResumeButton } from "./ResumeButtons";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const { scrollY, scrollYProgress } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    navItems.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const go = (id: string) => {
    setOpen(false);
    setTimeout(() => scrollToSection(id), 60);
  };

  return (
    <>
      <motion.div
        className="fixed left-0 top-0 z-[90] h-0.5 origin-left bg-olive w-full"
        style={{ scaleX: scrollYProgress }}
      />
      <header className="fixed inset-x-0 top-0 z-[80] px-4 pt-4 sm:px-6">
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 2.1, ease: [0.16, 1, 0.3, 1] }}
          className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-500 sm:px-6 ${
            scrolled
              ? "border-border bg-background/75 backdrop-blur-xl shadow-[0_20px_60px_-40px_rgba(0,0,0,0.9)]"
              : "border-transparent bg-transparent"
          }`}
        >
          <button
            onClick={() => go("home")}
            className="font-display text-sm font-bold tracking-[0.22em] transition-colors hover:text-olive-light"
          >
            ROHITH<span className="text-olive">.</span>KR
          </button>

          <ul className="hidden items-center gap-1 lg:flex">
            {navItems.map((n) => (
              <li key={n.id}>
                <button
                  onClick={() => go(n.id)}
                  className={`relative rounded-full px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] transition-colors ${
                    active === n.id ? "text-olive-light" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {active === n.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full border border-olive/40 bg-olive/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative">{n.label}</span>
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <DownloadResumeButton size="sm" className="hidden sm:inline-flex" />
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              className="grid h-9 w-9 place-items-center rounded-full border border-border text-foreground lg:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </motion.nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[75] flex flex-col justify-center gap-1 bg-background/95 px-8 backdrop-blur-xl lg:hidden"
          >
            {navItems.map((n, i) => (
              <motion.button
                key={n.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i }}
                onClick={() => go(n.id)}
                className="border-b border-border/60 py-4 text-left font-display text-2xl font-semibold tracking-tight"
              >
                <span className="mr-3 text-xs text-olive">0{i + 1}</span>
                {n.label}
              </motion.button>
            ))}
            <DownloadResumeButton className="mt-8 self-start" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
