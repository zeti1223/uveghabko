# uveghabko.hu – Vue 3 + Vite weboldal

## Első lépések
1. Másolja a 14 fotót a `src/assets/photos/` mappába (jpg / png / webp).
   A sorrendet a fájlnév adja: `01.jpg`, `02.jpg`, … `14.jpg`. Az első kép nagyban jelenik meg.
   Tipp: a kép hosszabbik oldala 1600–2000 px legyen, hogy gyors maradjon az oldal.
2. Írja át az e-mail címet és a telefonszámot: `src/content.js` (`site` rész).
3. Fejlesztés: `npm install`, majd `npm run dev`
4. Éles verzió: `npm run build` – a kész oldal a `dist/` mappában lesz, ezt kell a tárhelyre tölteni.

## Szerkezet
- `src/content.js` – táblázat, előnyök, következmények szövege, kapcsolati adatok
- `src/components/` – az oldal szakaszai (hero, összehasonlítás, rétegvastagság, galéria, kapcsolat)
- `src/styles.css` – színek és betűk (CSS változók)

A kapcsolati űrlap az e-mail programot nyitja meg (nincs szerveroldali rész).
Ha valódi űrlapküldést szeretne (Formspree, saját backend), a `ContactSection.vue` `send()` függvényét kell lecserélni.
