import './App.css';
import { Navbar, Hero } from './components/Hero';
import { About, Skills } from './components/AboutSkills';
import { Experience, Projects } from './components/ExperienceProjects';
import { BeyondWork, Contact, Footer } from './components/RemainingSections';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { FloatingOrbs, CursorGlow } from './components/Effects';
import { AIModelTicker, AskAI } from './components/AIElements';

function App() {
  useSmoothScroll();

  return (
    <div className="app-wrapper">
      <FloatingOrbs />
      <CursorGlow />
      <Navbar />

      <main style={{ position: 'relative', zIndex: 2 }}>
        <Hero />
        <AIModelTicker />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <BeyondWork />
        <AskAI />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
