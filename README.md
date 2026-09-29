# Tenzin Yangdon — Portfolio

Next.js (App Router) + TypeScript + Tailwind CSS. Deploys to Vercel with no extra configuration.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Where to edit things

| What | File |
| --- | --- |
| Intro text, name, Resume/LinkedIn/Email links, case study text & image paths | `src/content/site.ts` |
| Colours and font variables | `src/app/globals.css` (`@theme` block) |
| Which Google Fonts are loaded | `src/app/layout.tsx` |
| Resume PDF | `public/resume.pdf` |
| Images | `public/images/…` (reference them in `site.ts` as `/images/…`) |

## Structure

```
src/
  content/site.ts            all editable content
  app/
    globals.css              theme colours, fonts, marquee animation
    layout.tsx               loads Inter + Beth Ellen
    page.tsx                 home page
    work/[slug]/page.tsx     shared case study template
  components/
    Pill.tsx                 rounded pill button
    TopBar.tsx               name + Resume / LinkedIn / Email
    IntroToggles.tsx         "Who I am / Interested in / Working towards"
    WorkLoop.tsx             infinite scrolling Selected Work row
public/
  resume.pdf
  images/castr/, images/oakville/
```

To add a case study, add another entry to `caseStudies` in `src/content/site.ts`; its page is created at `/work/<slug>` automatically.
