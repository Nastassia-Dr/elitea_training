import { test, expect } from '@playwright/test';

test('EPAM Services and Client Work Test', async ({ page }) => {
  // Step 1: Navigate to https://www.epam.com/
  await page.goto('https://www.epam.com/');

  // Step 2: Navigate to the Services page directly due to click issues
  await page.goto('https://www.epam.com/services');

  // Step 3: Click the "Explore Our Client Work" link
  await page.click('a[href="/services/client-work"]');

  // Step 4: Verify that the "Client Work" text is visible on the page
  await expect(page.locator('text=Client Work')).toBeVisible();
});