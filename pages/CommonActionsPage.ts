import { Page, expect } from '@playwright/test';

export class CommonActionsPage {

    protected readonly baseURL = 'https://www.thomann.de/intl/';

    constructor(protected page: Page) {}

    public readonly itemsList = this.page.locator('.fx-product-list-entry');

    async checkItemsCount(expectedCount: number) {
        await expect(this.itemsList).toHaveCount(expectedCount);
    }

    async selectItem(itemName: string) {
        await this.page.getByRole('link', { name: itemName }).click();
    }
}
