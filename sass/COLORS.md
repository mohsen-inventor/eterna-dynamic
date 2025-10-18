# EternaCloud Color System

Comprehensive color palette and usage guide.

## 🎨 Color Philosophy

Our color system follows a **two-tier approach**:
1. **Base Palette**: Colors defined by their actual name (e.g., `$purple-500`)
2. **Semantic Layer**: Functional aliases that reference base colors (e.g., `$interactive-primary`)

This structure provides:
- **Consistency**: Single source of truth for each color
- **Flexibility**: Easy to rebrand by changing base colors
- **Clarity**: Semantic names convey purpose

---

## 📊 Base Color Palette

### Grayscale
```scss
$white:     #ffffff    // Pure white
$black:     #000000    // Pure black
$gray-50:   #f9fafb    // Lightest gray
$gray-100:  #f5f5f5    // Very light
$gray-200:  #e5e7eb    // Light
$gray-300:  #d1d5db    // 
$gray-400:  #9ca3af    // 
$gray-500:  #6b7280    // Medium
$gray-600:  #666666    // 
$gray-700:  #4b5563    // 
$gray-800:  #333333    // Dark
$gray-900:  #1a1a1a    // Very dark
$gray-950:  #0a0a0a    // Almost black
```

### Purple (Brand Color)
```scss
$purple-300: #c4b5fd   // Light purple
$purple-400: #a78bfa   // 
$purple-500: #8B5CF6   // ⭐ Main brand purple
$purple-600: #7c3aed   // Dark purple
$purple-700: #6d28d9   // Darker purple
```

### Blue
```scss
$blue-300:   #93c5fd   // Light blue
$blue-400:   #60a5fa   // 
$blue-500:   #3B82F6   // ⭐ Main blue (gradients)
$blue-600:   #2563eb   // Dark blue
$blue-700:   #1d4ed8   // Darker blue
```

### Indigo
```scss
$indigo-400: #818cf8   // 
$indigo-500: #6366f1   // ⭐ Main indigo
$indigo-600: #4f46e5   // Dark indigo
$indigo-700: #4338ca   // Darker indigo
```

### Cyan (Accent)
```scss
$cyan-300:   #67e8f9   // Light cyan
$cyan-400:   #22d3ee   // 
$cyan-500:   #00D4FF   // ⭐ Main accent cyan
$cyan-600:   #0891b2   // Dark cyan
```

### Orange/Amber
```scss
$orange-400: #fb923c   // 
$orange-500: #F59E0B   // ⭐ Main orange (gradients)
$orange-600: #ea580c   // Dark orange
```

### Navy
```scss
$navy-500:   #2A2A60   // Main navy
$navy-600:   #1e1e4a   // Dark navy
```

---

## 🎯 Semantic Colors

### Primary Brand
```scss
$primary-color:   $gray-900      // #1a1a1a - Main brand color
$secondary-color: $white         // #ffffff - Secondary/contrast
$accent-color:    $cyan-500      // #00d4ff - Accent highlights
```

**Usage**: Logos, primary text, main UI elements

### Interactive Elements
```scss
$interactive-primary: $purple-500  // #8B5CF6 - Buttons, links
$interactive-hover:   $purple-600  // #7c3aed - Hover states
$interactive-active:  $purple-700  // #6d28d9 - Active/pressed
```

**Usage**: Buttons, interactive cards, checkmarks, links

**Example**:
```scss
.button {
  background: $interactive-primary;
  
  &:hover {
    background: $interactive-hover;
  }
  
  &:active {
    background: $interactive-active;
  }
}
```

### Gradients
```scss
$gradient-start: $blue-500     // #3B82F6
$gradient-mid:   $purple-500   // #8B5CF6
$gradient-end:   $orange-500   // #F59E0B
$gradient-cyan:  $cyan-500     // #00D4FF
```

**Usage**: Gradient text, gradient backgrounds, buttons

**Example**:
```scss
.gradient-text {
  background: linear-gradient(90deg, 
    $gradient-cyan 0%, 
    $gradient-mid 50%, 
    $gradient-end 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.gradient-button {
  background: linear-gradient(90deg, 
    $gradient-start 0%, 
    $gradient-mid 100%
  );
}
```

