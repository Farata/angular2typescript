import { ObservablesPage } from './app.po';

describe('observables App', function() {
  let page: ObservablesPage;

  beforeEach(() => {
    page = new ObservablesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
