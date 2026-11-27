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
          {t.about.paragraphs.map((text, i) => (
            <p key={i} className={i === 0 ? 'lead' : undefined}>
              {text}
            </p>
          ))}
        </Reveal>
      </section>
    </div>
  );
}