### Text Colors
```scss
$text-color:   $gray-800             // #333333 - Body text
$text-light:   $gray-600             // #666666 - Secondary text
$text-lighter: $gray-500             // #6b7280 - Tertiary text
$text-muted:   rgba($gray-600, 0.6)  // Muted/disabled text
```

**Usage**: All text content

**Example**:
```scss
h1 { color: $text-color; }
p { color: $text-light; }
.caption { color: $text-lighter; }
.disabled { color: $text-muted; }
```

### Backgrounds
```scss
$bg-dark:    $gray-950            // #0a0a0a - Dark sections
$bg-light:   $gray-100            // #f5f5f5 - Light sections
$bg-card:    $white               // #ffffff - Card backgrounds
$bg-overlay: rgba($black, 0.5)   // Modal overlays
```

### Borders
```scss
$border-light:       rgba($black, 0.05)         // Very subtle
$border-medium:      rgba($black, 0.1)          // Subtle
$border-dark:        rgba($black, 0.2)          // Visible
$border-interactive: rgba($purple-500, 0.2)    // Interactive elements
```

---

## 📖 Usage Examples

### Service Cards
```scss
.service-card {
  background: rgba($black, 0.4);
  border: 1px solid $border-interactive;
  
  &:hover {
    border-color: rgba($interactive-primary, 0.4);
  }
  
  &--active {
    background: linear-gradient(135deg, 
      $interactive-primary 0%, 
      $interactive-hover 100%
    );
  }
}

.service-card__check {
  color: $interactive-primary;
  background: rgba($interactive-primary, 0.1);
}
```

### Glass Morphism
```scss
.glass-navbar {
  background: rgba($white, 0.72);
  border: 1px solid rgba($white, 0.18);
  backdrop-filter: blur(20px) saturate(180%);
}
```

### Solutions Cards
```scss
.solutions__card-icon {
  &--negative {
    color: $gray-500;  // Muted for problems
  }
  
  &--positive {
    color: $interactive-primary;  // Purple for solutions
  }
}
```

---

## 🎨 Color Combinations

### Recommended Pairings

**Primary Action**
- Background: `$interactive-primary` (#8B5CF6)
- Text: `$white`
- Border: `$border-interactive`

**Secondary Action**
- Background: `transparent`
- Text: `$interactive-primary`
- Border: `2px solid $interactive-primary`

**Gradient Text**
- Colors: `$gradient-cyan` → `$gradient-mid` → `$gradient-end`
- Background clip: text

**Dark Section**
- Background: `$bg-dark` (#0a0a0a)
- Text: `$white`
- Muted text: `rgba($white, 0.6)`

**Light Section**
- Background: `$white`
- Text: `$text-color`
- Muted text: `$text-light`

---

## ⚠️ Important Rules

1. **Always use base palette colors**
   - ✅ `color: $purple-500;`
   - ❌ `color: #8B5CF6;`

2. **Use semantic names for context**
   - ✅ `background: $interactive-primary;`
   - ⚠️ `background: $purple-500;` (technically works but less semantic)

3. **Don't create new hex values**
   - If you need a new color, add it to the base palette first
   - Then create a semantic alias if needed

4. **Use alpha/transparency consistently**
   - ✅ `rgba($purple-500, 0.1)`
   - ✅ `rgba($black, 0.5)`

5. **Document custom color uses**
   - If creating a new semantic color, document its purpose

---

## 🔄 Changing the Brand Color

To rebrand, simply update the base palette:

```scss
// Change from purple to green
$purple-500: #10b981;  // Now it's green-500
$purple-600: #059669;  // Darker green

// All semantic references automatically update!
$interactive-primary: $purple-500;  // Now uses green
```

---

## 📚 Quick Reference

| Use Case | Color Variable |
|----------|---------------|
| Buttons | `$interactive-primary` |
| Button hover | `$interactive-hover` |
| Links | `$interactive-primary` |
| Gradient start | `$gradient-start` |
| Gradient mid | `$gradient-mid` |
| Gradient end | `$gradient-end` |
| Accent highlight | `$accent-color` |
| Body text | `$text-color` |
| Secondary text | `$text-light` |
| Muted text | `$text-muted` |
| Dark bg | `$bg-dark` |
| Light bg | `$bg-light` |
| Card bg | `$bg-card` |
| Subtle border | `$border-light` |
| Visible border | `$border-medium` |

---

**Last Updated**: 2024
**Maintained By**: EternaCloud Team

