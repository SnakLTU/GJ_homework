import { type Page, type Locator } from "@playwright/test";


export class HomePage {
    readonly page: Page;
    readonly browsNowButton: Locator;
    readonly acceptCookiesButton: Locator;
    readonly searchInput: Locator;
    readonly searchInputButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.browsNowButton = page.getByText('Browse Now');
        this.acceptCookiesButton = page.locator('#didomi-notice-agree-button');
        this.searchInput = page.locator('main').locator('#search');
        this.searchInputButton = page.locator('main').getByRole('button', { name: 'Search' });
    };

    async goto() {
        await this.page.goto('');
    };

    async clickAcceptCookies() {
        await this.acceptCookiesButton.click();
    };

    async clickBrowseNow() {
        await this.browsNowButton.click();
    };
};
