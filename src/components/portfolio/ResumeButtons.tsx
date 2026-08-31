import { Download, Eye } from "lucide-react";
import { motion } from "motion/react";
import { RESUME_FILENAME, RESUME_PATH } from "@/lib/portfolio-data";
import { MagneticLink } from "./Magnetic";

export function DownloadResumeButton({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const pad =
    size === "sm" ? "px-4 py-2 text-xs" : size === "lg" ? "px-8 py-4 text-sm" : "px-6 py-3 text-sm";
  return (
    <MagneticLink
      href={RESUME_PATH}
      download={RESUME_FILENAME}
      className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-olive font-medium uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-olive-light ${pad} ${className}`}
    >
      <span className="relative z-10">Download Resume</span>
      <motion.span className="relative z-10" whileHover={{ y: 2 }}>
        <Download className="h-4 w-4" />
      </motion.span>
      <span className="absolute inset-0 -translate-x-full bg-olive-light transition-transform duration-500 group-hover:translate-x-0" />
    </MagneticLink>
  );
}

export function ViewResumeLink({ className = "" }: { className?: string }) {
  return (
    <a
      href={RESUME_PATH}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-olive-light ${className}`}
    >
      <Eye className="h-3.5 w-3.5" /> View Resume
    </a>
  );
}
