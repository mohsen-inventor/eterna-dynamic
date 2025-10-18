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

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router and Server Components
- **React 18** - Latest React features including concurrent rendering
- **TypeScript 5** - Type-safe development with strict type checking
- **Sass 1.77** - Advanced CSS with modules, variables, mixins, and functions
- **GSAP 3.12** - Professional-grade animation library with ScrollTrigger plugin

### CMS & Content
- **Sanity CMS v3** - Headless content management system
- **Next-Sanity 9.12** - Official Sanity integration for Next.js
- **@sanity/image-url** - Optimized image handling and transformations
- **@portabletext/react** - Rich text rendering

### Development Tools
- **ESLint** - Code quality and consistency
- **TypeScript Compiler** - Type checking and inference
- **tsx** - TypeScript execution for scripts
- **dotenv** - Environment variable management

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

### Prerequisites
- **Node.js** 18+ (20+ recommended)
- **npm** or **pnpm**
- **Git** for version control

### 1. Clone & Install

```bash
# Clone the repository
git clone <repository-url>
cd eterna-dynamic

# Install dependencies
npm install
```

### 2. Environment Setup (Optional)

The project works out-of-the-box with fallback data. For CMS functionality, create `.env.local`:

```bash
# .env.local (optional - only needed for CMS seed)
NEXT_PUBLIC_SANITY_PROJECT_ID=x0kdvbds
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_token_here  # Only for seeding
```

### 3. Development

**Option A: Run both servers (recommended)**

```bash
# Terminal 1 - Next.js Development Server
npm run dev

# Terminal 2 - Sanity Studio
npm run sanity
```

**Option B: Run individually**

```bash
# Just the Next.js app
npm run dev

# Just Sanity Studio
npm run sanity
```

Applications will be available at:
- **Next.js App:** http://localhost:3000
- **Sanity Studio:** http://localhost:3333

### 4. Seeding Content (Optional)

To populate Sanity with initial content:

```bash
# Get API token from Sanity Manage (https://www.sanity.io/manage)
# Add token to .env.local as SANITY_API_TOKEN

# Run seed script
npm run sanity:seed
```

**Note:** The site displays with fallback content by default, so you can see the full design immediately without seeding!

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

## 📐 Coding Standards

This project follows strict coding standards to ensure maintainability, scalability, and code quality.

### Architecture Principles

#### 1. **Component Organization**
```
components/
├── _UI/              ← Reusable UI components (underscore prefix)
├── _Layout/          ← Layout components (Header, Footer, etc.)
└── Home/             ← Feature-based page sections
```

- **Underscore prefix** (`_UI`, `_Layout`) indicates design system components
- **Feature folders** (e.g., `Home/`) group related page sections
- Each component gets its own folder with `.tsx` and `.module.scss`
- Use **barrel exports** (`index.ts`) for clean imports

#### 2. **File Naming Conventions**
- **Components:** PascalCase (`Button.tsx`, `Hero.tsx`)
- **Styles:** Component name + `.module.scss` (`Button.module.scss`)
- **Utilities:** camelCase (`client.ts`, `queries.ts`)
- **Types:** camelCase or PascalCase (`types.ts`)

#### 3. **Import Patterns**

**Preferred (Barrel Imports):**
```typescript
import { Header, Hero, Button, Icon } from '@/components';
```

**Module Imports:**
```typescript
import { Button, Icon } from '@/components/_UI';
import { Header } from '@/components/_Layout';
```

**Direct Imports (when needed):**
```typescript
import Button from '@/components/_UI/Button/Button';
```

### React Best Practices

#### 1. **Use Refs Over querySelector**
```typescript
// ❌ Bad
const element = document.querySelector('.navbar');

// ✅ Good
const navbarRef = useRef<HTMLElement>(null);
<nav ref={navbarRef} />
```

#### 2. **Component Encapsulation**
- Each component manages its own state and animations
- No global animation managers
- Self-contained logic and cleanup

#### 3. **Proper Effect Cleanup**
```typescript
useEffect(() => {
  const handleScroll = () => { /* ... */ };
  window.addEventListener('scroll', handleScroll);
  
  return () => {
    window.removeEventListener('scroll', handleScroll);
    // Clean up GSAP ScrollTriggers, intervals, etc.
  };
}, []);
```

