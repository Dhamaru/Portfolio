import React from 'react';
import { Bot, Layers, Zap, CheckCircle2 } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Bot size={24} />,
      title: "AI Workflows",
      desc: "I architect complex multi-agent workflows using LangGraph and LangChain. I specialize in enabling Agent-to-Agent (A2A) communication and seamless tool execution via MCP.",
      features: ["LangGraph architectures", "A2A protocols", "Custom MCP servers", "Agentic automation"],
      dark: false
    },
    {
      icon: <Layers size={24} />,
      title: "Full-Stack GenAI",
      desc: "I build complete, deeply integrated AI applications from scratch. From robust FastAPI backends and vector databases to dynamic React/TypeScript frontends.",
      features: ["RAG pipelines", "FastAPI & Pydantic", "React & TailwindUI", "Vector DB integrations"],
      dark: true
    },
    {
      icon: <Zap size={24} />,
      title: "Rapid Prototyping",
      desc: "Leveraging the latest vibe-coding tools like Replit AI and TRAE-CLI, I rapidly convert ideas into functioning Proof of Concepts, iterating on high-quality code at speed.",
      features: ["Fast MVP delivery", "Vibe-coding with AI", "Quick integrations", "Iterative refinement"],
      dark: false
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container">
        <ScrollReveal>
          <div className="services-header">
            <span className="services-subtitle">WHAT I OFFER</span>
            <h2 className="services-title">My <span className="serif-italic">Services</span></h2>
          </div>
        </ScrollReveal>

        <StaggerContainer stagger={0.15} className="grid-3 services-grid">
          {services.map((svc, idx) => (
            <StaggerItem key={idx}>
              <div className={`service-card ${svc.dark ? 'dark' : ''}`}>
                <div className="svc-icon-box">{svc.icon}</div>
                <h3 className="svc-title">{svc.title}</h3>
                <p className="svc-desc">{svc.desc}</p>
                <ul className="svc-features">
                  {svc.features.map((feat, fIdx) => (
                    <li key={fIdx}>
                      <CheckCircle2 size={16} className="check-icon" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      <style>{`
        .services-header {
          text-align: left;
          margin-bottom: 60px;
        }
        .services-subtitle {
          font-size: 13px;
          font-weight: 700;
          color: var(--text-secondary);
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 12px;
          display: block;
        }
        .services-title {
          font-size: 56px;
          font-weight: 800;
          letter-spacing: -2px;
        }
        .services-grid {
          align-items: stretch;
        }
        .service-card {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          padding: 40px;
          height: 100%;
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow-sm);
        }
        .service-card.dark {
          background: var(--accent-primary);
          border-color: var(--accent-primary);
          color: #FFFFFF;
          box-shadow: var(--shadow-lg);
          transform: scale(1.02);
        }
        .svc-icon-box {
          width: 48px;
          height: 48px;
          background: #F3F4F6;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-primary);
          margin-bottom: 24px;
        }
        .service-card.dark .svc-icon-box {
          background: #222222;
          color: #FFFFFF;
        }
        .svc-title {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 16px;
          color: inherit;
        }
        .svc-desc {
          font-size: 15px;
          line-height: 1.6;
          margin-bottom: 32px;
          color: var(--text-secondary);
        }
        .service-card.dark .svc-desc {
          color: #A1A1AA;
        }
        .svc-features {
          list-style: none;
          margin-top: auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .svc-features li {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 14px;
          font-weight: 500;
        }
        .service-card.dark .svc-features li {
          color: #E4E4E7;
        }
        .check-icon {
          color: var(--green-dot);
          flex-shrink: 0;
        }
        .service-card.dark .check-icon {
          color: #FFFFFF;
        }
        @media (max-width: 1024px) {
          .service-card.dark { transform: scale(1); }
          .services-grid { gap: 24px; }
        }
      `}</style>
    </section>
  );
};

export default Services;
