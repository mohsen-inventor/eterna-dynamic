# 📝 Sanity CMS - Content Management Guide

## 🏗️ Content Structure Overview

Your content is organized in a **clean, hierarchical structure** for easy management:

```
Global Settings          ← Site-wide settings (logo, SEO, etc.)
    ↓
Pages                    ← Individual pages (Home, About, etc.)
    ↓
Sections                 ← Page sections (Hero, Services, etc.)
    ↓
Elements                 ← Content items (Service Cards, etc.)
```

---

## 🌐 1. Global Settings

**Location:** `🌐 Global Settings` in Sanity Studio

**What it controls:** Site-wide configuration that applies everywhere

### Fields:

| Field | Purpose | Example |
|-------|---------|---------|
| **Site Name** | Company/brand name | EternaCloud |
| **Site Tagline** | Company slogan | Product Lifecycle Partner |
| **Logo** | Site logo image | Upload SVG/PNG |
| **Favicon** | Browser tab icon | Upload 32x32px image |
| **SEO Title** | Default page title | EternaCloud - Product Lifecycle Partner |
| **SEO Description** | Default meta description | Design and build with ease... |
| **SEO Keywords** | Search keywords | cloud, data center, hyperscale |
| **Social Share Image** | Default social media image | 1200x630px image |
| **Twitter Handle** | Your Twitter username | @eternacloud |

**When to edit:** 
- ✅ Changing company branding
- ✅ Updating SEO settings
- ✅ Modifying social media info

---

## 🏠 2. Home Page

**Location:** `🏠 Home Page` in Sanity Studio

**What it controls:** All content on the homepage

### Structure:

```
Home Page
├── Hero Section
├── Services Section
├── Solutions Section
└── Process Section
```

### Editing by Section:

#### 📌 **Hero Section**
The top section with video background

**Fields:**
- **Tagline:** Gradient text above headline (e.g., "Product Lifecycle Partner")
- **Headline:** Main large text (e.g., "Design and build with ease.")
- **Description:** Supporting text below headline
- **Video URL:** Path to background video (e.g., `/videos/hero-bg.webm`)

**Tips:**
- Keep tagline concise (under 80 characters)
- Headline should be impactful and clear
- Video should be WebM format for best performance

---

#### 📌 **Services Section**
Grid of 4 service cards

**Fields:**
- **Title:** Section title (e.g., "Trusted by hyperscale teams")
- **Tagline:** Gradient text (e.g., "from concept to completion.")
- **Description:** Supporting text
- **Service Cards:** Select 4 service cards to display

**Managing Service Cards:**
1. Go to `Service Card` content type
2. Create/edit individual service cards
3. Each card has:
   - **Stage:** Design, Onboarding, Delivery, or Deployment
   - **Title:** Card headline
   - **Features:** 2-3 bullet points
   - **Order:** Display order (1-4)
   - **Published:** Toggle visibility

**Tips:**
- Keep exactly 4 cards for best layout
- Features list: 2 items looks best
- Order determines position (1 = first, 4 = last)

---

#### 📌 **Solutions Section**
Problems vs Solutions comparison

**Fields:**
- **Badge:**
  - Text: e.g., "Freedom"
  - Icon: Choose from heart, plus, check, star
- **Title:** Section title (e.g., "Stop playing catch up.")
- **Subtitle:** Gradient text (e.g., "Enjoy peace of mind.")
- **Problems:** Array of problem statements (left column, 5 recommended)
- **Solutions:** Array of solution statements (right column, 5 recommended)
- **Cosmos Video URL:** Center video path

**Tips:**
- Keep problems and solutions balanced (same count)
- 5 items per column is optimal
- Keep statements concise (under 100 characters)
- Problems show with ❌ icon, Solutions with ✅ icon

---

#### 📌 **Process Section**
4 process functions with flowing visualization

**Fields:**
- **Badge:**
  - Text: e.g., "Dependable Precision"
  - Icon: Choose from plus, check, heart
- **Title:** Section title (e.g., "One practical, holistic service.")
- **Tagline:** Gradient text (e.g., "Exponential daily value.")
- **Description:** Supporting text
- **Functions:** Array of 4 process functions
  - Each function has:
    - **Name:** e.g., Secures, Aligns, Validates, Curates
    - **Items:** 4 items for each function

**Tips:**
- Keep exactly 4 functions for visual design
- Each function should have 3-5 items
- Use single words for items (e.g., requirements, expectations)
- Order matters: left to right flow

---

## 📦 3. Content Elements

### Service Cards

**Location:** `Service Card` content type

**Purpose:** Reusable service cards used in Services Section

**Fields:**
| Field | Description | Validation |
|-------|-------------|------------|
| **Stage** | Design/Onboarding/Delivery/Deployment | Required, dropdown |
| **Title** | Card headline | Required, max 100 chars |
| **Features** | Bullet point list | 1-3 items |
| **Order** | Display position | 1-4 |
| **Published** | Show/hide card | Boolean |

**Best Practices:**
- ✅ Use dropdown for Stage (prevents typos)
- ✅ Keep title concise and value-focused
- ✅ Limit to 2 features for clean look
- ✅ Use Published toggle to hide without deleting

---

## 🎯 Content Editing Workflow

### Quick Edit Workflow:

```
1. Want to edit hero text?
   → Open 🏠 Home Page
   → Go to "Hero Section" tab
   → Edit fields
   → Save

2. Want to change a service card?
   → Open Service Card
   → Find the card by stage name
   → Edit content
   → Save
   
3. Want to update SEO?
   → Open 🌐 Global Settings
   → Go to "SEO & Meta" tab
   → Edit fields
   → Save
```

