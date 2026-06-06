import { test, expect } from '@playwright/test';

test('OrangeHRM Demo', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await expect(page.getByRole('img', { name: 'company-branding' })).toBeVisible();
  await expect(page.getByRole('img', { name: 'orangehrm-logo' })).toBeVisible();

  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/dashboard\/index/);
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'client brand banner' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'My Info' })).toBeVisible();
  await expect(page.getByText('Time at Work')).toBeVisible();
  await expect(page.getByText('Quick Launch')).toBeVisible();
});
