import { FormSamplesPage } from './app.po';

describe('form-samples App', () => {
  let page: FormSamplesPage;

  beforeEach(() => {
    page = new FormSamplesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
