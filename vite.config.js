import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const isProduction = process.env.NODE_ENV === 'production' || process.env.BUILD_FOR_PAGES === 'true';

function githubPagesAssetPlugin() {
  return {
    name: 'github-pages-asset-plugin',
    renderChunk(code) {
      if (isProduction) {
        return code.replace(/\/assets\/images\//g, '/cyber-security-website/assets/images/');
      }
      return null;
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), githubPagesAssetPlugin()],
  base: isProduction ? '/cyber-security-website/' : '/',
  server: {
    port: 3000,
    open: false
  }
});
