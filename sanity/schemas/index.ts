// ============================================
// Sanity Schemas - Organized Hierarchically
// ============================================
// Structure: Global Settings → Home Page Sections

// --------------------------------------------
// GLOBAL SETTINGS (Site-wide configuration)
// --------------------------------------------
import siteInfo from './global/siteInfo';
import headerSettings from './global/headerSettings';
import mainMenu from './global/mainMenu';
import footerSettings from './global/footerSettings';
import seoSettings from './global/seoSettings';

// --------------------------------------------
// HOME PAGE SECTIONS
// --------------------------------------------
import heroSection from './home/heroSection';
import servicesSection from './home/servicesSection';
import solutionsSection from './home/solutionsSection';
import processSection from './home/processSection';

// --------------------------------------------
// Export Schema Types
// --------------------------------------------
export const schemaTypes = [
  // === GLOBAL SETTINGS ===
  siteInfo,
  headerSettings,
  mainMenu,
  footerSettings,
  seoSettings,
  
  // === HOME PAGE SECTIONS ===
  heroSection,
  servicesSection,
  solutionsSection,
  processSection,
];
