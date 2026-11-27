# NUVIO – Cabană de munte

Site de prezentare și închiriere pentru cabana NUVIO. Next.js (export static) și Firebase (conținut și fotografii). Rezervările se fac telefonic.

## Dezvoltare

```bash
npm install
cp .env.example .env.local   # opțional: completează cheile Firebase
npm run dev                  # http://localhost:3000
npm run build                # generează site-ul static în out/
```

Fără variabilele Firebase, site-ul folosește conținutul implicit (placeholder) din `lib/content.ts`.

## Conținut (Firebase)

- Document Firestore `site/content` cu câmpurile: `phone`, `address`, `mapQuery` (`lat,lng`), `seasons` (listă de `{ id, label: { ro, en, hu }, weekday, weekend }`).
- Galeria de fotografii: Firebase Storage, folderul `cabin-photos/` (orice număr de fișiere).
- Imaginile de pe pagina principală: Firebase Storage, folderul `site-images/`. Încarcă un fișier numit `hero.jpg` (sau `.png`/`.webp`) pentru imaginea din secțiunea de sus. `intro.jpg` este prima imagine din caruselul de sub introducere, urmată de fotografiile din `cabin-photos/`. Dacă lipsesc, se afișează ilustrațiile implicite. Pentru a schimba o imagine, șterge fișierul vechi și încarcă noul fișier cu același nume (`hero` sau `intro`).
- Textele statice (pagini, facilități, meniu) sunt în `lib/i18n.tsx`.

## Deploy (Firebase Hosting, plan Spark)

```bash
npm run build
firebase deploy --only hosting,firestore:rules,storage
```

`firebase.json` publică folderul `out/`. Regulile de acces permit doar citirea publică.
