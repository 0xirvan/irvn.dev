import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://irvn.dev', 
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    react(),
    mdx({
      syntaxHighlight: 'prism',
      remarkPlugins: [],
      rehypePlugins: []
    })
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  }
});