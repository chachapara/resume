module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "prettier", "unused-imports"],
  rules: {
    "no-shadow": 0,
    "no-console": 1,
    "react/jsx-key": 1,
    "arrow-body-style": 1,
    "react/prop-types": 0,
    "react/no-unknown-property": 0,
    "react/react-in-jsx-scope": 0,
    "react/jsx-indent": ["error", 2],
    "no-trailing-spaces": ["warn", { skipBlankLines: true }],
    "no-use-before-define": 1,
    "no-unused-vars": [
      1,
      {
        ignoreRestSiblings: false,
      },
    ],
    quotes: ["error", "double", { allowTemplateLiterals: true }],
    "no-empty-function": [
      "error",
      {
        allow: ["constructors", "arrowFunctions"],
      },
    ],
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
  },
};
