import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useInView, useTransform, useScroll } from 'framer-motion';
import type { ReactNode } from 'react';

/* ─── Floating Gradient Orbs ─── */
export function FloatingOrbs() {
  return (
    <div className="orbs-container" aria-hidden="true">
      <motion.div
        className="orb orb-blue"
        animate={{
          x: [0, 80, -40, 60, 0],
          y: [0, -60, 40, -30, 0],
          scale: [1, 1.2, 0.9, 1.1, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="orb orb-teal"
        animate={{
          x: [0, -70, 50, -30, 0],
          y: [0, 50, -40, 60, 0],
          scale: [1, 0.9, 1.15, 0.95, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="orb orb-purple"
        animate={{
          x: [0, 40, -60, 20, 0],
          y: [0, -30, 50, -50, 0],
          scale: [1, 1.1, 0.85, 1.05, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <style>{`
        .orbs-container {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.15;
        }
        .orb-blue {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, #1d5fcc 0%, transparent 70%);
          top: 5%;
          right: 10%;
        }
        .orb-teal {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, #0d8f75 0%, transparent 70%);
          bottom: 20%;
          left: 5%;
        }
        .orb-purple {
          width: 350px;
          height: 350px;
          background: radial-gradient(circle, #7c3aed 0%, transparent 70%);
          top: 50%;
          right: 30%;
        }
      `}</style>
    </div>
  );
}

/* ─── Animated Counter ─── */
interface AnimatedCounterProps {
  target: string; // e.g. "2+" or "5+"
  className?: string;
}

export function AnimatedCounter({ target, className = '' }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState('0');

  // Extract the numeric part and suffix
  const numMatch = target.match(/^(\d+)(.*)$/);
  const numericTarget = numMatch ? parseInt(numMatch[1]) : 0;
  const suffix = numMatch ? numMatch[2] : target;

  useEffect(() => {
    if (!isInView) return;

    let current = 0;
    const duration = 1500;
    const increment = numericTarget / (duration / 16);
    const timer = setInterval(() => {
      current += increment;
      if (current >= numericTarget) {
        current = numericTarget;
        clearInterval(timer);
      }
      setDisplay(Math.floor(current) + suffix);
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, numericTarget, suffix]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ scale: 0, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : {}}
      transition={{ type: 'spring', stiffness: 200, delay: 0.3 }}
    >
      {isInView ? display : '0'}
    </motion.span>
  );
}

/* ─── Magnetic Button ─── */
interface MagneticProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export function Magnetic({ children, className = '', strength = 0.3 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * strength);
    y.set((e.clientY - centerY) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x: springX, y: springY, display: 'inline-block' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
}

/* ─── Gradient Text ─── */
interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

export function GradientText({ children, className = '' }: GradientTextProps) {
  return (
    <span className={`gradient-text ${className}`}>
      {children}
      <style>{`
        .gradient-text {
          background: linear-gradient(
            135deg,
            var(--text-primary) 0%,
            var(--accent-blue) 50%,
            var(--accent-teal) 100%
          );
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 6s ease infinite;
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </span>
  );
}

/* ─── Parallax Floating Elements ─── */
export function ParallaxSection({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

/* ─── Cursor Glow ─── */
export function CursorGlow() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 28 });
  const springY = useSpring(y, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y]);

  return (
    <motion.div
      className="cursor-glow"
      style={{
        left: springX,
        top: springY,
      }}
      aria-hidden="true"
    >
      <style>{`
        .cursor-glow {
          position: fixed;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(29, 95, 204, 0.06) 0%,
            transparent 70%
          );
          pointer-events: none;
          z-index: 1;
          transform: translate(-50%, -50%);
        }
        @media (max-width: 768px) {
          .cursor-glow { display: none; }
        }
      `}</style>
    </motion.div>
  );
}
