'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useI18n } from '@/lib/i18n';

export const CONSENT_STORAGE_KEY = 'nuvio-cookie-consent';

export default function CookieBanner() {
  const { t } = useI18n();
  const [visible, setVisible] = useState(false);

  // Read the stored choice after mount so server and client markup match.
  useEffect(() => {
    try {
      setVisible(localStorage.getItem(CONSENT_STORAGE_KEY) !== 'accepted');
    } catch {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, 'accepted');
    } catch {
      // Storage may be blocked; hide the banner for this visit anyway.
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label={t.footer.cookies}>
      <p>
        {t.cookieBanner.text} <Link href="/cookies">{t.cookieBanner.learnMore}</Link>
      </p>
      <button type="button" className="cookie-banner-accept" onClick={accept}>
        {t.cookieBanner.accept}
      </button>
    </div>
  );
}
