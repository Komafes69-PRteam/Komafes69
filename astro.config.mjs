// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import {passthroughImageService } from 'astro/config';

export default defineConfig({
  base: '/',

  vite: {
    plugins: [tailwindcss()]
  },
  image: {
    service: passthroughImageService(),
  },
});