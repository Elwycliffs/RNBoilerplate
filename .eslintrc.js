module.exports = {
  root: true,
  extends: '@react-native-community',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'react/prop-types': 0,
    'operator-linebreak': 0,
    'comma-dangle': ['error', 'never'],
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: 'always',
        ObjectPattern: { multiline: true },
        ImportDeclaration: 'never',
        ExportDeclaration: { multiline: true, minProperties: 3 },
      },
    ],
    'object-curly-newline': 0,
    'react/jsx-props-no-spreading': 0,
    'arrow-parens': 0,
    'import/prefer-default-export': 0,
    'prettier/prettier': 0,
  },
};
