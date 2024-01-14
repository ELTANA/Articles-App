import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

const root = resolve(__dirname, 'src');

export default defineConfig({
  plugins: [react()],
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
