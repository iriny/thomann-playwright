import { Page, expect } from '@playwright/test';
import { CommonActionsPage } from './CommonActionsPage';

export class CableGuyPage extends CommonActionsPage {
  private readonly cableGuyPageURL = this.baseURL + 'cableguy.html';
  private readonly acceptCookiesBtn = this.page.locator('.js-accept-all-cookies');
  private readonly cableBeginningBtn = this.page.getByRole('button', { name: 'cable beginning' });
  private readonly cableEndBtn = this.page.getByRole('button', { name: 'cable end' });
  private readonly filteredCablesAlert = this.page.locator('.cg-count');
  private readonly itemsLogoCount = this.page.locator('.cg-brands__item.clicked.active+.cg-brands__item__count');

  constructor(page: Page) {
    super(page);
  }

  async open() {
    await this.page.goto(this.cableGuyPageURL);
  }

  async acceptAllCookies() {
    await this.acceptCookiesBtn.click();
  }

  async addCableBeginning(beginningCableName: string) {
    await this.cableBeginningBtn.click();
    await this.page.getByText(beginningCableName, { exact: true }).click();
  }

  async addCableEnd(endCableName: string) {
    await this.cableEndBtn.click();
    await this.page.getByText(endCableName, { exact: true }).click();
  }

  async filterByManufactorer(manufacturer: string) {
    await this.page.getByRole('img', { name: manufacturer }).click();
  }

  async checkFilteredCablesAlert(expectedText: string) {
    await this.filteredCablesAlert.waitFor();
    await expect(this.page.getByText(expectedText)).toBeVisible();
  }

  async checkItemsLogoQuantity(expectedQuantity: number) {
    await expect(this.itemsLogoCount).toHaveText(String(expectedQuantity));
  }
}