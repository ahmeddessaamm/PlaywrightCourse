import { test, expect } from '@playwright/test';

test('OrangeHRM Demo', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
  await page.locator('.orangehrm-login-logo').click();
  await expect(page.locator('.orangehrm-login-logo')).toBeVisible();
  await expect(page.getByRole('img', { name: 'company-branding' })).toBeVisible();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  await page.getByRole('link', { name: 'My Info' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).dblclick();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Ahmed');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).press('ControlOrMeta+a');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Hassan');
  await page.getByText('Employee IdOther Id').click();
  await page.getByRole('textbox').nth(4).press('NumLock');
  await page.getByRole('textbox').nth(4).fill('1234');
  await page.getByRole('textbox').nth(5).fill('4115');
  await page.locator('form').filter({ hasText: 'Employee Full NameEmployee' }).getByRole('button').click();
  await expect(page.getByRole('row', { name: ' Test_Data_Image_20260604_025806_4549_ImageUpload.png Automation updated' })).toBeVisible();
});