'use client';

import LegalDocumentPage from '@/components/LegalDocumentPage';
import { COOKIES } from '@/lib/legalCookies';

export default function CookiesPage() {
  return <LegalDocumentPage titleKey="cookies" docs={COOKIES} />;
}
