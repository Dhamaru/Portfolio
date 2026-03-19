import './App.css';
import { Navbar, Hero } from './components/Hero';
import { About, Skills } from './components/AboutSkills';
import { Experience, Projects } from './components/ExperienceProjects';
import { BeyondWork, Contact, Footer } from './components/RemainingSections';
import Services from './components/Services';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { AskAI } from './components/AIElements';

function App() {
  useSmoothScroll();

  return (
    <div className="app-wrapper">
      <Navbar />

      <main style={{ position: 'relative', zIndex: 2 }}>
        <Hero />
        <Services />
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
