import { defineConfig } from "@playwright/test";

const requiredEnvVars = ["API_BASE_URL", "ADMIN_SECRET"];
const missingEnvVars = requiredEnvVars.filter((name) => !process.env[name]);

if (missingEnvVars.length > 0) {
  throw new Error(`Missing required environment variable(s): ${missingEnvVars.join(", ")}`);
}

export default defineConfig({
  testDir: "./tests",
  reporter: [["list"], ["html", { open: "never" }]],
  use: {
    baseURL: process.env.API_BASE_URL,
    extraHTTPHeaders: {
      "content-type": "application/json"
    }
  }
});
