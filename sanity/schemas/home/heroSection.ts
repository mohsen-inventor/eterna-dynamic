import { defineField, defineType } from 'sanity';
import { RocketIcon } from '@sanity/icons';

export default defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  icon: RocketIcon,
  fields: [
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'Gradient text (e.g., "Product Lifecycle Partner")',
      placeholder: 'Product Lifecycle Partner',
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      description: 'Main headline',
      placeholder: 'Design and build with ease.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      placeholder: 'EternaCloud is the service making execution simple and effective for data center teams.',
      rows: 2,
    }),
    defineField({
      name: 'videoUrl',
      title: 'Background Video URL',
      type: 'string',
      description: 'URL to background video (or upload in Media)',
      placeholder: '/videos/hero-bg.webm',
    }),
  ],
  preview: {
    select: {
      title: 'headline',
      subtitle: 'tagline',
    },
  },
});

