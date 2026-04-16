import { defineConfig } from 'vite';

export default defineConfig({
    base: '/',
    build: {
        outDir: 'dist',
        assetsDir: '',
        rollupOptions: {
            input: {
                main: 'index.html',
            },
        },
    },
});