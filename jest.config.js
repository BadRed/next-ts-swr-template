/* eslint-disable no-undef */
module.exports = {
    setupFilesAfterEnv: ["./src/jest.setup.js"],
    moduleNameMapper: {
      "^@components(.*)$": "<rootDir>/src/Components$1"
    },
  };