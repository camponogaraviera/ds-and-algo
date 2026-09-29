// This file is used to enforce style consistency including JSDoc formatting.

const js = require("@eslint/js");
const babelParser = require("@babel/eslint-parser");
const pluginJSDoc = require("eslint-plugin-jsdoc");
const pluginJest = require("eslint-plugin-jest");

module.exports = [
  {
    files: ["**/*.js", "**/*.jsx"],
    ignores: [".yarn/**"], // Ignore yarn files.
    ...js.configs.recommended,
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2021,
        sourceType: "module",
      },
    },
    plugins: {
      jsdoc: pluginJSDoc,
      jest: pluginJest,
    },
    rules: {
      ...pluginJSDoc.configs.recommended.rules,
      ...pluginJest.configs.recommended.rules,
      indent: ["error", 2],
      "linebreak-style": ["error", "unix"],
      quotes: ["error", "double", { avoidEscape: true }],
      semi: ["error", "always"],
      // JSDoc-specific rules:
      "jsdoc/require-jsdoc": [
        "warn",
        {
          require: {
            FunctionDeclaration: true,
            ClassDeclaration: true,
            MethodDefinition: true,
            ArrowFunctionExpression: false,
          },
        },
      ],
      "jsdoc/require-param": "warn",
      "jsdoc/require-returns": "warn",
    },
  },
];
