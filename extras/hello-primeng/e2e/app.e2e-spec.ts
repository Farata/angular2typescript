import { HelloPrimengPage } from './app.po';

describe('hello-primeng App', () => {
  let page: HelloPrimengPage;

  beforeEach(() => {
    page = new HelloPrimengPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
