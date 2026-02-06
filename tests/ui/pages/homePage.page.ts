import { type Page, type Locator } from "@playwright/test";


export class HomePage {
    readonly page: Page;
    readonly browsNowButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.browsNowButton = page.getByText('Browse Now');
    };

    async goto() {
        await this.page.goto('');
    };

    async clickBrowseNow() {
        await this.browsNowButton.click();
    };
};
