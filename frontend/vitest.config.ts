import { defineConfig } from 'vitest/config'
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'src/test-setup.ts',
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    css: false,
  },
})
