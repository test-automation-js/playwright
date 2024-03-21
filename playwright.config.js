const { devices } = require("@playwright/test");
const token = require("./config/targetTokens");
const config = {
  testDir: "./tests",
  timeout: 300 * 1000,
  expect: {
    timeout: 30000,
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,

  workers: 5,
  reporter: [
    ["list"],
    ["html", { open: "never", outputFolder: "html-report" }],
    // ["playwright-tesults-reporter", { "tesults-target": token.chrome }],
  ],
  use: {
    actionTimeout: 15000,
    baseURL: "https://hack-o-warriors.netlify.app",
    trace: "on-first-retry",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chrome",
      testDir: "tests/",
      timeout: 360 * 1000,
      use: {
        ...devices["chrome"],
        headless: false,
        screenshot: "on",
        video: "retain-on-failure",
        traces: "on",
      },
    }
};

module.exports = config;
