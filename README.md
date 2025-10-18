# EternaCloud - Dynamic Landing Page

A pixel-perfect conversion of the EternaCloud static site to a fully dynamic Next.js 15 application with Sanity CMS. Features advanced GSAP animations, responsive design, and complete content management.

## ✨ Features

- **🎨 Pixel-Perfect Design** - Exact match to original static site
- **🚀 Next.js 15** - Latest React framework with App Router
- **📝 Sanity CMS** - Full content management for all sections
- **💫 GSAP Animations** - Smooth scroll triggers and interactions
- **📱 Fully Responsive** - Mobile, tablet, desktop optimized
- **🎭 Interactive Components** - Hover effects, modal, animated gradients
- **♿ Accessible** - ARIA labels, skip links, focus states
- **🎨 Sass Modules** - Component-scoped styling

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Sass Modules** - Scoped CSS with advanced Sass features
- **Sanity CMS** - Headless content management
- **GSAP 3.12** - Animation library with ScrollTrigger
- **React 18** - Latest React features

## Project Structure

```
eterna-dynamic/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with GSAP scripts
│   ├── page.tsx             # Home page with all sections
│   └── globals.scss         # Global styles, scrollbar, selections
├── components/              # React components
│   ├── AnimationInit/       # GSAP animation initialization
│   ├── Header/              # Navigation with glass morphism
│   ├── SearchModal/         # Animated search overlay
│   ├── Hero/                # Hero with video background
│   ├── Services/            # 4-column service cards
│   ├── Solutions/           # Problems/Solutions with cosmos
│   ├── Process/             # Process functions with wave
│   └── Footer/              # Footer component
├── lib/sanity/              # Sanity utilities
│   ├── client.ts            # Configured Sanity client
│   ├── image.ts             # Image URL builder
│   └── types.ts             # TypeScript types
├── sass/                    # Global Sass
│   ├── _variables.scss      # Colors, fonts, spacing
│   └── _mixins.scss         # Reusable mixins
├── sanity/                  # Sanity Studio
│   ├── schemas/             # Content schemas
│   │   ├── siteSettings.ts  # Hero content
│   │   ├── service.ts       # Service cards
│   │   ├── servicesSection.ts
│   │   ├── solutionsSection.ts
│   │   ├── processSection.ts
│   │   └── ...
│   └── sanity.config.ts     # Sanity configuration
├── public/                  # Static assets
│   ├── images/              # Logos, backgrounds, wave graphics
│   └── videos/              # Hero & cosmos videos
└── static-site/             # Original static site (reference)
```

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Applications

**Start both servers (2 separate terminals):**

```bash
# Terminal 1 - Next.js
npm run dev

# Terminal 2 - Sanity Studio
npm run sanity
```

Applications will be available at:
- **Next.js:** http://localhost:3000
- **Sanity Studio:** http://localhost:3333

### 3. View the Site

The site displays with **fallback content** by default, so you can see the full design immediately!

## 🎯 Implemented Features

### Header / Navigation
✅ Fixed position with animated glass morphism on scroll  
✅ Logo with animated gradient SVG  
✅ Navigation menu with hover underlines  
✅ Search button with modal  
✅ "LET'S TALK" CTA with animated gradient overlay  
✅ GSAP-powered width animation on scroll  

### Hero Section
✅ Full-screen video background  
✅ Gradient text with infinite animation  
✅ Overlay with gradient fade to black  
✅ Centered content with vertical offset  
✅ Responsive typography  

### Services Section
✅ 4-column grid (responsive to 2-col, then 1-col)  
✅ Background image with proper sizing  
✅ Service cards with glass effect  
✅ Stage indicators with progressive fill  
✅ Feature lists with check icons  
✅ Button with animated gradient overlay  
✅ Card hover effects  
✅ GSAP scroll-triggered fade-in animations  

### Solutions Section
✅ 3-column layout (problems | cosmos | solutions)  
✅ Cosmos video with circular mask  
✅ Problem cards (left) with negative icons  
✅ Solution cards (right) with positive icons  
✅ Badge with icon  
✅ Gradient animated subtitle  
✅ GSAP staggered animations from left/right  
✅ Fixed card heights (100px)  

