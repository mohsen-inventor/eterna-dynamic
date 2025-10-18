import { client } from '@/lib/sanity/client';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Services from '@/components/Services/Services';
import Solutions from '@/components/Solutions/Solutions';
import Process from '@/components/Process/Process';
import AnimationInit from '@/components/AnimationInit/AnimationInit';

async function getHomePageData() {
  const [settings, servicesSection, services, solutionsSection, processSection] = await Promise.all([
    client.fetch(`*[_type == "siteSettings"][0]{
      heroTagline,
      heroHeadline,
      heroDescription
    }`),
    client.fetch(`*[_type == "servicesSection"][0]{
      title,
      tagline,
      description
    }`),
    client.fetch(`*[_type == "service"] | order(order asc){
      _id,
      stage,
      title,
      features,
      order
    }`),
    client.fetch(`*[_type == "solutionsSection"][0]{
      badgeText,
      title,
      subtitle,
      problems,
      solutions
    }`),
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

export default async function Home() {
  const { settings, servicesSection, services, solutionsSection, processSection } = await getHomePageData();

  // Default service cards
  const defaultServices = [
    {
      _id: '1',
      stage: 'Design',
      title: 'Solutions without the heavy lifting.',
      features: ['Dedicated specialists', 'Decision-ready solutions'],
      order: 1
    },
    {
      _id: '2',
      stage: 'Onboarding',
      title: 'Vendors are kept on track for you.',
      features: ['Cross-organizational alignment', 'Follow-through ownership'],
      order: 2
    },
    {
      _id: '3',
      stage: 'Delivery',
      title: 'Get it right the first time—every time.',
      features: ['Expert-led execution', 'Change ownership'],
      order: 3
    },
    {
      _id: '4',
      stage: 'Deployment',
      title: 'Context always carries forward.',
      features: ['Clean handoffs', 'Turnkey outcomes'],
      order: 4
    }
  ];

  const defaultProblems = [
    'Fragmented context and facts spread across minds and orgs',
    'Inconsistent service experiences depending on the vendor',
    'Disruptive reactions to things that shouldn\'t be happening',
    'Repetitive double-checking to ensure details are accurate',
    'Overly-complex workloads drain capacity from high-value teams'
  ];

  const defaultSolutions = [
    'Clear context and on-hand facts expedite decision-making',
    'Consistent service across vendors through one point of contact',
    'Unified layers of dependencies prevent risks and costly surprises',
    'Continual validations sync to your requirements at every stage',
    'Simple interactions with our teams give you ready-to-go deliverables'
  ];

  return (
    <>
      <Header />
      <AnimationInit />
      
      <main id="main-content">
        {/* Hero Section */}
        <Hero
          tagline={settings?.heroTagline || 'Product Lifecycle Partner'}
          headline={settings?.heroHeadline || 'Design and build with ease.'}
          description={settings?.heroDescription || 'EternaCloud is the service making execution simple and effective for data center teams.'}
        />

        {/* Services Section */}
        <Services
          title={servicesSection?.title || 'Trusted by hyperscale teams'}
          tagline={servicesSection?.tagline || 'from concept to completion.'}
          description={servicesSection?.description || 'For situational clarity through constant change. Proven on 330+ MW of data center builds.'}
          services={services && services.length > 0 ? services : defaultServices}
        />

        {/* Solutions Section */}
        <Solutions
          badgeText={solutionsSection?.badgeText || 'Freedom'}
          title={solutionsSection?.title || 'Stop playing catch up.'}
          subtitle={solutionsSection?.subtitle || 'Enjoy peace of mind.'}
          problems={solutionsSection?.problems || defaultProblems}
          solutions={solutionsSection?.solutions || defaultSolutions}
        />

        {/* Process Section */}
        <Process
          badgeText={processSection?.badgeText || 'Dependable Precision'}
          title={processSection?.title || 'One practical, holistic service.'}
          tagline={processSection?.tagline || 'Exponential daily value.'}
          description={processSection?.description || 'EternaCloud teams secure, align, validate and curate exactly what keeps your teams moving.'}
          functions={processSection?.functions || [
            { name: 'Secures', items: ['requirements', 'expectations', 'context', 'facts'] },
            { name: 'Aligns', items: ['dependencies', 'stakeholders', 'processes', 'vendors'] },
            { name: 'Validates', items: ['completeness', 'coherence', 'assurances', 'details'] },
            { name: 'Curates', items: ['deliverables', 'resolutions', 'initiatives', 'stages'] }
          ]}
        />
      </main>
    </>
  );
}
