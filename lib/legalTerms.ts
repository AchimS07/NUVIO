import type { Locale } from './i18n';

export type LegalSection = { title: string; paragraphs: string[] };

export type LegalDocument = {
  intro: string;
  sections: LegalSection[];
  closing: string;
};

// {placeholders} are replaced with the business details from Firestore (site/content).
export const TERMS: Record<Locale, LegalDocument> = {
  ro: {
    intro:
      'Bine ați venit pe site-ul NUVIO. Vă rugăm să citiți cu atenție acești termeni și condiții înainte de a folosi site-ul. Accesarea și utilizarea site-ului înseamnă că acceptați prevederile de mai jos în totalitate. Dacă nu sunteți de acord cu ele, vă rugăm să nu folosiți site-ul.',
    sections: [
      {
        title: 'Date despre operator',
        paragraphs: [
          'Cabana și site-ul NUVIO sunt administrate de {businessName}, cu CUI {businessCui} și sediul în {businessAddress}.',
          'Pentru rezervări și întrebări ne puteți contacta la {phone} sau la {email}.',
        ],
      },
      {
        title: 'Rezervări',
        paragraphs: [
          'Rezervările se fac exclusiv telefonic, la {phone}. Momentan nu este disponibilă rezervarea online.',
          'Pentru confirmare avem nevoie de date de contact corecte și valabile.',
          'Pentru a fixa perioada dorită, putem solicita un avans, stabilit la confirmarea telefonică. Până la plata avansului, rezervarea nu se consideră fermă.',
        ],
      },
      {
        title: 'Check-in și check-out',
        paragraphs: [
          'Check-in-ul se face începând cu ora {checkIn} în ziua sosirii.',
          'Check-out-ul trebuie făcut până la ora {checkOut} în ziua plecării.',
          'Pentru check-out târziu se poate percepe o taxă suplimentară, în funcție de disponibilitate și cu acordul prealabil al gazdei.',
        ],
      },
      {
        title: 'Tarife, plată și anulări',
        paragraphs: [
          'Tarifele afișate pe site sunt exprimate în RON și includ taxele aplicabile.',
          'Modalitățile de plată se stabilesc în timpul rezervării telefonice.',
          'Anulările și neprezentările sunt supuse Politicii de anulare, disponibilă pe site.',
        ],
      },
      {
        title: 'Răspundere și siguranță',
        paragraphs: [
          '{businessName} nu răspunde pentru pierderea, furtul sau deteriorarea bunurilor personale ale oaspeților.',
          'Oaspeții sunt rugați să respecte regulile de siguranță afișate în cabană și să folosească cu atenție dotările puse la dispoziție.',
        ],
      },
      {
        title: 'Confidențialitate',
        paragraphs: [
          'Datele personale pe care ni le transmiteți sunt folosite doar pentru rezervări, comunicare și îmbunătățirea serviciilor.',
          'Le păstrăm în siguranță și nu le transmitem terților fără acordul dumneavoastră, cu excepția cazurilor prevăzute de lege.',
        ],
      },
      {
        title: 'Dreptul de refuz al cazării',
        paragraphs: [
          'Ne rezervăm dreptul de a refuza cazarea persoanelor care nu respectă regulile cabanei sau au un comportament necorespunzător.',
        ],
      },
      {
        title: 'Modificarea termenilor',
        paragraphs: [
          'Putem modifica acești termeni în orice moment. Modificările se publică pe site și intră în vigoare din momentul publicării.',
        ],
      },
    ],
    closing:
      'Prin rezervarea telefonică și cazarea la NUVIO confirmați că ați citit, înțeles și acceptat acești termeni și condiții. Vă mulțumim că ne-ați ales și vă așteptăm cu drag!',
  },
  en: {
    intro:
      'Welcome to the NUVIO website. Please read these terms and conditions carefully before using the site. Accessing and using the site means you accept the provisions below in full. If you do not agree with them, please do not use the site.',
    sections: [
      {
        title: 'Operator details',
        paragraphs: [
          'The NUVIO cabin and website are operated by {businessName}, tax ID {businessCui}, with its registered office at {businessAddress}.',
          'For bookings and questions you can reach us at {phone} or {email}.',
        ],
      },
      {
        title: 'Bookings',
        paragraphs: [
          'Bookings are made by phone only, at {phone}. Online booking is not available at the moment.',
          'To confirm a booking we need accurate and valid contact details.',
          'To secure your dates we may ask for an advance payment, agreed when the booking is confirmed by phone. Until the advance is paid, the booking is not considered firm.',
        ],
      },
      {
        title: 'Check-in and check-out',
        paragraphs: [
          'Check-in starts at {checkIn} on the day of arrival.',
          'Check-out is by {checkOut} on the day of departure.',
          'A late check-out may carry an extra fee, depending on availability and with prior approval from the host.',
        ],
      },
      {
        title: 'Rates, payment and cancellations',
        paragraphs: [
          'Rates shown on the site are in RON and include applicable taxes.',
          'Payment methods are agreed during the phone booking.',
          'Cancellations and no-shows are subject to the Cancellation policy available on the site.',
        ],
      },
      {
        title: 'Liability and safety',
        paragraphs: [
          '{businessName} is not responsible for the loss, theft or damage of the personal belongings of guests.',
          'Guests are asked to follow the safety rules displayed in the cabin and to use the facilities provided with care.',
        ],
      },
      {
        title: 'Privacy',
        paragraphs: [
          'Personal data you give us is used only for bookings, communication and improving our services.',
          'We store it securely and do not pass it on to third parties without your consent, except where the law requires it.',
        ],
      },
      {
        title: 'Right to refuse accommodation',
        paragraphs: [
          'We reserve the right to refuse accommodation to anyone who does not follow the cabin rules or behaves inappropriately.',
        ],
      },
      {
        title: 'Changes to these terms',
        paragraphs: [
          'We may change these terms at any time. Changes are published on the site and take effect from the moment they are published.',
        ],
      },
    ],
    closing:
      'By booking by phone and staying at NUVIO you confirm that you have read, understood and accepted these terms and conditions. Thank you for choosing us, we look forward to welcoming you!',
  },
  hu: {
    intro:
      'Üdvözöljük a NUVIO weboldalon. Kérjük, figyelmesen olvassa el ezeket a feltételeket, mielőtt használja az oldalt. Az oldal elérése és használata azt jelenti, hogy az alábbi rendelkezéseket teljes egészében elfogadja. Ha nem ért egyet velük, kérjük, ne használja az oldalt.',
    sections: [
      {
        title: 'Az üzemeltető adatai',
        paragraphs: [
          'A NUVIO faházat és weboldalt a(z) {businessName} üzemelteti, adószám: {businessCui}, székhely: {businessAddress}.',
          'Foglalással és kérdéseivel a {phone} telefonszámon vagy a {email} címen kereshet minket.',
        ],
      },
      {
        title: 'Foglalások',
        paragraphs: [
          'Foglalni kizárólag telefonon lehet: {phone}. Online foglalás jelenleg nem érhető el.',
          'A foglalás megerősítéséhez pontos és érvényes elérhetőségekre van szükségünk.',
          'Az időpont biztosítására előleget kérhetünk, amelyet a telefonos megerősítéskor beszélünk meg. Az előleg befizetéséig a foglalás nem tekintendő véglegesnek.',
        ],
      },
      {
        title: 'Bejelentkezés és kijelentkezés',
        paragraphs: [
          'A bejelentkezés az érkezés napján {checkIn}-tól lehetséges.',
          'A kijelentkezés a távozás napján {checkOut}-ig történik.',
          'Késői kijelentkezés esetén a rendelkezésre állástól függően, a házigazda előzetes jóváhagyásával pótdíj számítható fel.',
        ],
      },
      {
        title: 'Árak, fizetés és lemondás',
        paragraphs: [
          'Az oldalon feltüntetett árak RON-ban értendők, és tartalmazzák az alkalmazandó adókat.',
          'A fizetési módokat a telefonos foglalás során egyeztetjük.',
          'A lemondásra és a meg nem jelenésre a weboldalon elérhető Lemondási szabályzat vonatkozik.',
        ],
      },
      {
        title: 'Felelősség és biztonság',
        paragraphs: [
          '{businessName} nem vállal felelősséget a vendégek személyes tárgyainak elvesztéséért, lopásáért vagy megrongálódásáért.',
          'Kérjük, a vendégek tartsák be a faházban kifüggesztett biztonsági szabályokat, és a rendelkezésre bocsátott felszereléseket óvatosan használják.',
        ],
      },
      {
        title: 'Adatvédelem',
        paragraphs: [
          'Az Ön által megadott személyes adatokat kizárólag foglalásra, kommunikációra és szolgáltatásaink fejlesztésére használjuk.',
          'Biztonságosan tároljuk, és a törvény által előírt eseteken kívül az Ön hozzájárulása nélkül nem adjuk tovább harmadik félnek.',
        ],
      },
      {
        title: 'A szálláshoz való jog fenntartása',
        paragraphs: [
          'Fenntartjuk a jogot, hogy megtagadjuk a szállást azoktól, akik nem tartják be a faház szabályait, vagy nem megfelelően viselkednek.',
        ],
      },
      {
        title: 'A feltételek módosítása',
        paragraphs: [
          'Ezeket a feltételeket bármikor módosíthatjuk. A módosítások az oldalon kerülnek közzétételre, és a közzétételkor lépnek hatályba.',
        ],
      },
    ],
    closing:
      'A telefonos foglalással és a NUVIO-ban való szálláshasználattal megerősíti, hogy elolvasta, megértette és elfogadta ezeket a feltételeket. Köszönjük, hogy minket választott, és szeretettel várjuk!',
  },
};

// Replaces {name} placeholders with string values from the given object; unknown ones stay as they are.
export function fillPlaceholders(text: string, values: Record<string, unknown>): string {
  return text.replace(/\{(\w+)\}/g, (match, key: string) => {
    const value = values[key];
    return typeof value === 'string' ? value : match;
  });
}
