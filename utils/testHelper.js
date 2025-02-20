import dotenv from 'dotenv';
dotenv.config();

const environment = process.env.NODE_ENV || 'development';

let globalTestData;
switch (environment) {
    case 'production':
        globalTestData = require('../data/production/testData').default;
        break;
    case 'staging':
        globalTestData = require('../data/staging/testData').default;
        break;
    default:
        globalTestData = require('../data/development/testData').default;
}

export const getGlobalTestData = (key) => {
    return globalTestData[key];
};

export const getApiTestData = (key) => {
    let apiTestData;
    switch (environment) {
        case 'production':
            
            apiTestData = require('../tests/apiTests/data/production/apiTestData').default;
            break;
        case 'staging':
            apiTestData = require('../tests/apiTests/data/staging/apiTestData').default;
            break;
        default:
            apiTestData = require('../tests/apiTests/data/development/apiTestData').default;
    }
    return apiTestData[key];
};

export const getUiTestData = (key) => {
    let uiTestData;
    switch (environment) {
        case 'production':
            uiTestData = require('../tests/uiTests/data/production/uiTestData').default;
            break;
        case 'staging':
            uiTestData = require('../tests/uiTests/data/staging/uiTestData').default;
            break;
        default:
            uiTestData = require('../tests/uiTests/data/development/uiTestData').default;
    }
    return uiTestData[key];
};

export const getEnvData = (key) => {
    return process.env[key];
};

// Add this function to fetch test data based on the environment and module
export const getTestData = (module, key) => {
    switch (module) {
        case 'global':
            return getGlobalTestData(key);
        case 'api':
            return getApiTestData(key);
        case 'ui':
            return getUiTestData(key);
        default:
            throw new Error(`Unknown module: ${module}`);
    }
};
