import logger from '../../utils/logger';
import HomePage from '../HomePage';

class MenuSubPage extends HomePage {
  constructor(page) {
    super(page);
    this.supportElement =
      'button.main-navigation__item-title:has-text("Support")';
  }

  async clickOnSupportSubPage() {
    logger.info('Clicking on Support Sub Page');
    this.click(this.supportElement);
  }
}

export default MenuSubPage;
