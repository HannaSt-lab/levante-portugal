Build a luxury Portugal tour operator website called LEVANTE. Single HTML file with embedded CSS and JS. No frameworks, no Tailwind — pure semantic HTML5 + custom CSS.

---

## Brand

**Name:** LEVANTE
**Tagline:** Off-Script Portugal.
**Voice:** Assured, insider, sensory. No exclamation marks. No "breathtaking views" or "hidden gems." Specific nouns. Short + short + longer sentence rhythm.

---

## Color Palette (use these exact values — no substitutions)

```
--black: #0D0D0D;
--cream: #F5EFE0;
--gold: #C9A96E;
--terracotta: #C47A5A;
--atlantic: #2C4A6E;
--cream-muted: rgba(245, 239, 224, 0.6);
```

## Typography (load from Google Fonts)

- **Cormorant Garamond** — display headings, italic
- **Playfair Display** — sub-headings
- **Inter** — body text, weight 300
- **Cormorant Garamond** small caps — labels and badges

---

## Design Style

Sofitel "Live The French Way" editorial aesthetic. Dark, cinematic, fashion-forward. Not a generic travel website.

- Full-viewport sections with radial gradient depth + SVG grain texture overlay
- Gold used sparingly — as lines, small accents, one accent per section
- Cormorant italic at large sizes (100px–140px) for the main heading — this is the signature element
- Sections separated by thin gold ruled lines (1px, 30% opacity)
- All animations: `transform` and `opacity` only — no `transition-all`
- IntersectionObserver for scroll-triggered reveals (fade up + slight translateY)
- Every clickable element: hover + focus-visible + active states

---

## Page Sections

### 1. Hero — full viewport
- Background: `#0D0D0D` with radial gradient (slightly warmer center `#1a1209`) + SVG grain noise overlay at 4% opacity
- Top left: wordmark `LEVANTE` in Cormorant Garamond italic, letter-spacing: -0.02em, font-size: clamp(72px, 12vw, 140px), color: `#F5EFE0`
- Below wordmark: `Off-Script Portugal.` in Cormorant Garamond small caps, letter-spacing: 0.25em, font-size: 13px, color: `#C9A96E`
- Bottom left: CTA button — `Build your itinerary →` — cream outline button, no fill, 1px border, hover: fill cream, text black, transition 400ms ease
- Bottom right: one line of editorial copy in Inter Light, color cream-muted, font-size 13px: `Curated tours from someone who lives here.`
- Thin gold horizontal line (1px) at very bottom of hero dividing it from next section

### 2. What LEVANTE Is — editorial intro
- Left column (40%): large section number `01` in Cormorant italic, faded gold at 15% opacity, font-size 180px; below it a thin gold vertical line 60px tall
- Right column (60%): 
  - Label: `THE PHILOSOPHY` in Cormorant small caps, gold, tracked
  - Heading: `Portugal is not a destination. It's a practice.` — Playfair Display, cream, 36px
  - Body: `You didn't come here to follow a map. LEVANTE is for the ones who want to taste it, know it, remember it — then come back for more. Every itinerary starts with a conversation. Nothing is off the shelf.` — Inter Light, cream-muted, 16px, line-height 1.8

### 3. Tours — 4 cards in a grid
- Label: `02 / THE EXPERIENCES` — Cormorant small caps, gold
- Heading: `Choose your Portugal.` — Cormorant italic, cream, 52px
- 4 cards, dark `#111` background, 1px gold border at 20% opacity, subtle hover (border brightens to 60%):
  1. **Coastal & Sailing** — Arrábida · Comporta · Setúbal · private yacht days
  2. **Lisbon, Off-Script** — Alfama · Mouraria · private studios · the restaurants no one writes about
  3. **Wine & Land** — Alentejo · Douro Valley · private quinta tastings · vineyard lunches
  4. **Art & Fashion** — Gallery openings · Gulbenkian · fashion events · Lisbon's creative scene
- Each card: category label (gold small caps) + title (Playfair) + 1 line description (Inter Light, cream-muted) + `Explore →` link in gold

### 4. How It Works — 3 steps
- Label: `03 / THE PROCESS` — Cormorant small caps, gold
- 3 columns connected by thin gold lines:
  1. `Tell us who you are` — not where you want to go
  2. `We build your Portugal` — every day, every table, every moment
  3. `You arrive. We handle the rest.` — from first day to last

### 5. About / The Curator
- Full-width dark section, `#0F0F0F`
- Label: `04 / THE CURATOR` — gold small caps
- Large italic quote in Cormorant: *"I've lived in Lisbon for years. I know which beach is empty in August. I know the winemaker who opens the cellar for the right guest. This is that."*
- Below: `— Hanna, founder` in Inter Light, cream-muted
- CTA: `Read the story →`

### 6. Book / CTA
- Background: very dark warm black `#0a0906`
- Gold ruled line at top
- Heading: `Ready to go off-script?` — Cormorant italic, cream, 64px
- Sub: `Start with a 30-minute conversation. No obligation. No itinerary template.` — Inter Light, cream-muted
- Two buttons side by side:
  - Primary: `Book a call` — solid gold `#C9A96E`, black text, hover: slightly brighter
  - Secondary: `Email us` — cream outline

### 7. Footer
- Minimal: `LEVANTE · Off-Script Portugal.` left | `© 2026` right
- Social icons: Instagram, Pinterest (SVG, cream, 18px)
- All in Inter Light, 12px, cream at 40% opacity
- Top: thin gold ruled line

---

## Technical Requirements

- Google Fonts: `https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400;1,600&family=Playfair+Display:wght@400;500&family=Inter:wght@300;400&display=swap`
- SVG grain: inline `<filter>` with `feTurbulence` + `feColorMatrix`, applied as pseudo-element
- Scroll animations: IntersectionObserver, threshold 0.15, adds `.visible` class, CSS handles `opacity 0→1` + `translateY(24px→0)` over 700ms
- Mobile responsive: single column below 768px, hero text scales with `clamp()`
- No placeholder images — use CSS gradient backgrounds for image areas, styled with the brand palette
