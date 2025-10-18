import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
import { fixedTitle } from './plugins/fixedTitle';
import { structure } from './structure';

export default defineConfig({
  name: 'default',
  title: 'Content | EternaCloud',

  projectId: 'x0kdvbds',
  dataset: 'production',

  plugins: [
    structureTool({ structure }), // Custom structure
    visionTool(),
    fixedTitle(), // Keep title fixed
  ],

  schema: {
    types: schemaTypes,
  },
});

