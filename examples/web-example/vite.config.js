import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      //replace by your lib
      'taibeul': path.resolve(__dirname, '../../dist/esm'),
    },
  },
});
