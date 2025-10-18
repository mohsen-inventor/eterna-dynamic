# EternaCloud - Dynamic Landing Page

A modern, fully dynamic landing page built with Next.js 15, Sass modules, TypeScript, and Sanity CMS. Converted from a static site to a fully content-managed experience.

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Sass Modules** - Scoped, modular CSS with Sass
- **Sanity CMS** - Headless CMS for content management
- **GSAP** - High-performance animations
- **React 18** - Latest React features

## Project Structure

```
eterna-dynamic/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.scss         # Global styles
├── components/              # React components
│   ├── Header/             # Navigation header
│   ├── SearchModal/        # Search modal overlay
│   ├── Hero/               # Hero section with video bg
│   ├── Services/           # Services grid with cards
│   ├── Solutions/          # Problems/Solutions comparison
│   ├── Process/            # Process functions display
│   └── Footer/             # Footer component
├── lib/                    # Utilities and libraries
│   └── sanity/
│       ├── client.ts       # Sanity client configuration
│       ├── image.ts        # Image URL builder
│       └── types.ts        # TypeScript types
├── sass/                   # Global Sass utilities
│   ├── _variables.scss     # Variables (colors, fonts, spacing)
│   └── _mixins.scss        # Mixins and utilities
├── sanity/                 # Sanity Studio
│   ├── schemas/            # Content schemas
│   │   ├── siteSettings.ts # Global site settings & hero
│   │   ├── service.ts      # Individual service cards
│   │   ├── servicesSection.ts
│   │   ├── solutionsSection.ts
│   │   ├── processSection.ts
│   │   ├── page.ts         # Generic pages
│   │   ├── post.ts         # Blog posts
│   │   └── index.ts
│   ├── sanity.config.ts    # Sanity configuration
│   └── sanity.cli.ts       # Sanity CLI configuration
├── public/                 # Static assets
│   ├── images/             # Image assets
│   └── videos/             # Video assets
└── package.json
```

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Sanity

Initialize your Sanity project:

```bash
cd sanity
npx sanity init
```

Follow the prompts to create a new project or connect to an existing one.

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-10-18
SANITY_API_TOKEN=your_token_here
```

Get your API token from https://www.sanity.io/manage

### 4. Run Development Servers

You'll need two terminal windows:

**Terminal 1 - Next.js:**
```bash
npm run dev
```
Opens at [http://localhost:3000](http://localhost:3000)

**Terminal 2 - Sanity Studio:**
```bash
npm run sanity
```
Opens at [http://localhost:3333](http://localhost:3333)

### 5. Create Content in Sanity

1. Open Sanity Studio at [http://localhost:3333](http://localhost:3333)
2. Create the following content:

#### Site Settings
- Hero Tagline: "Product Lifecycle Partner"
- Hero Headline: "Design and build with ease."
- Hero Description: Your description

#### Services Section
- Title: "Trusted by hyperscale teams"
- Tagline: "from concept to completion."
- Description: Your description

#### Create 4 Service Documents
1. **Design**
   - Order: 1
   - Stage: "Design"
   - Title: "Solutions without the heavy lifting."
   - Features: ["Dedicated specialists", "Decision-ready solutions"]

2. **Onboarding**
   - Order: 2
   - Stage: "Onboarding"
   - Title: "Vendors are kept on track for you."
   - Features: ["Cross-organizational alignment", "Follow-through ownership"]

3. **Delivery**
   - Order: 3
   - Stage: "Delivery"
   - Title: "Get it right the first time—every time."
   - Features: ["Expert-led execution", "Change ownership"]

4. **Deployment**
   - Order: 4
   - Stage: "Deployment"
   - Title: "Context always carries forward."
   - Features: ["Clean handoffs", "Turnkey outcomes"]

#### Solutions Section
- Badge Text: "Freedom"
- Title: "Stop playing catch up."
- Subtitle: "Enjoy peace of mind."
- Problems: Array of problem statements
- Solutions: Array of solution statements

#### Process Section
- Badge Text: "Dependable Precision"
- Title: "One practical, holistic service."
- Tagline: "Exponential daily value."
- Description: Your description
- Functions: Array of objects with name and items

## Features

### Dynamic Content Management
- All page content managed through Sanity CMS
- Real-time preview and editing
- Structured content schemas
- Image and video asset management

### Performance
- Server-side rendering with Next.js 15
- Optimized images and videos
- Minimal JavaScript bundle
- Fast page loads

### Styling with Sass Modules
Component-scoped styling with responsive design:

```tsx
import styles from './Component.module.scss';

export default function Component() {
  return <div className={styles.container}>Content</div>;
}
```

Global Sass variables and mixins available in `sass/` directory.

### Sections

1. **Hero** - Full-screen hero with video background and gradient text animation
2. **Services** - 4-column grid of service cards with hover effects
3. **Solutions** - 3-column layout comparing problems vs solutions with animated cosmos video
4. **Process** - 4 process functions with decorative wave graphic

## Deployment

### Deploy Next.js to Vercel

```bash
vercel
```

### Deploy Sanity Studio

```bash
npm run sanity:deploy
```

Studio will be available at `https://your-project.sanity.studio`

## Development Notes

### Responsive Design
All components are fully responsive with breakpoints:
- Mobile: < 576px
- Tablet: 576px - 992px
- Desktop: > 992px

### Animations
Animations handled with CSS transitions and GSAP for complex interactions.

### Content Structure
- Site-wide settings in `siteSettings`
- Section-specific content in dedicated documents
- Reusable content blocks in arrays
- Flexible schema for future expansion

## Available Scripts

- `npm run dev` - Start Next.js development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run sanity` - Start Sanity Studio locally
- `npm run sanity:deploy` - Deploy Sanity Studio

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Sass Documentation](https://sass-lang.com/documentation)
- [GSAP Documentation](https://greensock.com/docs/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## License

MIT
