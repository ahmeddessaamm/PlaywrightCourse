import { test, expect } from '@playwright/test';

test('OrangeHRM Demo', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await expect(page.locator('.orangehrm-login-logo')).toBeVisible();
  await expect(page.getByRole('img', { name: 'company-branding' })).toBeVisible();

  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL(/dashboard\/index/);

  await page.getByRole('link', { name: 'My Info' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Ahmed');
  await page.getByRole('textbox', { name: 'Last Name' }).press('ControlOrMeta+a');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Hassan');
  await page.getByRole('textbox').nth(4).fill('1234');
  await page.getByRole('textbox').nth(5).fill('4115');
  await page.locator('form').filter({ hasText: 'Employee Full NameEmployee' }).getByRole('button').click();

  await expect(page.getByText('Successfully Updated')).toBeVisible();
});
