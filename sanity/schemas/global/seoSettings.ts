import { defineField, defineType } from 'sanity';
import { SearchIcon } from '@sanity/icons';

export default defineType({
  name: 'seoSettings',
  title: 'SEO & Meta',
  type: 'document',
  icon: SearchIcon,
  fields: [
    defineField({
      name: 'seoTitle',
      title: 'Default SEO Title',
      type: 'string',
      description: 'Default title for search engines',
      placeholder: 'EternaCloud - Product Lifecycle Partner',
      validation: (Rule) => Rule.max(60),
    }),
    defineField({
      name: 'seoDescription',
      title: 'Default SEO Description',
      type: 'text',
      description: 'Default description for search engines (155-160 characters)',
      placeholder: 'Design and build with ease. EternaCloud is the service making execution simple and effective for data center teams.',
      rows: 3,
      validation: (Rule) => Rule.max(160),
    }),
    defineField({
      name: 'seoKeywords',
      title: 'SEO Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Keywords for SEO (separate with commas)',
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'ogImage',
      title: 'Social Share Image',
      type: 'image',
      description: 'Default image when sharing on social media (1200x630px)',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'twitterHandle',
      title: 'Twitter Handle',
      type: 'string',
      description: '@username',
      placeholder: '@eternacloud',
    }),
  ],
  preview: {
    select: {
      title: 'seoTitle',
    },
    prepare({ title }) {
      return {
        title: 'SEO & Meta',
        subtitle: title || 'Configure SEO settings',
      };
    },
  },
});

