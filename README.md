# Muslim Academia

A professional multi-page academic tutoring website for students in **Grades 5–8**, built with Next.js 14 (App Router), Tailwind CSS, and TypeScript. Designed for Vercel deployment.

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, academy intro, highlights, CTA |
| `/about` | Mission, vision, history, contact details |
| `/curriculum` | Subject overview, grade-level table, assessment process |
| `/faculty` | Teacher profiles with bio, subjects, and experience |
| `/contact` | WhatsApp number, email, address, and enrolment message |

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS v3
- **Language:** TypeScript
- **Fonts:** Playfair Display (headings) · Inter (body) via `next/font/google`
- **Deployment:** Vercel

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## Environment Variables

No environment variables are required for this project.

---

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout (Navbar, Footer, fonts)
│   ├── globals.css         # Tailwind directives + custom design tokens
│   ├── page.tsx            # Home page
│   ├── about/page.tsx      # About page
│   ├── curriculum/page.tsx # Curriculum page
│   ├── faculty/page.tsx    # Faculty page
│   └── contact/page.tsx    # Contact page — WhatsApp, email, address
├── components/
│   ├── Navbar.tsx          # Sticky responsive navbar
│   └── Footer.tsx          # Site footer
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

---

## Deploying to Vercel

1. Push this repository to GitHub (already done).
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Click **Deploy** — no additional configuration required.

---

## Customisation Notes

- **Placeholder content** — all names, addresses, phone numbers, and bios are placeholders. Replace them directly in the relevant page files under `app/`.
- **Color palette** — deep green (`#1B5E20`) and gold (`#F9A825`) are defined as Tailwind custom colors in `tailwind.config.ts`.
- **Faculty photos** — the current avatar uses initials. Replace the initials block in `app/faculty/page.tsx` with `next/image` components when real photos are available.

---

## Contact

**Muslim Academia**  
123 Education Street, Model Town, Lahore, Punjab, Pakistan  
WhatsApp: +92 325 7496934  
Email: Hassan.muhaiyuldin@gmail.com
