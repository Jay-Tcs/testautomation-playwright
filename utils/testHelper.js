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
            apiTestData = require('../tests/apiTests/data/production/apiTestData.js').default;
            break;
        case 'staging':
            apiTestData = require('../tests/apiTests/data/staging/apiTestData.js').default;
            break;
        default:
            apiTestData = require('../tests/apiTests/data/development/apiTestData.js').default;
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
