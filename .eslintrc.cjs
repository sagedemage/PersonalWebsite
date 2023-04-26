module.exports = {
    extends: [
      "plugin:astro/recommended",
      "plugin:astro/jsx-a11y-recommended"
    ],
    rules: {
      "eqeqeq": "error",
      "curly": "error",
      "quotes": ["error", "double"],
      "no-unused-vars": [
        "error",
        { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }
      ]
    },
    overrides: [
      {
        // Define the configuration for `.astro` file.
        files: ["*.astro"],
        // Allows Astro components to be parsed.
        parser: "astro-eslint-parser",
        // Parse the script in `.astro` as TypeScript by adding the following configuration.
        // It's the setting you need when using TypeScript.
        parserOptions: {
          parser: "@typescript-eslint/parser",
          requireConfigFile: false,
          sourceType: "module",
          ecmaVersion: 2022,
          extraFileExtensions: [".astro"],
        },
      },
    ],
  }