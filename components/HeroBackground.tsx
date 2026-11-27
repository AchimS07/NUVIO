'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';

type Props = {
  slides: ReactNode[];
  interval?: number;
  children: ReactNode;
};

// Full-bleed hero: photos cross-fade behind the text and drift slightly as the page scrolls.
export default function HeroBackground({ slides, interval = 6000, children }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [state, setState] = useState({ index: 0 });
  const count = slides.length;
  const current = count > 0 ? state.index % count : 0;

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  // The slides box starts 4% above the hero; the drift stays inside that margin so no edge shows.
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '4%']);

  useEffect(() => {
    if (count < 2) return;
    const id = window.setInterval(() => setState((s) => ({ index: (s.index + 1) % count })), interval);
    return () => window.clearInterval(id);
  }, [count, interval, state.index]);

  return (
    <section ref={ref} className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <motion.div className="hero-slides" style={{ y }} aria-hidden="true">
        <AnimatePresence initial={false} mode="sync">
          {count > 0 && (
            <motion.div
              key={current}
              className="hero-slide"
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1.02 }}
              exit={{ opacity: 0 }}
              transition={{ opacity: { duration: 1.6 }, scale: { duration: 8, ease: 'linear' } }}
            >
              {slides[current]}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <div className="hero-overlay" aria-hidden="true" />
      {children}
    </section>
  );
}
