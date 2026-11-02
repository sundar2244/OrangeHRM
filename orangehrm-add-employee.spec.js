const { test, expect } = require('@playwright/test');

test('OrangeHRM add employee via PIM', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');
  await page.click('button[type="submit"]')
  await expect(page).toHaveURL(/dashboard/);

  await page.click('a:has-text("PIM")');
  await expect(page).toHaveURL(/pim\/viewEmployeeList/);

  await page.click('button:has-text("Add")');
  await expect(page).toHaveURL(/pim\/addEmployee/);

  await page.fill('input[name="firstName"]', 'John');
  await page.fill('input[name="middleName"]', 'Michael');
  await page.fill('input[name="lastName"]', 'Doe');

  await page.click('button:has-text("Save")');

  await expect(page).toHaveURL(/pim\/viewPersonalDetails/);
  await expect(page.locator('.oxd-toast')).toContainText('Successfully Saved');
});
