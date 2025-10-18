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
    'Fragmented context across teams',
    'Inconsistent vendor experiences',
    'Disruptive reactions to issues',
    'Repetitive double-checking',
    'Complex workloads drain capacity',
  ],
  solutions: [
    'Clear context expedites decisions',
    'Consistent service across vendors',
    'Unified dependencies prevent risks',
    'Continual validations sync requirements',
    'Simple interactions, ready deliverables',
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

