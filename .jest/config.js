

module.exports = {
    bail: 1,
    verbose: true,

    coverageDirectory: 'coverage',
    roots: [
        "../src",
        "../tests"
    ],
    transformIgnorePatterns: ['/node_modules/'],
    setupFiles: [
        "../.enzyme/config.js"
    ],
    setupFilesAfterEnv : [
        "../node_modules/jest-enzyme/lib/index.js"
    ],
    moduleFileExtensions: ['js', 'json', 'jsx'],
    testEnvironment: 'jsdom',

};