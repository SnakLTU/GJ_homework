import { test, expect } from '../base.ts';
import { wallpapersFlowData} from '../data/wallpapersFlow.data.ts'


test.describe('Wallpaper Flow Test Suite', () => {

    test('Wallpaper flow test, count free and premiuim', 
        async ({ cookiesModule,
                 homePage, 
                 browsePage, 
                 searchResultsPage
                }) => {
        //Home Page Steps
        await homePage.goto(); //Step 1: Navigate to Home Page
        await cookiesModule.clickAcceptCookies(); //Step 2: Accept Cookies
        await homePage.clickBrowseNow(); //Step 3: Click on Browse Now button
        //Browse Page Steps
        await browsePage.selectCategoryFromDropdown(wallpapersFlowData.categoryOption); //Step 4: Select 'Wallpapers' from category dropdown
        await browsePage.enterSearchText(wallpapersFlowData.searchKeyword); //Step 5: Enter 'Nature' in search input
        await expect(browsePage.searchInputCancelButton).toBeVisible(); //Step 6: Verify that Cancel button is visible
        await expect(browsePage.searchInputButton).toBeVisible(); //Step 7: Verify that Search button is visible
        await browsePage.clickSearchButton(); //Step 8: Click on Search button
        await expect(browsePage.page).toHaveURL(new RegExp(`wallpapers\\?keyword=${wallpapersFlowData.searchKeyword}`))
        //Search Results Page Steps
        await expect(searchResultsPage.wallpapersHeader).toBeVisible(); //Step 10: Verify that Wallpapers heading is visible
        searchResultsPage.countResults(); //Step 11: Count and log the number of free and premium wallpapers    
    });

    test('Wallpaper flow test, download free wallpaper', 
        async ({ cookiesModule,
                 searchResultsPage,
                 wallpaperPage,
                 browserName
            }) => {
        test.skip(browserName == 'webkit', 'Download file does not work on Safari')
        await searchResultsPage.gotoWallpapers(wallpapersFlowData.searchKeyword); //Step 1: Navigate to wallpapers page with keyword
        await cookiesModule.clickAcceptCookies(); //Step 2: Accept Cookies
        await searchResultsPage.clickFirstFreeWallpaper(); //Step 3: Click on first free wallpaper
        await expect(wallpaperPage.downloadButton).toBeVisible(); //Step 4: Verify that Download button is visible
        const downloadedFileName: string = await wallpaperPage.downloadWallpaper(); //Step 5: Iniciate wallpaper download, wait for add to expire
        expect(wallpaperPage.getDownloadedFile(downloadedFileName)).toBeTruthy(); //Step 6: Check that download was successful
        wallpaperPage.deleteDownloadedFile(downloadedFileName) //Step 7: Clean up downloaded file
    });
});