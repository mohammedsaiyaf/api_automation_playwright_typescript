import { test, expect } from "@playwright/test";

// Test case: DELETE /posts/:id deletes a post
test("DELETE /posts/:id deletes a post", async ({ request }) => {
  // Send DELETE request to delete post with ID 3
  const response = await request.delete("/posts/3");

  // Expect HTTP status 200 (OK)
  expect(response.status()).toBe(200); // OK for JSONPlaceholder

  // Get the raw response body as text
  const responseBody = await response.text(); // DELETE usually returns empty

  // Log the response to console
  console.log("Delete Response:", responseBody);

  // Assert the response body is an empty object (JSONPlaceholder returns "{}")
  expect(responseBody).toBe("{}");
});
