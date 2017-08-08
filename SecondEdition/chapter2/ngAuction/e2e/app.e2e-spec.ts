import { NgAuctionPage } from './app.po';

describe('ng-auction App', () => {
  let page: NgAuctionPage;

  beforeEach(() => {
    page = new NgAuctionPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to nga!');
  });
});
