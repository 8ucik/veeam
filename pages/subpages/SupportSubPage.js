import logger from '../../utils/logger';
import MenuSubPage from './MenuSubPage';

class SupportSubPage extends MenuSubPage {
  constructor(page) {
    super(page);

    this.communityLinks = {
      'Community Resource Hub': 'Community Resource Hub',
      'Community Experts': 'Community Experts',
      'R&D Forums': 'R&D Forums',
    };
    this.links = {};
    for (const key in this.communityLinks) {
      this.links[key] = page.locator('a', {
        hasText: this.communityLinks[key],
      });
    }
  }

  async clickLink(linkName) {
    logger.info(`Clicking on link: ${linkName}`);
    if (!linkName) {
      throw new Error(`Unsupported link name: ${linkName}`);
    }
    await this.links[linkName].click();
  }
}

export default SupportSubPage;
