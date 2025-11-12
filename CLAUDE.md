# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Trade Of Sweden is a Next.js 14 prototype showcase with three independent website designs for an excavation/construction company. Each prototype demonstrates a different visual style and approach while sharing common interactive components.

## Development Commands

```bash
npm install              # Install all dependencies
npm run dev              # Start dev server (default: localhost:3000)
npm run dev -- -p 3001   # Start dev server on custom port
npm run build            # Production build
npm start                # Start production server
npm run lint             # Run ESLint
```

## Architecture

### Three Independent Prototypes

Each prototype is a **completely separate page** with zero code sharing between them:

- **`app/prototyp-1/page.tsx`** - Modern Minimalist (blue/cyan, clean design)
- **`app/prototyp-2/page.tsx`** - Classic Professional (orange/slate, traditional business)
- **`app/prototyp-3/page.tsx`** - Vibrant Image-Rich (orange/red gradients, dynamic)

All three share the same semantic HTML structure but differ in:
- Color schemes and visual styling
- Section layouts and content density
- Interactive component usage
- Number of project showcase items

### Shared Component System

Located in `components/` directory, these are MUI-based interactive elements:

- **`ThemeRegistry.tsx`** - MUI theme provider wrapper (must wrap app)
- **`AnimatedServiceCard.tsx`** - MUI Card with Zoom animation + hover effects
- **`QuickContactFAB.tsx`** - Floating SpeedDial with phone/email/form actions
- **`FAQAccordion.tsx`** - 5 pre-configured FAQs with expand animations
- **`QuoteDialog.tsx`** - Modal form with Slide transition
- **`StatsCounter.tsx`** - IntersectionObserver animated counter

### Hybrid Styling Approach

**Tailwind CSS** (utility-first):
- Layout: grid, flex, spacing (p-*, m-*, gap-*)
- Responsive: breakpoints (md:, lg:)
- Visual: colors, shadows, borders, transitions
- Custom extended primary color palette (50-900 shades)

**Material-UI** (component-based):
- Interactive widgets: Card, Accordion, Dialog, SpeedDial
- Animations: Zoom, Fade, Slide transitions
- Forms: TextField, MenuItem, Button
- Feedback: Snackbar, Alert
- Theme: `app/theme.ts` defines primary (cyan) and secondary (orange)

**Integration**: MUI sx prop for runtime styling, Tailwind className for utility styles.

### State Management

All state is **local component state** using React hooks:
- No global state management library
- Dialog/modal visibility: `useState(false)`
- Form data: `useState({name, phone, email, service, message})`
- Accordion expansion: `useState<string | false>(false)`
- Mobile menu: `useState(false)`

### Image Handling

- **Next.js Image component** used throughout for optimization
- Images stored in `public/images/`
- Current images:
  - `IMG_4804.jpeg` - House with deck and pool (hero backgrounds)
  - `IMG_4803.jpeg` - Fence and groundwork
  - `IMG_0651.jpeg` - Deck construction in progress (team visible)
  - `IMG_1139.jpeg` - Pool excavation with liner
  - `IMG_1158.jpeg` - Excavator working (infiltration/drainage)

### Hero Section Pattern

All prototypes use the same hero pattern:
```tsx
<section className="relative ... min-h-[600-700px] flex items-center">
  <div className="absolute inset-0 z-0">
    <Image src="/images/IMG_4804.jpeg" fill priority />
    <div className="absolute inset-0 bg-gradient-to-r from-[overlay]"></div>
  </div>
  <div className="relative z-10 max-w-7xl mx-auto">
    {/* Content with white text */}
  </div>
</section>
```

## Key Configuration

- **`app/theme.ts`** - MUI theme (primary: #0ea5e9, secondary: #f97316)
- **`app/globals.css`** - Tailwind imports + accessibility focus styles
- **`tailwind.config.js`** - Extended primary color palette, content paths
- **`next.config.js`** - React Strict Mode enabled

## Accessibility Implementation

- Semantic HTML: `<nav>`, `<section>`, `<article>`, `<footer>`
- ARIA attributes: `aria-expanded`, `aria-required`, `aria-label`
- Skip-to-content link: `.skip-link` class with keyboard focus reveal
- Focus styles: 2px cyan outline with offset
- Form accessibility: `required` attributes, proper labels
- Image alt text: descriptive text for all images

## Form Handling (Mock Implementation)

All contact forms are **mock implementations**:
- No backend integration
- No actual email sending
- Form submission shows success Snackbar
- Dialog closes after 1.5s timeout
- No data persistence

When implementing backend:
1. Add API route in `app/api/contact/route.ts`
2. Update QuoteDialog handleSubmit to POST to API
3. Implement email service (SendGrid, Resend, etc.)
4. Add proper form validation (Zod, Yup)

## TypeScript Patterns

- **'use client'** directive on all pages (client-side interactivity)
- Interface definitions for component props
- Strict type checking enabled
- Path alias: `@/*` maps to root directory

## Testing Prototypes

1. Start dev server: `npm run dev -- -p 3001`
2. Navigate to `http://localhost:3001`
3. View overview page with 3 prototype cards
4. Click each prototype to test independently

## Common Modifications

**Adding a new service:**
1. Add to `services` array in prototype page(s)
2. Include: `title`, `description`, `icon` (emoji)
3. Component will auto-render in grid

**Changing colors:**
- Tailwind: Edit `tailwind.config.js` → `theme.extend.colors`
- MUI: Edit `app/theme.ts` → `palette.primary/secondary`

**Adding FAQ:**
- Edit `components/FAQAccordion.tsx` → `faqs` array
- Include: `question`, `answer`

**Swapping images:**
1. Place new image in `public/images/`
2. Update Image `src` prop in prototype
3. Update `alt` text for accessibility

## Known Limitations

- Forms don't submit (no backend)
- No email functionality
- No data persistence
- Static content (no CMS)
- Client-side only (no SSR for prototypes)

These are intentional for prototype/demo purposes.
