import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import vercelStatic from '@astrojs/vercel/static';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  adapter: vercelStatic(),
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
    }),
    sitemap()
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  }
});