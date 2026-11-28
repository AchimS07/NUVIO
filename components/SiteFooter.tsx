'use client';

import Link from 'next/link';
import { useI18n } from '@/lib/i18n';
import { useSiteData } from '@/lib/useSiteData';
import { phoneHref } from '@/lib/content';

const SOCIAL = ['Instagram', 'Facebook', 'TikTok'] as const;

const LEGAL_LINKS = [
  { href: '/terms', key: 'terms' },
  { href: '/cookies', key: 'cookies' },
  { href: '/cancellation', key: 'cancellation' },
  { href: '/payment', key: 'payment' },
] as const;

const PAYMENT_BADGES = ['Netopia', 'Visa', 'Mastercard'] as const;

function SocialIcon({ name }: { name: (typeof SOCIAL)[number] }) {
  const common = { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8 };
  if (name === 'Instagram') {
    return (
      <svg {...common} aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
      </svg>
    );
  }
  if (name === 'Facebook') {
    return (
      <svg {...common} aria-hidden="true">
        <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.2c0-.9.3-1.5 1.5-1.5h1.4V5.1c-.3 0-1.1-.1-2.1-.1-2.1 0-3.5 1.3-3.5 3.6V11H8v3h2.4v7z" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  return (
    <svg {...common} aria-hidden="true">
      <path d="M16 3v11.2a3.8 3.8 0 1 1-3.8-3.8" />
      <path d="M16 3c.4 2.6 2 4.4 4.5 4.8" />
    </svg>
  );
}

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

        <div className="footer-contact">
          <a className="footer-phone" href={phoneHref(content.phone)}>
            {content.phone}
          </a>
          <a className="footer-link" href={`mailto:${content.email}`}>
            {content.email}
          </a>
          <p className="muted">{content.address}</p>
          <div className="footer-social">
            {SOCIAL.map((name) => (
              <span key={name} className="social-btn" aria-label={name} title={name}>
                <SocialIcon name={name} />
              </span>
            ))}
          </div>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          <Link href="/tariffs">{t.nav.tariffs}</Link>
          <Link href="/cabin">{t.nav.cabin}</Link>
          <Link href="/contact">{t.nav.contact}</Link>
          {LEGAL_LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              {t.footer[link.key]}
            </Link>
          ))}
        </nav>

        <div className="footer-badges">
          <a className="anpc-badge" href="https://www.anpc.ro" target="_blank" rel="noopener noreferrer">
            ANPC
          </a>
          <a className="footer-link" href="https://www.anpc.ro" target="_blank" rel="noopener noreferrer">
            {t.footer.dispute}
          </a>
          <ul className="payment-badges" aria-label={t.footer.payment}>
            {PAYMENT_BADGES.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>

        <p className="muted small">
          © {year} NUVIO. {t.common.rights}
        </p>
      </div>
    </footer>
  );
}
