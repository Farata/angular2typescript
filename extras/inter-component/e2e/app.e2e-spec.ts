import { InterComponentPage } from './app.po';

describe('inter-component App', function() {
  let page: InterComponentPage;

  beforeEach(() => {
    page = new InterComponentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
