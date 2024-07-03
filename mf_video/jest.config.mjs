import { defaults } from 'jest-config';

export default {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    moduleFileExtensions: [
        ...defaults.moduleFileExtensions,
        'ts',
        'tsx',
        'js',
        'jsx',
        'json',
        'node',
    ],
    setupFilesAfterEnv: ['jest-fetch-mock'],
    transformIgnorePatterns: ['<rootDir>/node_modules/(?!(jest-fetch-mock)/)'],
};
