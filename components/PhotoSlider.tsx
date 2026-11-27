'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';

type Props = {
  slides: ReactNode[];
  interval?: number;
};

// Crossfades through the slides and advances automatically.
export default function PhotoSlider({ slides, interval = 5000 }: Props) {
  const { t } = useI18n();
  const [index, setIndex] = useState(0);
  const count = slides.length;
  const current = count > 0 ? index % count : 0;

  useEffect(() => {
    if (count < 2) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % count), interval);
    return () => window.clearInterval(id);
  }, [count, interval, index]);

  if (count === 0) return null;

  const go = (step: number) => setIndex((current + step + count) % count);

  return (
    <div className="slider">
      <AnimatePresence initial={false} mode="sync">
        <motion.div
          key={current}
          className="slider-slide"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
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
                onClick={() => setIndex(dot)}
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
