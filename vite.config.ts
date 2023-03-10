import { fileURLToPath } from 'url';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    build: {
      rollupOptions: {
        input: {
          appSong: fileURLToPath(
            new URL('./songs/index.html', import.meta.url)
          ),
          appAlbum: fileURLToPath(
            new URL('./albums/index.html', import.meta.url)
          ),
        },
      },
    },
    base: env.BASE_URL || '',
    server: {
      port: 5550,
    },
  };
});
