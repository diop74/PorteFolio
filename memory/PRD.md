# PRD — Oumar Diop Portfolio

## Original Problem Statement
Modern, dark-themed portfolio for a Software Engineer turned Cybersecurity Engineer ("builds AND secures systems"). Cyberpunk-meets-professional: near-black #0a0e17 base, neon accents, JetBrains Mono headings, matrix grid background, terminal-inspired UI. Sections: Hero (typing roles, terminal widget, CTAs), About (bio, background, philosophy), Skills (BUILD vs SECURE), Projects (4 cards tagged DEV/SEC/DEV+SEC), CTF/Achievements (TryHackMe Djin3, certs, education), "Why Both" differentiator, Contact (form, links, availability badge). Responsive, scroll animations, fast-loading.

## User Choices
- Accent colors: BOTH — green #00ff9d for SEC, cyan #00d9ff for DEV
- Contact form: frontend mock only (success toast, no backend)
- Architecture: static single-page (no FastAPI/MongoDB backend in use)

## Architecture
- React 19 + Tailwind CSS, framer-motion (scroll reveals, hero masked line reveal, parallax), lenis (momentum scrolling), sonner (toasts), lucide-react (icons)
- Components in `/app/frontend/src/components/portfolio/`: Navbar, Hero, Terminal, Marquee, SectionHeader, About, Skills, Projects, Achievements, WhyBoth, Contact, Footer
- Design system: `/app/design_guidelines.json`; global styles in `index.css` (matrix grid, scanlines, glows, marquee keyframes)
- Backend (FastAPI/MongoDB) exists from template but is unused by the site

## User Personas
- Recruiters/hiring managers evaluating dual dev+sec profile
- Potential freelance clients needing security audits or secure development
- Peers/CTF community checking credentials

## Implemented (2026-08-19)
- Kinetic hero: masked line-by-line name reveal, rotating typewriter roles, tagline, dual CTAs, live typing terminal widget (git/nmap/nuclei/docker commands) with parallax
- Slow editorial marquee: BUILD // BREAK // SECURE // OPTIMIZE in outline type
- About: clipped portrait frame, career timeline (ESSTHS → ESP Dakar → Huawei → gov cyber), philosophy quote block
- Skills: BUILD (cyan) vs SECURE (green) pillars, 4 groups, all skills from brief
- Projects: asymmetric bento grid, 4 projects with DEV/SEC/DEV+SEC split badges, tech pills, GitHub placeholder links
- CTF & Credentials: TryHackMe @Djin3 card with challenge tags, certifications (CNSP, HCIA Cloud, Oracle PL/SQL), education timeline
- Why Both: manifesto statement section with dual-accent payoff line
- Contact: mock form with "Transmission received" toast, social link cards, pulsing availability badge
- Sticky glass navbar with numbered links + mobile menu, Lenis smooth scrolling, scroll-reveal animations throughout, responsive (verified 390px), reduced-motion support

## Verified
- All sections screenshot-tested on desktop + mobile; contact form submit → toast confirmed; no console errors blocking

## Backlog
- P0: Replace placeholder social/GitHub URLs with real profile links
- P1: Real contact form delivery (Resend email or DB inbox) if wanted later
- P1: Real portrait photo of Oumar to replace stock image
- P2: Blog/writeups section for CTF walkthroughs
- P2: Downloadable CV/resume button
- P2: Matrix rain canvas variant for hero background
