import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getAText(): Promise<string> {
    return element(by.css('#A')).getText() as Promise<string>;
  }
  getBText(): Promise<string> {
    return element(by.css('#B')).getText() as Promise<string>;
  }
  getDText(): Promise<string> {
    return element(by.css('#D')).getText() as Promise<string>;
  }

}
