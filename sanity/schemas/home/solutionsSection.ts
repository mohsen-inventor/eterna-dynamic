import { defineField, defineType } from 'sanity';
import { BulbOutlineIcon } from '@sanity/icons';

export default defineType({
  name: 'solutionsSection',
  title: 'Solutions Section',
  type: 'document',
  icon: BulbOutlineIcon,
  fields: [
    defineField({
      name: 'badgeText',
      title: 'Badge Text',
      type: 'string',
      placeholder: 'Freedom',
    }),
    defineField({
      name: 'badgeIcon',
      title: 'Badge Icon',
      type: 'string',
      description: 'Icon to display in badge',
      options: {
        list: [
          { title: 'Heart', value: 'heart' },
          { title: 'Plus', value: 'plus' },
          { title: 'Check', value: 'check' },
          { title: 'Star', value: 'star' },
        ],
      },
      initialValue: 'heart',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      placeholder: 'Stop playing catch up.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Gradient text',
      placeholder: 'Enjoy peace of mind.',
    }),
    defineField({
      name: 'problems',
      title: 'Problems (Left Column)',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of problems (5 items recommended)',
      validation: (Rule) => Rule.min(1).max(6),
    }),
    defineField({
      name: 'solutions',
      title: 'Solutions (Right Column)',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of solutions (5 items recommended)',
      validation: (Rule) => Rule.min(1).max(6),
    }),
    defineField({
      name: 'cosmosVideoUrl',
      title: 'Cosmos Video URL',
      type: 'string',
      placeholder: '/videos/cosmos.webm',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
    },
  },
});

