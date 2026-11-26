'use client';

import Reveal from '@/components/Reveal';
import { useI18n } from '@/lib/i18n';
import { useSiteData } from '@/lib/useSiteData';

const PLACEHOLDER_TILES = 6;

export default function CabinPage() {
  const { t } = useI18n();
  const { photos } = useSiteData();

  return (
    <div className="container">
      <header className="page-header">
        <Reveal>
          <h1>{t.cabin.title}</h1>
          <p className="lead">{t.cabin.subtitle}</p>
        </Reveal>
      </header>

      <section className="section" style={{ paddingTop: 16 }}>
        <Reveal>
          <h2 style={{ fontSize: '1.3rem' }}>{t.cabin.galleryTitle}</h2>
          <div className="gallery">
            {photos.length > 0
              ? photos.map((url, index) => (
                  <figure className="gallery-item" key={url}>
                    {/* Photos come from Firebase Storage, so plain img is used for static export. */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={url} alt={`NUVIO ${index + 1}`} loading="lazy" />
                  </figure>
                ))
              : Array.from({ length: PLACEHOLDER_TILES }, (_, index) => (
                  <figure className="gallery-item" key={index} aria-hidden="true" />
                ))}
          </div>
          {photos.length === 0 && <p className="muted small">{t.cabin.galleryEmpty}</p>}
        </Reveal>

        <Reveal>
          <h2 style={{ fontSize: '1.3rem', marginTop: 40 }}>{t.cabin.amenitiesTitle}</h2>
          <ul className="amenities">
            {t.cabin.amenities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal>
          <h2 style={{ fontSize: '1.3rem', marginTop: 40 }}>{t.cabin.locationTitle}</h2>
          <p>{t.cabin.locationBody}</p>
        </Reveal>
      </section>
    </div>
  );
}
