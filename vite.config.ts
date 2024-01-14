/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

//@ts-expect-error this is a correct code in node
const root = resolve(__dirname, 'src');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'articles-app'
  },
  resolve: {
    alias: {
      $components: resolve(root, 'components'),
      $assets: resolve(root, 'assets'),
      $screens: resolve(root, 'screens'),
      $svgs: resolve(root, 'svgs'),
      $hooks: resolve(root, 'hooks'),
      $network: resolve(root, 'network'),
      $utils: resolve(root, 'utils')
    }
  }
});
