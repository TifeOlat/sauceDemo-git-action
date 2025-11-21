class LoginPage {
    usernameInput = 'input[data-test="username"]';
    passwordInput = 'input[data-test="password"]';
    loginButton = 'input[data-test="login-button"]';
    errorMessageContainer = '.error-message-container';

    enterUsername(username) {
        cy.get(this.usernameInput).type(username);
    }

    enterPassword(password) {
        cy.get(this.passwordInput).type(password);
    }

    clickLogin() {
        cy.get(this.loginButton).click();
    }

    getErrorMessage() {
        return cy.get(this.errorMessageContainer);
    }
}

export default LoginPage;