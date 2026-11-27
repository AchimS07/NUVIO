import type { Locale } from './i18n';

export type Localized = Record<Locale, string>;

export type Season = {
  id: string;
  label: Localized;
  weekday: number;
  weekend: number;
};

export type SiteContent = {
  phone: string;
  address: string;
  // Latitude,longitude used for the map embed and directions link.
  mapQuery: string;
  seasons: Season[];
};

// Placeholder values: edit in Firestore (site/content) once the real data is known.
export const DEFAULT_CONTENT: SiteContent = {
  phone: '+40 742 939 838',
  address: 'Sat Măguri, județul Cluj',
  mapQuery: '46.628171,23.127336',
  seasons: [
    {
      id: 'low',
      label: {
        ro: 'Perioada (aprilie – octombrie)',
        en: 'Period (April – October)',
        hu: 'Időszak (április – október)',
      },
      weekday: 1100,
      weekend: 1500,
    },
    {
      id: 'high',
      label: {
        ro: 'Perioada (noiembrie – martie)',
        en: 'Period (November – March)',
        hu: 'Időszak (november – március)',
      },
      weekday: 1100,
      weekend: 1700,
    },
  ],
};

export function pickLocalized(value: Localized, locale: Locale): string {
  return value[locale] || value.ro;
}

export function phoneHref(phone: string): string {
  return `tel:${phone.replace(/[^+\d]/g, '')}`;
}

// Merges a Firestore document over the defaults, ignoring fields with the wrong type.
export function mergeContent(data: Record<string, unknown>): SiteContent {
  const seasons = Array.isArray(data.seasons) ? (data.seasons as Season[]) : DEFAULT_CONTENT.seasons;
  return {
    phone: typeof data.phone === 'string' ? data.phone : DEFAULT_CONTENT.phone,
    address: typeof data.address === 'string' ? data.address : DEFAULT_CONTENT.address,
    mapQuery: typeof data.mapQuery === 'string' ? data.mapQuery : DEFAULT_CONTENT.mapQuery,
    seasons,
  };
}
