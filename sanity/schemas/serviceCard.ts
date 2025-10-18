import { defineField, defineType } from 'sanity';
import { BlockElementIcon } from '@sanity/icons';

export default defineType({
  name: 'serviceCard',
  title: 'Service Card',
  type: 'document',
  icon: BlockElementIcon,
  fields: [
    defineField({
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
    }),
    defineField({
      name: 'title',
      title: 'Card Title',
      type: 'string',
      description: 'Main value proposition',
      placeholder: 'Solutions without the heavy lifting.',
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: 'features',
      title: 'Key Features',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of key features (2 recommended for best visual)',
      validation: (Rule) => Rule.required().min(1).max(3),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in grid (1-4)',
      validation: (Rule) => Rule.required().min(1).max(4).integer(),
      initialValue: 1,
    }),
    defineField({
      name: 'isPublished',
      title: 'Published',
      type: 'boolean',
      description: 'Show this card on the website',
      initialValue: true,
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: 'Stage',
      name: 'stageAsc',
      by: [{ field: 'stage', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      stage: 'stage',
      title: 'title',
      order: 'order',
      isPublished: 'isPublished',
    },
    prepare({ stage, title, order, isPublished }) {
      return {
        title: `${order}. ${stage}${!isPublished ? ' (Draft)' : ''}`,
        subtitle: title,
        media: BlockElementIcon,
      };
    },
  },
});

