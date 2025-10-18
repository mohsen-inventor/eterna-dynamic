import { defineField, defineType } from 'sanity';
import { BlockContentIcon } from '@sanity/icons';

export default defineType({
  name: 'footerSettings',
  title: 'Page Footer',
  type: 'document',
  icon: BlockContentIcon,
  fields: [
    defineField({
      name: 'footerText',
      title: 'Footer Text',
      type: 'text',
      description: 'Copyright or general footer text',
      placeholder: '© 2025 EternaCloud. All rights reserved.',
      rows: 2,
    }),
    defineField({
      name: 'footerLinks',
      title: 'Footer Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Link Text',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'url',
              title: 'URL',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'url',
            },
          },
        },
      ],
      description: 'Links displayed in footer',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  { title: 'Twitter', value: 'twitter' },
                  { title: 'LinkedIn', value: 'linkedin' },
                  { title: 'Facebook', value: 'facebook' },
                  { title: 'Instagram', value: 'instagram' },
                  { title: 'GitHub', value: 'github' },
                ],
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (Rule) => Rule.required().uri({ scheme: ['http', 'https'] }),
            },
          ],
          preview: {
            select: {
              platform: 'platform',
              url: 'url',
            },
            prepare({ platform, url }) {
              return {
                title: platform?.charAt(0).toUpperCase() + platform?.slice(1),
                subtitle: url,
              };
            },
          },
        },
      ],
      description: 'Social media profile links',
    }),
  ],
  preview: {
    select: {
      text: 'footerText',
    },
    prepare({ text }) {
      return {
        title: 'Page Footer',
        subtitle: text || 'Configure footer content',
      };
    },
  },
});

