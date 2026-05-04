import { defineConfig } from "eslint/config";
import parser from "astro-eslint-parser";
import eslintPluginAstro from "eslint-plugin-astro";
import stylistic from "@stylistic/eslint-plugin";
import pluginVue from "eslint-plugin-vue";

export default defineConfig([
  ...eslintPluginAstro.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
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
      "no-unused-vars": [
        "error",
        {
          vars: "all",
          args: "after-used",
          ignoreRestSiblings: false,
        },
      ],
      "prefer-const": "error",
    },
  },
  {
    files: ["**/*.astro"],

    languageOptions: {
      parser: parser,
      sourceType: "module",
      ecmaVersion: 2022,

      parserOptions: {
        parser: "@typescript-eslint/parser",
        requireConfigFile: false,
        extraFileExtensions: [".astro"],
      },
    },
  },
]);
