import { Header, Hero, Services, Solutions, Process } from '@/components';
import GSAPLoader from '@/components/GSAPLoader';
import SmoothScroll from '@/components/SmoothScroll';
import { getHomePageData } from '@/lib/sanity/queries';
import {
  fallbackHeroData,
  fallbackServicesData,
  fallbackSolutionsData,
  fallbackProcessData,
} from '@/lib/fallbackData';

export const dynamic = 'force-dynamic'; // Disable caching, always fetch fresh data

export default async function Home() {
  // Fetch data from Sanity CMS
  const { settings, servicesSection, services, solutionsSection, processSection } = await getHomePageData();

  // Merge Sanity data with fallback data
  const heroData = {
    tagline: settings?.heroTagline || fallbackHeroData.tagline,
    headline: settings?.heroHeadline || fallbackHeroData.headline,
    description: settings?.heroDescription || fallbackHeroData.description,
  };

  const servicesData = {
    title: servicesSection?.title || fallbackServicesData.title,
    tagline: servicesSection?.tagline || fallbackServicesData.tagline,
    description: servicesSection?.description || fallbackServicesData.description,
    services: services && services.length > 0 ? services : fallbackServicesData.services,
  };

  const solutionsData = {
    badgeText: solutionsSection?.badgeText || fallbackSolutionsData.badgeText,
    title: solutionsSection?.title || fallbackSolutionsData.title,
    subtitle: solutionsSection?.subtitle || fallbackSolutionsData.subtitle,
    problems: solutionsSection?.problems || fallbackSolutionsData.problems,
    solutions: solutionsSection?.solutions || fallbackSolutionsData.solutions,
  };

  const processData = {
    badgeText: processSection?.badgeText || fallbackProcessData.badgeText,
    title: processSection?.title || fallbackProcessData.title,
    tagline: processSection?.tagline || fallbackProcessData.tagline,
    description: processSection?.description || fallbackProcessData.description,
    functions: processSection?.functions || fallbackProcessData.functions,
  };

  return (
    <>
      <GSAPLoader />
      <SmoothScroll />
      <Header />
      
      <main id="main-content">
        {/* Hero Section */}
        <Hero {...heroData} />

        {/* Services Section */}
        <Services {...servicesData} />

        {/* Solutions Section */}
        <Solutions {...solutionsData} />

        {/* Process Section */}
        <Process {...processData} />
      </main>
    </>
  );
}
