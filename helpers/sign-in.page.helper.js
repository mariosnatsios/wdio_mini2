const HomePage =  require('../pageobjects/home.page');
const signInPage = require('../pageobjects/sign-in.page');

const verifyRegistrationPage = async() =>{
    await expect(browser).toHaveTitle('Amazon Sign-In');
};

const hitCreateAccountButton = async () =>{
    const createAccountButton = await signInPage.createAccountButton;
    await expect(createAccountButton).toBeDisplayed();
    await createAccountButton.click();
};


module.exports = {
    hitCreateAccountButton,
    verifyRegistrationPage,
};