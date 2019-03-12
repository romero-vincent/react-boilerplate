

module.exports = {
    bail: 1,
    verbose: true,

    coverageDirectory: 'coverage',
    roots: [
        "../src"
    ],
    transformIgnorePatterns: ['/node_modules/'],
    coverageThreshold: {
        "../src/**/*.test.js" : {
            statements: 40,
            branches: 40
        }
    },
    setupFiles: [
        "../.enzyme/config.js"
    ],
    setupFilesAfterEnv : [
        "../node_modules/jest-enzyme/lib/index.js"
    ],
    moduleFileExtensions: ['js', 'json', 'jsx'],
    testEnvironment: 'jsdom',

};