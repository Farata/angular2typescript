import { TestWeatherPage } from './app.po';

describe('test-weather App', () => {
  let page: TestWeatherPage;

  beforeEach(() => {
    page = new TestWeatherPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
