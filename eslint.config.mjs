// @ts-check
import antfu from "@antfu/eslint-config";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  antfu({
    type: "app",
    formatters: true,
    stylistic: {
      indent: 2,
      semi: true,
      quotes: "double",
    },
    ignores: [
      ".pnpm-store/**",
      "**/migrations/*",
      "README.md",
      "**/*.md",
    ],
  }, {
    rules: {
      "ts/no-redeclare": "off",
      "vue/max-attributes-per-line": ["error", {
        singleline: 2,
        multiline: 1,
      }],
      "ts/consistent-type-definitions": ["error", "type"],
      "no-console": "warn",
      "node/no-process-env": "error",

      "unicorn/filename-case": ["error", {
        case: "kebabCase",
      }],

      "perfectionist/sort-imports": "off",
      "antfu/no-top-level-await": "off",
      "node/prefer-global/process": "off",
    },
  }),
);
