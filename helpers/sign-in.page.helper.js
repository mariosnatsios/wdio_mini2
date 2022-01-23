const homePageHelper = require('./home.page.helper');
const signInPage = require('../pageobjects/sign-in.page');
const fs = require('fs');

const navigate2login = async () =>{
    await homePageHelper.hitNavAccountList(); 
};

const verifySignInPage = async() =>{
    await expect(browser).toHaveTitle('Amazon Sign-In');
};

const hitCreateAccountButton = async () =>{
    const createAccountButton = await signInPage.createAccountButton;
    await expect(createAccountButton).toBeDisplayed();
    await createAccountButton.click();
};

const signIN = async(email, password) =>{
    const emailField = await signInPage.email;
    const continueButton = await signInPage.continueButton;
    const passwordField = await signInPage.password;
    const signInButton = await signInPage.signInButton;

    await expect(emailField).toBeDisplayed();
    await emailField.clearValue();
    await emailField.setValue(email);

    await expect(continueButton).toBeDisplayed();
    await expect(continueButton).toBeClickable();
    await continueButton.click();

    await expect(passwordField).toBeDisplayed();
    await passwordField.setValue(password);

    await expect(signInButton).toBeDisplayed();
    await expect(signInButton).toBeClickable();
    await signInButton.click();

};

const getLoginCookies = async() =>{
    const cookies = await browser.getCookies();
    text='hfjskfhsfs';

    fs.writeFileSync('/Users/mariosnatsios/Desktop/wdio_mini2/appcontent/login_cookies.js',JSON.stringify(cookies), err =>{
        if (err){
            console.error(err);
            return;
        }
    });


};




module.exports = {
    hitCreateAccountButton,
    verifySignInPage,
    signIN,
    navigate2login,
    getLoginCookies,
};