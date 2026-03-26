import { test, expect } from "@playwright/test";

const baseURL = "https://www.automationtestingplatform.com/";

test("qaShop products", async ({ page }) => {
  await page.goto(`${baseURL}/products`);
//   const productCards = await page.locator(".product-card").count();
//   expect(productCards).toBeGreaterThan(0);
});
