import { Github, Linkedin, Mail } from "lucide-react";
import { contact } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="border-t border-border/60 px-5 py-14 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">ROHITH K R</h2>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            AI &amp; Data Science <span className="text-olive">|</span> Machine Learning{" "}
            <span className="text-olive">|</span> Data Science <span className="text-olive">|</span> Web
            Development
          </p>
        </div>

        <div className="flex flex-col gap-6 sm:items-end">
          <div className="flex gap-3">
            {[
              { icon: Github, href: contact.github, label: "GitHub", external: true },
              { icon: Linkedin, href: contact.linkedin, label: "LinkedIn", external: true },
              { icon: Mail, href: `mailto:${contact.email}`, label: "Email", external: false },
            ].map(({ icon: Icon, href, label, external }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:border-olive hover:text-olive-light"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            © 2026 Rohith K R. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
