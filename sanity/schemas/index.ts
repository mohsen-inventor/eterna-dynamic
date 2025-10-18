// ============================================
// Sanity Schemas - Clean & Organized
// ============================================
// Only includes schemas specific to this app

// Global site-wide settings
import globalSettings from './globalSettings';

// Page-level content (organized by page)
import homePage from './homePage';

// Reusable content elements
import serviceCard from './serviceCard';

// ============================================
// Export Schema Types
// ============================================
export const schemaTypes = [
  // 🌐 GLOBAL SETTINGS (site-wide)
  globalSettings,
  
  // 🏠 PAGES (page content)
  homePage,
  
  // 📦 ELEMENTS (reusable components)
  serviceCard,
];
