# SCSS File Structure

This document outlines the clear file organization for each section of the website.

## 📁 File Structure

```
scss/
├── config/                    # Foundation & Configuration
│   ├── _variables.scss        # Colors, typography, spacing
│   ├── _mixins.scss          # Reusable SCSS functions
│   └── _base.scss            # Reset, utilities, base styles
│
├── layout/                   # Structural Components
│   └── _header.scss          # Main navigation header
│
├── pages/                    # Page-specific Styles
│   └── home/                 # Home page sections
│       ├── _index.scss       # Home page imports
│       ├── _hero.scss        # Hero section (main landing area)
│       ├── _services.scss    # Services section (4 service cards)
│       └── _solutions.scss   # Solutions section (problems vs solutions)
│
├── components/               # Reusable UI Components
│   └── _search-modal.scss    # Search modal component
│
├── styles.scss              # Main import file
└── STRUCTURE.md             # This documentation
```

## 🎯 Section Breakdown

### Hero Section (`_hero.scss`)
- **Purpose**: Main landing area with video background
- **Contains**: 
  - Hero video background
  - Main headline and tagline
  - Gradient text effects
  - Light patterns and animations

### Services Section (`_services.scss`)
- **Purpose**: Showcase 4 service offerings
- **Contains**:
  - Background image with gradient
  - Service cards with hover effects
  - Stage indicators (Design → Onboarding → Delivery → Deployment)
  - Card animations and interactions

### Solutions Section (`_solutions.scss`)
- **Purpose**: Compare problems vs solutions
- **Contains**:
  - Three-column layout (problems | cosmos | solutions)
  - Problem cards with X icons
  - Solution cards with checkmark icons
  - Central cosmos animation video

### Header (`_header.scss`)
- **Purpose**: Main navigation
- **Contains**:
  - Logo and branding
  - Navigation menu
  - Search button
  - "LET'S TALK" CTA button

### Search Modal (`_search-modal.scss`)
- **Purpose**: Search functionality
- **Contains**:
  - Modal overlay
  - Search input field
  - Close button
  - Focus states and animations

## 🔧 Adding New Sections

### For Home Page Sections:
1. Create a new file in `scss/pages/home/` (e.g., `_about.scss`)
2. Add the import to `scss/pages/home/_index.scss`:
   ```scss
   @import 'about';        // About section
   ```

### For New Pages:
1. Create a new folder in `scss/pages/` (e.g., `about/`)
2. Create an `_index.scss` file in the new folder
3. Add the import to `scss/styles.scss`:
   ```scss
   @import 'pages/about';        // About page
   ```

## 📝 Naming Conventions

- **Files**: Use underscores and descriptive names (`_hero.scss`, `_services.scss`)
- **Classes**: Use BEM methodology (`hero__title`, `services__card`)
- **Comments**: Include section purpose and main components
- **Organization**: Group related styles together with clear comments

## 🎨 Design Principles

- **Modular**: Each section is self-contained
- **Reusable**: Components can be used across sections
- **Maintainable**: Clear file names and structure
- **Scalable**: Easy to add new sections or modify existing ones
