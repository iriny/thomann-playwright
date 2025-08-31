import { Page, expect } from '@playwright/test';
import { CommonActionsPage } from './CommonActionsPage';

export class ItemPage extends CommonActionsPage {
    constructor(page: Page) {
        super(page);
    }

    async checkItemLinkContains(itemName: string) {
        await expect(this.page).toHaveURL(this.baseURL + itemName + '.htm');
    }

    async addToBasket() {
        await this.page.getByRole('button', { name: 'Add to Basket' }).click();
    }
}
