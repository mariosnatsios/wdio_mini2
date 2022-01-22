const homePageHelper = require('../../helpers/home.page.helper');
const signUpPageHelper = require('../../helpers/sign-up.page.helper');


describe('Sign up behavior', () => {
    beforeEach(async() =>{
        await homePageHelper.verifyHomePage();
        await signUpPageHelper.navigate2registration();
        await signUpPageHelper.verifyRegistrationPage();     
    });
    it('should fill the credentials and navigate to the authentication page', async() => {
        await signUpPageHelper.registration();
        await expect(browser).toHaveTitle('Authentication required');
    });
    
});