'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { LOCALE_LABELS, LOCALES, useI18n } from '@/lib/i18n';

const NAV = [
  { href: '/', key: 'home' },
  { href: '/about', key: 'about' },
  { href: '/tariffs', key: 'tariffs' },
  { href: '/cabin', key: 'cabin' },
  { href: '/contact', key: 'contact' },
] as const;

export default function SiteHeader() {
  const pathname = usePathname();
  const { t, locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
    <header className={open ? 'site-header menu-open' : 'site-header'}>
      <div className="container header-inner">
        <Link href="/" className="brand" onClick={close}>
          NUVIO
        </Link>

        <nav className="desktop-nav" aria-label="Main">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={isActive(item.href) ? 'nav-link active' : 'nav-link'}
              aria-current={isActive(item.href) ? 'page' : undefined}
            >
              {t.nav[item.key]}
            </Link>
          ))}
        </nav>

        <div className="header-tools">
          <div className="lang-switch" role="group" aria-label={t.common.language}>
            {LOCALES.map((code) => (
              <button
                key={code}
                type="button"
                className={code === locale ? 'lang-btn active' : 'lang-btn'}
                aria-pressed={code === locale}
                onClick={() => setLocale(code)}
              >
                {LOCALE_LABELS[code]}
              </button>
            ))}
          </div>
          <button
            type="button"
            className={open ? 'menu-toggle open' : 'menu-toggle'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.common.closeMenu : t.common.openMenu}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

    </header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            id="mobile-menu"
            className="menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <nav aria-label="Mobile">
              <ul>
                {NAV.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.12 + index * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={item.href}
                      className={isActive(item.href) ? 'mobile-link active' : 'mobile-link'}
                      onClick={close}
                    >
                      {t.nav[item.key]}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
