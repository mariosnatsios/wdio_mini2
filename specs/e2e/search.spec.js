const homePageHelper = require('../../helpers/home.page.helper');
const resultsPage = require('../../pageobjects/results.page');
const loginCookies =require('../../appcontent/login_cookies');


const PRODUCT = 'laptop';

describe('Amazon Product Search', () => {
    beforeEach(async() =>{
        await homePageHelper.verifyHomePage();  
    });
    
    it('should search a product and verify the search text value and the page title', async() => {
        await browser.newWindow('https://www.amazon.com')
        await browser.setCookies(loginCookies.LOGIN_COOKIES);
        await browser.refresh();
        await homePageHelper.searchProduct(PRODUCT);
        const searchInput = await resultsPage.searchInput;
        await expect(searchInput).toHaveValue(PRODUCT);
        await expect(browser).toHaveTitle(`Amazon.com : ${PRODUCT}`);   
    });


});