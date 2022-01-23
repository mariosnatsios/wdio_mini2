const homePageHelper = require('../../helpers/home.page.helper');
const signInPageHelper = require('../../helpers/sign-in.page.helper');
const { VALID_LOGIN } = require('../../appcontent/appcontent.enum');

const email = VALID_LOGIN.EMAIL;
const password = VALID_LOGIN.PASSWORD;

describe('Sign in behavior', () => {
    beforeEach(async() =>{
        await homePageHelper.verifyHomePage();  
        await signInPageHelper.navigate2login();
    });
    it('should log in with valid credentials', async() => {

        await signInPageHelper.verifySignInPage();
        await signInPageHelper.signIN(email , password); 
        await homePageHelper.verifyHomePage();  
        await signInPageHelper.getLoginCookies(); //after login store the login cookies for later use
    });
    
});