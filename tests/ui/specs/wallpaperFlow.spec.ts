import { Locator } from '@playwright/test';
import { test, expect } from './base.ts';


test.describe('Wallpaper Flow Test Suite', () => {

    test.describe.configure({mode: 'serial'});

    test('Wallpaper flow test, count free and premiuim', 
        async ({ homePage, 
                 browsePage, 
                 searchResultsPage
                }) => {
        //Home Page Steps
        await homePage.goto(); //Step 1: Navigate to Home Page
        await homePage.clickAcceptCookies(); //Step 2: Accept Cookies
        await homePage.clickBrowseNow(); //Step 3: Click on Browse Now button
        //Browse Page Steps
        await browsePage.selectCategoryFromDropdown('Wallpapers'); //Step 4: Select 'Wallpapers' from category dropdown
        await browsePage.enterSearchText('Nature'); //Step 5: Enter 'Nature' in search input
        await expect(browsePage.searchInputCancelButton).toBeVisible(); //Step 6: Verify that Cancel button is visible
        await expect(browsePage.searchInputButton).toBeVisible(); //Step 7: Verify that Search button is visible
        await browsePage.pressEnterInSearchInput(); //Step 8: Press Enter key in search input
        await browsePage.clickSearchButton(); //Step 8: Click on Search button
        //Workaround for navigation issue, search button is not triggering, entering URL directly
        await searchResultsPage.gotoWallpapers('Nature'); //Step 9: Navigate to wallpapers page with keyword
        await expect(searchResultsPage.wallpapersHeader).toBeVisible(); //Step 10: Verify that Wallpapers heading is visible
        searchResultsPage.countResults(); //Step 11: Count and log the number of free and premium wallpapers    
    });
});