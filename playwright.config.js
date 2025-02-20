import 'dotenv/config';

module.exports = {
  testDir: 'tests', // Directory where test files are located
  timeout: 30000, // Default test timeout
  expect: {
    timeout: 5000, // Default timeout for expect assertions
  },
  reporter: [
    ['list'],
    ['json', { outputFile: 'reports/test-results.json' }],
    ['html', { outputFolder: 'reports/html-report', open: 'never' }],
  ],
  use: {
    headless: false, // Ensure this is set to false to run with UI
    launchOptions: {
      slowMo: 50,
    },
    actionTimeout: 0,
    navigationTimeout: 30000,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
    baseURL: process.env.BASE_URL,
    extraHTTPHeaders: {
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  },
  // retries: 2, // Retry failed tests up to 2 times
  projects: [
    {
      name: 'chrome',
      use: {
        browserName: 'chromium',
        channel: 'chrome', // This specifies to use the Chrome browser
      },
    },
    {
      name: 'firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'webkit',
      use: { browserName: 'webkit' },
    },
    {
      name: 'api',
      use: {}, // No browser-specific configuration needed for API tests
    },
  ],
  outputDir: 'reports/test-results/', // Directory for test artifacts
  // globalSetup: require.resolve('./global-setup'), // Path to global setup file
  // globalTeardown: require.resolve('./global-teardown'), // Path to global teardown file
};
