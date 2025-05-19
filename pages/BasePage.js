import logger from '../utils/logger';

export class BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  get timeout() {
    return 5000;
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

  async input(selector, text) {
    await this.page.fill(selector, text, { timeout: this.timeout / 100 });
  }

  async getText(selector) {
    return await this.page.textContent(selector, {
      timeout: this.timeout / 10,
    });
  }

  async isVisible(selector) {
    return await this.page.isVisible(selector, { timeout: this.timeout });
  }

  async waitForSelector(selector) {
    await this.page.waitForSelector(selector, { timeout: this.timeout });
  }
}
