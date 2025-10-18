import { client } from './client';

// ============================================
// Sanity Queries - Organized by Content Type
// ============================================

// --------------------------------------------
// GLOBAL SETTINGS
// --------------------------------------------
export async function getGlobalSettings() {
  const query = `*[_type == "globalSettings"][0]{
    siteName,
    siteTagline,
    seoTitle,
    seoDescription,
    seoKeywords,
    "ogImageUrl": ogImage.asset->url,
    twitterHandle
  }`;
  
  return await client.fetch(query);
}

// --------------------------------------------
// HOME PAGE (All sections in one document)
// --------------------------------------------
export async function getHomePage() {
  const query = `*[_type == "homePage"][0]{
    // Hero Section
    heroSection {
      tagline,
      headline,
      description,
      videoUrl
    },
    
    // Services Section
    servicesSection {
      title,
      tagline,
      description,
      "services": services[]-> {
        _id,
        stage,
        title,
        features,
        order,
        isPublished
      }
    },
    
    // Solutions Section
    solutionsSection {
      badge {
        text,
        icon
      },
      title,
      subtitle,
      problems,
      solutions,
      cosmosVideoUrl
    },
    
    // Process Section
    processSection {
      badge {
        text,
        icon
      },
      title,
      tagline,
      description,
      functions[] {
        name,
        items
      }
    }
  }`;
  
  return await client.fetch(query);
}

// --------------------------------------------
// SERVICE CARDS (Individual elements)
// --------------------------------------------
export async function getServiceCards() {
  const query = `*[_type == "serviceCard" && isPublished == true] | order(order asc) {
    _id,
    stage,
    title,
    features,
    order
  }`;
  
  return await client.fetch(query);
}

// --------------------------------------------
// COMBINED QUERY FOR HOME PAGE DATA
// (For backward compatibility with current app)
// --------------------------------------------
export async function getHomePageData() {
  const homeData = await getHomePage();
  
  if (!homeData) {
    return {
      settings: null,
      servicesSection: null,
      services: [],
      solutionsSection: null,
      processSection: null,
    };
  }
  
  return {
    settings: {
      heroTagline: homeData.heroSection?.tagline,
      heroHeadline: homeData.heroSection?.headline,
      heroDescription: homeData.heroSection?.description,
    },
    servicesSection: {
      title: homeData.servicesSection?.title,
      tagline: homeData.servicesSection?.tagline,
      description: homeData.servicesSection?.description,
    },
    services: homeData.servicesSection?.services?.filter((s: any) => s.isPublished !== false) || [],
    solutionsSection: {
      badgeText: homeData.solutionsSection?.badge?.text,
      title: homeData.solutionsSection?.title,
      subtitle: homeData.solutionsSection?.subtitle,
      problems: homeData.solutionsSection?.problems,
      solutions: homeData.solutionsSection?.solutions,
    },
    processSection: {
      badgeText: homeData.processSection?.badge?.text,
      title: homeData.processSection?.title,
      tagline: homeData.processSection?.tagline,
      description: homeData.processSection?.description,
      functions: homeData.processSection?.functions,
    },
  };
}
