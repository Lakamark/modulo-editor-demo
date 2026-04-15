import { defineConfig } from 'vite';

export default defineConfig({
    base: '/assets/',
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