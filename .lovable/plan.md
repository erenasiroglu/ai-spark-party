## Tadado — Premium AI-powered word game website

Build a single-page marketing site using the chosen "Precision kinetic editorial" direction: warm off-white canvas (#FAF9F6), deep ink text (#121212), electric orange primary (#FF3B00), Inter + JetBrains Mono. Composition, density, and structural moves carry over verbatim from the prototype.

### Design tokens (port verbatim into `src/styles.css`)

- `--background` warm off-white, `--foreground` near-black, `--surface` pure white, `--primary` electric orange, `--border` 8% ink.
- Fonts: Inter (400/500/600/800) + JetBrains Mono via Google Fonts in `__root.tsx` head.
- Keyframes: `reveal-up`, `strike-through`, `loading-bar`, `word-cycle`. Utilities `.animate-reveal`, `.animate-strike`.

### Sections (single route: `src/routes/index.tsx`)

1. **Sticky nav** — orange logo mark + TADADO wordmark, anchor links (The Game / AI Engine / Features), "Play Now" pill CTA.
2. **Hero** — pill badge "The Future of Social Play", massive 6xl→8xl headline `Words are the new playground.` with orange "new", supporting paragraph, then the iconic Tadado word card (DOPAMINE + struck-through forbidden words: Brain, Pleasure, Reward) with avatar stack + "+15 PTS" tag. Subtle hover rotate.
3. **AI Engine showcase** (id="engine") — full-width dark slab (`bg-foreground text-background`). Left: heading "Generate any theme in seconds.", a prompt input panel cycling through prompts ("90s Sci-Fi movies", "Office inside jokes", "Y2K pop culture") with looping loading bar, supporting copy. Right: two offset generated mini-cards (Matrix/Alien) with line-through forbidden words.
4. **How it works** — 3 steps in monospace numerals (01 Pick a vibe / 02 AI builds the deck / 03 Play in 60 seconds).
5. **Features bento** (id="features") — 2-col grid: large surface card "Mobile-First Adrenaline" with generated app-UI image, orange card "Viral Social Moments" with stylized chat bubbles. Add a third row: card carousel preview showing 4 sample cards from different AI themes.
6. **Social proof / testimonials strip** — 3 short quotes in monospace meta + sans body.
7. **Final CTA** (id="play") — centered slab "Ready to start the chaos?" with primary "Start a Game" button + secondary "See sample decks".
8. **Footer** — verbatim from prototype.

### Components to create

- `src/components/Nav.tsx`
- `src/components/Footer.tsx`
- `src/components/TadadoCard.tsx` — reusable hero card (props: index, word, forbidden[], points)
- `src/components/PromptCycler.tsx` — cycles AI prompts on interval, uses `word-cycle` animation
- `src/components/HowItWorks.tsx`
- `src/components/FeatureBento.tsx`
- `src/components/Testimonials.tsx`
- `src/components/FinalCta.tsx`

`src/routes/index.tsx` composes Nav + sections + Footer.

### Images (generated via imagegen, saved to `src/assets/`)

- `app-ui.jpg` (1280×640) — premium minimalist mobile UI of a Tadado round in progress, warm off-white surface with orange accent, JetBrains Mono labels.
- `party-moment.jpg` (1280×800) — friends laughing around a table at night, motion-blurred phones, cinematic warm light. Used as background for testimonials strip with overlay.

### Head metadata (`src/routes/index.tsx`)

Title: "Tadado — The AI Word Game for Real-Life Chaos"
Description: "Tadado is the AI-powered social word game that generates infinite decks for your friend group. Fast rounds. No repeats. Pure chaos."
og:title, og:description, og:image (party-moment), twitter:card summary_large_image. Single H1 ("Words are the new playground."), semantic sections.

### Animation behavior

- Hero card: forbidden words strike through staggered on mount.
- Prompt cycler: text fades/slides every ~2.6s; loading bar loops.
- Sections fade-in on scroll using IntersectionObserver helper hook (`useReveal`).
- Bento cards: subtle scale-up on hover, no aggressive motion.

### Out of scope

No backend, no auth, no real "play" flow — pure marketing site. Chosen direction's tokens, composition, and density are locked; refinements stay within that envelope.
