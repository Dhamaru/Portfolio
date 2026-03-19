import React, { useState } from 'react';
import { Github, MessageSquare, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal } from './ScrollReveal';
import { Magnetic } from './Effects';

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="navbar-container">
      <motion.div
        className="navbar glass-nav"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="nav-links desktop-only">
          <a href="#home" className="nav-item active">Home</a>
          <a href="#about" className="nav-item">About</a>
          <a href="#projects" className="nav-item">Projects</a>
          <a href="#services" className="nav-item">Services</a>
          <a href="#contact" className="nav-item">Contact</a>
        </div>
        
        <button className="hamburger mobile-only" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.div>

      {mobileOpen && (
        <motion.div
          className="mobile-menu glass-nav"
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <a href="#home" onClick={() => setMobileOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMobileOpen(false)}>About</a>
          <a href="#projects" onClick={() => setMobileOpen(false)}>Projects</a>
          <a href="#services" onClick={() => setMobileOpen(false)}>Services</a>
          <a href="#contact" onClick={() => setMobileOpen(false)}>Contact</a>
        </motion.div>
      )}

      <style>{`
        .navbar-container {
          position: fixed;
          top: 24px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1000;
          width: auto;
        }
        .navbar {
          display: flex;
          align-items: center;
          padding: 8px;
          border-radius: 100px;
          box-shadow: var(--shadow-md);
        }
        .nav-links {
          display: flex;
          align-items: center;
        }
        .nav-item {
          padding: 10px 24px;
          border-radius: 100px;
          font-size: 15px;
          font-weight: 500;
          color: var(--text-secondary);
          transition: all 0.3s ease;
        }
        .nav-item:hover {
          color: var(--text-primary);
        }
        .nav-item.active {
          background: var(--accent-primary);
          color: #FFFFFF;
        }
        .hamburger {
          display: none;
          color: var(--text-primary);
          padding: 8px;
        }
        .mobile-menu {
          position: fixed;
          top: 80px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          padding: 16px 0;
          border-radius: 20px;
          min-width: 240px;
          box-shadow: var(--shadow-lg);
        }
        .mobile-menu a {
          padding: 16px 32px;
          font-weight: 500;
          color: var(--text-primary);
          text-align: center;
        }
        .mobile-menu a:hover {
          background: #F9FAFB;
        }
        .desktop-only { display: flex; }
        .mobile-only { display: none; }
        @media (max-width: 768px) {
          .desktop-only { display: none !important; }
          .mobile-only { display: block !important; }
          .navbar { padding: 8px 16px; }
        }
      `}</style>
    </nav>
  );
};

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero-section section-padding">
      <div className="container grid-hero">
        
        {/* Left Column: Content */}
        <div className="hero-content">
          <ScrollReveal delay={0.2}>
            <div className="badge-pill" style={{ marginBottom: '24px' }}>
              <span className="dot dot-blink"></span>
              Available for full-time & freelance work
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <h1 className="hero-name">
              Hi, I'm Dhamaru<br/>
              GenAI <span className="serif-italic">Engineer</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <p className="hero-bio">
              I architect intelligent, autonomous systems and agentic workflows. With a strong background in web development and LLM integration, I bring powerful AI capabilities to life through clean architecture and thoughtful design.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <div className="hero-meta">
              <span className="meta-item">📍 Based in India</span>
              <span className="meta-item">💼 Available Now</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.6}>
            <div className="hero-actions">
              <Magnetic strength={0.25}>
                <a href="#contact" className="btn-primary">
                  Hire Me
                  <MessageSquare size={18} />
                </a>
              </Magnetic>
              <Magnetic strength={0.25}>
                <a href="https://github.com/Dhamaru" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  GitHub Profile
                  <Github size={18} />
                </a>
              </Magnetic>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: GitHub Avatar */}
        <div className="hero-visual">
          <ScrollReveal delay={0.4} direction="right">
            <div className="hero-illustration-wrapper">
              <img 
                src="/hero_sketch.png" 
                alt="GenAI Engineer Sketch" 
                className="hero-illustration"
              />
            </div>
          </ScrollReveal>
        </div>

      </div>

      <style>{`
        .hero-section {
          padding-top: 180px;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }
        .grid-hero {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 60px;
          align-items: center;
        }
        .hero-name {
          font-size: 80px;
          font-weight: 800;
          letter-spacing: -3px;
          margin-bottom: 24px;
          line-height: 1.1;
        }
        .hero-bio {
          font-size: 18px;
          color: var(--text-secondary);
          max-width: 540px;
          margin-bottom: 32px;
          line-height: 1.7;
        }
        .hero-meta {
          display: flex;
          gap: 24px;
          margin-bottom: 40px;
          font-weight: 500;
          color: var(--text-secondary);
        }
        .meta-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .hero-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }
        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: flex-end; /* Align to bottom for character art */
        }
        .hero-illustration-wrapper {
          position: relative;
          width: 100%;
          max-width: 500px;
          display: flex;
          justify-content: center;
        }
        .hero-illustration {
          width: 100%;
          height: auto;
          object-fit: contain;
          filter: grayscale(1) contrast(1.2) brightness(1.4);
          mix-blend-mode: multiply;
          background-color: transparent;
        }

        @media (max-width: 1024px) {
          .grid-hero { grid-template-columns: 1fr; gap: 60px; text-align: center; }
          .hero-content { display: flex; flex-direction: column; align-items: center; }
          .hero-bio { text-align: center; }
          .hero-actions { justify-content: center; }
          .hero-name { font-size: 64px; }
        }
        @media (max-width: 640px) {
          .hero-name { font-size: 48px; }
          .hero-actions { flex-direction: column; width: 100%; }
          .btn-primary, .btn-secondary { width: 100%; justify-content: center; }
          .hero-meta { flex-direction: column; gap: 12px; }
        }
      `}</style>
    </section>
  );
};

export { Navbar, Hero };
