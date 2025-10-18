import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';

// Manually load .env.local to avoid dotenv issues
const envPath = path.resolve(process.cwd(), '.env.local');

if (fs.existsSync(envPath)) {
  let envContent = fs.readFileSync(envPath, 'utf-8');
  
  // Remove BOM and other invisible characters
  envContent = envContent.replace(/^\uFEFF/, '').replace(/^\ufeff/, '');
  
  const lines = envContent.split(/\r?\n/);
  
  for (const line of lines) {
    let trimmed = line.trim();
    trimmed = trimmed.replace(/[\uFEFF\ufeff]/g, '');
    
    if (trimmed && !trimmed.startsWith('#')) {
      const [key, ...valueParts] = trimmed.split('=');
      if (key && valueParts.length > 0) {
        const cleanKey = key.trim().replace(/[\uFEFF\ufeff]/g, '');
        const value = valueParts.join('=').trim();
        process.env[cleanKey] = value;
      }
    }
  }
}

// Debug info
console.log('🔍 Configuration:');
console.log('  Project ID:', process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'x0kdvbds');
console.log('  Dataset:', process.env.NEXT_PUBLIC_SANITY_DATASET || 'production');
console.log('  Token exists:', !!process.env.SANITY_API_TOKEN);
console.log('');

// Create Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'x0kdvbds',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
});

// ============================================
// Seed Data
// ============================================

const seedData = {
  // === GLOBAL SETTINGS ===
  
  siteInfo: {
    _type: 'siteInfo',
    _id: 'siteInfo',
    siteName: 'EternaCloud',
    siteTagline: 'Product Lifecycle Partner',
  },
  
  headerSettings: {
    _type: 'headerSettings',
    _id: 'headerSettings',
    ctaButtonText: "LET'S TALK",
    ctaButtonLink: '#contact',
  },
  
  mainMenu: {
    _type: 'mainMenu',
    _id: 'mainMenu',
    menuItems: [
      { _key: 'menu-what-we-do', title: 'What We Do', link: '#services', order: 1 },
      { _key: 'menu-our-approach', title: 'Our Approach', link: '#solutions', order: 2 },
      { _key: 'menu-about-us', title: 'About Us', link: '#process', order: 3 },
    ],
  },
  
  footerSettings: {
    _type: 'footerSettings',
    _id: 'footerSettings',
    footerText: '© 2025 EternaCloud. All rights reserved.',
    footerLinks: [
      { _key: 'footer-privacy', title: 'Privacy Policy', url: '/privacy' },
      { _key: 'footer-terms', title: 'Terms of Service', url: '/terms' },
      { _key: 'footer-contact', title: 'Contact', url: '/contact' },
    ],
    socialLinks: [
      { _key: 'social-twitter', platform: 'twitter', url: 'https://twitter.com/eternacloud' },
      { _key: 'social-linkedin', platform: 'linkedin', url: 'https://linkedin.com/company/eternacloud' },
    ],
  },
  
  seoSettings: {
    _type: 'seoSettings',
    _id: 'seoSettings',
    seoTitle: 'EternaCloud - Product Lifecycle Partner',
    seoDescription: 'Design and build with ease. EternaCloud is the service making execution simple and effective for data center teams.',
    seoKeywords: ['data center', 'hyperscale', 'cloud infrastructure', 'deployment', 'lifecycle management'],
  },
  
  // === HOME PAGE SECTIONS ===
  
  heroSection: {
    _type: 'heroSection',
    _id: 'heroSection',
    tagline: 'Product Lifecycle Partner',
    headline: 'Design and build with ease.',
    description: 'EternaCloud is the service making execution simple and effective for data center teams.',
    videoUrl: '/videos/hero-bg.webm',
  },
  
  servicesSection: {
    _type: 'servicesSection',
    _id: 'servicesSection',
    title: 'Trusted by hyperscale teams',
    tagline: 'from concept to completion.',
    description: 'For situational clarity through constant change. Proven on 330+ MW of data center builds.',
    services: [
      {
        _key: 'service-design',
        stage: 'Design',
        title: 'Solutions without the heavy lifting.',
        features: ['Dedicated specialists', 'Decision-ready solutions'],
        order: 1,
      },
      {
        _key: 'service-onboarding',
        stage: 'Onboarding',
        title: 'Vendors are kept on track for you.',
        features: ['Cross-organizational alignment', 'Follow-through ownership'],
        order: 2,
      },
      {
        _key: 'service-delivery',
        stage: 'Delivery',
        title: 'Get it right the first time—every time.',
        features: ['Expert-led execution', 'Change ownership'],
        order: 3,
      },
      {
        _key: 'service-deployment',
        stage: 'Deployment',
        title: 'Context always carries forward.',
        features: ['Clean handoffs', 'Turnkey outcomes'],
        order: 4,
      },
    ],
  },
  
  solutionsSection: {
    _type: 'solutionsSection',
    _id: 'solutionsSection',
    badgeText: 'Freedom',
    badgeIcon: 'heart',
    title: 'Stop playing catch up.',
    subtitle: 'Enjoy peace of mind.',
    problems: [
      'Fragmented context and facts spread across minds and orgs',
      'Inconsistent service experiences depending on the vendor',
      'Disruptive reactions to things that shouldn\'t be happening',
      'Repetitive double-checking to ensure details are accurate',
      'Overly-complex workloads drain capacity from high-value teams',
    ],
    solutions: [
      'Clear context and on-hand facts expedite decision-making',
      'Consistent service across vendors through one point of contact',
      'Unified layers of dependencies prevent risks and costly surprises',
      'Continual validations sync to your requirements at every stage',
      'Simple interactions with our teams give you ready-to-go deliverables',
    ],
    cosmosVideoUrl: '/videos/cosmos.webm',
  },
  
  processSection: {
    _type: 'processSection',
    _id: 'processSection',
    badgeText: 'Dependable Precision',
    badgeIcon: 'plus',
    title: 'One practical, holistic service.',
    tagline: 'Exponential daily value.',
    description: 'EternaCloud teams secure, align, validate and curate exactly what keeps your teams moving.',
    functions: [
      {
        _key: 'function-secures',
        name: 'Secures',
        items: ['requirements', 'expectations', 'context', 'facts'],
      },
      {
        _key: 'function-aligns',
        name: 'Aligns',
        items: ['dependencies', 'stakeholders', 'processes', 'vendors'],
      },
      {
        _key: 'function-validates',
        name: 'Validates',
        items: ['completeness', 'coherence', 'assurances', 'details'],
      },
      {
        _key: 'function-curates',
        name: 'Curates',
        items: ['deliverables', 'resolutions', 'initiatives', 'stages'],
      },
    ],
  },
};

