import React from 'react';
import TiltCard from './TiltCard';
import { Mail, Github, Music, Puzzle, Zap, Phone } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';
import { motion } from 'framer-motion';

const BeyondWork: React.FC = () => {
  const interests = [
    {
      title: "Music",
      icon: <Music size={40} className="interest-icon" />,
      desc: "An avid singer and listener. Music fuels my creativity and helps me find rhythm in coding.",
      emoji: "🎵"
    },
    {
      title: "Sudoku & Badminton",
      icon: <Puzzle size={40} className="interest-icon" />,
      desc: "Pattern recognition and competitive spirit. I love solving puzzles and staying active on the court.",
      emoji: "🧩"
    },
    {
      title: "Vibe-coding",
      icon: <Zap size={40} className="interest-icon" />,
      desc: "Building fast with Replit AI, TRAE-CLI, and Blackbox. Leveraging AI to ship high-quality code at speed.",
      emoji: "⚡"
    }
  ];

  return (
    <section id="beyond" className="section-padding">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-number">05 · Life</span>
            <h2 className="section-title">Beyond Work</h2>
          </div>
        </ScrollReveal>

        <StaggerContainer stagger={0.15} className="grid-3">
          {interests.map((item, idx) => (
            <StaggerItem key={idx}>
              <TiltCard className="interest-card">
                <div className="interest-header">
                  {item.icon}
                  <span className="interest-emoji">{item.emoji}</span>
                </div>
                <h3 className="interest-title">{item.title}</h3>
                <p className="interest-desc">{item.desc}</p>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      <style>{`
        .interest-card {
          padding: 32px !important;
          background: var(--card-bg) !important;
          border: 1px solid var(--border-color);
          text-align: left;
        }
        .interest-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 24px;
        }
        .interest-icon {
          color: var(--accent-blue);
          opacity: 0.8;
        }
        .interest-emoji {
          font-size: 24px;
        }
        .interest-title {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 12px;
        }
        .interest-desc {
          font-size: 15px;
          color: var(--text-secondary);
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
};

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <ScrollReveal>
          <div className="section-header center">
            <span className="section-number">06 · Contact</span>
            <h2 className="section-title">Let's build something.</h2>
            <p className="section-subtitle">
              I'm always open to discussing new opportunities, GenAI projects,
              or just talking tech. Feel free to reach out!
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <TiltCard className="contact-card">
            <div className="contact-stripe"></div>
            <div className="contact-inner">
              <div className="contact-actions">
                <motion.a
                  href="mailto:kasivasi2005@gmail.com"
                  className="btn-primary contact-email-btn"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Mail size={20} />
                  kasivasi2005@gmail.com
                </motion.a>
                <div className="contact-socials">
                  <a href="https://github.com/Dhamaru" className="blue-link" target="_blank" rel="noopener noreferrer">
                    <Github size={22} strokeWidth={1.5} />
                    GitHub Profile
                  </a>
                  <span className="contact-note">Email available upon request via LinkedIn or GitHub.</span>
                </div>
              </div>
            </div>
          </TiltCard>
        </ScrollReveal>
      </div>

      <style>{`
        .section-header.center {
          text-align: center;
        }
        .section-subtitle {
          font-size: 18px;
          color: var(--text-secondary);
          margin-top: 16px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }
        .contact-card {
          max-width: 800px;
          margin: 40px auto 0;
          padding: 0 !important;
          overflow: hidden;
          background: var(--card-bg) !important;
          border: 1px solid var(--border-color);
        }
        .contact-stripe {
          height: 6px;
          background: linear-gradient(to right, var(--accent-blue), var(--accent-teal));
        }
        .contact-inner {
          padding: 60px 40px;
          background: #FFFFFF;
          border-radius: 20px;
        }
        .contact-actions {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 32px;
        }
        .contact-email-btn {
          background: #000000;
          color: #FFFFFF;
          border-radius: 100px;
          padding: 14px 32px;
          font-size: 18px;
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 600;
        }
        .contact-socials {
          display: flex;
          gap: 32px;
          align-items: center;
        }
        .blue-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #0000EE;
          font-size: 20px;
          font-weight: 500;
          text-decoration: underline;
          text-underline-offset: 4px;
          transition: opacity 0.3s;
        }
        .blue-link:hover {
          opacity: 0.8;
        }
        @media (max-width: 640px) {
          .contact-socials { flex-direction: column; gap: 24px; }
          .contact-email-btn { width: 100%; justify-content: center; }
        }
      `}</style>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <span className="footer-name">Dhamaru Kuchibhatla</span>
            <span className="footer-loc">Vijayawada, AP</span>
          </div>
          <div className="footer-email">
            <a href="mailto:kasivasi2005@gmail.com">kasivasi2005@gmail.com</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} • Personal Portfolio of Dhamaru Kuchibhatla • Built with Vibe</p>
          <p style={{ marginTop: '8px', opacity: 0.6 }}>This is a personal project for showcase purposes only.</p>
        </div>
      </div>
      <style>{`
        .footer {
          padding: 60px 0;
          border-top: 1px solid var(--border-color);
          background: var(--bg-color);
        }
        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 40px;
        }
        .footer-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .footer-name {
          font-weight: 700;
          font-size: 20px;
        }
        .footer-loc {
          color: var(--text-secondary);
          font-size: 14px;
        }
        .footer-email a {
          font-weight: 600;
          color: var(--accent-blue);
          transition: opacity 0.3s;
        }
        .footer-email a:hover {
          opacity: 0.8;
        }
        .footer-bottom {
          text-align: center;
          font-size: 13px;
          color: var(--text-secondary);
        }
        @media (max-width: 640px) {
          .footer-content { flex-direction: column; gap: 24px; text-align: center; align-items: center; }
        }
      `}</style>
    </footer>
  );
};

export { BeyondWork, Contact, Footer };
