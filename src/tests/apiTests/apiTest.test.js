import { test, expect } from '@playwright/test';
import ApiClient from '../../api/apiClient';
import { getTestData } from '../../utils/testHelper';

test.describe('API Tests', () => {
  let apiClient;

  test.beforeAll(async () => {
    apiClient = new ApiClient('https://api.homedepot.com');
    await apiClient.init();
  });

  test.afterAll(async () => {
    await apiClient.dispose();
  });

  test('Valid user can login via API @api @smoke', async () => {
    const validUser = getTestData('validUser');
    const response = await apiClient.post(
      getTestData('apiEndpoints').login,
      validUser
    );
    expect(response.status()).toBe(200);
    // Add assertions to verify successful login
  });

  test('Invalid user cannot login via API @api @regression', async () => {
    const invalidUser = getTestData('invalidUser');
    const response = await apiClient.post(
      getTestData('apiEndpoints').login,
      invalidUser
    );
    expect(response.status()).toBe(401);
    // Add assertions to verify login failure
  });
});