// ============================================
// Seed Functions
// ============================================

async function seedDocument(docName: string, data: any) {
  console.log(`📝 Seeding ${docName}...`);
  
  try {
    await client.createOrReplace(data);
    console.log(`✅ ${docName} created`);
  } catch (error) {
    console.error(`❌ Error creating ${docName}:`, error);
    throw error;
  }
}

// ============================================
// Main Seed Function
// ============================================

async function seed() {
  console.log('🌱 Starting Sanity Seed...\n');
  
  try {
    // Seed Global Settings
    console.log('=== Global Settings ===');
    await seedDocument('Site Info', seedData.siteInfo);
    await seedDocument('Page Header', seedData.headerSettings);
    await seedDocument('Main Menu', seedData.mainMenu);
    await seedDocument('Page Footer', seedData.footerSettings);
    await seedDocument('SEO Settings', seedData.seoSettings);
    console.log('');
    
    // Seed Home Page Sections
    console.log('=== Home Page Sections ===');
    await seedDocument('Hero Section', seedData.heroSection);
    await seedDocument('Services Section', seedData.servicesSection);
    await seedDocument('Solutions Section', seedData.solutionsSection);
    await seedDocument('Process Section', seedData.processSection);
    console.log('');
    
    console.log('🎉 Seed completed successfully!');
    console.log('\n📊 Summary:');
    console.log('  ✅ 5 Global Settings documents');
    console.log('  ✅ 4 Home Page Section documents');
    console.log('\n🚀 Your Sanity CMS is now populated with all website data!');
    console.log('👉 Visit: http://localhost:3333 to view and edit');
  } catch (error) {
    console.error('\n❌ Seed failed:', error);
    process.exit(1);
  }
}

// Run seed
seed();
