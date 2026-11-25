# taixingbi.github.io

Personal academic homepage. Next.js (static export) deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

## Edit content

All content lives in `content/`:

| File | What |
| --- | --- |
| `content/profile.ts` | name, headline, links, CV PDF / photo paths |
| `content/publications.ts` | papers (BibTeX is generated automatically) |
| `content/news.ts` | news items |
| `content/cv.ts` | experience, education, skills |

The bio text is in `app/page.tsx`. Static files (CV PDF, paper PDFs, photo) go in `public/`.

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # writes the static site to ./out
```
