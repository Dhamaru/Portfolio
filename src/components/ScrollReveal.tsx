import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  duration?: number;
  className?: string;
}

const directionMap = {
  up:    { x: 0, y: 40 },
  down:  { x: 0, y: -40 },
  left:  { x: 40, y: 0 },
  right: { x: -40, y: 0 },
};

export function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  distance,
  duration = 0.7,
  className = '',
}: ScrollRevealProps) {
  const offset = directionMap[direction];
  const dx = distance !== undefined ? (offset.x > 0 ? distance : offset.x < 0 ? -distance : 0) : offset.x;
  const dy = distance !== undefined ? (offset.y > 0 ? distance : offset.y < 0 ? -distance : 0) : offset.y;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: dx, y: dy }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: ReactNode;
  stagger?: number;
  className?: string;
}

export function StaggerContainer({
  children,
  stagger = 0.1,
  className = '',
}: StaggerContainerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        visible: {
          transition: { staggerChildren: stagger },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'left';
}

export function StaggerItem({
  children,
  className = '',
  direction = 'up',
}: StaggerItemProps) {
  const isLeft = direction === 'left';
  return (
    <motion.div
      className={className}
      variants={{
        hidden: {
          opacity: 0,
          y: isLeft ? 0 : 30,
          x: isLeft ? -30 : 0,
        },
        visible: {
          opacity: 1,
          y: 0,
          x: 0,
          transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
