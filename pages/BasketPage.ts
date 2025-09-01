import { Page, expect } from '@playwright/test';
import { CommonActionsPage } from './CommonActionsPage';

export class BasketPage extends CommonActionsPage {
  private readonly basketPath = 'basket.html';

  constructor(page: Page) {
    super(page);
  }

  async checkBasketUrl() {
    await expect(this.page).toHaveURL(this.baseURL + this.basketPath);
  }

  async checkNotificaiton(alertText: string) {
    await expect(this.page.getByText(alertText)).toBeVisible();
  }
}