

module.exports = {
    bail: 1,
    verbose: true,

    coverageDirectory: 'coverage',
    roots: [
        "../src"
    ],
    transformIgnorePatterns: ['/node_modules/'],
    testRegex: ['/__tests__/.*'],
    setupFiles: [
        "../.enzyme/config.js"
    ],
    setupFilesAfterEnv : [
        "../node_modules/jest-enzyme/lib/index.js"
    ],
    moduleFileExtensions: ['js', 'json', 'jsx'],
    testEnvironment: 'jsdom',

};