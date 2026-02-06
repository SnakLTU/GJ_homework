import { type Page, type Locator } from "@playwright/test";
import fs from 'fs'

const downloadPath = process.env.DOWNLOAD_PATH

export class WallpaperPage {
    readonly page: Page
    readonly downloadButton: Locator
    readonly popUpAdd: Locator

    constructor(page: Page){
        this.page = page;
        this.downloadButton = page.getByRole('button', { name: 'Download' });
        this.popUpAdd = page.getByText('Preparing your download')
    };

    async clickDownloadButton(){
        await this.downloadButton.click()
    };

    async downloadWallpaper(){
        const downloadPromise = this.page.waitForEvent('download', {timeout: 20000});
        await this.downloadButton.click()
        const download = await downloadPromise;
        await download.saveAs( `${downloadPath}${download.suggestedFilename()}`);
        return download.suggestedFilename()
    };

    async getDownloadedFile(fileName: string){
        return fs.existsSync(`${downloadPath}${fileName}`)
    };

    async deleteDownloadedFile(fileName: string){
        fs.unlinkSync(`${downloadPath}${fileName}`)
    }
};
