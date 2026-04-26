import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Spectrix/);
});

test('check for js errors', async ({ page }) => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', msg => {
      if (msg.type() === 'error') {
          errors.push(msg.text());
      }
  });

  await page.goto('/');

  expect(errors).toEqual([]);
});
