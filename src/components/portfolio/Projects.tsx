import { motion } from "motion/react";
import { Github } from "lucide-react";
import { projects, type Project } from "@/lib/portfolio-data";
import { SectionHeading } from "./Reveal";
import { ProjectVisual } from "./ProjectVisual";

function Card({ p, index }: { p: Project; index: number }) {
  // Use the GitHub URL from portfolio-data if available.
  // Otherwise use Rohith's GitHub profile.
  const githubUrl =
    p.githubUrl && p.githubUrl.length > 0
      ? p.githubUrl
      : "https://github.com/RohithKR-02";

  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.9,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-border
        bg-card/40
        p-6
        transition-all
        duration-500
        hover:border-olive/60
        hover:shadow-[0_40px_120px_-60px_rgba(140,154,85,0.6)]
        sm:p-9
      "
    >
      {/* Hover glow */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-700
          group-hover:opacity-100
        "
      >
        <div
          className="
            absolute
            -right-24
            -top-24
            h-72
            w-72
            rounded-full
            bg-olive/10
            blur-3xl
          "
        />
      </div>

      <div className="relative grid gap-8 lg:grid-cols-[1fr_0.85fr]">

        {/* =========================================
            PROJECT INFORMATION
        ========================================== */}

        <div>
          {/* Project number + date */}
          <div className="flex items-center gap-4">
            <span
              className="
                font-mono
                text-xs
                tracking-[0.3em]
                text-olive
              "
            >
              PROJECT {p.no}
            </span>

            <span
              className="
                h-px
                flex-1
                bg-border
                transition-colors
                duration-500
                group-hover:bg-olive/50
              "
            />

            <span
              className="
                font-mono
                text-[11px]
                uppercase
                tracking-[0.18em]
                text-muted-foreground
              "
            >
              {p.date}
            </span>
          </div>

          {/* Project title */}
          <h3
            className="
              mt-6
              font-display
              text-3xl
              font-bold
              leading-[0.95]
              tracking-tight
              sm:text-5xl
            "
          >
            {p.title}

            {p.subtitle && (
              <span className="block text-olive-light">
                {p.subtitle}
              </span>
            )}
          </h3>

          {/* Description */}
          <p
            className="
              mt-6
              max-w-xl
              leading-relaxed
              text-muted-foreground
            "
          >
            {p.description}
          </p>

          {/* Extra description */}
          {p.extra && (
            <p
              className="
                mt-4
                max-w-xl
                leading-relaxed
                text-muted-foreground
              "
            >
              {p.extra}
            </p>
          )}

          {/* Technology tags */}
          <ul className="mt-7 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <li
                key={t}
                className="
                  rounded-full
                  border
                  border-border
                  px-3.5
                  py-1.5
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-[0.16em]
                  text-muted-foreground
                  transition-colors
                  group-hover:border-olive/40
                  group-hover:text-olive-light
                "
              >
                {t}
              </li>
            ))}
          </ul>

          {/* =========================================
              ONLY GITHUB BUTTON
          ========================================== */}

          <div className="mt-9">
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-olive/50
                px-7
                py-3.5
                text-xs
                uppercase
                tracking-[0.16em]
                text-foreground
                transition-all
                duration-300
                hover:border-olive
                hover:bg-olive/10
                hover:text-olive-light
                hover:shadow-[0_0_30px_-8px_rgba(140,154,85,0.7)]
              "
              title="Open GitHub repository"
            >
              <Github
                className="
                  h-4
                  w-4
                  transition-transform
                  duration-300
                  group-hover:rotate-6
                "
              />

              GitHub

              <span
                className="
                  text-olive
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                ↗
              </span>
            </motion.a>
          </div>
        </div>

        {/* =========================================
            PROJECT VISUAL
        ========================================== */}

        <motion.div
          whileHover={{
            scale: 1.02,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
          }}
        >
          <ProjectVisual variant={p.visual} />
        </motion.div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="
        relative
        border-t
        border-border/60
        px-5
        py-28
        sm:px-8
        sm:py-36
      "
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="04 / Work"
          title="Selected Projects"
        />

        <div className="mt-14 space-y-8">
          {projects.map((p, i) => (
            <Card
              key={p.no}
              p={p}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}