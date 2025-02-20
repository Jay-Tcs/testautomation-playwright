# testautomation-playwright

This project is an advanced test automation framework using Playwright for both API and UI testing with the Page Object Model (POM) design pattern.

## Project Structure

```
testautomation-playwright/
├── api/
│   └── apiClient.js
├── pages/
│   ├── basePage.js
│   └── loginPage.js
├── tests/
│   ├── apiTests/
│   │   └── apiTest.test.js
│   └── uiTests/
│       └── loginPage.test.js
├── utils/
│   ├── testData/
│   │   ├── development/
│   │   │   └── testData.js
│   │   ├── staging/
│   │   │   └── testData.js
│   │   └── production/
│   │       └── testData.js
│   ├── helpers/
│   │   └── testHelper.js
├── .gitignore
├── .eslintrc.json
├── .prettierrc
├── package.json
├── playwright.config.js
├── README.md
└── .env
```

## Setup

1. **Install dependencies:**

   ```sh
   npm install
   ```

2. **Create a `.env` file:**

   Create a `.env` file in the root directory with the following content:

   ```env
   BASE_URL=https://api.homedepot.com
   LOGIN_ENDPOINT=/api/login
   USER_DETAILS_ENDPOINT=/api/user/details
   API_KEY=your_api_key_here
   ```

3. **Run tests:**

   ```sh
   npx playwright test
   ```

## Configuration

- **`playwright.config.js`**: Configuration file for Playwright.
- **`pages/`**: Contains page object model classes.
- **`tests/`**: Contains test scripts.
- **`utils/testData/`**: Contains test data for different environments.
- **`utils/helpers/testHelper.js`**: Contains helper functions for fetching test data.

## Running Tests

- **To run tests with the UI visible:**

  ```sh
  npx playwright test
  ```

- **To run tests in Chrome:**

  ```sh
  npx playwright test --project=chrome
  ```

- **To run tests in Firefox:**

  ```sh
  npx playwright test --project=firefox
  ```

- **To run tests in WebKit:**

  ```sh
  npx playwright test --project=webkit
  ```

- **To run smoke tests:**

  ```sh
  npx playwright test --grep @smoke
  ```

- **To run regression tests:**

  ```sh
  npx playwright test --grep @regression
  ```

- **To run API tests:**

  ```sh
  npx playwright test --grep @api
  ```

## Advanced Options

- **Screenshots, videos, and traces** are retained on test failures.
- **Tests are retried** up to 2 times on failure.
- **Test results** are stored in the `reports/test-results` directory.

## Linting and Formatting

- **To lint the code:**

  ```sh
  npm run lint
  ```

- **To format the code:**

  ```sh
  npm run format
  ```

## Environment-Specific Configurations

- **Development Environment:**

  ```sh
  dotenv -e .env.development npx playwright test
  ```

- **Staging Environment:**

  ```sh
  dotenv -e .env.staging npx playwright test
  ```

- **Production Environment:**

  ```sh
  dotenv -e .env.production npx playwright test
  ```

## Additional Information

- **ESLint Configuration:** `.eslintrc.json`
- **Prettier Configuration:** `.prettierrc`
- **Environment Variables:** `.env`

By following these instructions, you can set up and run tests using the Playwright framework for both API and UI testing.
