import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
// https://vitejs.dev/config/
export default defineConfig({
    build: {
        // SVG <use> references need a file URL; data URLs cannot resolve sprite fragments.
        assetsInlineLimit: (file) => file.endsWith('/icons.svg') || file.endsWith('\\icons.svg') ? false : undefined,
    },
    plugins: [
        vue(),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
