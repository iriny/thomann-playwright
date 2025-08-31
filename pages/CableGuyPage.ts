import { Page, expect } from '@playwright/test';
import { CommonActionsPage } from './CommonActionsPage';

export class CableGuyPage extends CommonActionsPage {
  private readonly cableGuyPageURL = this.baseURL + 'cableguy.html';
  private readonly acceptCookiesBtn = this.page.locator('.js-accept-all-cookies');

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
    await this.page.getByRole('button', { name: 'cable beginning' }).click();
    await this.page.getByText(beginningCableName, { exact: true }).click();
  }

  async addCableEnd(endCableName: string) {
    await this.page.getByRole('button', { name: 'cable end' }).click();
    await this.page.getByText(endCableName, { exact: true }).click();
  }

  async filterByManufactorer(manufactorer: string) {
    await this.page.getByRole('img', { name: manufactorer }).click();
  }

  async checkFilteredCablesAlert(expectedText: string) {
    await this.page.waitForSelector('.cg-count');
    await expect(this.page.getByText(expectedText)).toBeVisible();
  }

  async checkItemsLogoQuantity(expectedQuantity: number) {
    const countElement = this.page.locator('.cg-brands__item.clicked.active+.cg-brands__item__count');
    await expect(countElement).toHaveText(String(expectedQuantity));
  }
}
