import { client } from './client';

// ============================================
// Sanity Queries - Organized by Content Type
// ============================================

// --------------------------------------------
// GLOBAL SETTINGS
// --------------------------------------------
export async function getSiteInfo() {
  const query = `*[_type == "siteInfo"][0]{
    siteName,
    siteTagline,
    "logoUrl": logo.asset->url,
    "faviconUrl": favicon.asset->url
  }`;
  
  return await client.fetch(query);
}

export async function getHeaderSettings() {
  const query = `*[_type == "headerSettings"][0]{
    "headerLogoUrl": headerLogo.asset->url,
    ctaButtonText,
    ctaButtonLink
  }`;
  
  return await client.fetch(query);
}

export async function getMainMenu() {
  const query = `*[_type == "mainMenu"][0]{
    menuItems[] | order(order asc) {
      title,
      link,
      order
    }
  }`;
  
  return await client.fetch(query);
}

export async function getFooterSettings() {
  const query = `*[_type == "footerSettings"][0]{
    footerText,
    footerLinks[] {
      title,
      url
    },
    socialLinks[] {
      platform,
      url
    }
  }`;
  
  return await client.fetch(query);
}

export async function getSEOSettings() {
  const query = `*[_type == "seoSettings"][0]{
    seoTitle,
    seoDescription,
    seoKeywords,
    "ogImageUrl": ogImage.asset->url,
    twitterHandle
  }`;
  
  return await client.fetch(query);
}

// --------------------------------------------
// HOME PAGE SECTIONS
// --------------------------------------------
export async function getHeroSection() {
  const query = `*[_type == "heroSection"][0]{
    tagline,
    headline,
    description,
    videoUrl
  }`;
  
  return await client.fetch(query);
}

export async function getServicesSection() {
  const query = `*[_type == "servicesSection"][0]{
    title,
    tagline,
    description,
    services[] | order(order asc) {
      stage,
      title,
      features,
      order
    }
  }`;
  
  return await client.fetch(query);
}

export async function getSolutionsSection() {
  const query = `*[_type == "solutionsSection"][0]{
    badgeText,
    badgeIcon,
    title,
    subtitle,
    problems,
    solutions,
    cosmosVideoUrl
  }`;
  
  return await client.fetch(query);
}

export async function getProcessSection() {
  const query = `*[_type == "processSection"][0]{
    badgeText,
    badgeIcon,
    title,
    tagline,
    description,
    functions[] {
      name,
      items
    }
  }`;
  
  return await client.fetch(query);
}

// --------------------------------------------
// COMBINED QUERY FOR HOME PAGE DATA
// (For backward compatibility with current app)
// --------------------------------------------
export async function getHomePageData() {
  const [
    heroData,
    servicesData,
    solutionsData,
    processData,
  ] = await Promise.all([
    getHeroSection(),
    getServicesSection(),
    getSolutionsSection(),
    getProcessSection(),
  ]);
  
  return {
    settings: {
      heroTagline: heroData?.tagline,
      heroHeadline: heroData?.headline,
      heroDescription: heroData?.description,
    },
    servicesSection: {
      title: servicesData?.title,
      tagline: servicesData?.tagline,
      description: servicesData?.description,
    },
    services: servicesData?.services || [],
    solutionsSection: {
      badgeText: solutionsData?.badgeText,
      title: solutionsData?.title,
      subtitle: solutionsData?.subtitle,
      problems: solutionsData?.problems,
      solutions: solutionsData?.solutions,
    },
    processSection: {
      badgeText: processData?.badgeText,
      title: processData?.title,
      tagline: processData?.tagline,
      description: processData?.description,
      functions: processData?.functions,
    },
  };
}