#### 4. **Event-Driven Architecture**
For GSAP and async operations:
```typescript
// Non-blocking initialization
useEffect(() => {
  const initAnimation = () => {
    const gsap = window.gsap;
    if (!gsap) return; // Don't block rendering
    // Setup animations...
  };
  
  initAnimation(); // Try immediately
  window.addEventListener('gsapReady', initAnimation); // Or wait for event
  
  return () => {
    window.removeEventListener('gsapReady', initAnimation);
  };
}, []);
```

### TypeScript Standards

#### 1. **Strict Type Safety**
- Enable strict mode in `tsconfig.json`
- Define interfaces for all component props
- Use proper return types for functions
- Avoid `any` types

```typescript
// ✅ Good
interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Button({ variant = 'primary', size = 'md', children, onClick }: ButtonProps) {
  // ...
}
```

#### 2. **Type Imports**
```typescript
import type { SanityDocument } from 'next-sanity';
import type { ButtonProps } from './types';
```

### Sass/CSS Standards

#### 1. **Use Sass Modules**
```scss
// Button.module.scss
@import '@/sass/index';

.button {
  padding: spacing('sm');
  background: color('primary');
  
  &:hover {
    @include hover-lift;
  }
}
```

#### 2. **Centralized Design Tokens**
```
sass/
├── _variables.scss  ← Colors, spacing, typography
├── _mixins.scss     ← Reusable style patterns
├── _functions.scss  ← Helper functions (spacing(), color())
└── _config.scss     ← Breakpoints, z-index
```

#### 3. **Responsive Design**
```scss
.component {
  // Mobile first
  font-size: 1rem;
  
  @include tablet {
    font-size: 1.25rem;
  }
  
  @include desktop {
    font-size: 1.5rem;
  }
}
```

### Animation Standards

#### 1. **GSAP Animations**
- Register plugins: `gsap.registerPlugin(ScrollTrigger)`
- Clean up ScrollTriggers in useEffect return
- Use refs for element targeting
- Non-blocking initialization

#### 2. **CSS Animations**
- Use for simple, repeating animations
- Define keyframes in component's `.module.scss`
- Prefer `transform` and `opacity` for performance

```scss
@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.gradient-text {
  animation: gradient-shift 3s ease infinite;
}
```

### Performance Guidelines

#### 1. **Code Splitting**
- Use Next.js dynamic imports for heavy components
- Lazy load below-the-fold sections

```typescript
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('@/components/HeavyComponent'), {
  loading: () => <Loading />,
});
```

#### 2. **Image Optimization**
- Use Next.js `<Image>` component
- Provide width/height to prevent layout shift
- Use modern formats (WebP, AVIF)

#### 3. **Minimize Client-Side JavaScript**
- Prefer Server Components where possible
- Mark client components with `'use client'`
- Only add client-side code when necessary

### Git Workflow

#### 1. **Commit Messages**
```bash
# Format: <type>: <description>

feat: add hero section with video background
fix: resolve search modal not closing on escape
style: update button hover animations
refactor: reorganize components into feature folders
docs: update README with coding standards
```

#### 2. **Branch Naming**
```
feature/hero-section
fix/modal-closing-bug
refactor/component-structure
docs/readme-update
```

### Code Quality

#### 1. **No Linter Errors**
- Fix all ESLint warnings/errors before committing
- Run `npm run lint` regularly

#### 2. **Type Checking**
- No TypeScript errors in production
- Use strict type checking

#### 3. **Console Cleanliness**
- No console errors or warnings in production
- Remove debug `console.log()` statements

### Documentation

#### 1. **Component Documentation**
```typescript
/**
 * Button component with gradient hover effect
 * 
 * @param variant - Button style variant (primary | secondary)
 * @param size - Button size (sm | md | lg)
 * @param children - Button content
 * @param onClick - Click handler
 */
```

#### 2. **Complex Logic**
- Add comments for non-obvious code
- Explain "why" not "what"
- Document workarounds with reasoning

### Testing Philosophy

- **Manual testing** for UI components
- Test all animations and interactions
- Verify responsive behavior at all breakpoints
- Check accessibility (keyboard navigation, screen readers)

### Summary

**Key Principles:**
- ✅ Component-based architecture with feature grouping
- ✅ Type-safe TypeScript with strict mode
- ✅ Sass modules with centralized design tokens
- ✅ Event-driven, non-blocking async operations
- ✅ Proper cleanup and memory management
- ✅ Performance-first approach
- ✅ Clean, documented, maintainable code

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
