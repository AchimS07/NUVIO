'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

export type Locale = 'ro' | 'en' | 'hu';

export const LOCALES: Locale[] = ['ro', 'en', 'hu'];

const STORAGE_KEY = 'nuvio-locale';

const ro = {
  common: {
    callToBook: 'Rezervă telefonic',
    openMenu: 'Deschide meniul',
    closeMenu: 'Închide meniul',
    language: 'Limba',
    rights: 'Toate drepturile rezervate.',
    directions: 'Indicații de drum',
    perNight: 'RON / noapte',
  },
  nav: {
    home: 'Acasă',
    about: 'Despre noi',
    tariffs: 'Tarife',
    cabin: 'Cabana',
    contact: 'Contact',
  },
  home: {
    eyebrow: 'Cabană de munte',
    heroTitle: 'NUVIO',
    heroSubtitle: 'Liniște, aer curat și priveliști de munte. Un refugiu pentru weekend sau vacanță.',
    seeTariffs: 'Vezi tarifele',
    introTitle: 'Bine ai venit la NUVIO',
    introBody:
      'Cabana noastră te așteaptă într-un loc retras, departe de agitația orașului. Rezervările se fac direct, telefonic.',
    highlights: [
      { title: 'Liniște', body: 'Un loc retras, perfect pentru a te deconecta și a te reîncărca.' },
      { title: 'Natură', body: 'Drumeții, aer curat și priveliști spectaculoase chiar de la ușă.' },
      { title: 'Confort', body: 'Spații calde și primitoare, pregătite pentru familie sau prieteni.' },
    ],
    ctaTitle: 'Gata să rezervi?',
    ctaBody: 'Sună-ne și îți confirmăm disponibilitatea în câteva minute.',
  },
  about: {
    title: 'Despre noi',
    subtitle: 'Povestea din spatele cabanei NUVIO',
    paragraphs: [
      'NUVIO începe cu o priveliște.',
      'În Măguri, în Munții Apuseni, construim o cabană cu ferestre mari, deschise către dealuri și cer. Ne place gândul că peisajul va face parte din fiecare zi petrecută aici. Din cafeaua de dimineață, dintr-o după-amiază cu jocuri în living, din momentele în care cineva întrerupe conversația cu un simplu „uite afară”.',
      'NUVIO prinde contur cu familiile și prietenii în minte. Cu copii care au mereu ceva de descoperit, cu mese la care mai rămâne lumea la povești și cu dimineți în care fiecare își găsește ritmul.',
      'Ne imaginăm lucrurile mici pe care le vei ține minte după plecare. Locul preferat lângă geam. Un nor urmărit de copii până dispare după deal. Lumina care schimbă camera spre seară. O conversație care a avut, în sfârșit, timp.',
      'Numele NUVIO este creat din asocierea dintre cer, lumină și priveliște. Îi dăm sens prin casa pe care o construim și prin felul în care ne dorim să te simți aici.',
      'La NUVIO, priveliștea se împarte cu ai tăi.',
    ],
  },
  tariffs: {
    title: 'Tarife',
    subtitle: 'Prețuri pe noapte, în funcție de sezon și de ziua sejurului',
    colSeason: 'Sezon',
    colWeekday: 'Luni – Joi',
    colWeekend: 'Vineri – Duminică',
    notesTitle: 'Informații utile',
    notes: [
      'Prețurile sunt exprimate în RON pe noapte.',
      'Șederea minimă poate varia în funcție de perioadă.',
      'Pentru date și disponibilitate, sună-ne.',
    ],
    callForDates: 'Verifică disponibilitatea',
  },
  cabin: {
    title: 'Cabana',
    subtitle: 'Un spațiu cald și primitor, înconjurat de munte',
    galleryTitle: 'Galerie foto',
    galleryEmpty: 'Fotografiile vor apărea aici în curând.',
    amenitiesTitle: 'Facilități',
    amenities: ['Încălzire', 'Bucătărie complet dotată', 'Wi-Fi', 'Parcare', 'Terasă cu priveliște', 'Foc de tabără'],
    locationTitle: 'Locație',
    locationBody: 'Cabana se află într-un loc liniștit, cu acces ușor și priveliști spre munte.',
  },
  contact: {
    title: 'Contact',
    subtitle: 'Sună-ne pentru rezervări sau pentru orice întrebare',
    phone: 'Telefon',
    address: 'Adresă',
    hours: 'Program rezervări',
    hoursValue: 'Zilnic, 09:00 – 21:00',
    mapTitle: 'Harta locației cabanei NUVIO',
    mapHint: 'Vezi locația pe hartă',
    bookNote: 'Rezervările se fac exclusiv telefonic.',
  },
  footer: {
    tagline: 'Cabană de închiriat în munte. Rezervări telefonic.',
  },
};

