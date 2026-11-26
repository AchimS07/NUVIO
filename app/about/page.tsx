'use client';

import Reveal from '@/components/Reveal';
import { useI18n } from '@/lib/i18n';

export default function AboutPage() {
  const { t } = useI18n();

  return (
    <div className="container">
      <header className="page-header">
        <Reveal>
          <h1>{t.about.title}</h1>
          <p className="lead">{t.about.subtitle}</p>
        </Reveal>
      </header>
      <section className="section" style={{ paddingTop: 16 }}>
        <Reveal>
          <p className="lead">{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <p>{t.about.p3}</p>
        </Reveal>
      </section>
    </div>
  );
}
