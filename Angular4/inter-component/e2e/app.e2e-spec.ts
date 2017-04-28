import { W3Page } from './app.po';

describe('w3 App', () => {
  let page: W3Page;

  beforeEach(() => {
    page = new W3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
