import { test, expect } from "@playwright/test";

const baseURL = "https://www.automationtestingplatform.com/";
//Debo corregir la prueba para el nuevo sitio
test.skip("qaShop products", async ({ page }) => {
  await page.goto(`${baseURL}/inventory`);
});
