import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

import { schemaTypes } from './sanity/schemas';

export default defineConfig({
  name: 'default',
  title: 'sanity',

  projectId: 'ghtgbwbi',
  dataset: 'production',

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
});
