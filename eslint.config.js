/* eslint-env node */
/** @type {import('eslint').Linter.Config} */
import globals from "globals"
import js from "@eslint/js"
//const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended")

export default [
  // not yet supported in ESLINT 9.0.0.....
  //extends: ["plugin:cypress/recommended"],
  js.configs.recommended,
  {
    ignores: ["dist", "node-modules"],
  },
  {
    languageOptions: {
      ecmaVersion: 2022,
      globals: {
        ...globals.browser,
      },
    },
  },
  {
    rules: {
      "no-unused-vars": "warn",
    },
  },
  //eslintPluginPrettierRecommended
]
