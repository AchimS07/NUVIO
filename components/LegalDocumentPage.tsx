'use client';

import Reveal from '@/components/Reveal';
import { type Dict, type Locale, useI18n } from '@/lib/i18n';
import { fillPlaceholders, type LegalDocument } from '@/lib/legalTerms';
import { useSiteData } from '@/lib/useSiteData';

type Props = {
  titleKey: keyof Dict['footer'];
  docs: Record<Locale, LegalDocument>;
};

export default function LegalDocumentPage({ titleKey, docs }: Props) {
  const { locale, t } = useI18n();
  const { content } = useSiteData();
  const doc = docs[locale];
  const fill = (value: string) => fillPlaceholders(value, content);

  return (
    <div className="container">
      <header className="page-header">
        <Reveal>
          <h1>{t.footer[titleKey]}</h1>
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
