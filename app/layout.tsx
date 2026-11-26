import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import ClientShell from '@/components/ClientShell';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'NUVIO – Cabană de munte',
    template: '%s | NUVIO',
  },
  description: 'Cabana NUVIO, de închiriat în munte. Rezervări telefonic.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1f3a2e',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ro">
      <body>
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
