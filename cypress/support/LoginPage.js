class LoginPage {
    usernameInput() {
        return cy.get('#user-name');
    }

    passwordInput() {
        return cy.get('#password');
    }

    loginButton() {
        return cy.get('#login-button');
    }

    login(username, password) {
        this.usernameInput().type(username);
        this.passwordInput().type(password);
        this.loginButton().click();
    }
}

export default LoginPage;