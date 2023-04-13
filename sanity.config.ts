import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

import schemas from './sanity/schemas';

export default defineConfig({
  title: 'Portfolio',

  projectId: 'ghtgbwbi',
  dataset: 'production',
  apiVersion: '2023-030-04',

  plugins: [deskTool()],
  basePath: '/admin',

  schema: {
    types: schemas,
  },
});
