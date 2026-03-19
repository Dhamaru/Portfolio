import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface LiquidProgressProps {
  label: string;
  value: number;        // 0-100
  color?: string;       // gradient start color
  colorEnd?: string;    // gradient end color
  delay?: number;
}

export function LiquidProgress({
  label,
  value,
  color = 'var(--accent-blue)',
  colorEnd = 'var(--accent-teal)',
  delay = 0,
}: LiquidProgressProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <div ref={ref} className="liquid-progress">
      <div className="liquid-header">
        <span className="liquid-label">{label}</span>
        <span className="liquid-value">{value}%</span>
      </div>
      <div className="liquid-track">
        <motion.div
          className="liquid-fill"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${value}%` } : { width: 0 }}
          transition={{
            duration: 1.4,
            delay: delay,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          style={{
            background: `linear-gradient(90deg, ${color}, ${colorEnd})`,
          }}
        >
          <div className="liquid-shimmer" />
        </motion.div>
      </div>

       <style>{`
        .liquid-progress {
          margin-bottom: 32px;
        }
        .liquid-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 12px;
          align-items: flex-end;
        }
        .liquid-label {
          font-weight: 700;
          font-size: 16px;
          color: var(--text-primary);
          letter-spacing: -0.2px;
        }
        .liquid-value {
          font-weight: 800;
          font-size: 14px;
          color: var(--accent-blue);
          font-family: 'JetBrains Mono', monospace;
          opacity: 0.9;
        }
        .liquid-track {
          height: 8px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 100px;
          position: relative;
          box-shadow: inset 0 1px 4px rgba(0,0,0,0.2);
          border: 1px solid rgba(255,255,255,0.05);
        }
        .liquid-fill {
          height: 100%;
          border-radius: 100px;
          position: relative;
          box-shadow: 0 0 20px rgba(29, 95, 204, 0.3);
        }
        .liquid-shimmer {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255,255,255,0.15) 50%,
            transparent 100%
          );
          animation: shimmer 3s infinite linear;
        }
        @keyframes shimmer {
          0% { transform: translateX(-200%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </div>
  );
}
