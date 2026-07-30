import React from 'react';
import { MapPin, GraduationCap, Briefcase, Mail } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-title">About Me</span>
          </div>
        </ScrollReveal>

        <div className="about-grid">
          <div className="about-text">
            <ScrollReveal delay={0.1}>
              <p>
                I'm a full-stack developer who builds complete products — frontend, backend, database,
                and deployment — and pairs that with hands-on GenAI engineering. I use modern AI
                platforms to move faster without cutting corners, and apply that same AI fluency to
                architecting multi-agent workflows, Model Context Protocol (MCP) integrations, and RAG
                pipelines when a project calls for it.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p>
                I completed my B.Tech in CSE AI (2026), and worked as a GenAI Engineering intern at
                LTTS (Jan–May 2026) while independently shipping full-stack projects like Saptaswara, a Next.js music
                studio with real-time audio synthesis and AI-assisted composition. I believe in
                "vibe-coding" — building fast, iterating often, and leveraging the latest AI tools to push
                the boundaries of what's possible.
              </p>
            </ScrollReveal>
          </div>

          <StaggerContainer stagger={0.12} className="about-info-cards">
            <StaggerItem>
              <div className="card info-card">
                <MapPin className="info-icon" size={20} />
                <div>
                  <span className="info-label">Location</span>
                  <span className="info-val">Vijayawada, India</span>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="card info-card">
                <GraduationCap className="info-icon" size={20} />
                <div>
                  <span className="info-label">Degree</span>
                  <span className="info-val">B.Tech CSE AI, 2026 Grad</span>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="card info-card">
                <Briefcase className="info-icon" size={20} />
                <div>
                  <span className="info-label">Status</span>
                  <span className="info-val">Open to Full-Time Roles</span>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="card info-card">
                <Mail className="info-icon" size={20} />
                <div>
                  <span className="info-label">Email</span>
                  <span className="info-val">kasivasi2005@gmail.com</span>
                </div>
              </div>
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
          padding: 24px !important;
        }
        .info-icon {
          color: var(--accent-primary);
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
          color: var(--text-primary);
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
      label: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
      highlight: true
    },
    {
      label: "Backend",
      skills: ["Node.js", "Express", "Python", "FastAPI", "Pydantic", "Supabase", "MongoDB"],
      special: ["Node.js", "Supabase"]
    },
    {
      label: "GenAI Tooling",
      skills: ["LLM", "MCP (Model Context)", "OpenAI API", "Anthropic API", "RAG Pipelines", "Prompt Engineering"],
      special: ["MCP (Model Context)", "Anthropic API"]
    },
    {
      label: "Tools",
      skills: ["Vercel", "GitHub", "Claude Code", "Antigravity"],
      special: ["GitHub", "Claude Code"]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
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
          align-items: flex-start;
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
          display: inline-block;
          padding: 10px 20px;
          background: var(--card-bg);
          color: var(--text-primary);
          border-radius: 100px;
          font-size: 14px;
          font-weight: 500;
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
          white-space: nowrap;
          box-shadow: var(--shadow-sm);
        }
        .skill-pill:hover {
          border-color: var(--accent-primary);
          color: var(--accent-primary);
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }
        .skill-pill.highlight {
          background: #000000;
          color: #FFFFFF;
          border-color: #000000;
        }
        .skill-pill.highlight:hover {
          background: #333333;
          border-color: #333333;
        }
        @media (max-width: 768px) {
          .skill-row { grid-template-columns: 1fr; gap: 16px; }
        }
      `}</style>
    </section>
  );
};

export { About, Skills };
