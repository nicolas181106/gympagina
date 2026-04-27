import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://microgymelite.com', // Cambia esto por tu dominio real cuando lo tengas
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});