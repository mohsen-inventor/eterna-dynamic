import { client } from './client';

// ============================================
// Homepage Data Query
// ============================================

export async function getHomePageData() {
  const [settings, servicesSection, services, solutionsSection, processSection] = await Promise.all([
    // Site Settings (Hero Section)
    client.fetch(`*[_type == "siteSettings"][0]{
      heroTagline,
      heroHeadline,
      heroDescription
    }`),
    
    // Services Section Header
    client.fetch(`*[_type == "servicesSection"][0]{
      title,
      tagline,
      description
    }`),
    
    // Service Cards
    client.fetch(`*[_type == "service"] | order(order asc){
      _id,
      stage,
      title,
      features,
      order
    }`),
    
    // Solutions Section
    client.fetch(`*[_type == "solutionsSection"][0]{
      badgeText,
      title,
      subtitle,
      problems,
      solutions
    }`),
    
    // Process Section
    client.fetch(`*[_type == "processSection"][0]{
      badgeText,
      title,
      tagline,
      description,
      functions
    }`)
  ]);

  return {
    settings,
    servicesSection,
    services,
    solutionsSection,
    processSection
  };
}

// ============================================
// Example: Get all posts
// ============================================

export async function getAllPosts() {
  return client.fetch(`*[_type == "post"] | order(publishedAt desc){
    _id,
    title,
    slug,
    author->{
      name,
      image
    },
    mainImage,
    categories[]->{
      title
    },
    publishedAt
  }`);
}

// ============================================
// Example: Get single post by slug
// ============================================

export async function getPostBySlug(slug: string) {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      author->{
        name,
        image
      },
      mainImage,
      categories[]->{
        title
      },
      publishedAt,
      body
    }`,
    { slug }
  );
}

// ============================================
// Example: Get all pages
// ============================================

export async function getAllPages() {
  return client.fetch(`*[_type == "page"]{
    _id,
    title,
    slug
  }`);
}