---

## 📊 Content Organization Benefits

### ✅ **1. Hierarchical Structure**
```
Before (Flat):
- Site Settings
- Services Section
- Solutions Section
- Process Section
- Service (individual)

After (Hierarchical):
🌐 Global Settings
🏠 Home Page
   ├─ Hero Section
   ├─ Services Section
   ├─ Solutions Section
   └─ Process Section
📦 Service Card (reusable elements)
```

### ✅ **2. Logical Grouping**
- **Global:** Settings that affect the whole site
- **Pages:** Content organized by page
- **Elements:** Reusable content items

### ✅ **3. Easy Navigation**
- All home content in one place
- Sections grouped within pages
- Clear visual hierarchy

### ✅ **4. Better UX**
- Icons help identify content types (🏠, 🌐, 📦)
- Field groups organize related fields
- Helpful descriptions on every field
- Preview shows what content will look like

---

## 🎨 Field Types Explained

### Simple Fields:
- **String:** Short text (titles, names)
- **Text:** Multi-line text (descriptions)
- **Number:** Numeric values (order, counts)
- **Boolean:** Yes/No toggles (published, active)

### Complex Fields:
- **Object:** Group of related fields
- **Array:** List of items (features, problems)
- **Reference:** Link to another document (service cards)
- **File:** Upload files (videos, PDFs)
- **Image:** Upload images (logos, backgrounds)

---

## 🚀 Quick Start Guide

### For Content Editors:

**1. First Time Setup:**
```
1. Open Sanity Studio: npm run sanity
2. Create 🌐 Global Settings document
3. Create 🏠 Home Page document
4. Create 4 Service Card documents
5. Link service cards to Home Page > Services Section
```

**2. Daily Editing:**
```
Most edits happen in 🏠 Home Page:
- Hero text changes → Hero Section tab
- Services content → Services Section tab
- Problems/Solutions → Solutions Section tab
- Process functions → Process Section tab
```

**3. Publishing:**
```
1. Make changes in Sanity Studio
2. Click "Publish" button
3. Wait 60 seconds for site to revalidate
4. Refresh website to see changes
```

---

## 📋 Content Checklist

### Initial Setup:
- [ ] Fill in Global Settings
- [ ] Create Home Page document
- [ ] Add Hero Section content
- [ ] Create 4 Service Cards
- [ ] Link Service Cards to Services Section
- [ ] Add Problems and Solutions lists
- [ ] Configure Process Functions

### Regular Maintenance:
- [ ] Review and update hero text quarterly
- [ ] Update service cards as offerings change
- [ ] Refresh problem/solution lists based on feedback
- [ ] Keep SEO keywords current

---

## 💡 Tips & Best Practices

### Content Writing:

**Hero Section:**
- ✅ Tagline: 3-5 words, value proposition
- ✅ Headline: Clear, action-oriented
- ✅ Description: 1-2 sentences max

**Service Cards:**
- ✅ Title: Benefit-focused, not feature-focused
- ✅ Features: 2 items (visual balance)
- ✅ Use active voice

**Solutions:**
- ✅ Problems: State pain points clearly
- ✅ Solutions: Show clear benefits
- ✅ Match 1:1 (same number of each)

### Technical:

**Images:**
- ✅ Use WebP or AVIF for best performance
- ✅ Compress before uploading
- ✅ Use descriptive filenames

**Videos:**
- ✅ WebM format recommended
- ✅ Keep under 10MB
- ✅ Optimize for web playback

**Text:**
- ✅ Keep titles under 100 characters
- ✅ Keep descriptions under 200 characters
- ✅ Use sentence case, not ALL CAPS

---

## 🔧 Schema Architecture

### Document Types:

```typescript
globalSettings (singleton)
  ├─ Site Info
  ├─ SEO Settings
  └─ Social Media

homePage (singleton)
  ├─ heroSection (object)
  ├─ servicesSection (object)
  │   └─ services (array of references)
  ├─ solutionsSection (object)
  └─ processSection (object)

serviceCard (multiple documents)
  ├─ stage
  ├─ title
  ├─ features
  ├─ order
  └─ isPublished
```

### Key Concepts:

**Singleton:** Only one document exists (Global Settings, Home Page)
**Multiple:** Many documents can exist (Service Cards, Blog Posts)
**Object:** Nested fields within a document
**Reference:** Link to another document
**Array:** List of items

---

## 📞 Support

### Common Questions:

**Q: How do I add a new service card?**
A: Click "+ Create" → Select "Service Card" → Fill in fields → Save → Link in Home Page

**Q: How do I reorder service cards?**
A: Edit each card's "Order" field (1, 2, 3, 4) → Save

**Q: How do I hide a service card?**
A: Edit the card → Toggle "Published" to OFF → Save

**Q: Changes not showing on website?**
A: Wait 60 seconds for revalidation, or restart the Next.js server

**Q: How do I change the hero video?**
A: Home Page → Hero Section → Video URL → Enter new path → Save

---

## ✅ Content Organization Summary

**Before:** Flat structure with separate documents for each section
**After:** Hierarchical structure organized by page

**Benefits:**
- ✅ Easier to find content
- ✅ Logical grouping
- ✅ Better content management UX
- ✅ Clear visual hierarchy
- ✅ Fewer documents to manage
- ✅ Consistent editing experience

---

**Need Help?** Refer to this guide or check the field descriptions in Sanity Studio.

**Status:** ✅ Organized & Ready for Content Management

