import React from 'react';
import TiltCard from './TiltCard';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-number">03 · Experience</span>
            <h2 className="section-title">Experience</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <TiltCard className="experience-card">
            <div className="exp-stripe"></div>
            <div className="exp-content">
              <div className="exp-header">
                <div>
                  <h3 className="exp-role">GenAI Engineering Intern</h3>
                  <span className="exp-company">L&T Technology Services (LTTS)</span>
                </div>
                <div className="exp-meta">
                  <span className="exp-date">Jan 2025 – Present</span>
                  <span className="badge-live">
                    <span className="dot dot-blink"></span>
                    Current
                  </span>
                </div>
              </div>

              <p className="exp-desc">
                Engineering state-of-the-art agentic workflows using LangChain and LangGraph to automate
                complex business processes. Designed and implemented Agent-to-Agent (A2A) communication 
                architectures for collaborative multi-agent problem solving. Integrated diverse external 
                tools and capabilities into LLMs leveraging the Model Context Protocol (MCP), significantly
                enhancing model context and boundaries.
              </p>

              <StaggerContainer stagger={0.06} className="exp-tags">
                {["LangGraph", "MCP", "A2A Protocols", "OpenAI API", "RAG", "Agentic Workflows"].map((tag) => (
                  <StaggerItem key={tag} direction="left">
                    <span className="exp-tag">{tag}</span>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </TiltCard>
        </ScrollReveal>
      </div>

      <style>{`
        .experience-card {
          position: relative;
          padding: 0 !important;
          overflow: hidden;
          background: var(--card-bg) !important;
          border: 1px solid var(--border-color);
        }
        .exp-stripe {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 6px;
          background: linear-gradient(to bottom, var(--accent-blue), var(--accent-teal));
        }
        .exp-content {
          padding: 40px 40px 40px 46px;
        }
        .exp-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 24px;
        }
        .exp-role {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 4px;
        }
        .exp-company {
          font-size: 18px;
          color: var(--accent-blue);
          font-weight: 600;
        }
        .exp-meta {
          text-align: right;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 8px;
        }
        .exp-date {
          font-weight: 600;
          color: var(--text-secondary);
        }
        .badge-live {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          background: rgba(34, 197, 94, 0.1);
          color: var(--accent-green);
          border-radius: 100px;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .exp-desc {
          font-size: 17px;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 32px;
          max-width: 900px;
        }
        .exp-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .exp-tag {
          padding: 6px 14px;
          background: var(--bg-color);
          border-radius: 100px;
          font-size: 13px;
          font-weight: 600;
          color: var(--text-primary);
          transition: all 0.3s ease;
        }
        .exp-tag:hover {
          background: rgba(29,95,204,0.08);
          color: var(--accent-blue);
        }
        @media (max-width: 640px) {
          .exp-header { flex-direction: column; gap: 16px; }
          .exp-meta { align-items: flex-start; text-align: left; }
          .exp-content { padding: 32px; }
        }
      `}</style>
    </section>
  );
};

const Projects: React.FC = () => {
  const projects = [
    {
      title: "TripMate-AI",
      desc: "An advanced LLM-powered itinerary engine that personalizes travel plans based on user preferences.",
      tech: ["OpenAI API", "React", "TypeScript", "Tailwind", "Leaflet"],
      link: "https://tripmate-ylt6.onrender.com/",
      badge: "AI",
      badgeColor: "blue"
    },
    {
      title: "Music Player UI",
      desc: "A sleek, responsive music player interface with smooth transitions and aesthetic design.",
      tech: ["HTML", "CSS", "JS"],
      link: "https://dhamaru.github.io/Music-Player/",
      github: "https://github.com/Dhamaru/Music-Player"
    },
    {
      title: "RAG Agent",
      desc: "A sophisticated retrieval agent that processes large datasets to provide accurate context-aware answers.",
      tech: ["LangGraph", "FastAPI", "ChromaDB"],
      badge: "Coming Soon",
      badgeColor: "amber",
      disabled: true
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-number">04 · Projects</span>
            <h2 className="section-title">Projects</h2>
          </div>
        </ScrollReveal>

        <StaggerContainer stagger={0.15} className="grid-3">
          {projects.map((proj, idx) => (
            <StaggerItem key={idx}>
              <TiltCard className={`project-card ${proj.disabled ? 'disabled' : ''}`}>
                <div className="proj-badge-container">
                  {proj.badge && (
                    <span className={`proj-badge ${proj.badgeColor}`}>
                      {proj.badgeColor === 'blue' && <Sparkles size={12} />}
                      {proj.badge}
                    </span>
                  )}
                </div>

                <h3 className="proj-title">{proj.title}</h3>
                <p className="proj-desc">{proj.desc}</p>

                <div className="proj-tech">
                  {proj.tech.map((t, tIdx) => (
                    <span key={tIdx} className="tech-tag">{t}</span>
                  ))}
                </div>

                <div className="proj-links">
                  {!proj.disabled && (
                    <>
                      <a href={proj.link} className="proj-link">
                        <ExternalLink size={18} />
                      </a>
                      {proj.github && (
                        <a href={proj.github} className="proj-link">
                          <Github size={18} />
                        </a>
                      )}
                    </>
                  )}
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      <style>{`
        .project-card {
          display: flex !important;
          flex-direction: column;
          height: 100%;
          padding: 32px !important;
          background: var(--card-bg) !important;
          text-align: left;
          border: 1px solid var(--border-color);
        }
        .project-card.disabled {
          opacity: 0.6;
          pointer-events: none;
        }
        .proj-badge-container {
          height: 24px;
          margin-bottom: 16px;
        }
        .proj-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          border-radius: 100px;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
        }
        .proj-badge.blue {
          background: rgba(29, 95, 204, 0.1);
          color: var(--accent-blue);
        }
        .proj-badge.amber {
          background: rgba(245, 158, 11, 0.1);
          color: var(--accent-amber);
        }
        .proj-title {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 12px;
        }
        .proj-desc {
          font-size: 15px;
          color: var(--text-secondary);
          margin-bottom: 24px;
          flex-grow: 1;
          line-height: 1.6;
        }
        .proj-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 24px;
        }
        .tech-tag {
          font-size: 12px;
          font-weight: 600;
          color: var(--text-secondary);
          padding: 4px 8px;
          background: var(--bg-color);
          border-radius: 4px;
        }
        .proj-links {
          display: flex;
          gap: 16px;
        }
        .proj-link {
          color: var(--text-secondary);
          transition: all 0.3s ease;
          padding: 8px;
          border-radius: 8px;
        }
        .proj-link:hover {
          color: var(--accent-blue);
          background: rgba(29,95,204,0.05);
        }
      `}</style>
    </section>
  );
};

export { Experience, Projects };
