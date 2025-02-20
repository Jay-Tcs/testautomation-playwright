import BasePage from './basePage';

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.usernameSelector = '#email'; // Example selector for the username field
    this.passwordSelector = '#password'; // Example selector for the password field
    this.loginButtonSelector = '#loginButton'; // Example selector for the login button
  }

  async enterUsername(username) {
    await this.page.fill(this.usernameSelector, username);
  }

  async enterPassword(password) {
    await this.page.fill(this.passwordSelector, password);
  }

  async clickLoginButton() {
    await this.page.click(this.loginButtonSelector);
  }

  async login(username, password) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLoginButton();
  }
}

export default LoginPage;
