import { test, expect } from '@playwright/test';

test('sanity', async ({ page: main_page }) => {
  await main_page.goto('https://www.thomann.de');
  const cookie_bar = main_page.locator('#cookie-consent-bar-configure-options-popup-trigger');
  await expect(cookie_bar).toBe;
});