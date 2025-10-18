import { defineField, defineType } from 'sanity';
import { CogIcon } from '@sanity/icons';

export default defineType({
  name: 'siteInfo',
  title: 'Site Info',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      description: 'Your company/brand name',
      placeholder: 'EternaCloud',
      validation: (Rule) => Rule.required().max(50),
      initialValue: 'EternaCloud',
    }),
    defineField({
      name: 'siteTagline',
      title: 'Site Tagline',
      type: 'string',
      description: 'Short tagline or slogan',
      placeholder: 'Product Lifecycle Partner',
      validation: (Rule) => Rule.max(100),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      description: 'Site logo (SVG recommended)',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
      description: 'Browser tab icon (32x32px or larger)',
    }),
  ],
  preview: {
    select: {
      title: 'siteName',
      subtitle: 'siteTagline',
    },
  },
});

