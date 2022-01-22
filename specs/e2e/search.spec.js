const homePageHelper = require('../../helpers/home.page.helper');
const resultsPage = require('../../pageobjects/results.page');
const resultsPageHelper = require('../../helpers/results.page.helper');

const PRODUCT = 'laptop';

describe('Amazon Product Search', () => {
    
    it('should open and verify the main page', async() => {
        await homePageHelper.verifyHomePage();     
    });

    it('should search a product and verify the search text value', async() => {
        await homePageHelper.searchProduct(PRODUCT);
        const searchInput = await resultsPage.searchInput;
        await expect(searchInput).toHaveValue(PRODUCT);   
    });

    it('should redirect to a new page and verify the title', async() => {
        await expect(browser).toHaveTitle(`Amazon.com : ${PRODUCT}`);       
    });


});