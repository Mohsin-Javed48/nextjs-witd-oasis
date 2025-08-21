import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: {
      js,
      "@typescript-eslint": tseslint,
      react: pluginReact,
    },
    extends: [
      "js/recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:react/recommended",
      "next/core-web-vitals",
    ],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      // Turn off noisy rules
      "no-unused-vars": "off",
      "react/no-unescaped-entities": "off",
      "@next/next/no-img-element": "off",

      // Keep important ones
      "no-undef": "error",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
]);
