import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      entryRoot: "./packages",
      outDir: "./dist/es",
      tsconfigPath: "./tsconfig.app.json"
    })
  ],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "packages")
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "packages/index.ts"),
      cssFileName: "style"
    },
    target: "modules",
    outDir: "./dist",
    minify: true,
    sourcemap: true,
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ["vue", "mitt"],
      input: ["./packages/index.ts"],
      output: [
        {
          format: "es",
          preserveModules: true,
          entryFileNames: "[name].mjs",
          dir: "./dist/es",
          preserveModulesRoot: "packages"
        },
        {
          format: "cjs",
          preserveModules: true,
          entryFileNames: "[name].js",
          dir: "./dist/lib",
          preserveModulesRoot: "packages"
        }
      ]
      // output: {
      //
      // }
    }
  }
});
