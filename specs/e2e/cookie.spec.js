const homePageHelper = require('../../helpers/home.page.helper');
const homePage = require('../../pageobjects/home.page');
const loginCookies =require('../../appcontent/login_cookies');

describe('Cookie Land', () => {
    beforeEach(async() =>{
        await homePageHelper.verifyHomePage();  
    });
    it('should log in using cookies', async() => {
        await browser.setCookies(loginCookies.LOGIN_COOKIES);
        await browser.refresh();
        expect(homePage.navLinkAccountList).toHaveText('Hello, Marios');
    });
    
});