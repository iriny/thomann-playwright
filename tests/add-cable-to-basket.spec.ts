import { test, expect } from '@playwright/test';
import { CableGuyPage } from '../pages/CableGuyPage.js';
import { ItemPage } from '../pages/ItemPage.js';
import { BasketPage } from '../pages/BasketPage.js';

let cableGuyPage: CableGuyPage;
let itemPage: ItemPage;
let basketPage: BasketPage;

const cableBeginning = 'BNC female';
const cableEnd = 'BNC male';
const manufacturer = 'Sennheiser';
const expectedAlertText = '2 cables of Sennheiser found';
const expectedItemCount = 2;
const itemName = 'Sennheiser AM 2 183 Suitable';
const itemLinkSlug = 'sennheiser_am_2';
const expectedNotification = 'Item Sennheiser AM 2 is now in the shopping basket.';

test.beforeEach(async ({ page }) => {
  cableGuyPage = new CableGuyPage(page);
  itemPage = new ItemPage(page);
  basketPage = new BasketPage(page);

  await cableGuyPage.open();
  await cableGuyPage.acceptAllCookies();
});

test('User can add item to the basket', async ({ page }, testInfo) => {
  await test.step('Select cable beginning and end', async () => {
    await cableGuyPage.addCableBeginning(cableBeginning);
    await cableGuyPage.addCableEnd(cableEnd);
  });

  await test.step('Filter cables by manufacturer and validate alert and quantity', async () => {
    await cableGuyPage.filterByManufactorer(manufacturer);
    await cableGuyPage.checkFilteredCablesAlert(expectedAlertText);
    await cableGuyPage.checkItemsListCount(expectedItemCount);
    await cableGuyPage.checkItemsLogoQuantity(expectedItemCount);
  });

  await test.step('Select item from list', async () => {
    await cableGuyPage.selectItem(itemName);
  });

  await test.step('Verify item details page and add to basket', async () => {
    await itemPage.checkItemLinkContains(itemLinkSlug);
    await itemPage.addToBasket();
  });

  await test.step('Validate basket page and confirmation message', async () => {
    await basketPage.checkBasketUrl();
    await basketPage.checkNotificaiton(expectedNotification);
  });
});