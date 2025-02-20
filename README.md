# testautomation-playwright

This project is an advanced test automation framework using Playwright for both API and UI testing with the Page Object Model (POM) design pattern.

## Project Structure

testautomation-playwright/
├── src/
│ ├── api/
│ │ └── apiClient.js
│ ├── pages/
│ │ ├── basePage.js
│ │ └── loginPage.js
│ ├── tests/
│ │ ├── apiTests/
│ │ │ └── apiTest.test.js
│ │ └── uiTests/
│ │ └── loginPage.test.js
│ ├── utils/
│ │ ├── testData.js
│ │ └── testHelper.js
├── .gitignore
├── .eslintrc.json
├── .prettierrc
├── package.json
├── playwright.config.js
├── README.md
└── .env

## Setup

1. **Install dependencies:**

   ```sh
   npm install
   ```

2. **Run tests:**

   ```sh
   npx playwright test
   ```

## Configuration

- **`playwright.config.js`**: Configuration file for Playwright.
- **`src/pages/`**: Contains page object model classes.
- **`src/tests/`**: Contains test scripts.
- **`src/utils/testData.js`**: Contains test data.

## Running Tests

- **To run tests with the UI visible:**

  ```sh
  npx playwright test
  ```

- **To run tests in Chrome:**

  ```sh
  npx playwright test --project=chrome
  ```

## Advanced Options

- **Screenshots, videos, and traces** are retained on test failures.
- **Tests are retried** up to 2 times on failure.
- **Test results** are stored in the `test-results` directory.
