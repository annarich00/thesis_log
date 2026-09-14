import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  integrations: [react(), tailwind()],
  site: 'https://annarich00.github.io/thesis_log',
  base: '/thesis_log/',
});
