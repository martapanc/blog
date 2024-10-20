// @ts-check
import {defineConfig} from 'astro/config';

import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    site: "https://blog-updates.vercel.app/",
    integrations: [react(), sitemap(), tailwind()],
    output: 'server',
    adapter: vercel()
});