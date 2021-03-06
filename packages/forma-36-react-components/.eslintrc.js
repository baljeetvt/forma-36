module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier/react',
    'plugin:jest/recommended',
    'plugin:jest/style',
  ],
  plugins: [
    'react-hooks'
  ],
  parserOptions: {
    ecmaVersion: 7,
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  env: {
    jest: true,
    browser: true,
    node: true,
  },
  settings: {
    react: {
      version: '16.3.0',
    },
  },
  rules: {
    'react/prop-types': 'off',
    'react/prefer-stateless-function': [0, { ignorePureComponents: true }],
    'react/jsx-filename-extension': { extensions: ['.js', '.jsx'] },
    'react/forbid-prop-types': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/sort-comp': 0,
    'react/jsx-wrap-multilines': 0,
    'function-paren-newline': 0,
    'react/button-has-type': 'error',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-bind': ['error', { allowArrowFunctions: true }],
    'react/no-access-state-in-setstate': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/camelcase': ['warn', { properties: 'never' }],
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-non-null-assertion': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  },
};
