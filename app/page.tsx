import Footer from "../components/Footer";
import Highlights from "../components/Highlights";
import Education from "../components/Education";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import AcademicProjects from "../components/AcademicProjects";
import Navbar from "../components/Navbar";
import Extracurriculars from "../components/Extracurriculars";
import ScrollEffects from "../components/ScrollEffects";
import Skills from "../components/Skills";

export default function HomePage() {
  return (
    <main className="bg-background text-on-surface">
      <ScrollEffects />
      <Navbar />
      <Hero />
      <Experience />
      <AcademicProjects />
      <Highlights />
      <Education />
      <Extracurriculars />
      <Skills />
      <Footer />
    </main>
  );
}
