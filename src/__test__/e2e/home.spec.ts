import test, { expect } from "@playwright/test";

test.describe("表示テスト", async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000");
  });

  test("アクセス時に「ポケットモンスター」と表示されていること", async ({
    page,
  }) => {
    await expect(page.locator("text=ポケットモンスター")).toBeDefined();
  });
});
