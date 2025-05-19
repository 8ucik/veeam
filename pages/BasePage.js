import logger from '../utils/logger';

class BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  get timeout() {
    return 5000;
  }

  async getPageTitle() {
    logger.info('Validating page title');
    return this.page.getPageTitle();
  }

  async navigateTo(url) {
    logger.info(`Navigating to ${url}`);
    try {
      await this.page.goto(url, { timeout: this.timeout });
    } catch (error) {
      logger.warn(`Failed to navigate to ${url}: ${error.message}`);
      throw error;
    }
  }

  async click(selector) {
    logger.info(`Clicking on ${selector}, delaying for: ${this.timeout / 10}`);
    await this.page.click(selector, { delay: this.timeout / 10 });
  }

  async input(selector, text, visible = true) {
    visible
      ? logger.info(`Typing ${text} as input`)
      : logger.info(`Typing ***** as password`);
    await this.page.fill(selector, text, { timeout: this.timeout / 100 });
  }

  async getText(selector) {
    return await this.page.textContent(selector, {
      timeout: this.timeout / 10,
    });
  }

  async getInnerText(selector) {
    return await this.page
      .locator(selector, { timeout: this.timeout / 10 })
      .innerText();
  }

  async isVisible(selector) {
    return await this.page.isVisible(selector, { timeout: this.timeout });
  }

  async waitForSelector(selector) {
    await this.page.waitForSelector(selector, { timeout: this.timeout });
  }
}

export default BasePage;
