import { test, expect } from "@playwright/test";

// Test case: GET /posts/:id returns correct post data
test("GET posts returns status 200", async ({ request }) => {
  // Send GET request to fetch post with ID 1
  const response = await request.get("/posts/1");

  // Expect HTTP status 200 (OK)
  expect(response.status()).toBe(200);

  // Parse the response body as JSON
  const body = await response.json();

  // Assert the post ID is 1
  expect(body.id).toBe(1);

  // Assert the userId is 1
  expect(body.userId).toBe(1);

  // Assert the title matches the expected string
  expect(body.title).toBe(
    "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  );

  // Assert the body contains a specific substring
  expect(body.body).toContain("quia et suscipit");
});
