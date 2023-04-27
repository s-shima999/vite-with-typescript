// vite.config.js
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    // root: './src/',
    // plugins: [viteSingleFile()],
    build: {
        target: 'ES2019',
        rollupOptions: {
            output: {
                // exports: "named",
                esModule: true,
                // inlineDynamicImports: false
                //     assetFileNames: ({ name }) => {
                //         return name.replace(`${TARGET_DIRECTORY}/`, "");
                //     },
                entryFileNames: '[name].js',
                name: 'MyBundle',
                // format: 'iife',
            },
            input: {
                main: './src/main.ts',
                abc: './src/abc.ts'
            }
            // input: [
            //     './src/main.ts',
            //     './src/test2.ts'
            // ]
        },
    },
});
