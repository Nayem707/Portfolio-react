import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink text-paper">
      {/* Blueprint grid background */}
      <div
        aria-hidden="true"
        className="fixed inset-0 z-0 bg-blueprint-grid bg-grid after:absolute after:inset-0 after:bg-blueprint-glow after:content-['']"
      />

      <div className="relative z-10 ">
        <Header />
        <main className="">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
