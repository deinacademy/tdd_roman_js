module.exports = {
  verbose: true,
  collectCoverage: false,
  collectCoverageFrom: ['**/resources/**/*.js', '!**/node_modules/**', '!**/vendor/**'],
  coverageReporters: ['lcov'],
  coverageDirectory: '<rootDir>/coverage/',
};
