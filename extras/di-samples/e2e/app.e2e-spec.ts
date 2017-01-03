import { DiSamplesPage } from './app.po';

describe('di-samples App', function() {
  let page: DiSamplesPage;

  beforeEach(() => {
    page = new DiSamplesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
