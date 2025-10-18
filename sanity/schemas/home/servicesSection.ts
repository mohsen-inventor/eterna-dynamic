import { defineField, defineType } from 'sanity';
import { ComponentIcon } from '@sanity/icons';

export default defineType({
  name: 'servicesSection',
  title: 'Services Section',
  type: 'document',
  icon: ComponentIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      placeholder: 'Trusted by hyperscale teams',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'Gradient text',
      placeholder: 'from concept to completion.',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      placeholder: 'For situational clarity through constant change. Proven on 330+ MW of data center builds.',
      rows: 2,
    }),
    defineField({
      name: 'services',
      title: 'Service Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'stage',
              title: 'Service Stage',
              type: 'string',
              description: 'The stage name (Design, Onboarding, Delivery, Deployment)',
              validation: (Rule) => Rule.required(),
              options: {
                list: [
                  { title: '1. Design', value: 'Design' },
                  { title: '2. Onboarding', value: 'Onboarding' },
                  { title: '3. Delivery', value: 'Delivery' },
                  { title: '4. Deployment', value: 'Deployment' },
                ],
              },
            },
            {
              name: 'title',
              title: 'Card Title',
              type: 'string',
              description: 'Main value proposition',
              placeholder: 'Solutions without the heavy lifting.',
              validation: (Rule) => Rule.required().max(100),
            },
            {
              name: 'features',
              title: 'Key Features',
              type: 'array',
              of: [{ type: 'string' }],
              description: 'List of key features (2 recommended)',
              validation: (Rule) => Rule.required().min(1).max(3),
            },
            {
              name: 'order',
              title: 'Display Order',
              type: 'number',
              description: 'Order in grid (1-4)',
              validation: (Rule) => Rule.required().min(1).max(4).integer(),
              initialValue: 1,
            },
          ],
          preview: {
            select: {
              stage: 'stage',
              title: 'title',
              order: 'order',
            },
            prepare({ stage, title, order }) {
              return {
                title: `${order}. ${stage}`,
                subtitle: title,
              };
            },
          },
        },
      ],
      description: 'Add 4 service cards (Design, Onboarding, Delivery, Deployment)',
      validation: (Rule) => Rule.max(4),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      tagline: 'tagline',
    },
  },
});

