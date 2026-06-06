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

test('OrangeHRM Demo', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await expect(page.getByRole('img', { name: 'company-branding' })).toBeVisible();
  await expect(page.getByRole('img', { name: 'orangehrm-logo' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('img', { name: 'profile picture' }).nth(1)).toBeVisible();
  await page.getByRole('link', { name: 'client brand banner' }).click();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  await expect(page.locator('#app')).toMatchAriaSnapshot(`
    - text: 
    - paragraph: Time at Work
    - separator
    - img "profile picture"
    - paragraph: Punched Out
    - paragraph: "/Punched Out: Jun 4th at \\\\d+:\\\\d+ AM \\\\(GMT 3\\\\)/"
    - text: /\\d+[hmsp]+ [\\d,.]+[bkmBKM]+ Today/
    - button ""
    - separator
    - paragraph: This Week
    - paragraph: /Jun \\d+ - Jun \\d+/
    - text: 
    - paragraph: /\\d+[hmsp]+ [\\d,.]+[bkmBKM]+/
    - text: 
    - paragraph: My Actions
    - separator
    - button
    - paragraph: (1) Pending Self Review
    - button
    - paragraph: (1) Candidate to Interview
    - text: 
    - paragraph: Quick Launch
    - separator
    - button "Assign Leave"
    - paragraph: Assign Leave
    - button "Leave List"
    - paragraph: Leave List
    - button "Timesheets"
    - paragraph: Timesheets
    - button "Apply Leave"
    - paragraph: Apply Leave
    - button "My Leave"
    - paragraph: My Leave
    - button "My Timesheet"
    - paragraph: My Timesheet
    - text: 
    - paragraph: Buzz Latest Posts
    - separator
    - img "profile picture"
    - paragraph: Orange Test
    - paragraph: /\\d+-\\d+-\\d+ \\d+:\\d+ AM/
    - separator
    - paragraph: /Phase2 test post \\d+/
    - img "profile picture"
    - paragraph: Orange Test
    - paragraph: /\\d+-\\d+-\\d+ \\d+:\\d+ AM/
    - separator
    - paragraph: /Phase2 test post \\d+/
    - img "profile picture"
    - paragraph: Orange Test
    - paragraph: /\\d+-\\d+-\\d+ \\d+:\\d+ AM/
    - separator
    - paragraph: /Phase2 test post \\d+/
    - img "profile picture"
    - paragraph: Orange Test
    - paragraph: /\\d+-\\d+-\\d+ \\d+:\\d+ AM/
    - separator
    - paragraph: "Hi All; Linda has been blessed with a baby boy! Linda: With love, we welcome your dear new baby to this world. Congratulations!"
    - img "profile picture"
    - paragraph: Sania Shaheen
    - paragraph: /\\d+-\\d+-\\d+ \\d+:\\d+ AM/
    - separator
    - paragraph: "World Championship: What makes the perfect snooker player? Mark Selby: Robertson has one of the best techniques in the game. It is very, very straight and he fully commits to every single shot he plays. John Higgins: Every shot is repetitive. He always keeps the same technique and cues through the ball bang straight. Barry Hawkins: Robertson is textbook with his grip and has a ramrod solid cue action, delivering it in a straight line. Honourable mentions: Shaun Murphy, Ding Junhui, Jack Lisowski."
    - paragraph: Employees on Leave Today
    - text: 
    - separator
    - img "No Content"
    - paragraph: No Employees are on Leave Today
    - text: 
    - paragraph: Employee Distribution by Sub Unit
    - separator
    - list:
      - listitem: Engineering
      - listitem: Human Resources
      - listitem: Administration
      - listitem: Client Services
      - listitem: Unassigned
    - text: 
    - paragraph: Employee Distribution by Location
    - separator
    - list:
      - listitem: Texas R&D
      - listitem: New York Sales Office
      - listitem: Unassigned
    `);
  await expect(page.getByRole('link', { name: 'client brand banner' })).toBeVisible();
});
