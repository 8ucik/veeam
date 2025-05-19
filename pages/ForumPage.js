import { expect } from 'playwright/test';
import BasePage from './BasePage';
import logger from '../utils/logger';

class ForumsPage extends BasePage {
  constructor(page) {
    super(page);
    this.forumsPageTitle = 'R&D Forums';
    this.registerElement = page.locator('li.rightside a', {
      hasText: 'Register',
    });
    this.registerAgreeElement = page.locator('input#agreed');
    this.usernameFieldElement = page.locator('#username');
    this.passwordFieldElement = page.locator('#new_password');
    this.confirmPasswordField = page.locator('#password_confirm');
    this.emailFieldElement = page.locator('#email');
    this.fullNameFieldElement = page.locator('#pf_fullname');
    this.submitElement = page.locator('#submit');
    this.errorMessageElement = page.locator('dd.error');
  }

  async isThisRnDForumsPage() {
    const title = await this.getPageTitle();
    expect(title, this.forumsPageTitle, logger.info('This is R&D forums page'));
  }

  async clickRegister() {
    await this.click(this.registerElement);
  }

  async clickAgreeToTerms() {
    await this.click(this.registerAgreeElement);
  }

  async inputUsername(username) {
    await this.isVisible(this.usernameFieldElement);
    await this.input(this.usernameFieldElement, username);
  }

  async inputPassword(password) {
    await this.isVisible(this.usernameFieldElement);
    await this.isVisible(this.confirmPasswordField);
    await this.input(this.passwordFieldElement, password, false);
    await this.input(this.confirmPasswordField, password, false);
  }

  async inputEmail(email) {
    await this.isVisible(this.emailFieldElement);
    await this.input(this.emailFieldElement, email);
  }

  async inputFullName(fullName) {
    await this.isVisible(this.fullNameFieldElement);
    await this.input(this.fullNameFieldElement, fullName);
  }

  async clickSubmitButton() {
    await this.isVisible(this.submitElement);
    await this.click(this.submitElement);
  }

  async getErrorMessage() {
    const message = await this.getInnerText(this.errorMessageElement);
    return message;
  }
}

export default ForumsPage;
