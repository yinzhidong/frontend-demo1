import { defineConfig } from "vite";
const { resolve } = require('path')
const path = require('path')


export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, './demo2/js/main.js'),
            name: 'MyLib',
            // the proper extensions will be added
            fileName: 'my-lib'
        },
        rollupOptions: {
            input: {
                main: resolve(__dirname, './demo2/index.html')
                // nested: resolve(__dirname, 'nested/index.html')
            }
        }
    },
    server: {
        hmr: {
            protocol: "echoxxxx"
        }
    }
});