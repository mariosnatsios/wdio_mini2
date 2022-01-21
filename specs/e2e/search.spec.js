const homePageHelper = require('../../helpers/home.page.helper');


describe('Amazon Product Search', () => {
    it('should open and verify the main page', async() => {
        await homePageHelper.verifyHomePage();     
    });
    
});