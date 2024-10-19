// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  site: "https://blog-updates.vercel.app/",
  integrations: [react()],
  output: 'server',
  adapter: vercel()
});