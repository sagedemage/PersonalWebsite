import { defineConfig } from 'eslint/config';
import parser from "astro-eslint-parser"
import eslintPluginAstro from 'eslint-plugin-astro';
import stylistic from '@stylistic/eslint-plugin'

export default defineConfig([
     ...eslintPluginAstro.configs.recommended,
    {
    plugins: {
        '@stylistic': stylistic
    },

    rules: {
        "eqeqeq": "error",
        "curly": "error",
        "@stylistic/indent": ['warn', 2],
        "@stylistic/max-len": ["warn", { "code": 80 }],
        "@stylistic/quotes": ["error", "double"],
        "@stylistic/no-tabs": "error",
        "@stylistic/semi": ["error", "never"],
        "no-unused-vars": ["error", {
            "vars": "all",
            "args": "after-used",
            "ignoreRestSiblings": false,
        }],
    },
}, {
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
}]);