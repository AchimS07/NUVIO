'use client';

'use client';

import LegalDocumentPage from '@/components/LegalDocumentPage';
import { TERMS } from '@/lib/legalTerms';

export default function TermsPage() {
  return <LegalDocumentPage titleKey="terms" docs={TERMS} />;
}
