const { test, expect } = require('@playwright/test');

test('OrangeHRM demo login', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

<<<<<<< HEAD
  await page.fill('input[name="username"]', 'ADMIN');
  await page.fill('input[name="password"]', 'admin123');
=======
 await page.fill('input[name="username"]', 'LOGIN_FEATURE');
await page.fill('input[name="password"]', 'LOGIN_PASSWORD');
>>>>>>> login-feature
  await page.click('button[type="submit"]');

  await expect(page).toHaveURL(/dashboard/);
  await expect(page.locator('.oxd-topbar-header-breadcrumb-module')).toHaveText('Dashboard');
});
//test


