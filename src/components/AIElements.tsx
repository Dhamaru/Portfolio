import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';

/* ─── Neural Network Canvas ─── */
interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  pulse: number;
}

export function NeuralNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const animRef = useRef<number>(0);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener('resize', resize);

    // Create nodes
    const nodeCount = 50;
    const w = canvas.offsetWidth;
    const h = canvas.offsetHeight;
    nodesRef.current = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 1.5,
      pulse: Math.random() * Math.PI * 2,
    }));

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    canvas.addEventListener('mousemove', handleMouseMove);

    let time = 0;
    const getCSSVar = (name: string) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();

    const animate = () => {
      const cw = canvas.offsetWidth;
      const ch = canvas.offsetHeight;
      ctx.clearRect(0, 0, cw, ch);
      time += 0.01;

      const nodes = nodesRef.current;
      const mouse = mouseRef.current;
      const connectionDist = 120;
      
      const accentBlue = getCSSVar('--accent-blue') || 'rgb(29, 95, 204)';
      const accentTeal = getCSSVar('--accent-teal') || 'rgb(13, 143, 117)';

      // Update & draw nodes
      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;
        node.pulse += 0.02;

        if (node.x < 0 || node.x > cw) node.vx *= -1;
        if (node.y < 0 || node.y > ch) node.vy *= -1;

        // Mouse repulsion
        const dx = node.x - mouse.x;
        const dy = node.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          node.vx += dx * 0.001;
          node.vy += dy * 0.001;
        }

        // Clamp velocity
        const speed = Math.sqrt(node.vx * node.vx + node.vy * node.vy);
        if (speed > 0.8) {
          node.vx = (node.vx / speed) * 0.8;
          node.vy = (node.vy / speed) * 0.8;
        }

        const pulseRadius = node.radius + Math.sin(node.pulse) * 0.5;
        const alpha = 0.3 + Math.sin(node.pulse) * 0.15;

        ctx.beginPath();
        ctx.arc(node.x, node.y, pulseRadius, 0, Math.PI * 2);
        ctx.fillStyle = `${accentBlue}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`;
        // Note: The above is a bit risky if hex isn't returned. Better to use rgba conversion or just let it be.
        // Let's use simpler approach:
        ctx.fillStyle = accentBlue;
        ctx.globalAlpha = alpha;
        ctx.fill();

        // Glow
        ctx.beginPath();
        ctx.arc(node.x, node.y, pulseRadius + 3, 0, Math.PI * 2);
        ctx.globalAlpha = alpha * 0.15;
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionDist) {
            const alpha = (1 - dist / connectionDist) * 0.12;
            const pulsePos = (Math.sin(time * 2 + i * 0.5) + 1) / 2;

            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = accentBlue;
            ctx.globalAlpha = alpha;
            ctx.lineWidth = 0.8;
            ctx.stroke();

            // Data pulse dot
            if (alpha > 0.04) {
              const px = nodes[i].x + (nodes[j].x - nodes[i].x) * pulsePos;
              const py = nodes[i].y + (nodes[j].y - nodes[i].y) * pulsePos;
              ctx.beginPath();
              ctx.arc(px, py, 1.2, 0, Math.PI * 2);
              ctx.fillStyle = accentTeal;
              ctx.globalAlpha = alpha * 3;
              ctx.fill();
            }
            ctx.globalAlpha = 1;
          }
        }
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="neural-canvas"
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'auto',
        zIndex: 0,
        opacity: 0.6,
      }}
    />
  );
}

