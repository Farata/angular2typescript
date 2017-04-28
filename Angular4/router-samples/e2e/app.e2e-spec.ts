import { HelloNg4Page } from './app.po';

describe('hello-ng4 App', () => {
  let page: HelloNg4Page;

  beforeEach(() => {
    page = new HelloNg4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
