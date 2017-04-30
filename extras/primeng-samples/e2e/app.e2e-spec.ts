import { PrimengSamplesPage } from './app.po';

describe('primeng-samples App', () => {
  let page: PrimengSamplesPage;

  beforeEach(() => {
    page = new PrimengSamplesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
