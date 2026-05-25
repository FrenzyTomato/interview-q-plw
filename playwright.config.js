import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  reporter: [["list"], ["html", { open: "never" }]],
  use: {
    baseURL: process.env.API_BASE_URL || "http://localhost:3015",
    extraHTTPHeaders: {
      "content-type": "application/json"
    }
  }
});
