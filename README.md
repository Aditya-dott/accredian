# Accredian Enterprise - Landing Page Clone

A partial clone of the [Accredian Enterprise](https://enterprise.accredian.com/) website built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS v4**.

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8)

## 🚀 Live Demo

> **Deployed on Vercel:** [Add your Vercel URL here after deployment]

---

## 📋 Features

### Landing Page Sections
- **Navigation Bar** — Sticky navbar with smooth scroll navigation, active section highlighting, and responsive mobile hamburger menu
- **Hero Section** — Bold headline with SVG illustrations, CTA button, and gradient background
- **Track Record (Stats)** — Animated number counters (10K+, 200+, 5K+) that trigger on scroll
- **Proven Partnerships** — Client logo grid (Reliance, HCL, IBM, CRIF, ADP, Bayer)
- **Accredian Edge** — 7-item winding path layout on desktop, card grid on mobile
- **Domain Expertise** — Icon cards for specialized program areas
- **Course Segmentation** — 4 category cards with gradient headers
- **Who Should Join** — Blue gradient section with target audience categories
- **CAT Framework** — Concept → Application → Tools visualization with SVG path
- **How It Works** — 3-step process cards with numbered badges
- **FAQs** — Category sidebar with accordion-style expandable questions
- **Testimonials** — Auto-advancing carousel with company quotes
- **Contact CTA** — Blue gradient banner with Contact Us button
- **Lead Capture Form** — Full enquiry form with validation (Bonus Feature ⭐)
- **Footer** — Social links, company info, contact details, copyright

### Bonus Features
- ⭐ **Lead Capture Form** with name, email, company, phone, team size, and message
- ⭐ **API Route** (`/api/leads`) — Stores form submissions via Next.js API routes
- ⭐ **GET endpoint** (`/api/leads`) — Retrieve all captured leads

### Technical Highlights
- Fully responsive (mobile + tablet + desktop)
- Intersection Observer animations (sections reveal on scroll)
- Smooth scroll navigation with active section tracking
- Reusable component architecture
- SEO optimized with proper meta tags
- TypeScript for type safety
- Clean, well-structured code

---

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd accredian

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

---

## 🧠 Approach Taken

### Architecture
1. **Component-Based Design** — Each section is a self-contained, reusable component
2. **App Router (Next.js 16)** — Using the latest App Router with Server Components where possible, Client Components only where interactivity is needed
3. **Tailwind CSS v4** — Utilizing the new `@theme` directive for custom design tokens
4. **Intersection Observer** — Scroll-triggered animations for a polished user experience
5. **API Routes** — Server-side lead capture with file-based storage

### Design Decisions
- Used SVG illustrations instead of external images for zero-dependency hero visuals
- Implemented scroll-spy navigation to highlight the active section
- Built a custom FAQ accordion without external libraries
- Created animated counter components for the stats section
- Used CSS custom properties via Tailwind's `@theme` for consistent branding

### File Structure
```
src/
├── app/
│   ├── api/leads/route.ts      # Lead capture API endpoint
│   ├── globals.css             # Tailwind v4 design system
│   ├── layout.tsx              # Root layout with SEO metadata
│   └── page.tsx                # Main page (composes all sections)
├── components/
│   ├── Navbar.tsx              # Sticky navigation with mobile menu
│   ├── Hero.tsx                # Hero section with SVG illustrations
│   ├── Stats.tsx               # Animated statistics counters
│   ├── Clients.tsx             # Partner logo grid
│   ├── AccredianEdge.tsx       # 7-point edge visualization
│   ├── DomainExpertise.tsx     # Domain cards grid
│   ├── CourseSegmentation.tsx  # Course category cards
│   ├── WhoShouldJoin.tsx       # Target audience section
│   ├── CATFramework.tsx        # CAT methodology visualization
│   ├── HowItWorks.tsx          # 3-step process section
│   ├── FAQs.tsx                # FAQ accordion with categories
│   ├── Testimonials.tsx        # Testimonial carousel
│   ├── ContactCTA.tsx          # Contact call-to-action banner
│   ├── LeadCaptureForm.tsx     # Lead enquiry form
│   └── Footer.tsx              # Site footer
```

---

## 🤖 AI Usage

### Where AI Helped
- **Antigravity (AI Coding Assistant)** was used extensively throughout the development:
  - **Research**: Browsed the reference website and captured screenshots of all sections
  - **Component Generation**: Generated initial component code for all 15 sections
  - **SVG Illustrations**: Created inline SVG graphics for the hero section and icons
  - **Debugging**: Fixed build errors (e.g., missing `"use client"` directives)
  - **API Route**: Generated the lead capture API with validation logic

### What I Modified/Improved Manually
- Reviewed and verified all component rendering in the browser
- Adjusted spacing, colors, and typography to match the reference design
- Ensured proper section ordering and smooth scroll behavior
- Verified mobile responsiveness across breakpoints
- Tested the lead capture form submission flow
- Added proper SEO metadata and accessibility attributes

---

## 🔮 Improvements With More Time

1. **Pixel-Perfect Design** — More precise matching of fonts, spacing, and exact color values
2. **Real Images** — Replace SVG illustrations with actual professional photography
3. **Database Integration** — Use PostgreSQL/MongoDB instead of file-based lead storage
4. **Email Notifications** — Send confirmation emails on form submission
5. **Dark Mode** — Add a toggle for dark/light theme
6. **Unit Tests** — Add Jest/React Testing Library tests for all components
7. **Performance** — Implement lazy loading for below-fold sections
8. **Accessibility** — Full WCAG 2.1 AA compliance audit
9. **Analytics** — Integrate Google Analytics or Mixpanel
10. **CMS Integration** — Use a headless CMS for FAQ and testimonial content

---

## 📄 License

This project was built as an assignment submission for Accredian.

© 2026 Built by Aditya Patil
