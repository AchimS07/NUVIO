'use client';

import Link from 'next/link';
import { useI18n } from '@/lib/i18n';
import { useSiteData } from '@/lib/useSiteData';
import { phoneHref } from '@/lib/content';

export default function SiteFooter() {
  const { t } = useI18n();
  const { content } = useSiteData();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <p className="brand">NUVIO</p>
          <p className="muted">{t.footer.tagline}</p>
        </div>
        <a className="footer-phone" href={phoneHref(content.phone)}>
          {content.phone}
        </a>
        <nav className="footer-nav" aria-label="Footer">
          <Link href="/tariffs">{t.nav.tariffs}</Link>
          <Link href="/cabin">{t.nav.cabin}</Link>
          <Link href="/contact">{t.nav.contact}</Link>
        </nav>
        <p className="muted small">
          © {year} NUVIO. {t.common.rights}
        </p>
      </div>
    </footer>
  );
}
