'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import CabinIllustration from '@/components/CabinIllustration';
import HeroBackground from '@/components/HeroBackground';
import ParallaxReveal from '@/components/ParallaxReveal';
import PhotoSlider from '@/components/PhotoSlider';
import Reveal from '@/components/Reveal';
import { useI18n } from '@/lib/i18n';
import { phoneHref } from '@/lib/content';
import { useSiteData } from '@/lib/useSiteData';

// Section headings start widely spaced and tighten as they enter, like the reference site.
function AnimatedTitle({ children }: { children: string }) {
  return (
    <motion.h2
      className="section-title"
      initial={{ letterSpacing: '0.5em', opacity: 0 }}
      whileInView={{ letterSpacing: '0.18em', opacity: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.h2>
  );
}

export default function HomePage() {
  const { t } = useI18n();
  const { content, images, photos } = useSiteData();

  // Hero background: the hero image first (if uploaded), then the cabin gallery photos.
  const heroSlides =
    images.hero || photos.length > 0
      ? [
          ...(images.hero ? [images.hero] : []),
          ...photos,
        ].map((src, index) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={`${index}-${src}`} className="scene-photo" src={src} alt="NUVIO" />
        ))
      : [<CabinIllustration key="illustration" variant="dusk" />];

  // Intro slideshow: the intro image first (if uploaded), then the cabin gallery photos.
  const introSlides =
    images.intro || photos.length > 0
      ? [
          ...(images.intro ? [images.intro] : []),
          ...photos,
        ].map((src, index) => (
          // Photos come from Firebase Storage, so plain img is used for static export.
          // eslint-disable-next-line @next/next/no-img-element
          <img key={`${index}-${src}`} className="scene-photo" src={src} alt="NUVIO" />
        ))
      : [<CabinIllustration key="illustration" variant="day" />];

  return (
    <>
      <HeroBackground slides={heroSlides}>
        <div className="container hero-inner">
          <div className="hero-text">
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
              {t.common.bookNow}
            </a>
            <Link className="btn btn-ghost" href="/tariffs">
              {t.home.seeTariffs}
            </Link>
          </motion.div>
          </div>
        </div>
        <div className="scroll-hint" aria-hidden="true" />
      </HeroBackground>

      <section className="section container">
        <Reveal>
          <AnimatedTitle>{t.home.introTitle}</AnimatedTitle>
          <p className="lead section-lead">{t.home.introBody}</p>
        </Reveal>
        <ParallaxReveal className="scene-banner">
          <PhotoSlider slides={introSlides} />
        </ParallaxReveal>

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
            <AnimatedTitle>{t.home.ctaTitle}</AnimatedTitle>
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
