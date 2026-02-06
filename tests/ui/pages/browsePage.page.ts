import { type Page, type Locator } from "@playwright/test";


export class BrowsePage {
    readonly page: Page;
    readonly searchInput: Locator;
    readonly searchInputButton: Locator;
    readonly searchInputCancelButton: Locator;
    readonly searchInputDropdown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchInput = page.locator('main').locator('#search');
        this.searchInputButton = page.locator('main').getByRole('button', { name: 'Search' });
        this.searchInputCancelButton = page.locator('main').getByRole('button', { name: 'Cancel' });
        this.searchInputDropdown = page.getByRole('main').getByRole('button', { name: 'All' });
    };

    async selectCategoryFromDropdown(category: string) {
        await this.searchInputDropdown.click();
        const categoryOption = this.page.getByRole('menuitemradio', { name: category })
        await categoryOption.click();
    };

    async enterSearchText(keyword: string) {
        await this.searchInput.fill(keyword);
    };

    async clickSearchButton() {
        await this.searchInputButton.click();
    };

    async pressEnterInSearchInput() {
        await this.searchInput.press('Enter');
    };
    
    async waitForSearchResultsToLoad(text: string) {
        await this.page.waitForResponse(response =>
            response.url().includes(`/find/${text}`) && response.status() === 200
        );
    };
};
