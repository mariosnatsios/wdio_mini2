
class SignInPage {
    get createAccountButton() {
        return $('#createAccountSubmit');
    };

    get email() { 
        return $('#ap_email');
    };

    get continueButton() {
        return $('#continue');
    };

    get password() {
        return $('#ap_password');
    };

    get signInButton() {
        return $('#signInSubmit');
    }

};





module.exports = new SignInPage();