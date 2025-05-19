export class UrlFactory {
  static baseUrl = 'https://www.veeam.com';
  static forumsUrl = 'https://forums.veeam.com/';

  static getHomeUrl() {
    return this.baseUrl + '/';
  }

  static getForumsUrl() {
    return this.forumsUrl + '/';
  }
}
