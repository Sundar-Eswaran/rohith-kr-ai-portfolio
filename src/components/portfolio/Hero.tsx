import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useRef } from "react";
import { contact } from "@/lib/portfolio-data";
import { AnimatedBackground } from "./AnimatedBackground";
import { MagneticButton, MagneticLink } from "./Magnetic";
import { DownloadResumeButton, ViewResumeLink } from "./ResumeButtons";
import { scrollToSection } from "./SmoothScroll";

const name = "ROHITH K R".split("");

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const socials = [
    { icon: Github, href: contact.github, label: "GitHub", external: true },
    { icon: Linkedin, href: contact.linkedin, label: "LinkedIn", external: true },
    { icon: Mail, href: `mailto:${contact.email}`, label: "Email", external: false },
  ];

  return (
    <section
      id="home"
      ref={ref}
      className="relative grain flex min-h-[100svh] flex-col justify-center overflow-hidden px-5 pb-20 pt-32 sm:px-8"
    >
      <AnimatedBackground />

      <motion.div style={{ y, opacity }} className="relative mx-auto w-full max-w-6xl">
        <motion.div
          className="flex items-center gap-3 label-eyebrow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.6 }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-olive opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-olive" />
          </span>
          Available for internships & opportunities
        </motion.div>

        <h1 className="mt-6 font-display text-[15vw] font-bold leading-[0.88] tracking-tighter sm:text-[11vw] lg:text-[9.5rem]">
          {name.map((c, i) => (
            <motion.span
              key={i}
              className="inline-block"
              initial={{ y: "0.4em", opacity: 0, rotateX: -60 }}
              animate={{ y: 0, opacity: 1, rotateX: 0 }}
              transition={{ delay: 2.25 + i * 0.045, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              {c === " " ? "\u00A0" : c}
            </motion.span>
          ))}
        </h1>

        <motion.div
          className="mt-4 flex flex-wrap items-baseline gap-x-4 gap-y-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 0.8 }}
        >
          <h2 className="font-display text-xl font-semibold uppercase tracking-[0.2em] text-olive-light sm:text-3xl">
            AI &amp; Data Science Student
          </h2>
          <span className="hidden h-px w-16 bg-olive/50 sm:block" />
        </motion.div>

        <motion.p
          className="mt-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground sm:text-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.95, duration: 0.8 }}
        >
          Machine Learning <span className="text-olive">•</span> Data Science{" "}
          <span className="text-olive">•</span> Computer Vision <span className="text-olive">•</span> AI
          Automation
        </motion.p>

        <motion.p
          className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.05, duration: 0.8 }}
        >
          Building intelligent solutions with data, machine learning and AI.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.2, duration: 0.8 }}
        >
          <MagneticButton
            onClick={() => scrollToSection("projects")}
            className="group inline-flex items-center gap-2 rounded-full border border-olive/50 px-7 py-3.5 text-sm uppercase tracking-[0.16em] text-foreground transition-colors hover:border-olive hover:bg-olive/10"
          >
            View My Work
            <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
          </MagneticButton>
          <DownloadResumeButton size="lg" />
          <ViewResumeLink />
        </motion.div>

        <motion.div
          className="mt-12 flex items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.35, duration: 0.8 }}
        >
          {socials.map(({ icon: Icon, href, label, external }) => (
            <MagneticLink
              key={label}
              href={href}
              ariaLabel={label}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              className="grid h-11 w-11 place-items-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:border-olive hover:text-olive-light hover:shadow-[0_0_30px_-8px_rgba(140,154,85,0.8)]"
            >
              <Icon className="h-4.5 w-4.5" />
            </MagneticLink>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 label-eyebrow"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
      >
        Scroll
      </motion.div>
    </section>
  );
}
