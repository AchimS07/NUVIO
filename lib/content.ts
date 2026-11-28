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
  email: string;
  address: string;
  // Latitude,longitude used for the map embed and directions link.
  mapQuery: string;
  seasons: Season[];
  // Legal details used by the Terms and Cookie policy pages.
  businessName: string;
  businessCui: string;
  businessAddress: string;
  checkIn: string;
  checkOut: string;
};

// Placeholder values: edit in Firestore (site/content) once the real data is known.
export const DEFAULT_CONTENT: SiteContent = {
  phone: '+40 742 939 838',
  email: 'sebastian.achim@icloud.com',
  address: 'Sat Măguri, județul Cluj',
  mapQuery: '46.628171,23.127336',
  businessName: '[Denumirea firmei]',
  businessCui: '[CUI]',
  businessAddress: '[Adresa sediului social]',
  checkIn: '14:00',
  checkOut: '11:00',
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

// wa.me needs digits with the country code, so a national number starting with 0 gets 40 (Romania).
export function whatsappHref(phone: string): string {
  const digits = phone.replace(/\D/g, '').replace(/^0/, '40');
  return `https://wa.me/${digits}`;
}

// Merges a Firestore document over the defaults, ignoring fields with the wrong type.
export function mergeContent(data: Record<string, unknown>): SiteContent {
  const seasons = Array.isArray(data.seasons) ? (data.seasons as Season[]) : DEFAULT_CONTENT.seasons;
  return {
    phone: typeof data.phone === 'string' ? data.phone : DEFAULT_CONTENT.phone,
    email: typeof data.email === 'string' ? data.email : DEFAULT_CONTENT.email,
    address: typeof data.address === 'string' ? data.address : DEFAULT_CONTENT.address,
    mapQuery: typeof data.mapQuery === 'string' ? data.mapQuery : DEFAULT_CONTENT.mapQuery,
    businessName: typeof data.businessName === 'string' ? data.businessName : DEFAULT_CONTENT.businessName,
    businessCui: typeof data.businessCui === 'string' ? data.businessCui : DEFAULT_CONTENT.businessCui,
    businessAddress:
      typeof data.businessAddress === 'string' ? data.businessAddress : DEFAULT_CONTENT.businessAddress,
    checkIn: typeof data.checkIn === 'string' ? data.checkIn : DEFAULT_CONTENT.checkIn,
    checkOut: typeof data.checkOut === 'string' ? data.checkOut : DEFAULT_CONTENT.checkOut,
    seasons,
  };
}
