import { test, expect } from "@playwright/test";
import { QAShopLoginPage } from "./pages/login.page";

const url = "https://www.automationtestingplatform.com";
let loginPage: QAShopLoginPage;
test.describe("QA Shop - Login", () => {
  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    loginPage = new QAShopLoginPage(page);
  });
  test.afterAll(async () => {
    await loginPage.page.close();
  });
  test.beforeEach(async () => {
    await loginPage.goto(url);
  });
  test("Validate login page elements", async () => {
    await expect(loginPage.qaShopTitle).toBeVisible();
    await expect(loginPage.qaShopTitle).toHaveText("QA Shop");
    await expect(loginPage.loginFormHeading).toBeVisible();
    await expect(loginPage.loginFormHeading).toHaveText("Welcome Back");
  });
});
