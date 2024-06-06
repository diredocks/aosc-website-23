import { defineConfig } from 'vite'
import prismjs from 'vite-plugin-prismjs'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// Enabled highlight languages for Prism
const prismEnabledLangauges = ['ada', 'awk', 'bash', 'batch', 'bison', 'c', 'cmake', 'cpp', 'css', 'd', 'html', 'java', 'javascript', 'json', 'kotlin', 'llvm', 'makefile', 'python', 'rust', 'toml', 'vim', 'yaml'];

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'website'
  },
  plugins: [
    // ...
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    prismjs({
      languages: prismEnabledLangauges,
    }),
  ],
})
