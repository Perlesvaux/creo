import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
//import { fileURLToPath } from 'url';
//import path from 'path';

// Convert the module URL to a file path
//const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { port: 5182 }, 
  preview: { port: 5183 },
  //publicDir:'../static',
  //resolve: {
  //  alias: {
  //    '@static': path.resolve(__dirname, '../static'),
  //  },
  //},
})


    //"build": "vite build && ./integrate.sh",

// import.meta.url: This provides the URL of the current module (in this case, vite.config.js).
// fileURLToPath: Converts the file:// URL to a file system path.
// path.dirname: Extracts the directory name from the file path.
