const homePageHelper = require('./home.page.helper');
const signInPageHelper = require('./sign-in.page.helper');

const navigate2registration = async() =>{
    await homePageHelper.hitNavAccountList(); 
    await signInPageHelper.verifyRegistrationPage();
    await signInPageHelper.hitCreateAccountButton();
};

const verifyRegistrationPage = async() =>{
    expect(browser).toHaveTitle('Amazon Registration');
};

module.exports = {
    navigate2registration,
    verifyRegistrationPage,
};