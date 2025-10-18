# 🌱 Sanity Seed Instructions

## Overview

This guide will help you populate your Sanity CMS with all the existing website data.

---

## 📋 Prerequisites

1. **Sanity Project Setup** - Your Sanity project should be configured
2. **API Token** - You need a write token to seed data

---

## 🔑 Step 1: Get Your Sanity API Token

### Option A: Create Token via Sanity Manage

1. Go to https://www.sanity.io/manage
2. Select your project: **eterna-dynamic**
3. Click on **API** in the left sidebar
4. Click **Tokens** tab
5. Click **Add API token**
6. Fill in:
   - **Label**: `Seed Script Token`
   - **Permissions**: **Editor** (write access needed)
7. Click **Add token**
8. **Copy the token** (you won't see it again!)

### Option B: Create Token via CLI

```bash
cd sanity
npx sanity manage
```

Then follow the same steps as Option A in the browser that opens.

---

## 🔧 Step 2: Add Token to Environment Variables

Create or update `.env.local` in the **project root**:

```bash
# .env.local
NEXT_PUBLIC_SANITY_PROJECT_ID=x7x77v7d
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_token_here_replace_this
```

**⚠️ Important:** 
- Replace `your_token_here_replace_this` with your actual token
- Never commit this file to git (it's in `.gitignore`)

---

## 📦 Step 3: Install Dependencies

Install `tsx` to run the TypeScript seed script:

```bash
npm install --save-dev tsx
```

---

## 🚀 Step 4: Run the Seed Script

```bash
npm run sanity:seed
```

You should see:

```
🌱 Starting Sanity Seed...

📝 Seeding Global Settings...
✅ Global Settings created

📝 Seeding Service Cards...
✅ Service Card "Design" created
✅ Service Card "Onboarding" created
✅ Service Card "Delivery" created
✅ Service Card "Deployment" created

📝 Seeding Home Page...
✅ Home Page created

🎉 Seed completed successfully!

📊 Summary:
  ✅ 1 Global Settings document
  ✅ 1 Home Page document
  ✅ 4 Service Card documents

🚀 Your Sanity CMS is now populated with all website data!
👉 Visit: https://eternacloud.sanity.studio to view and edit
```

---

## ✅ Step 5: Verify in Sanity Studio

1. **Start Sanity Studio:**
   ```bash
   npm run sanity
   ```

2. **Open in browser:**
   ```
   http://localhost:3333
   ```

3. **Check the documents:**
   - 🌐 Global Settings
   - 🏠 Home Page (with all 4 sections)
   - 📦 Service Card (4 cards)

---

## 📝 What Gets Seeded?

### 1. **Global Settings**
- Site name: EternaCloud
- Tagline: Product Lifecycle Partner
- SEO title and description
- Keywords

### 2. **Home Page**
All 4 sections populated:

#### Hero Section
- Tagline: "Product Lifecycle Partner"
- Headline: "Design and build with ease."
- Description
- Video URL

#### Services Section
- Title: "Trusted by hyperscale teams"
- Tagline: "from concept to completion."
- Description
- Links to 4 service cards

#### Solutions Section
- Badge: "Freedom"
- Title: "Stop playing catch up."
- Subtitle: "Enjoy peace of mind."
- 5 Problems
- 5 Solutions
- Cosmos video URL

#### Process Section
- Badge: "Dependable Precision"
- Title: "One practical, holistic service."
- Tagline: "Exponential daily value."
- Description
- 4 Functions (Secures, Aligns, Validates, Curates)

### 3. **Service Cards** (4 cards)

1. **Design**
   - "Solutions without the heavy lifting."
   - Features: Dedicated specialists, Decision-ready solutions

2. **Onboarding**
   - "Vendors are kept on track for you."
   - Features: Cross-organizational alignment, Follow-through ownership

3. **Delivery**
   - "Get it right the first time—every time."
   - Features: Expert-led execution, Change ownership

4. **Deployment**
   - "Context always carries forward."
   - Features: Clean handoffs, Turnkey outcomes

---

## 🔄 Re-running the Seed

The seed script uses `createOrReplace`, so it's safe to run multiple times. It will:
- ✅ Update existing documents with the same `_id`
- ✅ Not create duplicates
- ✅ Preserve any manual edits if you run it again

To re-seed (will overwrite any changes):
```bash
npm run sanity:seed
```

---

## 🐛 Troubleshooting

### Error: "Missing token"
**Solution:** Make sure you added `SANITY_API_TOKEN` to `.env.local`

### Error: "Insufficient permissions"
**Solution:** Your token needs **Editor** permissions, not **Viewer**

### Error: "tsx: command not found"
**Solution:** Run `npm install --save-dev tsx`

### Error: "Project not found"
**Solution:** Check that `NEXT_PUBLIC_SANITY_PROJECT_ID` matches your project

---

## 📊 After Seeding

### View Your Data

1. **In Sanity Studio:**
   ```bash
   npm run sanity
   ```
   Visit http://localhost:3333

2. **On Your Website:**
   ```bash
   npm run dev
   ```
   Visit http://localhost:3000
   
   The website will now load data from Sanity CMS instead of fallback data!

### Edit Your Data

All content is now editable in Sanity Studio:
- 🌐 Global Settings → Site-wide settings
- 🏠 Home Page → All homepage sections
- 📦 Service Cards → Individual service cards

Changes publish in ~60 seconds (ISR revalidation).

---

## 🎉 Success!

Your Sanity CMS is now fully populated with all website content. You can:
- ✅ Edit content in Sanity Studio
- ✅ See changes on the website automatically
- ✅ Manage all content without touching code

**Next Steps:**
1. Start Sanity Studio: `npm run sanity`
2. Start Next.js app: `npm run dev`
3. Edit content and watch it update!

---

## 📚 Related Documentation

- [Sanity Content Guide](./CONTENT_GUIDE.md) - How to manage content
- [Sanity README](./README.md) - Schema organization
- [Next Sanity Docs](https://www.sanity.io/plugins/next-sanity) - Integration details

---

**Happy content managing!** 🚀

