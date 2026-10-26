const { test, expect } = require('@playwright/test');

test('OrangeHRM demo login', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');
  await page.click('button[type="submit"]');

  await expect(page).toHaveURL(/dashboard/);
  await expect(page.locator('.oxd-topbar-header-breadcrumb-module')).toHaveText('Dashboard');
});
