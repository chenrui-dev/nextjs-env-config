import { test, expect } from "@playwright/test";

test("basic test", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  const h1 = page.locator("h1");
  await expect(h1).toHaveText("Welcome to Next.js!");

  const h2 = page.locator("h2");
  await expect(h2).toHaveText("config test");
});
