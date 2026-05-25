export async function createUser(request, userOverrides = {}) {
  const response = await request.post("/create", {
    headers: {
      "x-admin-secret": process.env.ADMIN_SECRET || "1001"
    },
    data: {
      name: "Maya Chen",
      age: 32,
      phoneNumber: "0400-111-222",
      ...userOverrides
    }
  });

  return {
    response,
    body: await response.json()
  };
}

export async function updatePhoneNumber(request, uuid, phoneNumber) {
  const response = await request.post(`/update?uuid=${uuid}`, {
    data: {
      phoneNumber
    }
  });

  return {
    response,
    body: await response.json()
  };
}
