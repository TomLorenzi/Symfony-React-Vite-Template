import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

const twigRefreshPlugin = {
  name: 'twig-refresh',
  configureServer({watcher, ws}) {
    watcher.add(resolve('templates/**/*.twig'))
    watcher.on('change', (path) => {
      if (path.endsWith('.twig')) {
        ws.send({
          type: 'full-reload'
        })
      }
    })
  }
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), twigRefreshPlugin],
  root: './assets',
  base: '/assets/',
  server: {
    watch: {
      disableGlobbing: false,
    },
  },
  build: {
    manifest: true,
    assetsDir: '',
    outDir: '../public/assets',
    rollupOptions: {
      input: {
        'main.jsx': './assets/main.jsx'
      }
    }
  }
})
