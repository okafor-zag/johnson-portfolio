# Johnson Okafor — Portfolio

Product design, UI/UX and frontend work. Built with React and React Router,
deployed on Vercel.

**Live:** https://johnson-portfolio-olive.vercel.app

## Stack

- React 19 (Create React App)
- React Router (HashRouter — no server rewrites needed)
- Plain CSS with custom properties, no framework

## Structure

```
public/
  img/            optimised screenshots and template thumbnails
  Johnson-Okafor-CV.pdf
src/
  data.js         all site content in one place — edit here, not in components
  styles.css      design tokens and every component style
  App.jsx         routing, nav, lightbox provider
  components/     Nav, Footer, Shot, Marquee, Lightbox, CopyButton
  pages/          Home, Work, Designs, Sites, Writing, About, Contact
```

## Running locally

```bash
npm install
npm start
```

## Editing content

Almost everything — stats, achievements, jobs, templates, articles, sites —
lives in `src/data.js`. Case study copy sits in `src/pages/Work.jsx`.
