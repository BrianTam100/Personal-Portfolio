import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
   <div className="min-h-screen bg-[#f8fafc]">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6">
        <section id="home" className="py-24">
          <Hero />
        </section>

        <section id="projects" className="py-24">
          <Projects />
        </section>

        <section id="experience" className="py-24">
          <Experience />
        </section>

        <section id="contact" className="py-24">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}
