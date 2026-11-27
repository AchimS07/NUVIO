'use client';

import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';
import { whatsappHref } from '@/lib/content';
import { useSiteData } from '@/lib/useSiteData';

export default function WhatsAppButton() {
  const { t } = useI18n();
  const { content } = useSiteData();

  return (
    <motion.a
      className="whatsapp-fab"
      href={whatsappHref(content.phone)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.common.whatsapp}
      title={t.common.whatsapp}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5z" />
      </svg>
    </motion.a>
  );
}
