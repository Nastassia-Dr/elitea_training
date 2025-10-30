import { test, expect } from '@playwright/test';

test('EPAM Services and Client Work Test', async ({ page }) => {
  // Navigate to the EPAM homepage
  await page.goto('https://www.epam.com/');

  // Click on the "Hamburger Menu" to open the menu
  await page.click('button[aria-label="Hamburger Menu"]');

  // Select "Services" from the header menu
  await page.click('a[href="/services"]');

  // Click the "Explore Our Client Work" link
  await page.click('a[href="/services/client-work"]');

  // Verify that the "Client Work" text is visible on the page
  const clientWorkText = await page.locator('text=Client Work');
  await expect(clientWorkText).toBeVisible();
});