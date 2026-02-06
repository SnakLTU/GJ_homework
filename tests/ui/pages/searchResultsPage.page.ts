import { type Page, type Locator } from "@playwright/test";


export class SearchResultsPage {
    readonly page: Page;
    readonly wallpapersHeader: Locator;
    readonly premiumWallpapers: Locator;
    readonly premiumWithPriceWallpapers: Locator;
    readonly allWallpapers: Locator;
    readonly freeWallpapers: Locator;

    constructor(page: Page) {
        this.page = page;
        this.wallpapersHeader= page.getByRole('heading', { name: 'Wallpapers' });
        this.premiumWallpapers = page.getByRole('main').getByRole('link').locator('[class="Card_card-header__itIwa"]');
        this.premiumWithPriceWallpapers = page.getByRole('main').getByRole('link').locator('[class="Card_card-footer__I2PFs"]');
        this.allWallpapers = page.getByRole('main').getByRole('link').locator('[class="Card_card__DE_00 aspect-wallpaper"]');
        this.freeWallpapers = page.getByRole('main').getByRole('link')
                                  .locator('[class="Card_card__DE_00 aspect-wallpaper"]')
                                  .filter({ hasNot: page.locator('[class="Card_card-footer__I2PFs"]') });             
    };
    
    async gotoWallpapers(keyword: string) {
        await this.page.goto(`/wallpapers?keyword=${keyword}`);
    };

    async clickFirstFreeWallpaper() {
        await this.freeWallpapers.first().click();
    };

    async countResults() {
        const allWallpapersCollect: Locator = this.allWallpapers;
        const premiumWallpapersCollect: Locator = this.premiumWallpapers; 
        const premiumWithPriceCollect: Locator = this.premiumWithPriceWallpapers;
        const freeWallpapersCollect: Locator = this.freeWallpapers; 

        console.log(`Total wallpapers count: ${await allWallpapersCollect.count()}`);
        console.log(`Premium wallpapers count: ${await premiumWallpapersCollect.count()}`);
        console.log(`Premium with Price wallpapers count: ${await premiumWithPriceCollect.count()}`);
        console.log(`Free wallpapers count: ${await freeWallpapersCollect.count()}`);
    };
};







