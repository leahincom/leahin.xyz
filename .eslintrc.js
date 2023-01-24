module.exports = {
  root: true,
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "plugin:prettier/recommended",
      ],
      parser: "@typescript-eslint/parser",
      plugins: [
        "@typescript-eslint",
        "react-hooks",
        "prettier",
        "json-format",
        "import",
        "simple-import-sort",
      ],
      rules: {
        "@typescript-eslint/consistent-type-imports": [
          "error",
          {
            prefer: "type-imports",
            disallowTypeAnnotations: false,
          },
        ],
        "@typescript-eslint/no-unused-vars": [
          "error",
          { argsIgnorePattern: "^_" },
        ],
        "@typescript-eslint/naming-convention": [
          "error",
          {
            selector: "variableLike",
            format: ["camelCase", "UPPER_CASE", "PascalCase"],
            leadingUnderscore: "allow",
          },
          {
            selector: ["typeLike", "enumMember"],
            format: ["PascalCase"],
          },
          {
            selector: "typeProperty",
            format: ["camelCase", "PascalCase", "UPPER_CASE"],
            leadingUnderscore: "allow",
            trailingUnderscore: "allow",
          },
        ],
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "prettier/prettier": [
          "error",
          {
            singleQuote: false,
            semi: true,
            tabWidth: 2,
            useTabs: false,
            trailingComma: "all",
            printWidth: 80,
            arrowParens: "always",
          },
          {
            usePrettierrc: false,
          },
        ],
      },
    },
    {
      files: ["*.graphql"],
      parser: "@graphql-eslint/eslint-plugin",
      plugins: ["@graphql-eslint"],
      rules: {
        "@graphql-eslint/no-anonymous-operations": "error",
        "@graphql-eslint/naming-convention": [
          "error",
          {
            OperationDefinition: {
              style: "PascalCase",
              forbiddenPrefixes: ["Query", "Mutation", "Subscription", "Get"],
              forbiddenSuffixes: ["Query", "Mutation", "Subscription"],
            },
          },
        ],
      },
    },
    {
      files: ["*.md", "*.mdx"],
      extends: ["plugin:mdx/recommended"],
    },
  ],
  ignorePatterns: [".eslintrc.js", "**/__generated__/**/*", "public/**/*"],
};
