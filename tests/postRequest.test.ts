import { test, expect } from "@playwright/test";

// Test case: POST /posts creates a new post
test("POST /posts creates a new post", async ({ request }) => {
  // Define the payload to send in the POST request
  const payload = {
    userId: 10,
    id: 101,
    title: "My Test",
    body: "API automation testing",
  };

  // Send POST request to create a new post
  const response = await request.post("/posts", {
    data: payload,
  });

  // Expect HTTP status 201 (Created)
  expect(response.status()).toBe(201);

  // Parse the response body as JSON
  const responseBody = await response.json();

  // Validate that the response matches the payload
  expect(responseBody).toMatchObject(payload);

  // Assert the response ID is as expected
  expect(responseBody.id).toBe(101);
  console.log(responseBody.id); // Log the ID

  // Assert the title is correct
  expect(responseBody.title).toBe("My Test");
  console.log(responseBody.title); // Log the title

  // Assert the body content is correct
  expect(responseBody.body).toBe("API automation testing");
  console.log(responseBody.body); // Log the body

  // Assert the userId is correct
  expect(responseBody.userId).toBe(10);
  console.log(responseBody.userId); // Log the userId
});
