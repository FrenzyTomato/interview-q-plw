import { expect, test } from "@playwright/test";
import { createUser, updatePhoneNumber } from "../helpers/apiClient.js";

test.describe("User Practice API", () => {
  test("GET /health returns ok", async ({ request }) => {
    const response = await request.get("/health");
    const body = await response.json();

    expect(response.status()).toBe(200);
    expect(body.status).toBe("ok");
  });

  test("POST /create creates a user with an admin secret", async ({ request }) => {
    const { response, body } = await createUser(request, {
      name: "Sam Rivera",
      age: 41,
      phoneNumber: "0400-333-444"
    });

    expect(response.status()).toBe(201);
    expect(body.uuid).toMatch(/^[0-9a-f-]{36}$/);
    expect(body.name).toBe("Sam Rivera");
  });

  test("POST /update changes a user's phone number", async ({ request }) => {
    const created = await createUser(request, {
      name: "Jordan Patel",
      age: 29,
      phoneNumber: "0400-555-666"
    });
    const nextPhoneNumber = "0400-999-888";

    const { response, body } = await updatePhoneNumber(
      request,
      created.body.uuid,
      nextPhoneNumber
    );

    expect(response.status()).toBe(200);
    expect(body.uuid).toBe(created.body.uuid);
    expect(body.name).toBe("Jordan Patel");
    expect(body.phoneNumber).toBe(nextPhoneNumber);
  });

  test("POST /verify checks age and phone number", async ({ request }) => {
    const created = await createUser(request, {
      name: "Avery Smith",
      age: 25,
      phoneNumber: "0400-777-888"
    });

    const response = await request.post(`/verify?uuid=${created.body.uuid}`, {
      headers: {
        "x-admin-secret": process.env.ADMIN_SECRET || "1001"
      },
      data: {
        checks: {
          minAge: 18,
          phoneNumber: "0400-777-888"
        }
      }
    });
    const body = await response.json();

    expect(response.status()).toBe(200);
    expect(body.passed).toBe(true);
    expect(body.results).toEqual({
      minAge: true,
      phoneNumber: true
    });
  });
});
