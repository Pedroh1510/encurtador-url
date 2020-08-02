const { defaults: tsjPreset } = require('ts-jest/presets')
module.exports = {
  transform: tsjPreset.transform,
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.ts',
    '!**/*DTO.TS',
    '!src/useCases/**/index.TS',
    '!src/**/mocks/*',
    "!src/server.ts"
  ],
  coverageReporters: ['json', 'lcov']
}
