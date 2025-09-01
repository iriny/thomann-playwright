import { test, expect } from '@playwright/test';
import { CableGuyPage } from '../pages/CableGuyPage.js';
import { ItemPage } from '../pages/ItemPage.js';
import { BasketPage } from '../pages/BasketPage.js';

test('User can add item to the basket', async ({ page }, testInfo) => {
  const cableGuyPage = new CableGuyPage(page);
  const itemPage = new ItemPage(page);
  const basketPage = new BasketPage(page);

  await test.step('Open CableGuy page and accept cookies', async () => {
    await cableGuyPage.open();
    await cableGuyPage.acceptAllCookies();
  });

  await test.step('Select cable beginning and end', async () => {
    await cableGuyPage.addCableBeginning('BNC female');
    await cableGuyPage.addCableEnd('BNC male');
  });

  await test.step('Filter cables by manufacturer and validate alert and quantity', async () => {
    await cableGuyPage.filterByManufactorer('Sennheiser');
    await cableGuyPage.checkFilteredCablesAlert('2 cables of Sennheiser found');
    await cableGuyPage.checkItemsListCount(2);
    await cableGuyPage.checkItemsLogoQuantity(2);
  });

  await test.step('Select item from list', async () => {
    await cableGuyPage.selectItem('Sennheiser AM 2 183 Suitable');
  });

  await test.step('Verify item details page and add to basket', async () => {
    await itemPage.checkItemLinkContains('sennheiser_am_2');
    await itemPage.addToBasket();
  });

  await test.step('Validate basket page and confirmation message', async () => {
    await basketPage.checkBasketUrl();
    await basketPage.checkNotificaiton('Item Sennheiser AM 2 is now in the shopping basket.');
  });
});