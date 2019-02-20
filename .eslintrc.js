module.exports = {
  "extends": [
    "standard",
    "plugin:prettier/recommended",
    "plugin:react/recommended"
  ],
  "plugins": [
    "@typescript-eslint",
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "sourceType": "module",
    "project": "./tsconfig.json",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "semi": false
      }
    ],
    "yoda": 0,
    "no-unused-vars": 1,
    "react/prop-types": 0
  },
  "globals": {
    "fetch": false
  }
};