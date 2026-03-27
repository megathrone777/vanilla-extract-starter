import { defineConfig, loadEnv, type RsbuildConfig } from "@rsbuild/core";
import { pluginEslint } from "@rsbuild/plugin-eslint";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginTypeCheck } from "@rsbuild/plugin-type-check";
import { VanillaExtractPlugin } from "@vanilla-extract/webpack-plugin";
import { resolve } from "path";

const { publicVars } = loadEnv({ prefixes: ["APP_"] });

const config: RsbuildConfig = defineConfig({
  dev: {
    cliShortcuts: {
      help: false,
    },
    lazyCompilation: {
      entries: true,
      imports: true,
    },
    progressBar: true,
  },
  html: {
    template: "./public/index.html",
  },
  plugins: [
    pluginEslint({
      enable: true,
      eslintPluginOptions: {
        configType: "flat",
        cwd: import.meta.dirname,
        exclude: ["dist", "node_modules"],
        failOnError: true,
      },
    }),
    pluginReact(),
    pluginTypeCheck(),
  ],
  resolve: {
    alias: {
      "@": resolve(import.meta.dirname, "src"),
    },
    extensions: [".js", ".ts", ".tsx"],
  },
  source: {
    define: publicVars,
    exclude: [resolve(import.meta.dirname, "dist")],
    entry: {
      index: "./src/index.tsx",
    },
  },
  tools: {
    rspack: (_, { appendPlugins }) => {
      appendPlugins([new VanillaExtractPlugin()]);
    },
  },
});

export default config;
