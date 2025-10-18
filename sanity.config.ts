import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schemas';
import { fixedTitle } from './sanity/plugins/fixedTitle';
import { structure } from './sanity/structure';

export default defineConfig({
  name: 'default',
  title: 'Content | EternaCloud',
  
  projectId: 'x0kdvbds',
  dataset: 'production',
  
  basePath: '/admin', // Studio accessible at /admin
  
  plugins: [
    structureTool({ structure }),
    visionTool(),
    fixedTitle(),
  ],
  
  schema: {
    types: schemaTypes,
  },
});

