import{expect, test}from'@playwright/test';


test('Heroku first test',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link', { name: 'Form Authentication' }).click();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
  await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
  await page.getByRole('button', { name: ' Login' }).click();
  await expect(page.getByRole('heading', { name: 'Secure Area', exact: true })).toBeVisible();
  await page.getByRole('heading', { name: 'Welcome to the Secure Area.' }).click();
  await expect(page.getByRole('heading', { name: 'Welcome to the Secure Area.' })).toBeVisible();
  await expect(page.locator('#content')).toContainText('Logout');
  await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();
});