import { RouterSamplesPage } from './app.po';

describe('router-samples App', function() {
  let page: RouterSamplesPage;

  beforeEach(() => {
    page = new RouterSamplesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
