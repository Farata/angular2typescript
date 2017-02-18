import { AuctionCliPage } from './app.po';

describe('auction-cli App', function() {
  let page: AuctionCliPage;

  beforeEach(() => {
    page = new AuctionCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
