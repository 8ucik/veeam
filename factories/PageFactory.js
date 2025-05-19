import HomePage from '../pages/HomePage';
import ForumPage from '../pages/ForumPage';

export class PageFactory {
  static use(page, pageName) {
    switch (pageName.toLowerCase()) {
      case 'home':
        return new HomePage(page);
      case 'forum':
        return new ForumPage(page);
      default:
        throw new Error(`Page '${pageName}' is not recognized.`);
    }
  }
}