type Dict = typeof ro;

const en: Dict = {
  common: {
    callToBook: 'Book by phone',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Language',
    rights: 'All rights reserved.',
    directions: 'Get directions',
    perNight: 'RON / night',
  },
  nav: {
    home: 'Home',
    about: 'About Us',
    tariffs: 'Tariffs',
    cabin: 'The Cabin',
    contact: 'Contact',
  },
  home: {
    eyebrow: 'Mountain cabin',
    heroTitle: 'NUVIO',
    heroSubtitle: 'Quiet, fresh air and mountain views. A retreat for a weekend or a holiday.',
    seeTariffs: 'See tariffs',
    introTitle: 'Welcome to NUVIO',
    introBody:
      'Our cabin awaits you in a secluded place, far from the noise of the city. Bookings are made directly, by phone.',
    highlights: [
      { title: 'Quiet', body: 'A secluded place, perfect for switching off and recharging.' },
      { title: 'Nature', body: 'Hikes, clean air and spectacular views right from the door.' },
      { title: 'Comfort', body: 'Warm, welcoming spaces ready for family or friends.' },
    ],
    ctaTitle: 'Ready to book?',
    ctaBody: 'Give us a call and we will confirm availability within minutes.',
  },
  about: {
    title: 'About Us',
    subtitle: 'The story behind the NUVIO cabin',
    paragraphs: [
      'NUVIO was born from the wish to offer guests an authentic place where nature takes centre stage.',
      'We take care of every detail so your stay is comfortable, safe and pleasant in any season.',
      'Bookings are made by phone. We are happy to answer any question before you arrive.',
    ],
  },
  tariffs: {
    title: 'Tariffs',
    subtitle: 'Nightly prices by season and by day of stay',
    colSeason: 'Season',
    colWeekday: 'Mon – Thu',
    colWeekend: 'Fri – Sun',
    notesTitle: 'Good to know',
    notes: [
      'Prices are in RON per night.',
      'Minimum stay may vary depending on the period.',
      'For dates and availability, give us a call.',
    ],
    callForDates: 'Check availability',
  },
  cabin: {
    title: 'The Cabin',
    subtitle: 'A warm, welcoming space surrounded by the mountains',
    galleryTitle: 'Photo gallery',
    galleryEmpty: 'Photos will appear here soon.',
    amenitiesTitle: 'Amenities',
    amenities: ['Heating', 'Fully equipped kitchen', 'Wi-Fi', 'Parking', 'Terrace with a view', 'Campfire'],
    locationTitle: 'Location',
    locationBody: 'The cabin is in a quiet spot, with easy access and views of the mountains.',
  },
  contact: {
    title: 'Contact',
    subtitle: 'Call us for bookings or any question',
    phone: 'Phone',
    address: 'Address',
    hours: 'Booking hours',
    hoursValue: 'Daily, 09:00 – 21:00',
    mapTitle: 'Map of the NUVIO cabin location',
    mapHint: 'See the location on the map',
    bookNote: 'Bookings are made exclusively by phone.',
  },
  footer: {
    tagline: 'Mountain cabin for rent. Bookings by phone.',
  },
};

