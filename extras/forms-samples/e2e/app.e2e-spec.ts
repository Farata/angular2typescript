import { FormsSamplesPage } from './app.po';

describe('forms-samples App', function() {
  let page: FormsSamplesPage;

  beforeEach(() => {
    page = new FormsSamplesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
