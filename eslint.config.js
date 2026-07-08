import { defineConfig } from "eslint/config";
import * as astroParser from "astro-eslint-parser";
import eslintPluginAstro from "eslint-plugin-astro";
import stylistic from "@stylistic/eslint-plugin";
import pluginSolid from 'eslint-plugin-solid';

export default defineConfig([
  ...eslintPluginAstro.configs.recommended,
  {
    plugins: {
      "@stylistic": stylistic,
    },
    rules: {
      eqeqeq: "error",
      curly: "error",
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/no-tabs": "error",
      "@stylistic/semi": ["error", "always"],
      "vue/max-attributes-per-line": "off",
      "vue/html-self-closing": "off",
      "astro/missing-client-only-directive-value": "off",
      "no-unused-vars": [
        "error",
        {
          vars: "all",
          args: "after-used",
          ignoreRestSiblings: false,
          varsIgnorePattern: "^_",
          argsIgnorePattern: "^_"
        },
      ],
      "prefer-const": "error",
    },
  },
  {
    files: ["**/*.astro"],

    languageOptions: {
      parser: astroParser,
      sourceType: "module",
      ecmaVersion: 2022,

      parserOptions: {
        parser: "@typescript-eslint/parser",
        requireConfigFile: false,
        extraFileExtensions: [".astro"],
      },
    },
  },
  {
    files: ["**/*.{js,jsx}"],
    ...pluginSolid.configs["flat/recommended"],
  }
]);
