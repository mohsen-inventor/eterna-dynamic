// ============================================
// Fallback Data for Homepage
// Used when Sanity CMS data is not available
// ============================================

export const fallbackHeroData = {
  tagline: 'Product Lifecycle Partner',
  headline: 'Design and build with ease.',
  description: 'EternaCloud is the service making execution simple and effective for data center teams.',
};

export const fallbackServicesData = {
  title: 'Trusted by hyperscale teams',
  tagline: 'from concept to completion.',
  description: 'For situational clarity through constant change. Proven on 330+ MW of data center builds.',
  services: [
    {
      _id: '1',
      stage: 'Design',
      title: 'Solutions without the heavy lifting.',
      features: ['Dedicated specialists', 'Decision-ready solutions'],
      order: 1,
    },
    {
      _id: '2',
      stage: 'Onboarding',
      title: 'Vendors are kept on track for you.',
      features: ['Cross-organizational alignment', 'Follow-through ownership'],
      order: 2,
    },
    {
      _id: '3',
      stage: 'Delivery',
      title: 'Get it right the first time—every time.',
      features: ['Expert-led execution', 'Change ownership'],
      order: 3,
    },
    {
      _id: '4',
      stage: 'Deployment',
      title: 'Context always carries forward.',
      features: ['Clean handoffs', 'Turnkey outcomes'],
      order: 4,
    },
  ],
};

export const fallbackSolutionsData = {
  badgeText: 'Freedom',
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
};

export const fallbackProcessData = {
  badgeText: 'Dependable Precision',
  title: 'One practical, holistic service.',
  tagline: 'Exponential daily value.',
  description: 'EternaCloud teams secure, align, validate and curate exactly what keeps your teams moving.',
  functions: [
    {
      name: 'Secures',
      items: ['requirements', 'expectations', 'context', 'facts'],
    },
    {
      name: 'Aligns',
      items: ['dependencies', 'stakeholders', 'processes', 'vendors'],
    },
    {
      name: 'Validates',
      items: ['completeness', 'coherence', 'assurances', 'details'],
    },
    {
      name: 'Curates',
      items: ['deliverables', 'resolutions', 'initiatives', 'stages'],
    },
  ],
};

