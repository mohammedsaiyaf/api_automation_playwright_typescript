import { test, expect } from "@playwright/test";

// Test case: PUT /posts/:id updates an existing post
test("PUT /posts/:id updates an existing post", async ({ request }) => {
  // Define the updated payload to send in the PUT request
  const updatedPayload = {
    userId: 10,
    id: 1,
    title: "Updated Title",
    body: "Updated body content",
  };

  // Send PUT request to update post with ID 1
  const response = await request.put("/posts/1", {
    data: updatedPayload,
  });

  // Expect HTTP status 200 (OK)
  expect(response.status()).toBe(200);

  // Parse the response body as JSON
  const responseBody = await response.json();

  // Validate the response matches the updated payload
  expect(responseBody).toMatchObject(updatedPayload);

  // Log and validate individual fields
  console.log("Updated ID:", responseBody.id); // Log updated ID
  console.log("Updated Title:", responseBody.title); // Log updated title
  console.log("Updated Body:", responseBody.body); // Log updated body
  console.log("Updated User ID:", responseBody.userId); // Log updated userId
});
