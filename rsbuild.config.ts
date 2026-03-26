import { defineConfig, type RsbuildConfig } from "@rsbuild/core";
import { pluginBasicSsl } from "@rsbuild/plugin-basic-ssl";
import { pluginEslint } from "@rsbuild/plugin-eslint";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginTypeCheck } from "@rsbuild/plugin-type-check";
import { VanillaExtractPlugin } from "@vanilla-extract/webpack-plugin";
import { resolve } from "path";

const config: RsbuildConfig = defineConfig({
  dev: {
    cliShortcuts: {
      help: false,
    },
    progressBar: true,
  },
  html: {
    template: "./public/index.html",
  },
  performance: {
    removeConsole: ["log"],
  },
  plugins: [
    pluginBasicSsl(),
    pluginEslint({
      enable: true,
      eslintPluginOptions: {
        configType: "flat",
        cwd: import.meta.dirname,
        exclude: ["node_modules", "dist"],
        failOnError: true,
      },
    }),
    pluginReact(),
    pluginTypeCheck(),
  ],
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  source: {
    entry: {
      index: "./src/index.tsx",
    },
    exclude: [resolve(__dirname, "dist")],
  },
  tools: {
    rspack: (config, { appendPlugins, isDev }) => {
      appendPlugins([new VanillaExtractPlugin()]);

      if (isDev) {
        config.optimization = {
          ...config.optimization,
          splitChunks: false,
        };
      }
    },
  },
});

export default config;
