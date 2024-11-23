import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// https://vite.dev/config/
export default () => {
  return defineConfig({
    plugins: [react(), svgr()],
    resolve: {
      alias: [{ find: '@', replacement: '/src' }],
    },
    server: {
      proxy: {
        '/api': {
          target: 'https://ready-action.store',
          changeOrigin: true,
          secure: false,
        },
      },
    },
  });
};
