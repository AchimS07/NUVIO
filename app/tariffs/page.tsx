'use client';

import Reveal from '@/components/Reveal';
import { pickLocalized } from '@/lib/content';
import { useI18n } from '@/lib/i18n';
import { useSiteData } from '@/lib/useSiteData';

export default function TariffsPage() {
  const { t, locale } = useI18n();
  const { content } = useSiteData();
  const seasons = content.seasons;

  return (
    <div className="container">
      <header className="page-header">
        <Reveal>
          <h1>{t.tariffs.title}</h1>
          <p className="lead">{t.tariffs.subtitle}</p>
        </Reveal>
      </header>

      <section className="section" style={{ paddingTop: 16 }}>
        <Reveal>
          {/* Mobile: one card per season */}
          <div className="tariff-cards">
            {seasons.map((season) => (
              <div className="tariff-card" key={season.id}>
                <h3>{pickLocalized(season.label, locale)}</h3>
                <div className="tariff-row">
                  <span>{t.tariffs.colWeekday}</span>
                  <strong>
                    {season.weekday} {t.common.perNight}
                  </strong>
                </div>
                <div className="tariff-row">
                  <span>{t.tariffs.colWeekend}</span>
                  <strong>
                    {season.weekend} {t.common.perNight}
                  </strong>
                </div>
              </div>
            ))}
          </div>

          {/* Tablet and desktop: comparison table */}
          <div className="tariff-table-wrap">
            <table className="tariff-table">
              <thead>
                <tr>
                  <th scope="col">{t.tariffs.colSeason}</th>
                  <th scope="col">{t.tariffs.colWeekday}</th>
                  <th scope="col">{t.tariffs.colWeekend}</th>
                </tr>
              </thead>
              <tbody>
                {seasons.map((season) => (
                  <tr key={season.id}>
                    <th scope="row">{pickLocalized(season.label, locale)}</th>
                    <td className="price">
                      {season.weekday}
                      <span>{t.common.perNight}</span>
                    </td>
                    <td className="price">
                      {season.weekend}
                      <span>{t.common.perNight}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal>
          <h2 style={{ marginTop: 40, fontSize: '1.3rem' }}>{t.tariffs.notesTitle}</h2>
          <ul className="notes">
            {t.tariffs.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </Reveal>
      </section>
    </div>
  );
}
