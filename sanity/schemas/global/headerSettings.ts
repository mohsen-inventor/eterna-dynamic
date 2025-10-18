import { defineField, defineType } from 'sanity';
import { DesktopIcon } from '@sanity/icons';

export default defineType({
  name: 'headerSettings',
  title: 'Header & Navigation',
  type: 'document',
  icon: DesktopIcon,
  fields: [
    defineField({
      name: 'headerLogo',
      title: 'Header Logo',
      type: 'image',
      description: 'Logo displayed in the header/navbar',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'ctaButtonText',
      title: 'CTA Button Text',
      type: 'string',
      description: 'Text for the main call-to-action button in header',
      placeholder: "LET'S TALK",
      initialValue: "LET'S TALK",
    }),
    defineField({
      name: 'ctaButtonLink',
      title: 'CTA Button Link',
      type: 'string',
      description: 'Link for the CTA button (e.g., #contact, /contact)',
      placeholder: '#contact',
      initialValue: '#contact',
    }),
  ],
  preview: {
    select: {
      title: 'ctaButtonText',
    },
    prepare({ title }) {
      return {
        title: 'Header & Navigation',
        subtitle: `CTA: ${title || "LET'S TALK"}`,
      };
    },
  },
});

