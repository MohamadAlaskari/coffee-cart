import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
    await page.goto("http://localhost:5173/");
    await page.getByRole("heading", { name: "Espresso $" }).dblclick();
    await page
        .getByRole("heading", { name: "Espresso Macchiato $" })
        .dblclick();
});
