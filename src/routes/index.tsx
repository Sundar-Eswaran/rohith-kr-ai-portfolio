import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Interests } from "@/components/portfolio/Interests";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Education } from "@/components/portfolio/Education";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Preloader } from "@/components/portfolio/Preloader";
import { Cursor } from "@/components/portfolio/Cursor";
import { SmoothScroll } from "@/components/portfolio/SmoothScroll";

const title = "Rohith K R — AI & Data Science Student | ML Portfolio";
const description =
  "Portfolio of Rohith K R, AI & Data Science student building machine learning, computer vision and data-driven solutions. Projects, skills, experience and resume.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [, setReady] = useState(false);

  return (
    <main className="relative">
      <Preloader onDone={() => setReady(true)} />
      <SmoothScroll />
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Interests />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
