'use client';

import { MotionConfig } from 'framer-motion';
import type { ReactNode } from 'react';
import { I18nProvider } from '@/lib/i18n';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import PageTransition from './PageTransition';
import WhatsAppButton from './WhatsAppButton';

// Client-side wrapper so the root layout can stay a server component.
export default function ClientShell({ children }: { children: ReactNode }) {
  return (
    <I18nProvider>
      <MotionConfig reducedMotion="user">
        <SiteHeader />
        <PageTransition>{children}</PageTransition>
        <SiteFooter />
        <WhatsAppButton />
      </MotionConfig>
    </I18nProvider>
  );
}
