import { test, expect } from '@playwright/test';

test('sanity', async ({ page }) => {
  await page.goto('https://www.thomann.de');
  const cookie_bar = page.locator('#cookie-consent-bar-configure-options-popup-trigger');
  await expect(cookie_bar).toBe;
});