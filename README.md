# Trade Of Sweden - Webbprototyper

Tre professionella webbprototyper för Trade Of Sweden, en gräv- och markarbetsfirma, byggda med Next.js och Tailwind CSS.

## Översikt

Detta projekt innehåller tre olika designkoncept för en firma som erbjuder:
- Gräv & Markarbete
- Avlopp & Infiltration
- Dränering runt hus
- Grävning av pooler
- Husgrund och väggarbete
- Altan och trädäck

## De Tre Prototyperna

### Prototyp 1 - Modern Minimalistisk Design
**Stil:** Ren, elegant och fokuserad på innehåll
- Minimalistisk navigation med fast header
- Stora, luftiga sektioner med mycket whitespace
- Subtila övergångar och hover-effekter
- Blå/cyan färgpalett
- Perfekt för kunder som vill ha en modern, professionell look

**URL:** `/prototyp-1`

### Prototyp 2 - Klassisk Professionell Design
**Stil:** Traditionell, pålitlig och strukturerad
- Top bar med kontaktinformation
- Tydlig hierarki och strukturerad layout
- Orange/slate färgpalett
- Statistiksektion som visar trovärdighet
- Omfattande tjänstebeskrivningar
- Idealisk för en seriös, etablerad företagsimage

**URL:** `/prototyp-2`

### Prototyp 3 - Livfull Bildrik Design
**Stil:** Energisk, engagerande och dynamisk
- Färgstarka gradienter (orange/röd)
- Interaktiva element och animationer
- Stora, iögonfallande call-to-actions
- Emoji-integration för värmere känsla
- Testimonials och sociala bevis
- Perfekt för att tilltala privatkunder på ett vänskapligt sätt

**URL:** `/prototyp-3`

## Teknisk Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Språk:** TypeScript
- **Responsivitet:** Mobil-först design, fungerar på alla skärmstorlekar

## Tillgänglighetsfunktioner

Alla tre prototyperna inkluderar:
- ✅ Semantisk HTML (nav, section, article, footer)
- ✅ ARIA-labels och aria-attributes
- ✅ Keyboard navigation support
- ✅ Focus-visible states
- ✅ "Skip to main content" länkar
- ✅ Alt-text placeholders för bilder
- ✅ Tillgängliga formulär med required-attribut
- ✅ God kontrastkvot för text
- ✅ Responsiv design för alla enheter

## Komma Igång

### Installation

1. Installera dependencies:
\`\`\`bash
npm install
\`\`\`

### Utveckling

2. Starta utvecklingsservern:
\`\`\`bash
npm run dev
\`\`\`

3. Öppna [http://localhost:3000](http://localhost:3000) i din webbläsare

### Produktion

Bygg för produktion:
\`\`\`bash
npm run build
npm start
\`\`\`

## Projektstruktur

\`\`\`
tradeofsweden/
├── app/
│   ├── globals.css          # Global styling och Tailwind imports
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Huvudsida med prototypöversikt
│   ├── prototyp-1/
│   │   └── page.tsx         # Modern minimalistisk design
│   ├── prototyp-2/
│   │   └── page.tsx         # Klassisk professionell design
│   └── prototyp-3/
│       └── page.tsx         # Livfull bildrik design
├── public/
│   └── images/              # Lägg dina bilder här
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
\`\`\`

## Lägga Till Bilder

För att lägga till riktiga bilder:

1. Placera dina bilder i `public/images/` mappen
2. Använd Next.js Image-komponenten:

\`\`\`tsx
import Image from 'next/image'

<Image
  src="/images/din-bild.jpg"
  alt="Beskrivning av bilden"
  width={800}
  height={600}
  className="..."
/>
\`\`\`

## Anpassning

### Färger
Ändra färgteman i `tailwind.config.js` eller direkt i komponenterna.

### Innehåll
Alla texter, tjänster och kontaktinformation finns i respektive prototyp-fil och kan enkelt anpassas.

### Layout
Varje prototyp är självständig och kan modifieras oberoende av de andra.

## Responsivitet

Alla prototyper är byggda med mobil-först approach och fungerar perfekt på:
- 📱 Mobiler (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Stora skärmar (1280px+)

## Nästa Steg

1. ✅ Välj vilken prototyp som passar bäst
2. ✅ Lägg till riktiga bilder från företaget
3. ✅ Uppdatera kontaktinformation
4. ✅ Anpassa färger och typografi efter företagets profil
5. ✅ Lägg till backend-funktionalitet för kontaktformulär
6. ✅ Implementera bildgalleri med riktiga projekt
7. ✅ Lägg till SEO-optimering
8. ✅ Koppla upp till CMS om önskat

## Support och Utveckling

För frågor eller ytterligare anpassningar, kontakta utvecklaren.

## Licens

Detta projekt är skapat för Trade Of Sweden.

---

**Skapad med Next.js och Tailwind CSS**
