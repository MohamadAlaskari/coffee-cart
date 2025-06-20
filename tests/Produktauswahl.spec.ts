import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.locator('[data-test="Espresso"]').click();
  await page.locator('[data-test="Espresso_Macchiato"]').click({
    button: 'right'
  });
  await page.getByRole('button', { name: 'No' }).click();
  await page.locator('[data-test="Mocha"]').click({
    button: 'right'
  });
  await page.getByRole('button', { name: 'Yes' }).click();
});