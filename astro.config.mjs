// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://69.komafes.jp',
  
  // Cloudflareのアダプター設定(adapter: cloudflare()など)があればすべて削除
  vite: {
    plugins: [tailwindcss()],
  },
});