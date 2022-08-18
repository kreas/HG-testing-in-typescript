const dotenv = require('dotenv');
const { resolve } = require('path');

dotenv.config({ path: './.env.test' });

module.exports = {
  roots: ['<rootDir>/src'],
  testPathIgnorePatterns: ['fixtures/*'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  moduleNameMapper: {
    '^@shared/(.*)': resolve(__dirname, './src/shared/$1'),
    '^@root/(.*)': resolve(__dirname, './src/$1'),
  },
};
