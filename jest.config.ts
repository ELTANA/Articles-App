module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  moduleNameMapper: {
    '^\\$components(.*)$': '<rootDir>/src/components$1',
    '^\\$assets(.*)$': '<rootDir>/src/assets$1',
    '^\\$screens(.*)$': '<rootDir>/src/screens$1',
    '^\\$svgs(.*)$': '<rootDir>/src/svgs$1',
    '^\\$hooks(.*)$': '<rootDir>/src/hooks$1',
    '^\\$network(.*)$': '<rootDir>/src/network$1',
    '^\\$utils(.*)$': '<rootDir>/src/utils$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  }
};