/* ─── AI Model Ticker / Marquee ─── */
export function AIModelTicker() {
  const models = [
    '🧠 GPT-4o', '🔮 Claude 3.5', '💎 Gemini Pro', '🦙 LLaMA 3', '🌀 Mistral',
    '⚡ LangChain', '🔗 LangGraph', '📦 ChromaDB', '🚀 FastAPI', '🎯 RAG Pipeline',
    '🤖 OpenAI API', '🧬 Transformers', '🔥 PyTorch', '📐 Embeddings', '🛠️ Pydantic',
    '🧠 GPT-4o', '🔮 Claude 3.5', '💎 Gemini Pro', '🦙 LLaMA 3', '🌀 Mistral',
    '⚡ LangChain', '🔗 LangGraph', '📦 ChromaDB', '🚀 FastAPI', '🎯 RAG Pipeline',
    '🤖 OpenAI API', '🧬 Transformers', '🔥 PyTorch', '📐 Embeddings', '🛠️ Pydantic',
  ];

  return (
    <div className="ticker-section">
      <div className="ticker-wrapper">
        <motion.div
          className="ticker-track"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            x: { duration: 35, repeat: Infinity, ease: 'linear' },
          }}
        >
          {models.map((model, idx) => (
            <span key={idx} className="ticker-item">{model}</span>
          ))}
        </motion.div>
      </div>
      <style>{`
        .ticker-section {
          padding: 40px 0;
          overflow: hidden;
          border-top: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
          position: relative;
        }
        .ticker-section::before,
        .ticker-section::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          width: 120px;
          z-index: 2;
          pointer-events: none;
        }
        .ticker-section::before {
          left: 0;
          background: linear-gradient(to right, var(--bg-color), transparent);
        }
        .ticker-section::after {
          right: 0;
          background: linear-gradient(to left, var(--bg-color), transparent);
        }
        .ticker-wrapper {
          display: flex;
          overflow: hidden;
        }
        .ticker-track {
          display: flex;
          gap: 0;
          white-space: nowrap;
          will-change: transform;
        }
        .ticker-item {
          padding: 0 32px;
          font-size: 18px;
          font-weight: 600;
          color: var(--text-secondary);
          opacity: 0.7;
          transition: opacity 0.3s;
          flex-shrink: 0;
          letter-spacing: -0.3px;
        }
        .ticker-item:hover {
          opacity: 1;
          color: var(--accent-blue);
        }
      `}</style>
    </div>
  );
}

