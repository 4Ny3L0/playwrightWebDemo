import { test, expect } from "@playwright/test";
import { SauceDemoLoginPage } from "./pages/login.page";

const url = "https://www.saucedemo.com";
let loginPage: SauceDemoLoginPage;
test.describe("Sauce Demo - Login", () => {
  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    loginPage = new SauceDemoLoginPage(page);
  });
  
  test.afterAll(async () => {
    await loginPage.page.close();
  });
  test.beforeEach(async () => {
    await loginPage.goto(url);
  });

  test("Validate login page elements", async () => {
    await expect(loginPage.sauceDemoTitle).toBeVisible();
    await expect(loginPage.sauceDemoTitle).toHaveText("Swag Labs");
  });

  test("Successfully login with valid credentials", async () => {
    await loginPage.login("standard_user", "secret_sauce");
    await expect(loginPage.page).toHaveURL(/inventory/);
  });
  test("Show error when login with invalid credentials", async () => {
    await loginPage.login("standard_user", "secret_sauces");
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toHaveText(
      "Epic sadface: Username and password do not match any user in this service"
    );
    await expect(loginPage.errorButton).toBeVisible();
    await expect(loginPage.emailInput).toContainClass('input_error form_input error');
    await expect(loginPage.passwordInput).toContainClass('input_error form_input error');
  });
  test("Reset the form after an error with the button 'X'", async () => {
    await loginPage.login("standard_user", "secret_sauces");
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toHaveText(
      "Epic sadface: Username and password do not match any user in this service"
    );
    await expect(loginPage.errorButton).toBeVisible();
    await loginPage.errorButton.click();
    await expect(loginPage.errorMessage).not.toBeVisible();
    await expect(loginPage.emailInput).not.toContainClass('error');
    await expect(loginPage.passwordInput).not.toContainClass('error');
  });
});
