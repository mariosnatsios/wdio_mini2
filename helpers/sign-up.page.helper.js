const homePageHelper = require('./home.page.helper');
const signInPageHelper = require('./sign-in.page.helper');
const signUpPage = require('../pageobjects/sign-up.page');
const { REGISTRATION } = require('../appcontent/appcontent.enum');
const Randomizer = require('../appcontent/randomDataProvider');


const navigate2registration = async() =>{
    await homePageHelper.hitNavAccountList(); 
    await signInPageHelper.verifySignInPage();
    await signInPageHelper.hitCreateAccountButton();
};

const verifyRegistrationPage = async() =>{
    await expect(browser).toHaveTitle('Amazon Registration');
};

const fillNameField = async() =>{
    const nameField = await signUpPage.nameField;
    const firstName = Randomizer.getFirstName();  
    const lastName = Randomizer.getLastName();
    const fullName = firstName.concat(" ", lastName);
    await expect(nameField).toBeDisplayed();
    await nameField.setValue(fullName);
};

const fillEmailField = async() =>{
    const emailField = await signUpPage.emailField;
    const email = Randomizer.getEmailID();
    await expect(emailField).toBeDisplayed();
    await emailField.setValue(email);
};

const fillPasswordFields = async() =>{
    const passwordField = await signUpPage.passwordField;
    const confpasswordField = await signUpPage.confirmationPasswordField;
    await expect(passwordField).toBeDisplayed();
    await expect(confpasswordField).toBeDisplayed();
    const password = REGISTRATION.PASSWORD;
    await passwordField.setValue(password);
    await confpasswordField.setValue(password);
}

const clickCreateAccountButton = async() =>{
    const createAccountButton = await signUpPage.createAccountButton;
    await expect(createAccountButton).toBeDisplayed();
    await expect(createAccountButton).toBeClickable();
    await createAccountButton.click();
};

const registration = async () =>{
    await fillNameField();
    await fillEmailField();
    await fillPasswordFields();
    await clickCreateAccountButton();
}

module.exports = {
    navigate2registration,
    verifyRegistrationPage,
    registration,
};
