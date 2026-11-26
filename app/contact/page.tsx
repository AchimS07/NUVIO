'use client';

import Reveal from '@/components/Reveal';
import { phoneHref } from '@/lib/content';
import { useI18n } from '@/lib/i18n';
import { useSiteData } from '@/lib/useSiteData';

export default function ContactPage() {
  const { t } = useI18n();
  const { content } = useSiteData();
  const query = encodeURIComponent(content.mapQuery);
  const mapSrc = `https://www.google.com/maps?q=${query}&output=embed`;
  const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${query}`;

  return (
    <div className="container">
      <header className="page-header">
        <Reveal>
          <h1>{t.contact.title}</h1>
          <p className="lead">{t.contact.subtitle}</p>
        </Reveal>
      </header>

      <section className="section" style={{ paddingTop: 16 }}>
        <div className="contact-grid">
          <Reveal>
            <div className="contact-item">
              <p className="label">{t.contact.phone}</p>
              <a className="value" href={phoneHref(content.phone)}>
                {content.phone}
              </a>
            </div>
            <div className="contact-item">
              <p className="label">{t.contact.address}</p>
              <p className="value">{content.address}</p>
            </div>
            <div className="contact-item">
              <p className="label">{t.contact.hours}</p>
              <p className="value">{t.contact.hoursValue}</p>
            </div>
            <p className="muted">{t.contact.bookNote}</p>
            <a className="btn btn-primary" href={phoneHref(content.phone)}>
              {t.common.callToBook}
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <iframe
              className="map-frame"
              title={t.contact.mapTitle}
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a className="map-link" href={directionsHref} target="_blank" rel="noopener noreferrer">
              {t.common.directions} →
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
