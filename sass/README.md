# EternaCloud SASS Architecture

Modern, scalable SASS architecture for the EternaCloud project.

## 📁 File Structure

```
sass/
├── _config.scss      # Global app configuration
├── _functions.scss   # Utility functions
├── _variables.scss   # Design tokens & variables
├── _mixins.scss      # Reusable mixins
└── _index.scss       # Main entry point (import this)
```

## 🚀 Usage in Components

```scss
// Import everything at once
@import '@/sass/index';

.myComponent {
  @include flex-center;
  @include glass-effect;
  @include elevation(2);
  padding: spacing(2);
  transition: $transition-base;
}
```

## 📋 What's Included

### 1. **Config** (`_config.scss`)
Global app-wide settings that can be overridden:

- **Base Settings**: Font size, line height
- **Direction & Theme**: LTR/RTL, light/dark mode
- **Container & Grid**: Max widths, gaps, columns
- **Transitions**: Durations, timing functions
- **Glass Effects**: Blur amounts, opacity values
- **Shadows & Overlays**: Shadow colors, overlay opacity
- **Accessibility**: Focus rings, reduced motion
- **Helper Functions**: `isRtl()`, `isDark()`, `isDebug()`

```scss
// Override defaults in your own config
$container-max-width: 1440px;
$transition-base: 0.4s;
$glass-opacity: 0.8;
```

### 2. **Functions** (`_functions.scss`)
Utility functions for calculations:

```scss
// Spacing & Units
rem(16)              // Convert px to rem
em(16)               // Convert px to em
spacing(2)           // 8px scale system (2 * 8px = 16px)
fluidSize(16, 24)    // Responsive fluid typography

// Utilities
alpha(#8B5CF6, 0.5)  // Add opacity to color
stripUnit(16px)      // Remove unit from number
```

### 3. **Variables** (`_variables.scss`)
Design tokens and theme variables:

- **Colors**: Primary, secondary, text, background
- **Typography**: Font families, sizes, weights
- **Spacing**: Scale system (xs, sm, md, lg, xl, 2xl, 3xl)
- **Breakpoints**: Mobile, tablet, desktop
- **Z-index**: Fixed, modal, tooltip layers
- **Border Radius**: Predefined radius values

### 4. **Mixins** (`_mixins.scss`)
Reusable style patterns:

#### Layout & Positioning
```scss
@include flex-center;           // Display flex, center everything
@include flex-between;          // Flex with space-between
@include absolute-center;       // Center absolutely positioned element
@include container($maxWidth);  // Responsive container
@include grid(3, 24px);        // 3-column grid with 24px gap
```

#### Visual Effects
```scss
@include glass-effect(0.72, 20px);  // Apple-style glass morphism
@include frosted-glass;             // Pre-configured frosted glass
@include elevation(3);              // Shadow elevation (1-5)
@include glow($primary-color, 0.3); // Glowing effect
```

#### Typography
```scss
@include text-truncate;           // Single line ellipsis
@include line-clamp(3);           // Multi-line ellipsis (3 lines)
@include text-gradient($c1, $c2); // Gradient text effect
```

#### Animations
```scss
@include smooth-transition(all);       // Smooth ease-in-out transition
@include spring-transition(transform); // Spring/bounce easing
@include hover-lift(-8px);            // Lift element on hover
@include hover-scale(1.05);           // Scale element on hover
```

#### Utilities
```scss
@include button-reset;        // Remove default button styles
@include list-reset;          // Remove list styles
@include visually-hidden;     // Screen reader only
@include focus-ring;          // Accessibility focus ring
@include custom-scrollbar;    // Styled scrollbar
```

#### Responsive
```scss
@include respond-to-max('md') {  // Max-width media query
  font-size: 14px;
}

@include respond-to-min('lg') {  // Min-width media query
  padding: 40px;
}
```

## 🎨 Design System Values

### Spacing Scale (8px system)
```scss
$spacing-xs:  8px    // 0.5rem
$spacing-sm:  16px   // 1rem
$spacing-md:  24px   // 1.5rem
$spacing-lg:  32px   // 2rem
$spacing-xl:  48px   // 3rem
$spacing-2xl: 64px   // 4rem
$spacing-3xl: 96px   // 6rem
```

### Breakpoints
```scss
$breakpoints: (
  'sm': 640px,   // Mobile
  'md': 768px,   // Tablet
  'lg': 1024px,  // Desktop
  'xl': 1280px,  // Large desktop
  '2xl': 1536px  // Extra large
)
```

### Transitions
```scss
$transition-base: 0.3s              // Default duration
$transition-timing-default: ease    // Default easing
$transition-timing-smooth: cubic-bezier(0.4, 0, 0.2, 1)  // Smooth
$transition-timing-spring: cubic-bezier(0.68, -0.55, 0.265, 1.55)  // Bouncy
```

## 🔧 Customization

### Override Config Values
Create a custom config before importing the main index:

```scss
// Your component SCSS
$container-max-width: 1440px;  // Override default
$transition-base: 0.4s;        // Override default

@import '@/sass/index';        // Import after overrides

.myComponent {
  // Your styles here
}
```

### Extend with Custom Mixins
Add your own mixins in component files:

```scss
@import '@/sass/index';

// Custom project-specific mixin
@mixin custom-card {
  @include glass-effect;
  @include elevation(2);
  border-radius: 12px;
  padding: spacing(3);
}

.card {
  @include custom-card;
}
```

## 💡 Best Practices

1. **Use Config Values**: Reference config variables instead of hardcoding
   ```scss
   // ✅ Good
   transition: $transition-base;
   
   // ❌ Bad
   transition: 0.3s;
   ```

2. **Use Mixins for Patterns**: Reuse common patterns
   ```scss
   // ✅ Good
   @include flex-center;
   
   // ❌ Bad
   display: flex;
   align-items: center;
   justify-content: center;
   ```

3. **Use Functions for Calculations**: Leverage utility functions
   ```scss
   // ✅ Good
   font-size: rem(16);
   padding: spacing(2);
   
   // ❌ Bad
   font-size: 1rem;
   padding: 16px;
   ```

4. **Responsive First**: Use responsive mixins
   ```scss
   // ✅ Good
   @include respond-to-max('md') {
     padding: spacing(1);
   }
   
   // ❌ Bad
   @media (max-width: 768px) {
     padding: 8px;
   }
   ```

## 🎯 Examples

### Glass Card Component
```scss
@import '@/sass/index';

.glassCard {
  @include frosted-glass;
  @include hover-lift(-4px);
  @include elevation(2);
  
  padding: spacing(3);
  border-radius: 16px;
  transition: $transition-base;
  
  &__title {
    @include text-truncate;
    font-size: rem(24);
    margin-bottom: spacing(2);
  }
  
  @include respond-to-max('md') {
    padding: spacing(2);
  }
}
```

### Button with States
```scss
@import '@/sass/index';

.button {
  @include button-reset;
  @include flex-center;
  @include smooth-transition(all);
  
  padding: spacing(1) spacing(3);
  border-radius: 8px;
  background: $primary-color;
  color: white;
  
  &:hover {
    @include elevation(3);
    transform: translateY(-2px);
  }
  
  &:focus-visible {
    @include focus-ring;
  }
}
```

## 📚 Further Reading

- Inspired by [sass-as-ref](../sass-as-ref/) design patterns
- Uses modern SASS features and best practices
- Follows BEM-inspired naming conventions
- Built with accessibility and performance in mind

---

**Made with ❤️ for EternaCloud**

