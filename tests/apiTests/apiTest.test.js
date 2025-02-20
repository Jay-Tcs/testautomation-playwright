import { test, expect } from '@playwright/test';
import ApiClient from '../../api/apiClient';
import { getEnvData, getApiTestData } from '../../utils/testHelper';

test.describe('API Tests', () => {
  let apiClient;

  test.beforeAll(async () => {
    apiClient = new ApiClient(getEnvData('BASE_URL'));
    await apiClient.init();
  });

  test.afterAll(async () => {
    await apiClient.dispose();
  });

  test('Valid user can login via API @api @smoke', async () => {
    const validUser = getApiTestData('validUser');
    const response = await apiClient.post(
      getEnvData('LOGIN_ENDPOINT'),
      validUser
    );
    expect(response.status()).toBe(200);
    // Add assertions to verify successful login
  });

  test('Invalid user cannot login via API @api @regression', async () => {
    const invalidUser = getApiTestData('invalidUser');
    const response = await apiClient.post(
      getEnvData('LOGIN_ENDPOINT'),
      invalidUser
    );
    expect(response.status()).toBe(401);
    // Add assertions to verify login failure
  });
});
