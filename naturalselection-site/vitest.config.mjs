import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react({
      include: /\.[jt]sx?$/,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    postcss: {
      plugins: [],
    },
  },
  oxc: {
    include: /\.[jt]sx?$/,
    exclude: [/node_modules/],
    lang: 'jsx',
    jsx: {
      runtime: 'automatic',
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    css: false,
    setupFiles: ['./test/setup.js'],
    include: ['src/**/*.test.{js,jsx}', 'test/**/*.test.{js,jsx}'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'json-summary'],
      include: ['src/**/*.{js,jsx}'],
      exclude: [
        'src/**/*.test.{js,jsx}',
        'src/components/DropboxMP3Player.js',
      ],
      thresholds: {
        lines: 90,
        statements: 85,
        functions: 80,
        branches: 80,
      },
    },
  },
});
