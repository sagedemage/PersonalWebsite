module.exports = {
    extends: [
      "plugin:astro/recommended",
    ],
    rules: {
      "eqeqeq": "error",
      "curly": "error",
      "quotes": ["error", "double"],
      "no-unused-vars": [
        "warn",
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
          /*parser: "babel-eslint",*/
          /*parser: "@babel/eslint-parser",*/
          requireConfigFile: false,
          sourceType: "module",
          ecmaVersion: 6,
          extraFileExtensions: [".astro"],
          babelOptions: {
            presets: ["@babel/preset-react"],
            parserOpts: {
              plugins: ["typescript"]
            }
         },
        },
      },
    ],
  }