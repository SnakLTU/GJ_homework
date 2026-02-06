import { test as base } from '@playwright/test';
import { CookiesModule } from './pageUtils/acceptCookies';
import { HomePage } from './pages/homePage.page';
import { BrowsePage } from './pages/browsePage.page';
import { SearchResultsPage } from './pages/searchResultsPage.page';
import { WallpaperPage } from './pages/wallpapperPage.page';  



type MyFixtures = {
    cookiesModule: CookiesModule;
    homePage: HomePage;
    browsePage: BrowsePage;
    searchResultsPage: SearchResultsPage;
    wallpaperPage: WallpaperPage;
};

export const test = base.extend<MyFixtures>({
    cookiesModule: async ({ page }, use) => {
        await use(new CookiesModule(page));
    },

    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },

    browsePage: async ({ page }, use) => {
        await use(new BrowsePage(page));
    },

    searchResultsPage: async ({ page }, use) => {
        await use(new SearchResultsPage(page));
    },

    wallpaperPage: async ({ page }, use) => {
        await use(new WallpaperPage(page));
    },
});


export {expect} from '@playwright/test';