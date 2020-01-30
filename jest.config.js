module.exports = {
  verbose: true,
  collectCoverage: false,
  collectCoverageFrom: ['**/resources/**/*.js', '!**/resources/**/app.js', '!**/node_modules/**', '!**/vendor/**'],
  coverageReporters: ['lcov'],
  coverageDirectory: '<rootDir>/coverage/',
};
