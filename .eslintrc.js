module.exports = {
    "env": {
      "browser": false,
      "es2021": true,
      "node": true
    },
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
      "plugin:tailwindcss/recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    "plugins": ["react", "import", "@typescript-eslint"],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
      "ecmaFeatures": {
        "jsx": true
      },
      "project": true
    },
    "root": true,
    "settings": {
      "react": {
        "version": "detect"
      }
    },
    "rules": {
      // "no-console": "warn",
      "react/react-in-jsx-scope": "off",
      "import/order": [
        "error",
        {
          "groups": ["builtin", "external", "parent", "sibling", "index"],
          "newlines-between": "always"
        }
      ],
      "react/self-closing-comp": "warn",
      "react/jsx-sort-props": [
        "warn",
        {
          "callbacksLast": true,
          "shorthandFirst": true,
          "noSortAlphabetically": false,
          "reservedFirst": true
        }
      ],
      "padding-line-between-statements": [
        "warn",
        { "blankLine": "always", "prev": "*", "next": "return" },
        { "blankLine": "always", "prev": ["const", "let", "var"], "next": "*" },
        {
          "blankLine": "any",
          "prev": ["const", "let", "var"],
          "next": ["const", "let", "var"]
        }
      ]
    }
  }
  
