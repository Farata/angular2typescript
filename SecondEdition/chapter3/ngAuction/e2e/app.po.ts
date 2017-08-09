import { browser, by, element } from 'protractor';

export class NgAuctionPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('nga-root h1')).getText();
  }
}
