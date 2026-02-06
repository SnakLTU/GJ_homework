import { type Page, type Locator } from "@playwright/test";

export class CookiesModule {
    readonly page: Page
    readonly acceptCookiesButton: Locator

    constructor(page: Page){
        this.page = page;
        this.acceptCookiesButton = page.locator('#didomi-notice-agree-button');
    };

    async clickAcceptCookies() {
        await this.acceptCookiesButton.click();
    };
}