import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.locator('[data-test="Espresso_Macchiato"]').click();
  await page.locator('[data-test="Espresso_Macchiato"]').click();
  await page.locator('[data-test="Flat_White"]').click();
  await page.getByRole('button', { name: 'Yes, of course!' }).click();
  await page.locator('[data-test="Espresso"]').click();
  await page.locator('[data-test="Mocha"]').click();
  await page.getByRole('button', { name: 'Yes, of course!' }).click();
});