module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'next/core-web-vitals',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'simple-import-sort', 'testing-library', 'jest-dom'],
  root: true,
  rules: {
    'no-console': 'error',
    'no-global-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-unneeded-ternary': 'error',
    'no-prototype-builtins': 'error',
    'no-lonely-if': 'error',
    'prefer-const': 'error',
    'react/self-closing-comp': 'error',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-did-update-set-state': 'error',
    'react/no-did-mount-set-state': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    '@typescript-eslint/no-var-requires': 0,
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^\\u0000', '^@?\\w'],
          ['^(api|components|constants|enums|helpers|library|pages|services|styles|types)'],
          ['^'],
          ['^\\.'],
        ],
      },
    ],
    'testing-library/consistent-data-testid': [
      'error',
      {
        testIdPattern: '^[a-z]+(-[a-z]+)*$', // enforce the usage of kebab-case
      },
    ],
  },
  overrides: [
    {
      files: ['**/__tests__/**/*.tsx', '**/?(*.)+(spec|test).tsx'],
      extends: ['plugin:testing-library/react', 'plugin:jest-dom/recommended'],
      rules: {
        'testing-library/prefer-presence-queries': 'error',
        'testing-library/prefer-user-event': [
          'error',
          {
            allowedMethods: ['mouseDown'],
          },
        ],
        'testing-library/no-wait-for-multiple-assertions': 'error',
        'testing-library/prefer-screen-queries': 'error',
        'testing-library/no-unnecessary-act': 'error',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
      },
      rules: {
        '@typescript-eslint/explicit-function-return-type': ['error'],
        '@typescript-eslint/no-inferrable-types': 0,
        '@typescript-eslint/no-empty-interface': [
          'error',
          {
            allowSingleExtends: true,
          },
        ],
        'no-duplicate-imports': 'off',
        '@typescript-eslint/no-duplicate-imports': ['error'],
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/ban-ts-comment': 'error',
        '@typescript-eslint/triple-slash-reference': 'error',
      },
    },
  ],
};
