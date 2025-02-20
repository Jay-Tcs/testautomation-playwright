import { test, expect } from '@playwright/test';
import LoginPage from '../../pages/loginPage';
import { getTestData } from '../../utils/testHelper';

test.describe('HomeDepot Login Tests', () => {
  test('Valid user can login @ui @smoke', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto('https://www.homedepot.com');
    const validUser = getTestData('validUser');
    await loginPage.login(validUser.username, validUser.password);
    // Add assertions to verify successful login
  });

  test('Invalid user cannot login @ui @smoke @regression', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto('https://www.homedepot.com');
    const invalidUser = getTestData('invalidUser');
    await loginPage.login(invalidUser.username, invalidUser.password);
    // Add assertions to verify login failure
  });

  test('Valid user can logout @ui @smoke', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto('https://www.homedepot.com');
    const validUser = getTestData('validUser');
    await loginPage.login(validUser.username, validUser.password);
    // Add steps to logout
    // Add assertions to verify successful logout
  });

  test('Check login page elements @ui @regression', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto('https://www.homedepot.com');
    // Add steps to check login page elements
    // Add assertions to verify the presence of login page elements
  });
});
