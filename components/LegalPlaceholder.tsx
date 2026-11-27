'use client';

import Reveal from '@/components/Reveal';
import { useI18n } from '@/lib/i18n';

export type LegalKey = 'terms' | 'cookies' | 'cancellation' | 'payment';

export default function LegalPlaceholder({ titleKey }: { titleKey: LegalKey }) {
  const { t } = useI18n();

  return (
    <div className="container">
      <header className="page-header">
        <Reveal>
          <h1>{t.footer[titleKey]}</h1>
          <p className="lead">{t.footer.comingSoon}</p>
        </Reveal>
      </header>
    </div>
  );
}
