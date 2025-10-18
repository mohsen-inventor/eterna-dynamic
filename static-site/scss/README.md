# SCSS Architecture

This document describes the organized SCSS folder structure for the EternaCloud landing page.

## 📁 Folder Structure

```
scss/
├── styles.scss              # Main entry point - imports all partials
│
├── config/                  # 🔧 Configuration & Foundation
│   ├── _variables.scss      # Colors, typography, spacing, breakpoints
│   ├── _mixins.scss         # Reusable SCSS functions and mixins
│   └── _base.scss           # CSS reset, utilities, base styles
│
├── layout/                  # 🏗️ Structural Components
│   └── _header.scss         # Main navigation header
│   # Future: _footer.scss, _sidebar.scss, etc.
│
├── pages/                   # 📄 Page-specific Styles
│   └── _home.scss           # Home page styles (hero section)
│   # Future: _about.scss, _contact.scss, etc.
│
└── components/              # 🧩 Reusable UI Components
    └── _search-modal.scss   # Search modal component
    # Future: _buttons.scss, _cards.scss, _forms.scss, etc.
```

## 🎯 Purpose of Each Folder

### 1️⃣ **config/** - Configuration & Foundation
**Purpose:** Global configuration, variables, mixins, and base styles that are used throughout the project.

**Contains:**
- `_variables.scss` - All design tokens (colors, fonts, spacing, breakpoints)
- `_mixins.scss` - Reusable SCSS mixins and functions
- `_base.scss` - CSS reset, utility classes, base element styles

**When to add here:**
- Global design system changes
- New utility classes
- Reusable mixins and functions
- Base element styling

---

### 2️⃣ **layout/** - Structural Components
**Purpose:** Major structural components that define the layout of the website.

**Contains:**
- `_header.scss` - Main navigation header with logo, menu, search, and actions

**Future additions:**
- `_footer.scss` - Footer layout and styles
- `_sidebar.scss` - Sidebar navigation (if needed)
- `_grid.scss` - Custom grid system (if not using Bootstrap)

**When to add here:**
- Components that define the overall structure
- Navigation systems
- Layout wrappers
- Containers that appear on multiple pages

---

### 3️⃣ **pages/** - Page-specific Styles
**Purpose:** Styles specific to individual pages or page templates.

**Contains:**
- `_home.scss` - Home page styles (currently includes hero section)

**Future additions:**
- Additional sections for home page as they're built
- `_about.scss` - About page styles
- `_contact.scss` - Contact page styles
- `_blog.scss` - Blog page styles

**When to add here:**
- Styles that are unique to a specific page
- Page-specific sections and layouts
- Content that doesn't repeat across pages

---

### 4️⃣ **components/** - Reusable UI Components
**Purpose:** Self-contained, reusable UI components that can be used anywhere.

**Contains:**
- `_search-modal.scss` - Search modal overlay and input

**Future additions:**
- `_buttons.scss` - Button variants and styles
- `_cards.scss` - Card components
- `_forms.scss` - Form elements
- `_modals.scss` - Generic modal styles
- `_tooltips.scss` - Tooltip components
- `_badges.scss` - Badge components

**When to add here:**
- Reusable UI elements
- Components used across multiple pages
- Self-contained, modular styles
- Third-party component overrides

---

## 📝 Naming Conventions

### File Names
- All partial files start with underscore: `_filename.scss`
- Use kebab-case: `_search-modal.scss`, `_button-group.scss`
- Descriptive names that indicate content: `_home.scss`, `_header.scss`

### Class Names (BEM)
We follow BEM (Block Element Modifier) methodology:

```scss
// Block
.component { }

// Element
.component__element { }

// Modifier
.component--modifier { }
.component__element--modifier { }
```

**Example:**
```scss
.search-modal { }                      // Block
.search-modal__overlay { }             // Element
.search-modal__input { }               // Element
.search-modal--active { }              // Modifier
.search-modal__input--focused { }      // Element + Modifier
```

---

## 🔄 Import Order in styles.scss

The main `styles.scss` file imports partials in this order:

1. **Google Fonts** - External fonts
2. **Config** - Variables, mixins, base (foundation first)
3. **Layout** - Structural components
4. **Pages** - Page-specific styles
5. **Components** - Reusable UI components

**Example:**
```scss
// Google Fonts
@import url('...');

// Config
@import 'config/variables';
@import 'config/mixins';
@import 'config/base';

// Layout
@import 'layout/header';

// Pages
@import 'pages/home';

// Components
@import 'components/search-modal';
```

---

## 🚀 Adding New Styles

### For a New Page Section (e.g., "Services")
1. Add styles to `pages/_home.scss` (if part of home page)
2. Or create new file: `pages/_services.scss`
3. Import in `styles.scss`: `@import 'pages/services';`

### For a New Component (e.g., "Button")
1. Create file: `components/_button.scss`
2. Use BEM naming: `.btn`, `.btn__icon`, `.btn--primary`
3. Import in `styles.scss`: `@import 'components/button';`

### For a New Layout Element (e.g., "Footer")
1. Create file: `layout/_footer.scss`
2. Use semantic class names: `.footer`, `.footer__nav`, `.footer__copyright`
3. Import in `styles.scss`: `@import 'layout/footer';`

### For New Variables or Mixins
1. Add to `config/_variables.scss` or `config/_mixins.scss`
2. No need to import separately (already imported in styles.scss)

---

## 🎨 Best Practices

### 1. **Keep Files Focused**
- Each file should have a single responsibility
- If a file grows too large (>300 lines), consider splitting it

### 2. **Use Variables**
- Always use variables from `_variables.scss` for colors, spacing, fonts
- Don't hardcode values unless absolutely necessary

### 3. **Mobile-First**
- Write base styles for mobile
- Add media queries for larger screens using mixins:
  ```scss
  @include respond-to('md') { }  // Tablet and up
  @include respond-to('lg') { }  // Desktop and up
  ```

### 4. **Nesting Depth**
- Limit nesting to 3 levels maximum
- Use BEM to reduce nesting need

### 5. **Comments**
- Add section comments for clarity
- Document complex mixins and functions
- Explain "why" not "what"

---

## 📊 Current Status

### ✅ Implemented
- Config folder with variables, mixins, and base styles
- Layout folder with header component
- Pages folder with home page (hero section)
- Components folder with search modal

### 🔜 To Be Added (as we build)
- Additional home page sections
- Footer layout
- More reusable components (buttons, cards, forms)
- Additional pages as needed

---

## 🛠️ Compilation

The SCSS files are compiled using the following npm scripts:

```bash
npm run dev          # Watch mode with live reload
npm run watch:css    # Watch SCSS files only
npm run build:css    # Compile to production CSS
```

Compiled output: `css/styles.min.css`

---

*This architecture provides a scalable, maintainable structure for growing the landing page while keeping code organized and easy to navigate.*

