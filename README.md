# Mariana Andrade — Portfolio (session-09-interaction-designer)

This repository contains a small static portfolio site for Mariana Andrade — founder and Creative Director at Marabunta Creative Agency.

Files in this workspace:

- `index.html` — main portfolio page with sections: About, Selected Work, Services, Contact.
- `css/styles.css` — responsive styles for the site.
- `js/main.js` — small scripts for nav toggle and project modal.

Quick start (view locally):

1. Open `index.html` directly in a browser. From the repository root:

```bash
xdg-open index.html
```

2. Or serve the folder with a simple static server (Python):

```bash
python3 -m http.server 8000 --bind 127.0.0.1
# then open http://127.0.0.1:8000
```

Deployment:

- Enable GitHub Pages for this repo (branch: `main`, folder: `root`) to publish the site.

Next steps / notes:

- Replace placeholder SVG thumbnails with real project images and case studies.
- Add a contact form or link to a booking page if you want inbound leads to be captured.
- Improve accessibility and SEO (aria labels, real alt text, metadata) before production.

If you want, I can:

- Replace the placeholder content with your real project descriptions and images.
- Add a simple contact form wired to Formspree or Netlify Forms.
- Create a deploy pipeline (GitHub Actions) for automatic publish to GitHub Pages.
