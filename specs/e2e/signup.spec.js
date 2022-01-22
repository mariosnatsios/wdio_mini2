const homePageHelper = require('../../helpers/home.page.helper');
const signUpPageHelper = require('../../helpers/sign-up.page.helper');


describe('Sign up behavior', () => {
    beforeEach(async() =>{
        await homePageHelper.verifyHomePage();
        await signUpPageHelper.navigate2registration();
        
    } );
    it('should navigate the sign-up page', async() => {
        
    });
    
});