/* ─── Animated Code Terminal ─── */
export function CodeTerminal() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const codeLines = [
    'from langchain import ChatOpenAI',
    'from langgraph.graph import StateGraph',
    '',
    '# Build an agentic RAG pipeline',
    'llm = ChatOpenAI(model="gpt-4o")',
    '',
    'graph = StateGraph(AgentState)',
    'graph.add_node("retrieve", retriever)',
    'graph.add_node("generate", generator)',
    'graph.add_edge("retrieve", "generate")',
    '',
    'agent = graph.compile()',
    'response = agent.invoke({"query": "..."})',
    '# ✅ Pipeline ready!',
  ];

  const typeSpeed = 35;
  const lineDelay = 300;

  const tick = useCallback(() => {
    if (lineIndex >= codeLines.length) return;

    const line = codeLines[lineIndex];

    if (charIndex < line.length) {
      setCurrentLine(line.slice(0, charIndex + 1));
      setCharIndex(c => c + 1);
    } else {
      setDisplayedLines(prev => [...prev, line]);
      setCurrentLine('');
      setCharIndex(0);
      setLineIndex(l => l + 1);
    }
  }, [lineIndex, charIndex, codeLines]);

  useEffect(() => {
    if (!isInView) return;
    if (lineIndex >= codeLines.length) return;

    const delay = charIndex === 0 && lineIndex > 0 ? lineDelay : typeSpeed;
    const timer = setTimeout(tick, delay);
    return () => clearTimeout(timer);
  }, [isInView, lineIndex, charIndex, tick, codeLines]);

  const getLineClass = (line: string) => {
    if (line.startsWith('#') || line.startsWith('//')) return 'code-comment';
    if (line.startsWith('from') || line.startsWith('import')) return 'code-import';
    if (line.includes('=')) return 'code-assign';
    return '';
  };

  return (
    <div ref={ref} className="terminal-section">
      <motion.div
        className="terminal-window"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="terminal-header">
          <div className="terminal-dots">
            <span className="td td-red" />
            <span className="td td-yellow" />
            <span className="td td-green" />
          </div>
          <span className="terminal-title">agent_pipeline.py</span>
          <div style={{ width: 52 }} />
        </div>
        <div className="terminal-body">
          <pre className="terminal-code">
            {displayedLines.map((line, idx) => (
              <div key={idx} className={`code-line ${getLineClass(line)}`}>
                <span className="line-num">{idx + 1}</span>
                {line || '\u00A0'}
              </div>
            ))}
            {lineIndex < codeLines.length && (
              <div className={`code-line ${getLineClass(currentLine)}`}>
                <span className="line-num">{displayedLines.length + 1}</span>
                {currentLine}
                <span className="cursor-blink">│</span>
              </div>
            )}
          </pre>
        </div>
      </motion.div>

      <style>{`
        .terminal-section {
          margin-top: 60px;
        }
        .terminal-window {
          background: #1e1e2e;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow:
            0 25px 50px -12px rgba(0,0,0,0.15),
            0 0 0 1px rgba(255,255,255,0.05) inset;
          max-width: 680px;
        }
        .terminal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 20px;
          background: #181825;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .terminal-dots {
          display: flex;
          gap: 8px;
        }
        .td {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }
        .td-red { background: #f38ba8; }
        .td-yellow { background: #f9e2af; }
        .td-green { background: #a6e3a1; }
        .terminal-title {
          font-size: 13px;
          color: rgba(255,255,255,0.4);
          font-weight: 500;
          font-family: 'Plus Jakarta Sans', monospace;
        }
        .terminal-body {
          padding: 24px;
          min-height: 360px;
        }
        .terminal-code {
          margin: 0;
          font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
          font-size: 13.5px;
          line-height: 1.7;
          color: #cdd6f4;
          white-space: pre;
        }
        .code-line {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }
        .line-num {
          color: rgba(255,255,255,0.15);
          min-width: 20px;
          text-align: right;
          user-select: none;
          font-size: 12px;
        }
        .code-comment {
          color: #6c7086;
          font-style: italic;
        }
        .code-import {
          color: #89b4fa;
        }
        .code-assign {
          color: #a6e3a1;
        }
        .cursor-blink {
          animation: cursorBlink 1s step-end infinite;
          color: #89b4fa;
          font-weight: 100;
        }
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}

/* ─── Interactive Ask AI Component ─── */
type PromptId = 'stack' | 'rag' | 'vibe' | 'hire';

export function AskAI() {
  const [activePrompt, setActivePrompt] = useState<PromptId | null>(null);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const responses: Record<PromptId, string> = {
    stack: "My core stack revolves around Python and TypeScript. For GenAI, I leverage LangChain and LangGraph to build agentic workflows, powered by models from OpenAI and Anthropic. On the backend, I build scalable services with FastAPI and Pydantic. For the frontend, I use React, Tailwind CSS, and Framer Motion to create premium, interactive experiences.",
    rag: "I design high-performance Retrieval-Augmented Generation (RAG) pipelines. This involves chunking and embedding documents into vector databases (like ChromaDB or Pinecone), and building multi-agent systems in LangGraph to intelligently route queries, grade retrieved context, and synthesize accurate, hallucination-free answers.",
    vibe: "I believe in 'vibe-coding'—building fast, iterating often, and maintaining a tight feedback loop. I use tools like Replit AI and TRAE-CLI to accelerate development, allowing me to focus on architectural decisions and premium UX rather than boilerplate code.",
    hire: "I'm currently a GenAI Engineering Intern at LTTS and I'll be graduating in 2026. I'm actively looking for opportunities where I can push the boundaries of LLM applications, build scalable AI products, and contribute to a forward-thinking engineering team!"
  };

  const prompts = [
    { id: 'stack', label: 'Tech Stack?' },
    { id: 'rag', label: 'RAG Experience?' },
    { id: 'vibe', label: 'Vibe-coding?' },
    { id: 'hire', label: 'Availability?' }
  ] as const;

  const handlePromptClick = useCallback((id: PromptId) => {
    if (isTyping && activePrompt === id) return;
    
    setActivePrompt(id);
    setDisplayedText('');
    setIsTyping(true);
    
    const fullText = responses[id];
    let currentIndex = 0;
    
    // Clear any existing typing interval (handling rapid clicks)
    const intervalId = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(prev => prev + fullText.charAt(currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
        setIsTyping(false);
      }
    }, 15); // Fast typing speed (token streaming simulation)

    // Store interval ID on element to clear if another prompt is clicked
    if (ref.current) {
      if ((ref.current as any).typeInterval) {
        clearInterval((ref.current as any).typeInterval);
      }
      (ref.current as any).typeInterval = intervalId;
    }
  }, [isTyping, activePrompt]);

  return (
    <div ref={ref} className="ask-ai-container">
      <div className="ask-ai-header">
        <div className="ask-ai-title">
          <span className="sparkle-icon">✨</span>
          <h3>Ask AI Assistant</h3>
        </div>
        <p className="ask-ai-subtitle">Select a prompt to learn more about my expertise.</p>
      </div>

      <div className="ask-ai-window">
        <div className="ask-ai-prompts">
          {prompts.map(p => (
            <button
              key={p.id}
              className={`prompt-chip ${activePrompt === p.id ? 'active' : ''}`}
              onClick={() => handlePromptClick(p.id)}
            >
              {p.label}
            </button>
          ))}
        </div>

        <div className="ask-ai-response-area">
          {!activePrompt && !displayedText ? (
            <div className="ask-ai-placeholder">
              Waiting for prompt...
            </div>
          ) : (
            <div className="ask-ai-response">
              <div className="response-avatar">🤖</div>
              <div className="response-text">
                {displayedText}
                {isTyping && <span className="streaming-cursor" />}
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .ask-ai-container {
          margin: 60px auto 0;
          max-width: 800px;
          border-radius: var(--radius-lg);
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0,0,0,0.3);
        }
        .ask-ai-header {
          padding: 24px 32px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          background: rgba(0,0,0,0.2);
        }
        .ask-ai-title {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 6px;
        }
        .ask-ai-title h3 {
          font-size: 18px;
          font-weight: 700;
          color: var(--text-primary);
        }
        .sparkle-icon {
          font-size: 16px;
        }
        .ask-ai-subtitle {
          font-size: 14px;
          color: var(--text-secondary);
        }
        .ask-ai-window {
          padding: 32px;
        }
        .ask-ai-prompts {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 32px;
        }
        .prompt-chip {
          padding: 10px 18px;
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 100px;
          color: var(--text-primary);
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .prompt-chip:hover {
          border-color: var(--accent-blue);
          transform: translateY(-2px);
          box-shadow: var(--shadow-soft);
        }
        .prompt-chip.active {
          background: rgba(29, 95, 204, 0.1);
          border-color: var(--accent-blue);
          color: var(--accent-blue);
        }
        .ask-ai-response-area {
          min-height: 120px;
          padding: 24px;
          background: rgba(0, 0, 0, 0.3);
          border-radius: var(--radius-md);
          border: 1px solid rgba(255, 255, 255, 0.03);
          box-shadow: inset 0 2px 10px rgba(0,0,0,0.2);
        }
        .ask-ai-placeholder {
          color: rgba(255, 255, 255, 0.2);
          font-style: italic;
          text-align: center;
          margin-top: 24px;
          font-size: 15px;
        }
        .ask-ai-response {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }
        .response-avatar {
          font-size: 24px;
          background: var(--card-bg);
          padding: 10px;
          border-radius: 50%;
          border: 1px solid var(--border-color);
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
          flex-shrink: 0;
        }
        .response-text {
          font-size: 16px;
          line-height: 1.7;
          color: var(--text-primary);
          padding-top: 8px;
        }
        .streaming-cursor {
          display: inline-block;
          width: 8px;
          height: 16px;
          background: var(--accent-blue);
          margin-left: 4px;
          transform: translateY(2px);
          animation: cursorFlash 0.5s infinite;
          box-shadow: 0 0 8px var(--accent-blue);
        }
        @keyframes cursorFlash {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @media (max-width: 640px) {
          .ask-ai-header, .ask-ai-window { padding: 24px; }
          .ask-ai-prompts { gap: 8px; }
          .prompt-chip { font-size: 13px; padding: 8px 14px; }
        }
      `}</style>
    </div>
  );
}