const hu: Dict = {
  common: {
    callToBook: 'Foglalás telefonon',
    openMenu: 'Menü megnyitása',
    closeMenu: 'Menü bezárása',
    language: 'Nyelv',
    rights: 'Minden jog fenntartva.',
    directions: 'Útvonaltervezés',
    perNight: 'RON / éjszaka',
  },
  nav: {
    home: 'Főoldal',
    about: 'Rólunk',
    tariffs: 'Árak',
    cabin: 'A faház',
    contact: 'Kapcsolat',
  },
  home: {
    eyebrow: 'Hegyi faház',
    heroTitle: 'NUVIO',
    heroSubtitle: 'Csend, friss levegő és hegyi panoráma. Menedék hétvégére vagy nyaralásra.',
    seeTariffs: 'Árak megtekintése',
    introTitle: 'Üdvözöljük a NUVIO-ban',
    introBody:
      'Faházunk egy elszigetelt helyen vár, távol a város zajától. A foglalás közvetlenül, telefonon történik.',
    highlights: [
      { title: 'Csend', body: 'Elszigetelt hely, tökéletes a kikapcsolódáshoz és feltöltődéshez.' },
      { title: 'Természet', body: 'Túrázás, tiszta levegő és látványos panoráma közvetlenül az ajtónál.' },
      { title: 'Kényelem', body: 'Meleg, barátságos terek családnak vagy barátoknak.' },
    ],
    ctaTitle: 'Készen áll a foglalásra?',
    ctaBody: 'Hívjon minket, és perceken belül megerősítjük a szabad időpontokat.',
  },
  about: {
    title: 'Rólunk',
    subtitle: 'A NUVIO faház története',
    paragraphs: [
      'A NUVIO abból a vágyból született, hogy egy autentikus helyet kínáljunk, ahol a természet áll a középpontban.',
      'Minden részletre odafigyelünk, hogy tartózkodása kényelmes, biztonságos és kellemes legyen minden évszakban.',
      'A foglalás telefonon történik. Szívesen válaszolunk minden kérdésre érkezés előtt.',
    ],
  },
  tariffs: {
    title: 'Árak',
    subtitle: 'Éjszakánkénti árak szezon és a tartózkodás napja szerint',
    colSeason: 'Szezon',
    colWeekday: 'Hétfő – Csütörtök',
    colWeekend: 'Péntek – Vasárnap',
    notesTitle: 'Hasznos tudnivalók',
    notes: [
      'Az árak RON-ban, éjszakánként értendők.',
      'A minimum tartózkodás az időszaktól függően változhat.',
      'Dátumokért és szabad helyekért hívjon minket.',
    ],
    callForDates: 'Szabad időpontok ellenőrzése',
  },
  cabin: {
    title: 'A faház',
    subtitle: 'Meleg, barátságos tér a hegyek ölelésében',
    galleryTitle: 'Fotógaléria',
    galleryEmpty: 'A fotók hamarosan megjelennek itt.',
    amenitiesTitle: 'Felszereltség',
    amenities: ['Fűtés', 'Teljesen felszerelt konyha', 'Wi-Fi', 'Parkolás', 'Teraszkilátás', 'Tábortűz'],
    locationTitle: 'Helyszín',
    locationBody: 'A faház egy csendes helyen található, könnyű megközelítéssel és hegyi panorámával.',
  },
  contact: {
    title: 'Kapcsolat',
    subtitle: 'Hívjon foglalásért vagy bármilyen kérdésben',
    phone: 'Telefon',
    address: 'Cím',
    hours: 'Foglalási idő',
    hoursValue: 'Naponta, 09:00 – 21:00',
    mapTitle: 'A NUVIO faház helyszíne a térképen',
    mapHint: 'A helyszín megtekintése a térképen',
    bookNote: 'A foglalás kizárólag telefonon lehetséges.',
  },
  footer: {
    tagline: 'Hegyi faház kiadó. Foglalás telefonon.',
  },
};

export const dictionaries: Record<Locale, Dict> = { ro, en, hu };

export const LOCALE_LABELS: Record<Locale, string> = { ro: 'RO', en: 'EN', hu: 'HU' };

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dict;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('ro');

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (saved && LOCALES.includes(saved)) setLocaleState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const value = useMemo(() => ({ locale, setLocale, t: dictionaries[locale] }), [locale, setLocale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}
