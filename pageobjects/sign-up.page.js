class SignUpPage{
    get nameField() {
        return $('#ap_customer_name');
    };

    get emailField() {
        return $('#ap_email');
    };

    get passwordField() {
        return $('#ap_password');
    };

    get confirmationPasswordField() {
        return $('#ap_password_check');
    };

    get createAccountButton() {
        return $('#continue');
    };

};

module.exports = new SignUpPage();