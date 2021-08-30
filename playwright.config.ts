import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  name: "Chrome Stable",
  testDir: "e2e",
  use: {
    browserName: "chromium",
    // Test against Chrome Stable channel.
    channel: "chrome",
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: "on-first-retry",
  },
};

export default config;
