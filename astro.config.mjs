import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from 'astro-sitemap';

export default defineConfig({
  integrations: [react(), sitemap()],
  site: 'https://krystle.dev', 
});
