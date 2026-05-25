import { expect, test } from "@playwright/test";
import { createUser } from "../helpers/apiClient.js";

test.describe("Tester-created cases", () => {
  test("TODO: create should reject missing admin secret", async ({ request }) => {
    // TODO: Send POST /create without x-admin-secret.
    // TODO: Assert the response status and error body.
    expect(true).toBe(true);
  });

  test("TODO: create should reject an invalid body", async ({ request }) => {
    // TODO: Send POST /create with one required field missing.
    // TODO: Assert the API explains which field is missing.
    expect(true).toBe(true);
  });

  test("TODO: update should reject an unknown uuid", async ({ request }) => {
    // TODO: Send POST /update?uuid=<fake uuid>.
    // TODO: Assert 404 and the expected error message.
    expect(true).toBe(true);
  });

  test("TODO: verify should fail when the phone number does not match", async ({ request }) => {
    const created = await createUser(request);

    // TODO: Send POST /verify?uuid=${created.body.uuid}
    // TODO: Use checks.phoneNumber with the wrong phone number.
    // TODO: Assert passed is false and results.phoneNumber is false.
    expect(created.body.uuid).toBeTruthy();
  });
});
