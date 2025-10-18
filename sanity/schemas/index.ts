import page from './page';
import post from './post';
import siteSettings from './siteSettings';
import service from './service';
import servicesSection from './servicesSection';
import solutionsSection from './solutionsSection';
import processSection from './processSection';

export const schemaTypes = [
  // Site content
  siteSettings,
  
  // Sections
  servicesSection,
  solutionsSection,
  processSection,
  
  // Individual items
  service,
  
  // Pages & Blog
  page,
  post,
];
