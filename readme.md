# A. Sudar Muthu — LinkedIn Portfolio (Static Website)

> A clean, modern single-page portfolio built with HTML, CSS and vanilla JavaScript.

---

## Project summary

This repository contains a responsive personal portfolio / LinkedIn-style landing page showcasing skills, projects, education, and a contact form that opens WhatsApp. It's a static site (no server-side code required) — simply open `index.html` in a browser or deploy with GitHub Pages.

**Main files**
- `index.html` — site structure and content. fileciteturn0file0
- `styles.css` — full styling, responsive rules and animations. fileciteturn0file2
- `script.js` — tab navigation, animations, profile-photo uploader, and WhatsApp contact form behaviour. fileciteturn0file1

---

## Features
- Animated, responsive single-page layout with sections: About, Expertise, Projects, Credentials and Contact.
- Click-to-upload profile photo (stored in `localStorage`) and preview.
- Contact buttons (email, phone, LinkedIn) and a WhatsApp contact form that opens a pre-filled chat.
- Smooth tab navigation and subtle scroll/hover animations.

---

## Quick start — run locally

1. Clone the repo:

```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
```

2. Open locally
- Option A: Open `index.html` directly in your browser (ideal for simple preview).
- Option B (recommended): Use VS Code **Live Server** extension or a simple HTTP server:

```bash
# python 3
python -m http.server 8000
# then open http://localhost:8000
```

---

## Customize for your profile

- Replace the profile image inside the `image/` folder (the page defaults to `image/1.jpg`).
- Edit the name, title, contact details and section text directly in `index.html`. fileciteturn0file0
- Update the WhatsApp destination number in `script.js` (search for the `phoneNumber` variable) to your phone in international format (for India: `91XXXXXXXXXX`). fileciteturn0file1
- Change or add projects, skills, certifications in the Projects / Skills sections — all markup is in `index.html`. fileciteturn0file0

---

## Deploying to GitHub Pages

1. Create the repository on GitHub and push your code:

```bash
git add .
git commit -m "Initial portfolio upload"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

2. On GitHub: go to **Settings → Pages**, set the source to the `main` branch (root) and save. The site will be published at `https://<your-username>.github.io/<your-repo>/`.

---

## Recommended improvements (optional)
- Add `README` screenshots or a short demo GIF to the repo for better presentation.
- Add meta tags for SEO and Open Graph for link previews on LinkedIn.
- Convert to a simple static generator (Jekyll/Eleventy) if you want templating and easier updates.
- Add a `manifest.json` + icons to enable PWA installability.

---

## File structure (example)

```
/ (repo root)
├─ index.html
├─ styles.css
├─ script.js
├─ image/
│  └─ 1.jpg
└─ README.md
```

---

## License

This project is offered under the **MIT License** — feel free to reuse and modify. If you want, I can add a `LICENSE` file for you.

---

## Author
**Muthu Pandian (A. Sudar Muthu)** — final-year B.Tech (IT). Contact: `ggopi9543@gmail.com` (as used in the site) — update this in `index.html` if you prefer a different email. fileciteturn0file0

---

If you want, I can also:
- create a `LICENSE` file (MIT),
- add a short demo GIF or screenshots to the README,
- create a ready-made commit sequence and `git` commands to push it to GitHub,
- or auto-generate a minimal GitHub Actions workflow to deploy to GitHub Pages.

Tell me which of those you want and I’ll add it directly.

