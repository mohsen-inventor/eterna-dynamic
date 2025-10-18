# EternaCloud Landing Page - Developer Guide

Complete coding standards, project structure, and development guidelines for the EternaCloud landing page.

---

## 📋 Table of Contents

1. [Quick Start](#quick-start)
2. [Project Structure](#project-structure)
3. [Coding Standards](#coding-standards)
4. [HTML Standards](#html-standards)
5. [SCSS/CSS Standards](#scsscss-standards)
6. [JavaScript Standards](#javascript-standards)
7. [Performance Guidelines](#performance-guidelines)
8. [Accessibility Standards](#accessibility-standards)
9. [Development Workflow](#development-workflow)

---

## 🚀 Quick Start

### Prerequisites
- Node.js v14 or higher
- Modern web browser
- Code editor (VS Code recommended)

### Installation (3 Steps)

```bash
# 1. Install dependencies
npm install

# 2. Build CSS
npm run build

# 3. Start development server
npm run dev
```

### NPM Scripts

| Command | Description |
|---------|-------------|
| `npm run build` | Compile SCSS to minified CSS |
| `npm run build:css` | Same as build |
| `npm run build:css:dev` | Compile with source maps |
| `npm run dev` | Watch SCSS and auto-compile |
| `npm run watch:css` | Watch SCSS files only |
| `npm run serve` | Start browser-sync server |

---

## 📁 Project Structure

```
landing-page/
├── index.html              # Main HTML file
├── package.json            # NPM dependencies & scripts
├── css/
│   └── styles.min.css      # Compiled CSS (auto-generated)
├── scss/
│   ├── styles.scss         # Main SCSS entry point
│   ├── config/
│   │   ├── _variables.scss # Colors, fonts, spacing
│   │   ├── _mixins.scss    # Reusable SCSS mixins
│   │   └── _base.scss      # Reset, base styles, utilities
│   ├── layout/
│   │   └── _header.scss    # Header/navigation
│   ├── pages/
│   │   └── home/
│   │       ├── _index.scss # Home page imports
│   │       ├── _hero.scss  # Hero section
│   │       ├── _services.scss
│   │       ├── _solutions.scss
│   │       └── _process.scss
│   └── components/
│       └── _search-modal.scss
├── js/
│   └── scripts.js          # Vanilla JavaScript
├── images/
│   ├── logo.png
│   ├── favicon.avif
│   ├── bg.avif
│   ├── wave-h.png
│   └── wave-v.avif
└── videos/
    ├── hero-bg.webm
    └── cosmos.webm
```

### File Organization Rules

#### When to Create New SCSS Files

**config/** - Add when:
- Defining global variables
- Creating new mixins or functions
- Adding utility classes

**layout/** - Add when:
- Building structural elements (header, footer, navigation)
- Creating grid systems
- Defining overall page structure

**pages/** - Add when:
- Adding page-specific sections
- Creating unique layouts for specific pages
- Building section components (hero, services, etc.)

**components/** - Add when:
- Creating reusable UI elements
- Building buttons, cards, modals
- Designing form elements

---

## 🎯 Coding Standards

### General Principles

1. **Write Clean, Readable Code**
   - Code should be self-documenting
   - Use meaningful names for variables, functions, and classes
   - Keep functions small and focused (Single Responsibility Principle)

2. **Consistency Over Preference**
   - Follow established patterns in the codebase
   - Use the same conventions throughout
   - When in doubt, match existing code style

3. **Mobile-First Approach**
   - Design and develop for mobile devices first
   - Progressively enhance for larger screens
   - Test on multiple devices and screen sizes

4. **Performance Matters**
   - Optimize for fast load times
   - Minimize HTTP requests
   - Use lazy loading where appropriate
   - Compress and minify assets

5. **Accessibility First**
   - Semantic HTML for all content
   - Proper ARIA attributes where needed
   - Keyboard navigation support
   - Screen reader compatibility

---

## 📄 HTML Standards

### Semantic HTML

✅ **DO: Use Semantic HTML5 Elements**
```html
<!-- Good -->
<header class="header">
  <nav class="navbar">
    <a href="#" class="navbar__brand">Logo</a>
  </nav>
</header>

<main id="main-content">
  <section class="hero">
    <h1>Welcome</h1>
  </section>
</main>

<footer class="footer">
  <p>&copy; 2025 EternaCloud</p>
</footer>
```

❌ **DON'T: Use Generic Divs for Everything**
```html
<!-- Bad -->
<div class="header">
  <div class="nav">
    <a href="#">Logo</a>
  </div>
</div>
```

### Accessibility Attributes

✅ **DO: Include Proper ARIA and Accessibility Attributes**
```html
<!-- Good -->
<button 
  class="navbar__search" 
  aria-label="Search"
  aria-expanded="false"
>
  <svg aria-hidden="true">...</svg>
</button>

<nav aria-label="Main navigation">
  <ul role="menubar">
    <li role="none">
      <a href="#about" role="menuitem">About</a>
    </li>
  </ul>
</nav>
```

### HTML Formatting

```html
<!-- Use 4 spaces for indentation -->
<section class="hero">
    <div class="hero__content">
        <h1 class="hero__headline">Title</h1>
        <p class="hero__description">Description text.</p>
    </div>
</section>

<!-- Self-closing tags don't need trailing slash -->
<img src="image.jpg" alt="Description">
<input type="text" placeholder="Search">

<!-- Use double quotes for attributes -->
<a href="#contact" class="btn btn--primary">Contact</a>
```

### HTML Best Practices

- ✅ Always include `<!DOCTYPE html>`
- ✅ Use lowercase for element names and attributes
- ✅ Close all elements properly
- ✅ Include `lang` attribute on `<html>`
- ✅ Add meta tags for SEO and social sharing
- ✅ Include skip-to-content link for accessibility
- ✅ Use meaningful IDs and classes (BEM methodology)
- ❌ Don't use inline styles
- ❌ Don't use deprecated elements (`<font>`, `<center>`, etc.)

---

## 🎨 SCSS/CSS Standards

### Architecture

Feature-based folder structure:
```
scss/
├── config/         # Variables, mixins, base styles
├── layout/         # Header, footer, structural components
├── pages/          # Page-specific styles
└── components/     # Reusable UI components
```

### BEM Naming Convention

We strictly follow **BEM (Block Element Modifier)**:

```scss
// Block - standalone component
.card { }

// Element - part of a block
.card__header { }
.card__body { }
.card__footer { }

// Modifier - variation of block or element
.card--featured { }
.card__header--large { }
```

✅ **DO: Follow BEM Strictly**
```scss
// Good
.hero {
  background: $primary-color;
  
  &__content {
    max-width: 900px;
    padding: $spacing-lg;
  }
  
  &__headline {
    font-size: $font-size-5xl;
    color: $text-light;
  }
  
  &__headline--large {
    font-size: $font-size-6xl;
  }
}
```

❌ **DON'T: Deep Nesting or Random Names**
```scss
// Bad
.hero {
  .content {
    .title {
      .big {
        font-size: 64px;
      }
    }
  }
}

.heroContentTitle { } // Not BEM
.hero-content-title { } // Not BEM
```

### Variables Usage

✅ **DO: Always Use Variables from config/_variables.scss**
```scss
// Good
.component {
  color: $primary-color;
  background: $secondary-color;
  padding: $spacing-md;
  font-size: $font-size-lg;
  border-radius: $border-radius-md;
  transition: $transition-base;
}
```

❌ **DON'T: Hardcode Values**
```scss
// Bad
.component {
  color: #1F2937;
  background: #FFFFFF;
  padding: 24px;
  font-size: 18px;
}
```

### Mobile-First Media Queries

✅ **DO: Write Mobile Styles First**
```scss
// Good - Mobile first
.hero {
  padding: $spacing-md;
  font-size: $font-size-lg;
  
  @include respond-to('md') {
    padding: $spacing-xl;
    font-size: $font-size-2xl;
  }
  
  @include respond-to('lg') {
    padding: $spacing-2xl;
    font-size: $font-size-3xl;
  }
}
```

❌ **DON'T: Desktop First with max-width**
```scss
// Bad
.hero {
  padding: 96px;
  font-size: 48px;
  
  @media (max-width: 768px) {
    padding: 24px;
    font-size: 24px;
  }
}
```

### Property Ordering

```scss
.component {
  // 1. Positioning
  position: relative;
  top: 0;
  left: 0;
  z-index: $z-index-modal;
  
  // 2. Box Model
  display: flex;
  width: 100%;
  height: 100px;
  margin: $spacing-md;
  padding: $spacing-sm;
  
  // 3. Typography
  font-size: $font-size-lg;
  font-weight: $font-weight-bold;
  line-height: $line-height-normal;
  color: $text-color;
  text-align: center;
  
  // 4. Visual
  background: $primary-color;
  border: 1px solid $border-color;
  border-radius: $border-radius-md;
  box-shadow: $shadow-md;
  
  // 5. Misc
  cursor: pointer;
  transition: $transition-base;
}
```

### SCSS Best Practices

- ✅ Limit nesting to **3 levels maximum**
- ✅ Use meaningful variable names
- ✅ Group related properties together
- ✅ Add comments for complex logic
- ✅ Keep selectors specific but not overly complex
- ✅ Use `&` for parent selector reference
- ✅ Organize properties: positioning → box model → typography → visual → misc
- ❌ Don't use `!important` (unless absolutely necessary)
- ❌ Don't use IDs for styling (use classes)
- ❌ Don't use magic numbers (unexplained values)

---

## 💻 JavaScript Standards

### Code Style

Use **ES6+ syntax** and **IIFE pattern** for encapsulation:

```javascript
/**
 * Component Name - Description
 * Additional details about what this does
 */
(function() {
    'use strict';
    
    // Configuration
    const CONFIG = {
        scrollThreshold: 100,
        animationDuration: 300
    };
    
    // DOM Elements
    const elements = {
        header: document.querySelector('.header'),
        button: document.querySelector('.btn--primary')
    };
    
    // State
    let isOpen = false;
    
    // Functions...
})();
```

### Naming Conventions

✅ **DO: Use Descriptive Names**
```javascript
// Good
const elements = {
    searchButton: document.querySelector('.navbar__search'),
    searchModal: document.getElementById('searchModal'),
    searchInput: document.getElementById('searchInput')
};

function initSearchModal() { }
function handleHeaderScroll() { }
function smoothScrollTo(target) { }
```

❌ **DON'T: Use Abbreviations or Generic Names**
```javascript
// Bad
const el = document.querySelector('.btn');
const x = document.getElementById('modal');

function init() { } // Too generic
function handle() { } // What does it handle?
function go() { } // Go where?
```

### Function Structure

✅ **DO: Document Functions with JSDoc**
```javascript
/**
 * Smooth scroll to a target element
 * @param {string} target - CSS selector of target element
 */
function smoothScrollTo(target) {
    const element = document.querySelector(target);
    if (!element) return;
    
    const headerHeight = elements.header?.offsetHeight || 0;
    const targetPosition = element.offsetTop - headerHeight;
    
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}
```

✅ **DO: Keep Functions Focused and Small**
```javascript
// Good - Single responsibility
function openModal(modal) {
    modal.classList.add('modal--active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
    modal.classList.remove('modal--active');
    document.body.style.overflow = '';
}

function initModalListeners(modal) {
    const closeBtn = modal.querySelector('.modal__close');
    const overlay = modal.querySelector('.modal__overlay');
    
    closeBtn?.addEventListener('click', () => closeModal(modal));
    overlay?.addEventListener('click', () => closeModal(modal));
}
```

### Event Listeners

✅ **DO: Use Named Functions and Null Checks**
```javascript
// Good
function initEventListeners() {
    if (!elements.searchButton) return;
    
    elements.searchButton.addEventListener('click', handleSearchClick);
    elements.closeButton?.addEventListener('click', handleCloseClick);
    
    // Passive listeners for scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });
}

function handleSearchClick(e) {
    e.preventDefault();
    openSearchModal();
}
```

### GSAP Animations

✅ **DO: Use GSAP for Complex Animations**
```javascript
function initButtonAnimation() {
    if (!elements.button) return;
    
    const overlay = elements.button.querySelector('.btn__gradient-overlay');
    if (!overlay) return;
    
    elements.button.addEventListener('mouseenter', () => {
        gsap.to(overlay, {
            opacity: 1,
            backgroundPosition: '100% 50%',
            duration: 0.6,
            ease: 'power2.out'
        });
    });
}
```

### JavaScript Best Practices

- ✅ Use `const` by default, `let` when reassignment needed
- ✅ Use optional chaining: `element?.method()`
- ✅ Use early returns for guard clauses
- ✅ Add JSDoc comments for functions
- ✅ Use meaningful variable and function names
- ✅ Keep functions small and focused
- ✅ Use event delegation when appropriate
- ✅ Clean up event listeners when needed
- ✅ Use `requestAnimationFrame` for animations
- ✅ Use passive event listeners for scroll
- ❌ Don't use `var`
- ❌ Don't modify global scope
- ❌ Don't ignore errors silently
- ❌ Don't use inline event handlers in HTML

---

## ⚡ Performance Guidelines

### Images

- ✅ Use appropriate formats: WebP, AVIF, JPEG, PNG, SVG
- ✅ Optimize images before adding to project
- ✅ Use `loading="lazy"` for below-fold images
- ✅ Provide appropriate alt text
- ✅ Use responsive images with `srcset` when needed

```html
<!-- Good -->
<img 
    src="hero.webp" 
    alt="Data center infrastructure"
    loading="lazy"
    width="800"
    height="600"
>

<!-- Better: Responsive with srcset -->
<picture>
    <source media="(max-width: 768px)" srcset="image-mobile.avif">
    <img src="image-desktop.avif" alt="Description">
</picture>
```

### Videos

- ✅ Use WebM format for web
- ✅ Compress videos appropriately
- ✅ Use `autoplay muted loop playsinline`
- ✅ Provide fallback for unsupported formats

```html
<!-- Good -->
<video autoplay muted loop playsinline>
    <source src="videos/hero-bg.webm" type="video/webm">
</video>
```

### JavaScript Performance

- ✅ Use `requestAnimationFrame` for animations
- ✅ Use passive event listeners for scroll
- ✅ Debounce/throttle expensive operations
- ✅ Use event delegation for multiple similar elements
- ✅ Use Intersection Observer for scroll animations
- ❌ Don't manipulate DOM in loops
- ❌ Don't use synchronous operations that block

```javascript
// Good - Passive listener
window.addEventListener('scroll', handleScroll, { passive: true });

// Good - Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, {
    threshold: 0.05,
    rootMargin: '0px 0px -10% 0px'
});
```

### CSS Performance

- ✅ Minimize specificity
- ✅ Avoid universal selectors
- ✅ Use efficient selectors
- ✅ Minimize repaints and reflows
- ✅ Use `transform` and `opacity` for animations (GPU-accelerated)
- ❌ Don't use complex selectors
- ❌ Don't deeply nest selectors

```scss
// Good: GPU-accelerated animations
.element {
  transition: transform 0.3s ease, opacity 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    opacity: 0.9;
  }
}

// Bad: Triggers layout reflow
.element {
  transition: height 0.3s ease, top 0.3s ease;
  
  &:hover {
    height: 120px;
    top: -10px;
  }
}
```

---

## ♿ Accessibility Standards

### Semantic HTML

Always use appropriate semantic elements:
```html
<header>, <nav>, <main>, <section>, <article>, <aside>, <footer>
<h1> through <h6> in proper hierarchy
<button> for actions, <a> for navigation
<ul>, <ol>, <li> for lists
```

### ARIA Attributes

Add ARIA when semantic HTML isn't enough:
```html
<button 
    aria-label="Close modal"
    aria-expanded="false"
>
    <svg aria-hidden="true">...</svg>
</button>

<nav aria-label="Main navigation">
    <ul role="menubar">
        <li role="none">
            <a href="#about" role="menuitem">About</a>
        </li>
    </ul>
</nav>
```

### Keyboard Navigation

- ✅ All interactive elements must be keyboard accessible
- ✅ Visible focus states required
- ✅ Logical tab order
- ✅ ESC key closes modals/overlays
- ✅ Enter/Space activates buttons

```scss
// Always style focus states
.btn {
    &:focus-visible {
        outline: 2px solid $accent-color;
        outline-offset: 2px;
    }
}
```

### Color Contrast

- ✅ Minimum 4.5:1 contrast ratio for normal text
- ✅ Minimum 3:1 contrast ratio for large text
- ✅ Don't rely on color alone for meaning
- ✅ Test with color blindness simulators

---

## 🔧 Development Workflow

### 1. Start Development
```bash
npm run dev
```

### 2. Edit Code
- Changes auto-reload in browser
- SCSS compiles automatically

### 3. Check Styles
- SCSS compiles to `css/styles.min.css`
- Check browser DevTools for issues

### 4. Test Features
- Test all interactions
- Check responsive design
- Verify accessibility

### 5. Build Production
```bash
npm run build:css
```

### 6. Git Workflow

#### Commit Message Format
```
<type>: <subject>

<body (optional)>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code formatting (not CSS)
- `refactor`: Code restructuring
- `perf`: Performance improvements
- `test`: Adding tests
- `chore`: Maintenance tasks

**Examples:**
```
feat: add search modal component
fix: resolve header scroll issue on mobile
docs: update coding standards
style: format SCSS files
refactor: reorganize SCSS folder structure
perf: optimize image loading
```

#### Commit Best Practices

- ✅ Write clear, descriptive commit messages
- ✅ Keep commits focused and atomic
- ✅ Commit related changes together
- ✅ Test before committing
- ✅ Don't commit generated files (except compiled CSS)
- ❌ Don't commit WIP or broken code
- ❌ Don't use vague messages like "fix" or "update"

### 7. Code Review Checklist

Before submitting or merging code, verify:

**HTML:**
- [ ] Semantic HTML used appropriately
- [ ] Proper heading hierarchy
- [ ] Alt text on all images
- [ ] ARIA attributes where needed
- [ ] No inline styles
- [ ] Valid HTML5

**SCSS:**
- [ ] BEM naming convention followed
- [ ] Variables used (no hardcoded values)
- [ ] Mobile-first approach
- [ ] Nesting limited to 3 levels
- [ ] Proper file location (config/layout/pages/components)
- [ ] Consistent formatting

**JavaScript:**
- [ ] ES6+ syntax used
- [ ] Functions documented with JSDoc
- [ ] Null checks performed
- [ ] Event listeners properly managed
- [ ] No console.logs left in code
- [ ] Performance optimized

**General:**
- [ ] Code follows project conventions
- [ ] No linting errors
- [ ] Tested in multiple browsers
- [ ] Responsive design verified
- [ ] Accessibility checked
- [ ] Git commit message is clear

---

## 📚 Design System

### Colors
- **Primary**: `#1F2937` (Dark gray)
- **Secondary**: `#FFFFFF` (White)
- **Accent**: `#3B82F6` (Blue)
- **Purple**: `#8B5CF6`
- **Orange**: `#FE881B`
- **Text**: `#1F2937`
- **Text Light**: `#6B7280`

### Typography
- **Primary Font**: Inter (300, 400, 500, 600, 700)
- **Heading Font**: Playfair Display (400, 700)
- **Base Size**: 16px
- **Line Height**: 1.6

### Spacing Scale
- XS: 8px
- SM: 16px
- MD: 24px
- LG: 32px
- XL: 48px
- 2XL: 64px
- 3XL: 96px

### Breakpoints
- SM: 576px
- MD: 768px
- LG: 992px
- XL: 1200px
- 2XL: 1400px

---

## 🎓 Learning Resources

### BEM Methodology
- [BEM Official Documentation](http://getbem.com/)
- [BEM 101 on CSS-Tricks](https://css-tricks.com/bem-101/)

### SCSS Best Practices
- [Sass Guidelines](https://sass-guidelin.es/)
- [Scalable and Modular Architecture for CSS](http://smacss.com/)

### JavaScript Patterns
- [JavaScript Design Patterns](https://www.patterns.dev/posts/classic-design-patterns/)
- [Clean Code JavaScript](https://github.com/ryanmcdermott/clean-code-javascript)

### Accessibility
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Resources](https://webaim.org/resources/)

### Performance
- [Web.dev Performance](https://web.dev/performance/)
- [MDN Web Performance](https://developer.mozilla.org/en-US/docs/Web/Performance)

---

## 📝 Summary

### Key Takeaways

1. **Consistency** - Follow established patterns
2. **Semantic HTML** - Use appropriate elements
3. **BEM for CSS** - Clear, maintainable class names
4. **Variables** - Always use design tokens
5. **Mobile-First** - Start small, scale up
6. **Accessibility** - Required, not optional
7. **Performance** - Optimize everything
8. **Documentation** - Comment complex logic
9. **Clean Code** - Readable and maintainable
10. **Testing** - Verify before committing

---

*These standards are living guidelines. They will evolve as the project grows. When in doubt, prioritize clarity and maintainability over cleverness.*

**Last Updated:** October 18, 2025

