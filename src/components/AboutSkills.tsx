import React from 'react';
import TiltCard from './TiltCard';
import { MapPin, GraduationCap, Briefcase, Mail } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-number">01 · About</span>
            <h2 className="section-title">About Me</h2>
          </div>
        </ScrollReveal>

        <div className="about-grid">
          <div className="about-text">
            <ScrollReveal delay={0.1}>
              <p>
                I am a passionate GenAI / LLM Engineer and Full-Stack AI Developer with a drive for building
                intelligent systems that solve complex problems. My expertise lies in architecting agentic
                workflows using LangGraph and LangChain, and developing robust RAG pipelines that bridge the
                gap between data and meaningful AI interactions.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p>
                Currently pursuing my B.Tech in CSE AI (2026), I've had the opportunity to work as an
                intern at LTTS, where I focused on engineering production-grade AI services using
                FastAPI and Pydantic. I believe in "vibe-coding" — building fast, iterating often,
                and leveraging the latest AI tools to push the boundaries of what's possible.
              </p>
            </ScrollReveal>
          </div>

          <StaggerContainer stagger={0.12} className="about-info-cards">
            <StaggerItem>
              <TiltCard className="info-card">
                <MapPin className="info-icon" size={20} />
                <div>
                  <span className="info-label">Location</span>
                  <span className="info-val">Vijayawada, AP</span>
                </div>
              </TiltCard>
            </StaggerItem>

            <StaggerItem>
              <TiltCard className="info-card">
                <GraduationCap className="info-icon" size={20} />
                <div>
                  <span className="info-label">Degree</span>
                  <span className="info-val">B.Tech CSE AI 2026</span>
                </div>
              </TiltCard>
            </StaggerItem>

            <StaggerItem>
              <TiltCard className="info-card">
                <Briefcase className="info-icon" size={20} />
                <div>
                  <span className="info-label">Currently at</span>
                  <span className="info-val">LTTS GenAI Intern</span>
                </div>
              </TiltCard>
            </StaggerItem>

            <StaggerItem>
              <TiltCard className="info-card">
                <Mail className="info-icon" size={20} />
                <div>
                  <span className="info-label">Email</span>
                  <span className="info-val">kasivasi2005@gmail.com</span>
                </div>
              </TiltCard>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }
        .about-text p {
          font-size: 18px;
          color: var(--text-secondary);
          margin-bottom: 24px;
          line-height: 1.7;
        }
        .about-info-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .info-card {
          display: flex !important;
          align-items: center;
          gap: 16px;
          padding: 20px !important;
          background: var(--card-bg) !important;
          border: 1px solid var(--border-color);
        }
        .info-icon {
          color: var(--accent-blue);
          flex-shrink: 0;
        }
        .info-label {
          display: block;
          font-size: 12px;
          font-weight: 700;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .info-val {
          font-size: 15px;
          font-weight: 600;
        }
        @media (max-width: 1024px) {
          .about-grid { grid-template-columns: 1fr; gap: 40px; }
        }
        @media (max-width: 640px) {
          .about-info-cards { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

const Skills: React.FC = () => {
  const categories = [
    {
      label: "AI / LLM",
      skills: ["LangChain", "LangGraph", "OpenAI API", "Anthropic API", "RAG Pipelines", "Prompt Engineering", "Embeddings", "Vector Databases"],
      highlight: true
    },
    {
      label: "Backend",
      skills: ["Python", "FastAPI", "Pydantic", "Node.js", "Express", "MongoDB"],
      special: ["Python", "FastAPI", "Pydantic"]
    },
    {
      label: "Frontend",
      skills: ["React", "TypeScript", "Tailwind CSS", "HTML/CSS"]
    },
    {
      label: "Tools",
      skills: ["Git", "VS Code", "Replit AI", "TRAE-CLI", "Postman"]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-number">02 · Skills</span>
            <h2 className="section-title">Skills & Tech</h2>
          </div>
        </ScrollReveal>

        {/* Pill Tags */}
        <div className="skills-container">
          {categories.map((cat, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.08}>
              <div className="skill-row">
                <div className="skill-category">
                  <span className="category-label">{cat.label}</span>
                </div>
                <StaggerContainer stagger={0.05} className="skill-tags">
                  {cat.skills.map((skill, sIdx) => {
                    const isHighlighted = cat.highlight || (cat.special && cat.special.includes(skill));
                    return (
                      <StaggerItem key={sIdx} direction="left">
                        <span className={`skill-pill ${isHighlighted ? 'highlight' : ''}`}>
                          {skill}
                        </span>
                      </StaggerItem>
                    );
                  })}
                </StaggerContainer>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        .skills-container {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }
        .skill-row {
          display: grid;
          grid-template-columns: 200px 1fr;
          align-items: center;
          gap: 40px;
          padding-bottom: 32px;
          border-bottom: 1px solid var(--border-color);
        }
        .skill-row:last-child {
          border-bottom: none;
        }
        .category-label {
          font-size: 18px;
          font-weight: 700;
          color: var(--text-primary);
        }
        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }
        .skill-pill {
          padding: 8px 18px;
          background: var(--card-bg);
          color: var(--text-primary);
          border-radius: 100px;
          font-size: 14px;
          font-weight: 600;
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        .skill-pill:hover {
          border-color: var(--accent-blue);
          color: var(--accent-blue);
          transform: translateY(-2px);
          box-shadow: var(--shadow-soft);
        }
        .skill-pill.highlight {
          background: rgba(29, 95, 204, 0.1);
          border-color: rgba(29, 95, 204, 0.2);
          color: var(--accent-blue);
        }
        @media (max-width: 768px) {
          .skill-row { grid-template-columns: 1fr; gap: 16px; }
        }
      `}</style>
    </section>
  );
};

export { About, Skills };
