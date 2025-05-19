import BasePage from './BasePage';
import logger from '../utils/logger';

class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.homePageStatisticsText = 'h2.h-stats__title';
  }

  async getPageTitle() {
    logger.info('Validating page title');
    return this.page.getPageTitle();
  }

  async isHomePageVisible() {
    logger.debug('Checking for home page usage statistics');
    try {
      const visible = await this.isVisible(this.homePageStatisticsText);
      return visible;
    } catch (error) {
      logger.error(
        `Usage statistics are not visible on the home page ${error.message}`
      );
      throw error;
    }
  }

  async getHomePageUsageStatsText() {
    logger.debug('Getting for home page usage statistics heading text');
    try {
      return await this.getText(this.homePageStatisticsText);
    } catch (error) {
      logger.error(`Failed to get heading text ${error.message}`);
      throw error;
    }
  }
}

export default HomePage;
