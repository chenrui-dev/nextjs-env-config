import { test, expect } from "@playwright/test";

test("basic test", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  const h1 = page.locator("h1");
  await expect(h1).toHaveText("Welcome to Next.js!");

  const h2Config = page.locator("#config");
  await expect(h2Config).toHaveText("config test");

  const h2AppEnv = page.locator("#appEnv");
  await expect(h2AppEnv).toHaveText("APP_ENV is test-abc");

  const h2AppVar = page.locator("#appVar");
  await expect(h2AppVar).toHaveText("APP_VAR is default-var-x1");

  const h2GoogleUrl = page.locator("#googleUrl");
  await expect(h2GoogleUrl).toHaveText("GOOGLE_URL is https://google.com");

  const h2MeetupHelpUrl = page.locator("#meetupHelpUrl");
  await expect(h2MeetupHelpUrl).toHaveText(
    "MEETUP_HELP_URL is default-meetup-help-url"
  );

  const h2NextPublicMeetupUrl = page.locator("#nextPublicMeetupUrl");
  await expect(h2NextPublicMeetupUrl).toHaveText(
    "NEXT_PUBLIC_MEETUP_URL is https://www.meetup.com/"
  );
});
