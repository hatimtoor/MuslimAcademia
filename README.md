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
| `/contact` | WhatsApp/email display + n8n enrollment form |

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

Create a `.env.local` file in the project root:

```env
# Replace with your actual n8n webhook endpoint
NEXT_PUBLIC_N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook/muslim-academia-enroll
```

> The enrollment form on the Contact page posts JSON to this URL. The webhook URL constant is also defined at the top of `components/EnrollmentForm.tsx` for easy reference.

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
│   └── contact/page.tsx    # Contact & Enrollment page
├── components/
│   ├── Navbar.tsx          # Sticky responsive navbar
│   ├── Footer.tsx          # Site footer
│   └── EnrollmentForm.tsx  # n8n enrollment form (client component)
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── .env.local              # Not committed — add your webhook URL here
```

---

## Deploying to Vercel

1. Push this repository to GitHub (already done).
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Add the environment variable `NEXT_PUBLIC_N8N_WEBHOOK_URL` in **Project Settings → Environment Variables**.
4. Click **Deploy** — no additional configuration required.

---

## Customisation Notes

- **Placeholder content** — all names, addresses, phone numbers, and bios are placeholders. Replace them directly in the relevant page files under `app/`.
- **Color palette** — deep green (`#1B5E20`) and gold (`#F9A825`) are defined as Tailwind custom colors in `tailwind.config.ts`.
- **n8n webhook** — swap the URL in `.env.local` (and in Vercel environment variables) when your n8n instance is ready.
- **Faculty photos** — the current avatar uses initials. Replace the initials block in `app/faculty/page.tsx` with `next/image` components when real photos are available.

---

## Contact

**Muslim Academia**  
123 Education Street, Model Town, Lahore, Punjab, Pakistan  
WhatsApp: +92 300 0000000  
Email: info@muslimacademia.com
