import type { Locale } from './i18n';
import type { LegalDocument } from './legalTerms';

// Describes only what the site actually stores or loads (see lib/i18n.tsx and app/contact/page.tsx).
// {placeholders} are replaced with the business details from Firestore (site/content).
export const COOKIES: Record<Locale, LegalDocument> = {
  ro: {
    intro:
      'Această politică explică modul în care site-ul NUVIO folosește cookie-uri și tehnologii similare. Prin continuarea navigării pe site, acceptați această politică. Dacă nu sunteți de acord, puteți modifica setările browserului, așa cum este descris mai jos.',
    sections: [
      {
        title: 'Ce sunt cookie-urile',
        paragraphs: [
          'Cookie-urile sunt fișiere mici de text pe care un site le salvează pe dispozitivul dumneavoastră, prin intermediul browserului. Ele ajută site-ul să funcționeze corect și să rețină anumite preferințe.',
          'Spațiul de stocare locală al browserului (localStorage) are un rol similar și este tratat în aceeași politică.',
        ],
      },
      {
        title: 'Ce folosim efectiv',
        paragraphs: [
          'Preferința de limbă: site-ul reține limba aleasă (română, engleză sau maghiară) în spațiul de stocare locală al browserului, sub cheia nuvio-locale. Această valoare rămâne pe dispozitivul dumneavoastră și nu este trimisă către noi.',
          'Bannerul de cookie-uri: după ce apăsați „Am înțeles”, această alegere se salvează în spațiul de stocare locală, sub cheia nuvio-cookie-consent, ca bannerul să nu mai apară la fiecare vizită.',
          'Harta Google: pagina Contact afișează o hartă Google Maps. La încărcarea hărții, Google poate plasa propriile cookie-uri, conform politicii sale de confidențialitate.',
          'Conținutul site-ului: fotografiile, tarifele și datele de contact sunt încărcate din Firebase, un serviciu Google. Firebase este folosit pentru livrarea conținutului, nu pentru urmărirea vizitatorilor. Deoarece nu există conturi de utilizator, nu folosim cookie-uri de autentificare.',
        ],
      },
      {
        title: 'Tipurile de cookie-uri',
        paragraphs: [
          'Funcționale: preferința de limbă descrisă mai sus.',
          'De la terți: harta Google din pagina Contact.',
          'Analitice și de marketing: în prezent, site-ul nu folosește instrumente de analiză sau de publicitate. Dacă acest lucru se schimbă, politica va fi actualizată și, unde este necesar, vă vom cere consimțământul înainte.',
        ],
      },
      {
        title: 'Gestionarea cookie-urilor',
        paragraphs: [
          'Puteți șterge sau bloca cookie-urile din setările browserului. Fiecare browser are o secțiune de ajutor: Google Chrome, Mozilla Firefox, Microsoft Edge și Safari.',
          'Dacă blocați cookie-urile de la terți, harta Google s-ar putea să nu se afișeze complet. Preferința de limbă poate fi resetată ștergând datele site-ului din browser sau alegând o altă limbă din meniu.',
        ],
      },
      {
        title: 'Actualizări ale politicii',
        paragraphs: [
          'Putem actualiza periodic această politică. Modificările intră în vigoare la publicarea lor pe această pagină, de aceea vă recomandăm să o verificați din când în când.',
        ],
      },
    ],
    closing:
      'Pentru întrebări despre cookie-uri, ne puteți scrie la {email} sau ne puteți suna la {phone}. Operator: {businessName}, CUI {businessCui}.',
  },
  en: {
    intro:
      'This Cookie Policy explains how the NUVIO website uses cookies and similar technologies. By continuing to browse the site, you agree to this policy. If you do not agree, you can change your browser settings as described below.',
    sections: [
      {
        title: 'What cookies are',
        paragraphs: [
          'Cookies are small text files that a website stores on your device through your browser. They help the site work properly and remember certain preferences.',
          'Local storage in the browser (localStorage) has a similar role and is covered by this policy as well.',
        ],
      },
      {
        title: 'What we actually use',
        paragraphs: [
          'Language preference: the site stores the language you choose (Romanian, English or Hungarian) in your browser local storage, under the key nuvio-locale. This value stays on your device and is not sent to us.',
          'Cookie banner: after you press "Got it", this choice is saved in local storage under the key nuvio-cookie-consent, so the banner does not appear on every visit.',
          'Google Maps: the Contact page shows an embedded Google Maps map. When the map loads, Google may set its own cookies, under its own privacy policy.',
          'Site content: photos, tariffs and contact details are loaded from Firebase, a Google service. Firebase is used to deliver the content, not to track visitors. Because there are no user accounts, we do not use login cookies.',
        ],
      },
      {
        title: 'Types of cookies',
        paragraphs: [
          'Functional: the language preference described above.',
          'Third-party: the Google Maps embed on the Contact page.',
          'Analytics and marketing: the site does not currently use analytics or advertising tools. If this changes, this policy will be updated and, where required, we will ask for your consent first.',
        ],
      },
      {
        title: 'Managing cookies',
        paragraphs: [
          'You can delete or block cookies in your browser settings. Each browser has a help section: Google Chrome, Mozilla Firefox, Microsoft Edge and Safari.',
          'If you block third-party cookies, the Google Maps map may not display fully. The language preference can be reset by clearing the site data in your browser or by choosing another language in the menu.',
        ],
      },
      {
        title: 'Updates to this policy',
        paragraphs: [
          'We may update this policy from time to time. Changes take effect when they are published on this page, so we recommend checking it periodically.',
        ],
      },
    ],
    closing:
      'For questions about cookies, contact {businessName} (CUI {businessCui}) at {email} or by phone at {phone}.',
  },
  hu: {
    intro:
      'Ez a sütikezelési szabályzat azt ismerteti, hogyan használja a NUVIO weboldal a sütiket és a hasonló technológiákat. Az oldal böngészésének folytatásával elfogadja ezt a szabályzatot. Ha nem ért egyet, a lent leírtak szerint módosíthatja a böngészője beállításait.',
    sections: [
      {
        title: 'Mik a sütik?',
        paragraphs: [
          'A sütik kis szöveges fájlok, amelyeket a weboldal a böngészőn keresztül az eszközén tárol. Segítik az oldal megfelelő működését és bizonyos beállítások megjegyzését.',
          'A böngésző helyi tárolója (localStorage) hasonló szerepet tölt be, és erre is ez a szabályzat vonatkozik.',
        ],
      },
      {
        title: 'Mit használunk valójában?',
        paragraphs: [
          'Nyelvi beállítás: az oldal a kiválasztott nyelvet (román, angol vagy magyar) a böngésző helyi tárolójában tárolja, a nuvio-locale kulcs alatt. Ez az érték az eszközén marad, nem küldjük el nekünk.',
          'Sütisáv: a „Rendben” gomb megnyomása után a választás a helyi tárolóban, a nuvio-cookie-consent kulcs alatt mentődik, hogy a sáv ne jelenjen meg minden látogatáskor.',
          'Google Térkép: a Kapcsolat oldalon egy beágyazott Google Térkép látható. A térkép betöltésekor a Google saját sütiket helyezhet el, a saját adatvédelmi szabályzata szerint.',
          'Tartalom: a fotók, az árak és az elérhetőségi adatok a Firebase-ből, a Google egyik szolgáltatásából töltődnek be. A Firebase a tartalom kiszolgálására szolgál, nem a látogatók követésére. Mivel nincsenek felhasználói fiókok, bejelentkezési sütiket nem használunk.',
        ],
      },
      {
        title: 'A sütik típusai',
        paragraphs: [
          'Funkcionális: a fent leírt nyelvi beállítás.',
          'Harmadik féltől származó: a Kapcsolat oldal Google Térképe.',
          'Elemző és marketing: az oldal jelenleg nem használ elemző vagy hirdetési eszközöket. Ha ez megváltozik, a szabályzatot frissítjük, és szükség esetén előzetesen kérjük a hozzájárulását.',
        ],
      },
      {
        title: 'A sütik kezelése',
        paragraphs: [
          'A sütiket a böngésző beállításaiban törölheti vagy letilthatja. Minden böngészőnek van súgó része: Google Chrome, Mozilla Firefox, Microsoft Edge és Safari.',
          'Ha letiltja a harmadik féltől származó sütiket, a Google Térkép nem biztos, hogy teljesen megjelenik. A nyelvi beállítás a böngésző oldaladatainak törlésével vagy másik nyelv választásával állítható vissza.',
        ],
      },
      {
        title: 'A szabályzat módosítása',
        paragraphs: [
          'Időnként módosíthatjuk ezt a szabályzatot. A változások az oldalon történő közzétételükkel lépnek hatályba, ezért javasoljuk, hogy rendszeresen nézze meg.',
        ],
      },
    ],
    closing:
      'A sütikkel kapcsolatos kérdéseivel forduljon a {businessName} (adószám: {businessCui}) részéhez az {email} címen vagy a {phone} telefonszámon.',
  },
};
