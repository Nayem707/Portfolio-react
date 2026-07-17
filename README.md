# Portfolio — React + Tailwind

Same blueprint/schema design as the static HTML version, rebuilt as a
component-based React app with Tailwind CSS.

## Structure

```
src/
  data/content.js       ← all copy & content (edit here to update text)
  components/
    Header.jsx           nav + mobile menu
    Hero.jsx              hero section
    SchemaDiagram.jsx     the ER-diagram SVG signature element
    About.jsx
    Skills.jsx
    Projects.jsx          section wrapper
    CaseStudy.jsx          reusable case-study card
    RichText.jsx           inline <code> segment renderer
    Contact.jsx
    Footer.jsx
    BlueprintFrame.jsx     shared corner-bracket panel wrapper
    SectionHeading.jsx     shared "01 / About" heading pattern
  App.jsx
  main.jsx
  index.css
tailwind.config.js       ← color tokens, fonts, keyframes live here
```

Content is centralized in `src/data/content.js` — update your name, links,
skills, and the project case study there rather than editing JSX directly.
Add a second project by duplicating the `project` object shape and rendering
another `<CaseStudy project={...} />` in `Projects.jsx`.

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL (typically http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

Deploy the `dist/` folder to any static host (Vercel, Netlify, GitHub Pages, S3, etc.).
