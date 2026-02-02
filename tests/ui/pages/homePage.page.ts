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
        this.searchInputButton = page.locator('main').locator('button[type="submit"]');

    };

    async goto() {
        await this.page.goto('');
    };

    async clickAcceptCookies() {
        await this.acceptCookiesButton.click();
    }

    async clickBrowseNow() {
        await this.browsNowButton.click();
    };

    async enterSearchText(text: string) {
        await this.searchInput.fill(text);
    }

    async clickSearchButton() {
        await this.searchInputButton.click();
    }

    async waitForSearchResultsToLoad(text: string) {
        await this.page.waitForResponse(response =>
            response.url().includes(`/find/${text}`) && response.status() === 200
        );
    }

}
