import Footer from "../components/Footer";
import Highlights from "../components/Highlights";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
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
      <Highlights />
      <Extracurriculars />
      <Skills />
      <Footer />
    </main>
  );
}
