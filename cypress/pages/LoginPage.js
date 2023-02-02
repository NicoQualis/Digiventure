class LoginPage {
  elements = {
    usernameInput: () => cy.get("#user-name", { timeout: 30000 }),
    passwordInput: () => cy.get("#password", { timeout: 30000 }),
    loginBtn: () => cy.get("#login-button", { timeout: 30000 }),
    errorMessage: () => cy.get('h3[data-test="error"]', { timeout: 30000 }),
  };

  typeUsername(username) {
    this.elements.usernameInput().type(username);
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  clickLogin() {
    this.elements.loginBtn().click();
  }
}

module.exports = new LoginPage();
