import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
    await page.getByRole("button", { name: "Add one Cappuccino" }).click();
    await page.getByRole("button", { name: "Add one Cappuccino" }).click();
    await page.getByRole("button", { name: "Add one Cappuccino" }).click();
    await page
        .getByRole("button", { name: "Remove one Espresso Macchiato" })
        .click();
    await page.getByRole("button", { name: "Remove all Cappuccino" }).click();
});
