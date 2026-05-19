# Developer Portfolio

A clean, dark-mode front-end developer portfolio — pure HTML, CSS, and JavaScript. No build step, no dependencies, ready to host anywhere.

## Deploy to GitHub Pages in 3 steps

1. **Create a GitHub repo** — go to [github.com/new](https://github.com/new), name it `your-username.github.io` (for a personal site) or any name (for a project site).

2. **Upload these files** — drag and drop all files from this folder into the repo, or use the GitHub CLI:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

3. **Enable GitHub Pages** — go to your repo → **Settings** → **Pages** → under *Source* select **Deploy from a branch** → pick **main** branch → **/ (root)** → click **Save**.

Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO` within a minute or two.

---

## Customise

| What | Where |
|---|---|
| Your name & initials | `index.html` — search `jd` |
| Your email | `index.html` — search `hello@example.com` |
| GitHub / LinkedIn URLs | `index.html` — search `github.com` / `linkedin.com` |
| CV download link | `index.html` — `href="#"` on the Download CV button |
| Portrait photo | Replace `portrait.png` with your own photo (keep the same filename) |
| Projects | `index.html` — `#projects` section |
| Color accent | `style.css` — `--accent` variable |

## Files

```
portfolio/
├── index.html      ← All content & markup
├── style.css       ← All styling (dark theme, animations, responsive)
├── script.js       ← Mobile menu, scroll animations, active nav
└── portrait.png    ← Developer portrait (replace with your photo)
```
