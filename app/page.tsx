'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import CabinIllustration from '@/components/CabinIllustration';
import Reveal from '@/components/Reveal';
import { useI18n } from '@/lib/i18n';
import { phoneHref } from '@/lib/content';
import { useSiteData } from '@/lib/useSiteData';

export default function HomePage() {
  const { t } = useI18n();
  const { content, images } = useSiteData();

  return (
    <>
      <section className="hero">
        <div className="hero-bg" aria-hidden="true" />
        <div className="container hero-inner">
          <div className="hero-text">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t.home.eyebrow}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }}>
            {t.home.heroTitle}
          </motion.h1>
          <motion.p
            className="lead"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {t.home.heroSubtitle}
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            <a className="btn btn-primary" href={phoneHref(content.phone)}>
              {t.common.callToBook}: {content.phone}
            </a>
            <Link className="btn btn-ghost" href="/tariffs">
              {t.home.seeTariffs}
            </Link>
          </motion.div>
          </div>
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            {images.hero ? (
              // Photos come from Firebase Storage, so plain img is used for static export.
              // eslint-disable-next-line @next/next/no-img-element
              <img className="scene-photo" src={images.hero} alt="NUVIO" />
            ) : (
              <CabinIllustration variant="dusk" />
            )}
          </motion.div>
        </div>
        <div className="scroll-hint" aria-hidden="true" />
      </section>

      <section className="section container">
        <Reveal>
          <h2>{t.home.introTitle}</h2>
          <p className="lead">{t.home.introBody}</p>
        </Reveal>
        <Reveal className="scene-banner">
          {images.intro ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img className="scene-photo" src={images.intro} alt="NUVIO" />
          ) : (
            <CabinIllustration variant="day" />
          )}
        </Reveal>
        <div className="grid-3">
          {t.home.highlights.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.1} className="card">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section cta-band">
        <div className="container">
          <Reveal>
            <h2>{t.home.ctaTitle}</h2>
            <p>{t.home.ctaBody}</p>
            <a className="btn btn-light" href={phoneHref(content.phone)}>
              {content.phone}
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
