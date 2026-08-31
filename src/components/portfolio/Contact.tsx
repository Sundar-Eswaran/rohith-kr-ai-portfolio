import { motion } from "motion/react";
import { Github, Linkedin, Mail, Phone, ArrowUpRight } from "lucide-react";
import { contact } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./Reveal";
import { MagneticLink } from "./Magnetic";
import { DownloadResumeButton } from "./ResumeButtons";

const channels = [
  { icon: Github, label: "GitHub", value: "RohithKR-02", href: contact.github, external: true },
  { icon: Linkedin, label: "LinkedIn", value: "rohith-kr", href: contact.linkedin, external: true },
  { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}`, external: false },
  { icon: Phone, label: "Phone", value: contact.phone, href: contact.phoneHref, external: false },
];

export function Contact() {
  return (
    <section id="contact" className="relative grain border-t border-border/60 px-5 py-28 sm:px-8 sm:py-36">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 h-[50vh] w-[70vw] -translate-x-1/2 rounded-full bg-olive/10 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading eyebrow="08 / Let's connect" title="Let's Build Something Intelligent" />

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Have an idea, opportunity, or project in mind? Let's connect and build meaningful solutions
            with AI, data and technology.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {channels.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.external ? "_blank" : undefined}
              rel={c.external ? "noreferrer" : undefined}
              data-cursor="hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group flex items-center justify-between rounded-2xl border border-border bg-card/50 p-6 transition-colors hover:border-olive/60"
            >
              <span className="flex items-center gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-full border border-olive/40 text-olive-light transition-all duration-500 group-hover:bg-olive/15">
                  <c.icon className="h-4.5 w-4.5" />
                </span>
                <span>
                  <span className="block label-eyebrow">{c.label}</span>
                  <span className="mt-1 block text-sm text-foreground/90 sm:text-base">{c.value}</span>
                </span>
              </span>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-olive-light" />
            </motion.a>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-wrap items-center gap-3">
            <MagneticLink
              href={`mailto:${contact.email}`}
              className="rounded-full bg-olive px-7 py-3.5 text-xs uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-olive-light"
            >
              Email Me
            </MagneticLink>
            <MagneticLink
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-olive/50 px-7 py-3.5 text-xs uppercase tracking-[0.18em] transition-colors hover:bg-olive/10"
            >
              LinkedIn
            </MagneticLink>
            <MagneticLink
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-olive/50 px-7 py-3.5 text-xs uppercase tracking-[0.18em] transition-colors hover:bg-olive/10"
            >
              GitHub
            </MagneticLink>
            <DownloadResumeButton size="lg" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
