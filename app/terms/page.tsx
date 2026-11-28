'use client';

'use client';

import Reveal from '@/components/Reveal';
import { useI18n } from '@/lib/i18n';
import { fillPlaceholders, TERMS } from '@/lib/legalTerms';
import { useSiteData } from '@/lib/useSiteData';

export default function TermsPage() {
  const { locale, t } = useI18n();
  const { content } = useSiteData();
  const doc = TERMS[locale];
  const fill = (value: string) => fillPlaceholders(value, content);

  return (
    <div className="container">
      <header className="page-header">
        <Reveal>
          <h1>{t.footer.terms}</h1>
        </Reveal>
      </header>
      <article className="legal-doc">
        <Reveal>
          <p className="lead">{fill(doc.intro)}</p>
        </Reveal>
        {doc.sections.map((section, index) => (
          <Reveal key={section.title}>
            <section className="legal-section">
              <h2>
                {index + 1}. {section.title}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{fill(paragraph)}</p>
              ))}
            </section>
          </Reveal>
        ))}
        <Reveal>
          <p className="legal-closing">{fill(doc.closing)}</p>
        </Reveal>
      </article>
    </div>
  );
}
