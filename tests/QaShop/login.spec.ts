import { test, expect } from '@playwright/test';
const url ='https://www.automationtestingplatform.com/login';

test('qaShop login', async ({ page }) => {
    await page.goto(url);
    await page.getByTestId('login-email-input').fill('angel50710@gmail.com');
    await page.getByTestId('login-password-input').fill('12345678');
    await expect(page).toHaveTitle('Login - QA Shop');
    await expect(page.getByTestId('login-form')).toBeVisible();
});