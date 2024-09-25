import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
// https://astro.build/config
export default defineConfig({
  content: {
    collections: [
      {
        name: 'blogs',
        type: 'content',
        directory: 'src/content/blogs',
      }
    ]
  },

  integrations: [tailwind()]
});