import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path';

// eslint-disable-next-line no-undef
const rootDir = resolve(__dirname)
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'assets': resolve(rootDir, 'src/assets/'),
      'components': resolve(rootDir, 'src/components/'),
      'views': resolve(rootDir, 'src/views/'),
    }
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: true,
  }
})
