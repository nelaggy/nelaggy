// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  experimental: {
  fonts: [{
    provider: fontProviders.fontshare(),
    name: "Zodiak",
    cssVariable: "--font-zodiak",
    weights: [100]
  }]
  },

  site: "https://nelaggy.com",
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],
  adapter: cloudflare()
});