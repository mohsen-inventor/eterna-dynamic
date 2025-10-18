import { defineField, defineType } from 'sanity';
import { ActivityIcon } from '@sanity/icons';

export default defineType({
  name: 'processSection',
  title: 'Process Section',
  type: 'document',
  icon: ActivityIcon,
  fields: [
    defineField({
      name: 'badgeText',
      title: 'Badge Text',
      type: 'string',
      placeholder: 'Dependable Precision',
    }),
    defineField({
      name: 'badgeIcon',
      title: 'Badge Icon',
      type: 'string',
      options: {
        list: [
          { title: 'Plus', value: 'plus' },
          { title: 'Check', value: 'check' },
          { title: 'Heart', value: 'heart' },
        ],
      },
      initialValue: 'plus',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      placeholder: 'One practical, holistic service.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'Gradient text',
      placeholder: 'Exponential daily value.',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      placeholder: 'EternaCloud teams secure, align, validate and curate exactly what keeps your teams moving.',
      rows: 2,
    }),
    defineField({
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
    }),
  ],
  preview: {
    select: {
      title: 'title',
      tagline: 'tagline',
    },
  },
});

