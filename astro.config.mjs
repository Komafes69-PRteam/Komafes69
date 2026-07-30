// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://komafes69-prteam.github.io',
  base: '/Komafes69',

  vite: {
    plugins: [tailwindcss()]
  }
});