module.exports = {
  modulePaths: ['<rootDir>'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    ...require('jest-module-name-mapper').default(),

    /**
     * Handle CSS imports (with CSS modules)
     * @see {@link https://jestjs.io/docs/webpack#mocking-css-modules}
     */
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

    /**
     * Handle image imports
     * @see {@link https://jestjs.io/docs/webpack#handling-static-assets}
     */
    '^.+\\.(jpg|jpeg|png|gif|webp|svg)$': 'mocks/fileMock.js',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  testEnvironment: 'jsdom',
  testRegex: '(/__tests__/.*|(\\.|/))(test|spec)\\.(ts|tsx)?$',
  transform: {
    /**
     * Use babel-jest to transpile tests with the next/babel preset
     * @see {@link https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object}
     */
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
  coveragePathIgnorePatterns: [
    'src/components/icon/*',
    '.enum.ts',
    '.interface.ts',
    '.type.ts',
    '.stories.ts',
    'src/constants/*',
  ],
  coverageReporters: ['text', 'html'],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
};
