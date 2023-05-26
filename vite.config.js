import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path';

// eslint-disable-next-line no-undef
const rootDir = resolve(__dirname)
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => ({
  esbuild: {
    drop: mode === 'production' ? ['console', 'debugger'] : [],
  },
  plugins: [react()],
  resolve: {
    alias: {
      'assets': resolve(rootDir, 'src/assets/'),
      'components': resolve(rootDir, 'src/components/'),
      'views': resolve(rootDir, 'src/views/'),
      'store': resolve(rootDir, 'src/store/'),
      'hook': resolve(rootDir, 'src/hook/'),
      'services': resolve(rootDir, 'src/services/'),
    }
  },
  server: {
    host: '0.0.0.0',
    port: 4200,
    open: true,
  },
  preview: {
    port: 3000,
  },
}))