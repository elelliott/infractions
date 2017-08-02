import { InfractionsPage } from './app.po';

describe('infractions App', () => {
  let page: InfractionsPage;

  beforeEach(() => {
    page = new InfractionsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
