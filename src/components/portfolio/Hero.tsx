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

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const socials = [
    {
      icon: Github,
      href: contact.github,
      label: "GitHub",
      external: true,
    },
    {
      icon: Linkedin,
      href: contact.linkedin,
      label: "LinkedIn",
      external: true,
    },
    {
      icon: Mail,
      href: `mailto:${contact.email}`,
      label: "Email",
      external: false,
    },
  ];

  return (
    <section
      id="home"
      ref={ref}
      className="
        relative
        grain
        flex
        min-h-[100svh]
        flex-col
        justify-center
        overflow-hidden
        px-5
        pb-20
        pt-28
        sm:px-8
        lg:pt-24
      "
    >
      {/* Animated background */}
      <AnimatedBackground />

      <motion.div
        style={{ y, opacity }}
        className="
          relative
          mx-auto
          w-full
          max-w-7xl
        "
      >
        {/* ==========================================
            MAIN HERO GRID
        =========================================== */}

        <div
          className="
            grid
            items-center
            gap-12
            lg:grid-cols-[minmax(0,1fr)_400px]
            lg:gap-14
            xl:grid-cols-[minmax(0,1fr)_430px]
            xl:gap-20
          "
        >
          {/* ========================================
              LEFT SIDE - CONTENT
          ========================================= */}

          <div className="order-2 lg:order-1">

            {/* Available status */}
            <motion.div
              className="flex items-center gap-3 label-eyebrow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 2.2,
                duration: 0.6,
              }}
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-olive
                    opacity-70
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    h-2
                    w-2
                    rounded-full
                    bg-olive
                  "
                />
              </span>

              Available for internships & opportunities
            </motion.div>

            {/* ========================================
                NAME
            ========================================= */}

            <h1
              className="
                mt-6
                font-display
                text-[13vw]
                font-bold
                leading-[0.9]
                tracking-[-0.06em]
                sm:text-[9vw]
                lg:text-[6rem]
                xl:text-[6.5rem]
              "
            >
              {name.map((c, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  initial={{
                    y: "0.4em",
                    opacity: 0,
                    rotateX: -60,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    rotateX: 0,
                  }}
                  transition={{
                    delay: 2.25 + i * 0.045,
                    duration: 0.9,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {c === " " ? "\u00A0" : c}
                </motion.span>
              ))}
            </h1>

            {/* ========================================
                ROLE
            ========================================= */}

            <motion.div
              className="
                mt-5
                flex
                flex-wrap
                items-baseline
                gap-x-4
                gap-y-2
              "
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 2.8,
                duration: 0.8,
              }}
            >
              <h2
                className="
                  font-display
                  text-lg
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-olive-light
                  sm:text-2xl
                  lg:text-[1.6rem]
                "
              >
                AI &amp; Data Science Student
              </h2>

              <span
                className="
                  hidden
                  h-px
                  w-16
                  bg-olive/50
                  sm:block
                "
              />
            </motion.div>

            {/* ========================================
                SPECIALIZATION
            ========================================= */}

            <motion.p
              className="
                mt-3
                font-mono
                text-[10px]
                uppercase
                tracking-[0.18em]
                text-muted-foreground
                sm:text-xs
              "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 2.95,
                duration: 0.8,
              }}
            >
              Machine Learning{" "}
              <span className="text-olive">•</span>{" "}
              Data Science{" "}
              <span className="text-olive">•</span>{" "}
              Computer Vision{" "}
              <span className="text-olive">•</span>{" "}
              AI Automation
            </motion.p>

            {/* ========================================
                DESCRIPTION
            ========================================= */}

            <motion.p
              className="
                mt-7
                max-w-xl
                text-base
                leading-relaxed
                text-muted-foreground
                sm:text-lg
              "
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 3.05,
                duration: 0.8,
              }}
            >
              Building intelligent solutions with data,
              machine learning and AI.
            </motion.p>

            {/* ========================================
                CTA BUTTONS
            ========================================= */}

            <motion.div
              className="
                mt-9
                flex
                flex-wrap
                items-center
                gap-4
              "
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 3.2,
                duration: 0.8,
              }}
            >
              {/* View work */}
              <MagneticButton
                onClick={() => scrollToSection("projects")}
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-olive/50
                  px-7
                  py-3.5
                  text-sm
                  uppercase
                  tracking-[0.16em]
                  text-foreground
                  transition-colors
                  hover:border-olive
                  hover:bg-olive/10
                "
              >
                View My Work

                <ArrowDown
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-hover:translate-y-1
                  "
                />
              </MagneticButton>

              {/* Download resume */}
              <DownloadResumeButton size="lg" />

              {/* View resume */}
              <ViewResumeLink />
            </motion.div>

            {/* ========================================
                SOCIAL LINKS
            ========================================= */}

            <motion.div
              className="
                mt-10
                flex
                items-center
                gap-4
              "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 3.35,
                duration: 0.8,
              }}
            >
              {socials.map(
                ({
                  icon: Icon,
                  href,
                  label,
                  external,
                }) => (
                  <MagneticLink
                    key={label}
                    href={href}
                    ariaLabel={label}
                    target={
                      external
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      external
                        ? "noreferrer"
                        : undefined
                    }
                    className="
                      grid
                      h-11
                      w-11
                      place-items-center
                      rounded-full
                      border
                      border-border
                      text-muted-foreground
                      transition-all
                      duration-300
                      hover:border-olive
                      hover:text-olive-light
                      hover:shadow-[0_0_30px_-8px_rgba(140,154,85,0.8)]
                    "
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </MagneticLink>
                )
              )}
            </motion.div>
          </div>

          {/* ==========================================
              RIGHT SIDE - PROFILE PHOTO
          =========================================== */}

          <motion.div
            className="
              order-1
              flex
              justify-center
              lg:order-2
              lg:justify-end
            "
            initial={{
              opacity: 0,
              x: 80,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              delay: 2.4,
              duration: 1.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {/* Floating profile wrapper */}
            <motion.div
              className="relative"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >

              {/* ====================================
                  OUTER GLOW
              ===================================== */}

              <div
                className="
                  absolute
                  -inset-8
                  rounded-[2.5rem]
                  bg-olive/10
                  blur-3xl
                "
              />

              {/* ====================================
                  ROTATING OUTER RING
              ===================================== */}

              <motion.div
                className="
                  absolute
                  -inset-4
                  rounded-[2.5rem]
                  border
                  border-olive/20
                "
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* ====================================
                  SECOND DECORATIVE RING
              ===================================== */}

              <motion.div
                className="
                  absolute
                  -inset-2
                  rounded-[2.3rem]
                  border
                  border-olive/10
                "
                animate={{
                  rotate: [360, 0],
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* ====================================
                  PROFILE IMAGE CONTAINER
              ===================================== */}

              <div
                className="
                  relative
                  h-[350px]
                  w-[285px]
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-olive/50
                  bg-black/50
                  shadow-[0_0_90px_-25px_rgba(107,122,58,0.85)]
                  sm:h-[420px]
                  sm:w-[340px]
                  lg:h-[460px]
                  lg:w-[370px]
                  xl:h-[500px]
                  xl:w-[400px]
                "
              >
                {/* ==================================
                    PROFILE IMAGE

                    Put image at:
                    public/images/rohith-profile.jpg
                =================================== */}

                <motion.img
                  src="/images/rohith-profile.jpg"
                  alt="Rohith K R"
                  className="
                    h-full
                    w-full
                    object-cover
                    object-[center_20%]
                  "
                  whileHover={{
                    scale: 1.05,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                />

                {/* ==================================
                    IMAGE GRADIENT
                =================================== */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/70
                    via-transparent
                    to-olive/5
                  "
                />

                {/* ==================================
                    BOTTOM OLIVE GLOW
                =================================== */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    bottom-0
                    left-0
                    right-0
                    h-32
                    bg-gradient-to-t
                    from-olive/25
                    to-transparent
                  "
                />

                {/* ==================================
                    TOP SHINE
                =================================== */}

                <motion.div
                  className="
                    pointer-events-none
                    absolute
                    inset-x-0
                    top-0
                    h-24
                    bg-gradient-to-b
                    from-white/5
                    to-transparent
                  "
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>

              {/* ====================================
                  FLOATING LABEL
              ===================================== */}

              <motion.div
                className="
                  absolute
                  -bottom-5
                  -left-5
                  rounded-full
                  border
                  border-olive/40
                  bg-background/95
                  px-5
                  py-2.5
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-[0.18em]
                  text-olive-light
                  shadow-lg
                  backdrop-blur-md
                "
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                AI • DATA • ML
              </motion.div>

              {/* ====================================
                  FLOATING DOT
              ===================================== */}

              <motion.div
                className="
                  absolute
                  -right-4
                  top-10
                  h-3
                  w-3
                  rounded-full
                  bg-olive
                  shadow-[0_0_20px_rgba(140,154,85,0.9)]
                "
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* ====================================
                  SMALL DECORATIVE LINE
              ===================================== */}

              <motion.div
                className="
                  absolute
                  -right-8
                  bottom-20
                  hidden
                  h-px
                  w-16
                  bg-olive/40
                  sm:block
                "
                animate={{
                  width: [40, 64, 40],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* ==========================================
          SCROLL INDICATOR
      =========================================== */}

      <motion.div
        className="
          absolute
          bottom-6
          left-1/2
          -translate-x-1/2
          label-eyebrow
        "
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2.4,
          ease: "easeInOut",
        }}
      >
        Scroll
      </motion.div>
    </section>
  );
}