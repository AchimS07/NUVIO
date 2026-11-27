'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';

type Props = {
  slides: ReactNode[];
  interval?: number;
};

const EASE = [0.22, 1, 0.36, 1] as const;

// Slides horizontally through the slides and advances automatically.
export default function PhotoSlider({ slides, interval = 5000 }: Props) {
  const { t } = useI18n();
  const [state, setState] = useState({ index: 0, dir: 1 });
  const count = slides.length;
  const current = count > 0 ? state.index % count : 0;

  useEffect(() => {
    if (count < 2) return;
    const id = window.setInterval(() => setState((s) => ({ index: (s.index + 1) % count, dir: 1 })), interval);
    return () => window.clearInterval(id);
  }, [count, interval, state.index]);

  if (count === 0) return null;

  const go = (step: number) =>
    setState((s) => ({ index: (s.index + step + count) % count, dir: step > 0 ? 1 : -1 }));
  const goTo = (target: number) => setState((s) => ({ index: target, dir: target > s.index ? 1 : -1 }));

  return (
    <div className="slider">
      <AnimatePresence initial={false} mode="sync" custom={state.dir}>
        <motion.div
          key={current}
          className="slider-slide"
          custom={state.dir}
          variants={{
            enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
            center: { x: '0%', opacity: 1 },
            exit: (dir: number) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: EASE }}
        >
          {slides[current]}
        </motion.div>
      </AnimatePresence>

      {count > 1 && (
        <>
          <button type="button" className="slider-nav slider-prev" onClick={() => go(-1)} aria-label={t.common.previousSlide}>
            ‹
          </button>
          <button type="button" className="slider-nav slider-next" onClick={() => go(1)} aria-label={t.common.nextSlide}>
            ›
          </button>
          <div className="slider-dots">
            {slides.map((_, dot) => (
              <button
                key={dot}
                type="button"
                className={dot === current ? 'active' : undefined}
                onClick={() => goTo(dot)}
                aria-label={`${t.common.slideLabel} ${dot + 1}`}
                aria-current={dot === current}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
