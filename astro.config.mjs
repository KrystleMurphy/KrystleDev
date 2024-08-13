import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://krystle.dev',  // Replace with your actual site URL
    integrations: [react(), sitemap()],
});
