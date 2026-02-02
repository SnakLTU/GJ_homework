import { test, expect } from './base.ts';

test('Wallpaper flow test', async ({ homePage, browsePage }) => {
    await homePage.goto(); //Step 1: Navigate to Home Page
    await homePage.clickAcceptCookies(); //Step 2: Accept Cookies
    await homePage.clickBrowseNow(); //Step 3: Click on Browse Now button
    await browsePage.enterSearchText('Nature'); //Step 4: Enter 'Nature' in search input
    await expect(browsePage.searchInputCancelButton).toBeVisible(); //Step 5: Verify that Cancel button is visible
    await browsePage.clickSearchButton(); //Step 6: Click on Search button
   // await browsePage.waitForSearchResultsToLoad('Nature'); //Step 7: Wait for search results to load
    await expect(browsePage.wallpaperh3).toBeVisible(); //Step 8: Verify that Wallpapers heading is visible
});