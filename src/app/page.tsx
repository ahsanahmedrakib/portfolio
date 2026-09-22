import { Hero, Marquee } from "@/components/features/hero";
import { About } from "@/components/features/about";
import { Skills } from "@/components/features/skills";
import { Experience } from "@/components/features/experience";
import { Projects } from "@/components/features/projects";
import { Education } from "@/components/features/education";
import { Contact } from "@/components/features/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </>
  );
}