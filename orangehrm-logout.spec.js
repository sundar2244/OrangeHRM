const { test, expect } = require('@playwright/test');

test('OrangeHRM demo logout', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL(/dashboard/);

  await page.click('.oxd-userdropdown-tab');
  await page.click('a:has-text("Logout")');

  await expect(page).toHaveURL(/auth\/login/);
  await expect(page.locator('h5.oxd-text')).toHaveText('Login');
});
