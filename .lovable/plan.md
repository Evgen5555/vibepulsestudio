
# Premium Portfolio Landing — Cyber-Neon × Apple Minimal

A single-page Russian landing for a top-tier freelancer/marketer. Pure black canvas, electric violet + cyan neon accents, massive Inter typography, glassmorphism nav, Framer Motion throughout, mobile-first.

## Design System (src/styles.css)

- Background: near-pure black `oklch(0.05 0 0)`
- Foreground: soft white `oklch(0.98 0 0)`
- Primary (neon violet): `oklch(0.62 0.28 300)`
- Secondary (neon cyan): `oklch(0.82 0.18 200)`
- Accent pink (for step 4): `oklch(0.7 0.25 350)`
- Muted surfaces: `oklch(0.12 0.01 280)` with subtle violet tint
- Reusable tokens: `--glow-violet`, `--glow-cyan`, `--gradient-cv` (cyan→violet), `--shadow-neon-violet`, `--shadow-neon-cyan`, `--glass-bg` (rgba black + backdrop blur)
- Font: Inter (already system-available; load via Google Fonts link in `__root.tsx` head)
- All component colors use semantic tokens — no raw hex in JSX

## Dependencies

- `bun add framer-motion`
- `lucide-react` (already available)

## File Structure

```text
src/
  routes/
    index.tsx                 # assembles sections + SEO head
  components/
    landing/
      Nav.tsx                 # glassmorphism header
      Hero.tsx                # portrait placeholder + huge type + 2 CTAs
      Marquee.tsx             # infinite neon badge ticker
      Services.tsx            # 3-col bento with hover neon border
      Portfolio.tsx           # image cards, zoom-on-hover, result chip
      Process.tsx             # 4-step horizontal timeline w/ animated line
      CtaFooter.tsx           # massive Telegram CTA
  styles.css                  # extended tokens, gradients, glow shadows
```

## Section Specs

**Nav** — Fixed top, `backdrop-blur-xl`, translucent black, thin violet bottom border. Links: Услуги, Портфолио, Обо мне, Процесс. Right: violet-glow button "Задать вопрос". Mobile: hamburger → sheet.

**Hero** — 2-col grid (stacks on mobile). Left: 5:6 portrait placeholder with violet/cyan radial gradient frame + soft glow. Right: H1 "Где идеи оживают через маркетинг и AI" (text-6xl→8xl, tracking-tight, "AI" gets cyan→violet gradient), subtitle in muted, two buttons: primary violet glowing fill + outline cyan.

**Marquee** — Full-width infinite horizontal scroll (CSS `@keyframes` translateX -50%, duplicated track). Pill badges alternate violet/cyan glow borders: AI-маркетинг, Вайб-кодинг, Автоворонки, UX/UI дизайн, Premium сайты. Pauses on hover.

**Services (Bento)** — 3 columns desktop, 1 mobile. Cards: dark glass, 1px border that lights to violet/cyan gradient on hover, slight lift. Icons: Sparkles, Workflow, LineChart, Palette, Rocket (mix 3-5 cards in bento sizing).

**Portfolio** — Grid of large image cards, `overflow-hidden rounded-2xl`, inner `<img>` `scale-100 → 110` on hover (700ms ease). Overlay bottom-left: project name, tag pill, glowing result chip "Конверсия +24%". Use placeholder gradient images (no image generation needed at plan stage; can add later).

**Process — "Как мы работаем"**
- Header: "Как мы **работаем**" with "работаем" using cyan→violet gradient `bg-clip-text`.
- Sub: "Прозрачный процесс — от первой идеи до готового проекта".
- Horizontal track on desktop (4 evenly spaced steps), vertical on mobile.
- Connecting line: absolutely positioned behind circles, gradient cyan→blue→violet→pink. A second overlay line uses Framer Motion `useScroll` / `whileInView` with `scaleX` from 0→1 (origin-left) for the fill animation.
- Steps: dark transparent circle (`size-24`, `border` neon, `backdrop-blur`). Step 3 wrapped in extra `shadow-[0_0_60px_…violet]` halo.
- Icons: `Lightbulb`, `PenTool`, `Bot`, `Target` from lucide.
- Numbered badge top-right of each circle, color-coded (cyan, blue, violet, pink).
- Stagger entrance: `whileInView` with `transition={{ delay: i * 0.15 }}`, line animates over ~1.2s.
- Hover: `scale-105` + increased glow via shadow transition.

**CTA Footer** — Centered, generous vertical padding. Eyebrow text + massive headline. Button: full-width on mobile / auto on desktop, violet→cyan gradient fill with strong neon shadow, text "Запустить ваш проект в Telegram", `Send` icon. Below: minimal copyright row.

## Animations (Framer Motion)

- Section reveals: `initial={{opacity:0, y:24}} whileInView={{opacity:1, y:0}} viewport={{once:true, margin:"-80px"}}`
- Hero text: staggered children
- Marquee: pure CSS keyframes (perf)
- Portfolio cards: hover scale via Tailwind transitions
- Process line fill: motion `scaleX` driven by `useInView`
- Buttons: `whileHover={{scale:1.03}} whileTap={{scale:0.97}}`

## SEO (route head)

- title: "AI-маркетинг и premium-сайты | [Имя]" (<60 chars)
- meta description ~150 chars in Russian
- og:title, og:description, og:type=website
- Single H1 in Hero
- Semantic `<header> <main> <section> <footer>`

## Responsiveness

Mobile-first: stacked hero, single-column bento, vertical process timeline (line becomes vertical), nav collapses to sheet, type scales down with `clamp`-like Tailwind responsive sizes.

## Out of Scope (this plan)

- No real portrait/portfolio photography — gradient placeholders with optional follow-up to generate images
- No backend / form submissions — CTAs are anchor links (Telegram URL placeholder)
- No CMS or routing beyond `/`
