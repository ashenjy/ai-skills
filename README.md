# Personal site — GitHub Pages

Minimal, fast static site to showcase skills, projects, and services.

## Quick start

1. Push this folder to a GitHub repository.
2. In GitHub → Settings → Pages:
   - Source: Deploy from a branch
   - Branch: `main` → `/ (root)` → Save
3. Your site will be available at `https://YOUR_USERNAME.github.io/`.

## Update your links

- Replace `YOUR_USERNAME` in `robots.txt` and `sitemap.xml`.
- Update social links in `index.html` (LinkedIn/GitHub anchors near the header/footer).

## Custom domain (optional)

1. Add your domain in GitHub → Settings → Pages → Custom domain
2. Create DNS A/AAAA records to GitHub Pages IPs (see GitHub Docs)
3. Add a `CNAME` file with your domain at the repo root

## Content structure

- `index.html` — single-page site with sections: About, Focus, Skills, Experience, Projects, Playbooks, Services, Recommendations, Contact
- `assets/css/styles.css` — global styles, light/dark support
- `assets/js/main.js` — theme toggle + year
- `assets/images/favicon.svg` — favicon
- `404.html` — not-found page
- `robots.txt`, `sitemap.xml` — SEO helpers

## Notes

- Open Graph image references EasyAI cover art hosted on easyai.au
- Tweak copy to fit your voice. Keep it concise and outcome-focused.

