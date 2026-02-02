import { type Page, type Locator } from "@playwright/test";

export class BrowsePage {
    readonly page: Page;
    readonly searchInput: Locator;
    readonly searchInputButton: Locator;
    readonly searchInputCancelButton: Locator;
    readonly wallpaperh3: Locator;


    constructor(page: Page) {
        this.page = page;
        this.searchInput = page.locator('main').locator('#search');
        this.searchInputButton = page.locator('main').getByTitle('Search');
        this.searchInputCancelButton = page.locator('main').getByRole('button', { name: 'Cancel' });
        this.wallpaperh3= page.getByRole('heading', { name: 'Wallpapers' });
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
