import { faker } from '@faker-js/faker/locale/en';


const seedValue: number = parseInt(process.env.TEST_SEED || '0');
faker.seed(seedValue);

interface WallpapersFlowData {
    searchKeyword: string;
    categoryOption: string;
}

export const wallpapersFlowData: WallpapersFlowData = {
    searchKeyword: faker.animal.type(),
    categoryOption: 'Wallpapers'
};