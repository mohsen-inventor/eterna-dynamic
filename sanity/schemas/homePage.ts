import { defineField, defineType } from 'sanity';
import { HomeIcon } from '@sanity/icons';

export default defineType({
  name: 'homePage',
  title: '🏠 Home Page',
  type: 'document',
  icon: HomeIcon,
  groups: [
    {
      name: 'hero',
      title: 'Hero Section',
    },
    {
      name: 'services',
      title: 'Services Section',
    },
    {
      name: 'solutions',
      title: 'Solutions Section',
    },
    {
      name: 'process',
      title: 'Process Section',
    },
  ],
  fields: [
    // === HERO SECTION ===
    defineField({
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      group: 'hero',
      fields: [
        {
          name: 'tagline',
          title: 'Tagline',
          type: 'string',
          description: 'Gradient text (e.g., "Product Lifecycle Partner")',
          placeholder: 'Product Lifecycle Partner',
        },
        {
          name: 'headline',
          title: 'Headline',
          type: 'string',
          description: 'Main headline',
          placeholder: 'Design and build with ease.',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          placeholder: 'EternaCloud is the service making execution simple and effective for data center teams.',
          rows: 2,
        },
        {
          name: 'videoUrl',
          title: 'Background Video URL',
          type: 'string',
          description: 'URL to background video (or upload in Media)',
          placeholder: '/videos/hero-bg.webm',
        },
      ],
    }),
    
    // === SERVICES SECTION ===
    defineField({
      name: 'servicesSection',
      title: 'Services Section',
      type: 'object',
      group: 'services',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          placeholder: 'Trusted by hyperscale teams',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'tagline',
          title: 'Tagline',
          type: 'string',
          description: 'Gradient text',
          placeholder: 'from concept to completion.',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          placeholder: 'For situational clarity through constant change. Proven on 330+ MW of data center builds.',
          rows: 2,
        },
        {
          name: 'services',
          title: 'Service Cards',
          type: 'array',
          of: [{ type: 'reference', to: [{ type: 'serviceCard' }] }],
          description: 'Select 4 service cards to display',
          validation: (Rule) => Rule.max(4),
        },
      ],
    }),
    
    // === SOLUTIONS SECTION ===
    defineField({
      name: 'solutionsSection',
      title: 'Solutions Section',
      type: 'object',
      group: 'solutions',
      fields: [
        {
          name: 'badge',
          title: 'Badge',
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Badge Text',
              type: 'string',
              placeholder: 'Freedom',
            },
            {
              name: 'icon',
              title: 'Icon Name',
              type: 'string',
              description: 'Icon to display (heart, plus, check, etc.)',
              options: {
                list: [
                  { title: 'Heart', value: 'heart' },
                  { title: 'Plus', value: 'plus' },
                  { title: 'Check', value: 'check' },
                  { title: 'Star', value: 'star' },
                ],
              },
            },
          ],
        },
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          placeholder: 'Stop playing catch up.',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
          description: 'Gradient text',
          placeholder: 'Enjoy peace of mind.',
        },
        {
          name: 'problems',
          title: 'Problems (Left Column)',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'List of problems (5 items recommended)',
          validation: (Rule) => Rule.min(1).max(6),
        },
        {
          name: 'solutions',
          title: 'Solutions (Right Column)',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'List of solutions (5 items recommended)',
          validation: (Rule) => Rule.min(1).max(6),
        },
        {
          name: 'cosmosVideoUrl',
          title: 'Cosmos Video URL',
          type: 'string',
          placeholder: '/videos/cosmos.webm',
        },
      ],
    }),
    
    // === PROCESS SECTION ===
    defineField({
      name: 'processSection',
      title: 'Process Section',
      type: 'object',
      group: 'process',
      fields: [
        {
          name: 'badge',
          title: 'Badge',
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Badge Text',
              type: 'string',
              placeholder: 'Dependable Precision',
            },
            {
              name: 'icon',
              title: 'Icon Name',
              type: 'string',
              options: {
                list: [
                  { title: 'Plus', value: 'plus' },
                  { title: 'Check', value: 'check' },
                  { title: 'Heart', value: 'heart' },
                ],
              },
            },
          ],
        },
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          placeholder: 'One practical, holistic service.',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'tagline',
          title: 'Tagline',
          type: 'string',
          description: 'Gradient text',
          placeholder: 'Exponential daily value.',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          placeholder: 'EternaCloud teams secure, align, validate and curate exactly what keeps your teams moving.',
          rows: 2,
        },
        {
          name: 'functions',
          title: 'Process Functions',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'name',
                  title: 'Function Name',
                  type: 'string',
                  description: 'e.g., Secures, Aligns, Validates, Curates',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'items',
                  title: 'Items',
                  type: 'array',
                  of: [{ type: 'string' }],
                  description: 'List items for this function (4 recommended)',
                  validation: (Rule) => Rule.min(1).max(5),
                },
              ],
              preview: {
                select: {
                  title: 'name',
                  items: 'items',
                },
                prepare({ title, items }) {
                  return {
                    title: title,
                    subtitle: items ? `${items.length} items` : '0 items',
                  };
                },
              },
            },
          ],
          description: '4 functions recommended (Secures, Aligns, Validates, Curates)',
          validation: (Rule) => Rule.max(4),
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Home Page',
        subtitle: 'Configure all home page sections',
      };
    },
  },
});

