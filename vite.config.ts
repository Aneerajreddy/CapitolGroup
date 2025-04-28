import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import NodeGlobalsPolyfillPlugin from '@esbuild-plugins/node-globals-polyfill';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/CapitolGroupWebApp/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // Polyfill the Node.js crypto module
      crypto: require.resolve('crypto-browserify'),
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      // Adding Node.js polyfills for esbuild
      plugins: [
        NodeGlobalsPolyfillPlugin({
          process: true,
          buffer: true,
        }),
      ],
    },
  },
}));
