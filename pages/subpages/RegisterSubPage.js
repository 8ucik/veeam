import ForumsPage from '../ForumPage';

class RegisterSubPage extends ForumsPage {
  constructor(page) {
    super(page);
    this.registerPageHeadingElement = 'h2';
  }

  async getPageHeading() {
    const heading = this.getText(this.registerPageHeadingElement);
    return heading;
  }
}

export default RegisterSubPage;
