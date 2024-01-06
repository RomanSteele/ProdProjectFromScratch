/* eslint-disable linebreak-style */
/**

 * For a detailed explanation regarding each configuration property, visit:

 * https://jestjs.io/docs/configuration

 */

import path from 'path';

export default {
    globals: {
        __IS_DEV__: true,
    },
    clearMocks: true,
    testEnvironment: 'jsdom',
    coveragePathIgnorePatterns: [
        '\\\\node_modules\\\\',
    ],
    moduleFileExtensions: [
        'js',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node',
    ],
    moduleDirectories: [
        'node_modules',
    ],
    modulePaths: [
        '<rootDir>src',
    ],
    testMatch: [
        // Обнаружил разницу между МАК ОС и ВИНДОУС!!!
        '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
    ],
    rootDir: '../../',
    setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
    moduleNameMapper: {
        '\\.s?css$': 'identity-obj-proxy',
        '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
    },
    // All imported modules in your tests should be mocked automatically

    // automock: false,

    // Stop running tests after `n` failures

    // bail: 0,

    // The directory where Jest should store its cached dependency information

    // cacheDirectory: "C:\\Users\\Dev\\AppData\\Local\\Temp\\jest",

    // Indicates whether the coverage information should be collected while executing the test

    // collectCoverage: false,

    // collectCoverageFrom: undefined,

    // The directory where Jest should output its coverage files

    // coverageDirectory: undefined,

    // Indicates which provider should be used to instrument code for coverage

    // coverageProvider: "babel",

    // A list of reporter names that Jest uses when writing coverage reports

    // coverageReporters: [

    //   "json",

    //   "text",

    //   "lcov",

    //   "clover"

    // ],

    // An object that configures minimum threshold enforcement for coverage results

    // coverageThreshold: undefined,

    // A path to a custom dependency extractor

    // dependencyExtractor: undefined,

    // Make calling deprecated APIs throw helpful error messages

    // errorOnDeprecated: false,

    // The default configuration for fake timers

    // fakeTimers: {

    //   "enableGlobally": false

    // },

    // Force coverage collection from ignored files using an array of glob patterns

    // forceCoverageMatch: [],

    // globalSetup: undefined,

    // globalTeardown: undefined,

    // A set of global variables that need to be available in all test environments

    // globals: {},

    // maxWorkers: "50%",

    // modulePathIgnorePatterns: [],

    // Activates notifications for test results

    // notify: false,

    // An enum that specifies notification mode. Requires { notify: true }

    // notifyMode: "failure-change",

    // A preset that is used as a base for Jest's configuration

    // preset: undefined,

    // Run tests from one or more projects

    // projects: undefined,

    // Use this configuration option to add custom reporters to Jest

    // reporters: undefined,

    // Automatically reset mock state before every test

    // resetMocks: false,

    // Reset the module registry before running each individual test

    // resetModules: false,

    // A path to a custom resolver

    // resolver: undefined,

    // Automatically restore mock state and implementation before every test

    // restoreMocks: false,

    // A list of paths to directories that Jest should use to search for files in

    // roots: [

    //   "<rootDir>"

    // ],

    // Allows you to use a custom runner instead of Jest's default test runner

    // runner: "jest-runner",

    // setupFiles: [],

    // setupFilesAfterEnv: [],

    // slowTestThreshold: 5,

    // A list of paths to snapshot serializer modules Jest should use for snapshot testing

    // snapshotSerializers: [],

    // Options that will be passed to the testEnvironment

    // testEnvironmentOptions: {},

    // Adds a location field to test results

    // testLocationInResults: false,

    // testPathIgnorePatterns: [

    //   "\\\\node_modules\\\\"

    // ],

    // The regexp pattern or array of patterns that Jest uses to detect test files

    // testRegex: [],

    // This option allows the use of a custom results processor

    // testResultsProcessor: undefined,

    // This option allows use of a custom test runner

    // testRunner: "jest-circus/runner",

    // A map from regular expressions to paths to transformers

    // transform: undefined,

    // transformIgnorePatterns: [

    //   "\\\\node_modules\\\\",

    //   "\\.pnp\\.[^\\\\]+$"

    // ],

    // unmockedModulePathPatterns: undefined,

    // Indicates whether each individual test should be reported during the run

    // verbose: undefined,

    // watchPathIgnorePatterns: [],

    // Whether to use watchman for file crawling

    // watchman: true,

};