### Process Section
✅ 4 process functions with staggered vertical positions  
✅ Animated rotating gradient circles  
✅ Flowing gradient lines with mask  
✅ Function items aligned to the left of lines  
✅ Wave graphic at bottom  
✅ Intersection Observer scroll animations  
✅ Specific hover effects per function  
✅ Complex positioning with left offsets  

### Global Features
✅ Custom purple scrollbar  
✅ Custom text selection (purple)  
✅ Skip to main content link  
✅ Focus states for accessibility  
✅ All keyframe animations  
✅ Responsive breakpoints  
✅ GSAP ScrollTrigger integration  

## 📝 Content Management

Open Sanity Studio at http://localhost:3333 to edit:

### Site Settings (Hero)
- Hero Tagline
- Hero Headline  
- Hero Description
- Hero Video (optional)

### Services Section
- Title
- Tagline
- Description

### Service Documents (Create 4)
- Stage name (Design, Onboarding, Delivery, Deployment)
- Title
- Features array
- Display order

### Solutions Section
- Badge text
- Title
- Subtitle
- Problems array (5 items)
- Solutions array (5 items)
- Cosmos video (optional)

### Process Section
- Badge text
- Title
- Tagline
- Description
- Functions array (4 objects with name and items)

## 🎨 Design System

### Colors
- **Primary:** `#1a1a1a`
- **Accent:** `#00d4ff`
- **Purple:** `#8B5CF6`
- **Gradients:** Blue → Purple → Orange

### Typography
- **Font:** Inter (Google Fonts)
- **Sizes:** 0.75rem - 4.5rem (responsive)
- **Weights:** 300, 400, 500, 600, 700

### Spacing
- **Unit:** 8px
- **Scale:** xs(8) sm(16) md(24) lg(32) xl(48) 2xl(64) 3xl(80) 4xl(96) 5xl(128)

### Breakpoints
- **Mobile:** < 576px
- **Tablet:** 576px - 992px  
- **Desktop:** > 992px
- **Large:** > 1200px

## 🎭 Animations

### GSAP Animations
- Header width animation on scroll
- Services section fade-in with stagger
- Solutions section slide-in (left/right)
- Process functions Intersection Observer

### CSS Animations
- Gradient text shift (3s infinite)
- Circle border rotation (4s infinite)
- Line gradient flow (3s infinite)
- Button hover gradients
- Card hover transforms

## 🔧 Configuration

### Sanity Project
- **ID:** `x0kdvbds`
- **Name:** EternaCloud
- **Dataset:** production
- **Manage:** https://www.sanity.io/manage/project/x0kdvbds

### Environment Variables
The project is pre-configured with the projectId in code. No `.env.local` setup required for basic functionality.

## 📦 Deployment

### Deploy to Vercel

```bash
vercel
```

### Deploy Sanity Studio

```bash
npm run sanity:deploy
```

## 🐛 Known Warnings

**Sass @import deprecation warnings** - These are just warnings about Sass moving to `@use` syntax in the future. They don't affect functionality and can be migrated later if needed.

## 🔄 Migration from Static Site

This Next.js app is a complete, pixel-perfect conversion including:
- ✅ All HTML structure → React components
- ✅ All SCSS styles → Sass modules
- ✅ All JavaScript → React hooks + GSAP
- ✅ All animations and interactions
- ✅ All responsive breakpoints
- ✅ All accessibility features
- ✅ Content made dynamic via Sanity

Original static site preserved in `static-site/` for reference.

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [GSAP Documentation](https://greensock.com/docs/)
- [Sass Documentation](https://sass-lang.com/documentation)

## 🎯 Project Goals Achieved

✅ Next.js 15 with App Router  
✅ TypeScript throughout  
✅ Sass modules (no Tailwind)  
✅ Sanity CMS with local dev  
✅ Pixel-perfect design match  
✅ All animations working  
✅ Fully responsive  
✅ Accessible  
✅ Production-ready  

## License

MIT
