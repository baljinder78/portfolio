import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ExperienceTimeline from './components/ExperienceTimeline';
import Skills from './components/Skills';
import EngineeringHighlights from './components/EngineeringHighlights';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#060c1a]">
      <Header />
      <main>
        <Hero />
        <About />
        <ExperienceTimeline />
        <Skills />
        <EngineeringHighlights />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
