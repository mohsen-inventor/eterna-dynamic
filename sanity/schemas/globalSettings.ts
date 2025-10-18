import { defineField, defineType } from 'sanity';
import { CogIcon } from '@sanity/icons';

export default defineType({
  name: 'globalSettings',
  title: '🌐 Global Settings',
  type: 'document',
  icon: CogIcon,
  groups: [
    {
      name: 'site',
      title: 'Site Info',
    },
    {
      name: 'seo',
      title: 'SEO & Meta',
    },
    {
      name: 'social',
      title: 'Social Media',
    },
  ],
  fields: [
    // Site Info
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      group: 'site',
      description: 'Your company/brand name',
      placeholder: 'EternaCloud',
      validation: (Rule) => Rule.required().max(50),
      initialValue: 'EternaCloud',
    }),
    defineField({
      name: 'siteTagline',
      title: 'Site Tagline',
      type: 'string',
      group: 'site',
      description: 'Short tagline or slogan',
      placeholder: 'Product Lifecycle Partner',
      validation: (Rule) => Rule.max(100),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      group: 'site',
      description: 'Site logo (SVG recommended)',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
      group: 'site',
      description: 'Browser tab icon (32x32px or larger)',
    }),
    
    // SEO
    defineField({
      name: 'seoTitle',
      title: 'Default SEO Title',
      type: 'string',
      group: 'seo',
      description: 'Default title for search engines',
      placeholder: 'EternaCloud - Product Lifecycle Partner',
      validation: (Rule) => Rule.max(60),
    }),
    defineField({
      name: 'seoDescription',
      title: 'Default SEO Description',
      type: 'text',
      group: 'seo',
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
      group: 'seo',
      description: 'Keywords for SEO (separate with commas)',
      options: {
        layout: 'tags',
      },
    }),
    
    // Social Media
    defineField({
      name: 'ogImage',
      title: 'Social Share Image',
      type: 'image',
      group: 'social',
      description: 'Default image when sharing on social media (1200x630px)',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'twitterHandle',
      title: 'Twitter Handle',
      type: 'string',
      group: 'social',
      description: '@username',
      placeholder: '@eternacloud',
    }),
  ],
  preview: {
    select: {
      title: 'siteName',
      subtitle: 'siteTagline',
    },
  },
});

