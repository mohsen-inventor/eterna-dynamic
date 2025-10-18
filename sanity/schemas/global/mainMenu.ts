import { defineField, defineType } from 'sanity';
import { MenuIcon } from '@sanity/icons';

export default defineType({
  name: 'mainMenu',
  title: 'Main Menu',
  type: 'document',
  icon: MenuIcon,
  fields: [
    defineField({
      name: 'menuItems',
      title: 'Menu Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Menu Item Title',
              type: 'string',
              description: 'Display text for menu item',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'link',
              title: 'Link',
              type: 'string',
              description: 'URL or anchor link (e.g., #services, /about)',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'order',
              title: 'Order',
              type: 'number',
              description: 'Display order (1, 2, 3, etc.)',
              validation: (Rule) => Rule.required().integer().min(1),
            },
          ],
          preview: {
            select: {
              title: 'title',
              link: 'link',
            },
            prepare({ title, link }) {
              return {
                title: title,
                subtitle: link,
              };
            },
          },
        },
      ],
      description: 'Main navigation menu items',
    }),
  ],
  preview: {
    select: {
      items: 'menuItems',
    },
    prepare({ items }) {
      return {
        title: 'Main Menu',
        subtitle: items ? `${items.length} menu items` : 'No items',
      };
    },
  },
});

