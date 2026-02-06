import { test as base } from '@playwright/test';
import { HomePage } from '../pages/homePage.page';
import { BrowsePage } from '../pages/browsePage.page';
import { SearchResultsPage } from '../pages/searchResults.page';


type MyFixtures = {
    homePage: HomePage;
    browsePage: BrowsePage;
    searchResultsPage: SearchResultsPage;
};

export const test = base.extend<MyFixtures>({
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },

    browsePage: async ({ page }, use) => {
        await use(new BrowsePage(page));
    },

    searchResultsPage: async ({ page }, use) => {
        await use(new SearchResultsPage(page));
    },
});


export {expect} from '@playwright/test';