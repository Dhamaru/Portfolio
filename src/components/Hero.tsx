import React, { useState } from 'react';
import { Github, Mail, MessageSquare, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import TiltCard from './TiltCard';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';
import { AnimatedCounter, GradientText, Magnetic, ParallaxSection } from './Effects';
import { NeuralNetwork, CodeTerminal } from './AIElements';

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="navbar-container">
      <motion.div
        className="navbar glass"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <span className="nav-logo">DK</span>
        <div className="nav-links desktop-only">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="nav-actions">
          <Magnetic strength={0.4}>
            <button className="nav-cta" onClick={() => window.location.href = 'mailto:kasivasi2005@gmail.com'}>
              <Mail size={16} />
              <span>Hire Me</span>
            </button>
          </Magnetic>
          <button className="hamburger mobile-only" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.div>

      {mobileOpen && (
        <motion.div
          className="mobile-menu glass"
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <a href="#about" onClick={() => setMobileOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMobileOpen(false)}>Skills</a>
          <a href="#experience" onClick={() => setMobileOpen(false)}>Experience</a>
          <a href="#projects" onClick={() => setMobileOpen(false)}>Projects</a>
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
          gap: 28px;
          padding: 8px 12px 8px 20px;
          border-radius: 100px;
          box-shadow: 0 10px 30px -10px rgba(0,0,0,0.1);
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .nav-logo {
          font-weight: 800;
          font-size: 18px;
          background: linear-gradient(135deg, var(--accent-blue), var(--accent-teal));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -1px;
        }
        .nav-links {
          display: flex;
          gap: 24px;
        }
        .nav-links a {
          font-size: 14px;
          font-weight: 500;
          color: var(--text-secondary);
          transition: color 0.3s ease;
          position: relative;
        }
        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--accent-blue), var(--accent-teal));
          transition: width 0.3s ease;
          border-radius: 2px;
        }
        .nav-links a:hover {
          color: var(--accent-blue);
        }
        .nav-links a:hover::after {
          width: 100%;
        }
        .nav-cta {
          display: flex;
          align-items: center;
          gap: 8px;
          background: var(--accent-blue);
          color: white;
          padding: 8px 20px;
          border-radius: 100px;
          font-weight: 600;
          font-size: 14px;
          transition: all 0.3s ease;
        }
        .nav-cta:hover {
          background: #154fb8;
          box-shadow: 0 4px 20px rgba(29, 95, 204, 0.4);
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
          gap: 0;
          padding: 8px 0;
          border-radius: 16px;
          min-width: 220px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.12);
        }
        .mobile-menu a {
          padding: 14px 24px;
          font-weight: 500;
          font-size: 15px;
          color: var(--text-primary);
          transition: all 0.2s;
        }
        .mobile-menu a:hover {
          background: rgba(29, 95, 204, 0.05);
          color: var(--accent-blue);
        }
        .desktop-only { display: flex; }
        .mobile-only { display: none; }
        @media (max-width: 768px) {
          .desktop-only { display: none !important; }
          .mobile-only { display: flex !important; }
          .navbar { padding: 8px 16px; gap: 12px; }
        }
      `}</style>
    </nav>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="hero-section section-padding">
      <NeuralNetwork />
      <div className="container grid-hero">
        <div className="hero-content">
          <ScrollReveal delay={0.2}>
            <div className="badge-container">
              <span className="badge-open">
                <span className="dot dot-blink"></span>
                Open to opportunities
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <h1 className="hero-name">
              <GradientText>Dhamaru</GradientText>
              <br/>
              <span>Kuchibhatla</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <h2 className="hero-title">
              GenAI / LLM Engineer <span className="separator">·</span> Full-Stack AI Developer
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <p className="hero-bio">
              Specializing in building autonomous agentic workflows and high-performance RAG pipelines.
              Currently engineering at the intersection of LLMs and scalable full-stack architectures.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.6}>
            <div className="hero-actions">
              <Magnetic strength={0.25}>
                <a href="#contact" className="btn-primary">
                  Get in touch
                  <MessageSquare size={18} />
                </a>
              </Magnetic>
              <Magnetic strength={0.25}>
                <a href="https://github.com/Dhamaru" className="btn-outline" target="_blank" rel="noopener noreferrer">
                  GitHub
                  <Github size={18} />
                </a>
              </Magnetic>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.5} direction="right">
          <ParallaxSection>
            <TiltCard className="stat-card">
              <div className="stat-header">
                <AnimatedCounter target="2+" className="stat-number" />
                <span className="stat-label">AI Projects</span>
              </div>

              <StaggerContainer stagger={0.15} className="stat-details">
                <StaggerItem>
                  <div className="stat-item">
                    <AnimatedCounter target="5+" className="stat-val" />
                    <span className="stat-desc">GenAI Tools</span>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="stat-item">
                    <span className="stat-val stat-text">LTTS</span>
                    <span className="stat-desc">Internship</span>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="stat-item">
                    <AnimatedCounter target="2026" className="stat-val" />
                    <span className="stat-desc">Graduating</span>
                  </div>
                </StaggerItem>
              </StaggerContainer>

              <StaggerContainer stagger={0.1} className="skill-chips">
                {['LangGraph', 'LangChain', 'RAG', 'FastAPI'].map((skill) => (
                  <StaggerItem key={skill}>
                    <span className="chip active">{skill}</span>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </TiltCard>
          </ParallaxSection>
        </ScrollReveal>
      </div>

      {/* Animated Code Terminal */}
      <div className="container">
        <ScrollReveal delay={0.3}>
          <CodeTerminal />
        </ScrollReveal>
      </div>

      {/* Decorative floating shapes */}
      <div className="hero-decorations" aria-hidden="true">
        <motion.div
          className="deco deco-1"
          animate={{ y: [-10, 10, -10], rotate: [0, 90, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="deco deco-2"
          animate={{ y: [10, -15, 10], rotate: [45, -45, 45] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="deco deco-3"
          animate={{ y: [-5, 12, -5], x: [-5, 8, -5] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <style>{`
        .hero-section {
          padding-top: 140px;
          position: relative;
          overflow: hidden;
        }
        .hero-decorations {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .deco {
          position: absolute;
          border-radius: 12px;
          opacity: 0.08;
        }
        .deco-1 {
          width: 60px;
          height: 60px;
          background: var(--accent-blue);
          top: 20%;
          left: 5%;
        }
        .deco-2 {
          width: 40px;
          height: 40px;
          background: var(--accent-teal);
          bottom: 25%;
          right: 8%;
          border-radius: 50%;
        }
        .deco-3 {
          width: 30px;
          height: 30px;
          background: linear-gradient(135deg, var(--accent-blue), var(--accent-teal));
          top: 60%;
          left: 12%;
          border-radius: 50%;
        }
        .grid-hero {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 60px;
          align-items: center;
          position: relative;
          z-index: 2;
        }
        .hero-content {
          text-align: left;
        }
        .badge-container {
          margin-bottom: 24px;
        }
        .badge-open {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          background: rgba(34, 197, 94, 0.1);
          color: var(--accent-green);
          border-radius: 100px;
          font-size: 13px;
          font-weight: 600;
          border: 1px solid rgba(34, 197, 94, 0.2);
        }
        .dot {
          width: 8px;
          height: 8px;
          background: var(--accent-green);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--accent-green);
        }
        .hero-name {
          font-size: 72px;
          font-weight: 800;
          letter-spacing: -2.5px;
          margin-bottom: 12px;
          line-height: 1;
        }
        .hero-title {
          font-size: 22px;
          font-weight: 500;
          color: var(--text-secondary);
          margin-bottom: 24px;
        }
        .separator {
          color: var(--accent-teal);
          font-weight: 700;
        }
        .hero-bio {
          font-size: 18px;
          color: var(--text-secondary);
          max-width: 540px;
          margin-bottom: 40px;
          line-height: 1.7;
        }
        .hero-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }
        .btn-primary {
          background: var(--accent-blue);
          color: white;
          padding: 14px 28px;
          border-radius: var(--radius-sm);
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
          font-size: 15px;
        }
        .btn-primary:hover {
          background: #154fb8;
          box-shadow: 0 8px 24px rgba(29,95,204,0.3);
        }
        .btn-outline {
          border: 1px solid var(--border-color);
          background: var(--card-bg);
          color: var(--text-primary);
          padding: 14px 28px;
          border-radius: var(--radius-sm);
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
          font-size: 15px;
        }
        .btn-outline:hover {
          border-color: var(--accent-blue);
          color: var(--accent-blue);
          box-shadow: var(--shadow-hover);
        }
        .stat-card {
          padding: 40px !important;
        }
        .stat-header {
          display: flex;
          flex-direction: column;
          margin-bottom: 32px;
        }
        .stat-number {
          font-size: 64px;
          font-weight: 800;
          background: linear-gradient(135deg, var(--accent-blue), var(--accent-teal));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
          display: inline-block;
        }
        .stat-label {
          font-size: 18px;
          font-weight: 600;
          color: var(--text-secondary);
        }
        .stat-details {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 32px;
        }
        .stat-item {
          display: flex;
          flex-direction: column;
        }
        .stat-val {
          font-weight: 700;
          font-size: 20px;
          display: inline-block;
        }
        .stat-text {
          -webkit-text-fill-color: initial;
        }
        .stat-desc {
          font-size: 12px;
          color: var(--text-secondary);
        }
        .skill-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .chip {
          padding: 6px 12px;
          background: var(--bg-color);
          color: var(--text-secondary);
          border-radius: 100px;
          font-size: 12px;
          font-weight: 600;
          transition: all 0.3s ease;
          border: 1px solid var(--border-color);
        }
        .chip:hover {
          transform: translateY(-2px);
          border-color: var(--accent-blue);
          color: var(--accent-blue);
        }
        .chip.active {
          background: rgba(29, 95, 204, 0.1);
          color: var(--accent-blue);
          border-color: rgba(29, 95, 204, 0.2);
        }
        @media (max-width: 1024px) {
          .grid-hero { grid-template-columns: 1fr; gap: 40px; }
          .hero-name { font-size: 52px; }
        }
        @media (max-width: 640px) {
          .hero-actions { flex-direction: column; }
          .hero-name { font-size: 42px; }
          .hero-section { padding-top: 110px; }
        }
      `}</style>
    </section>
  );
};

export { Navbar, Hero };
