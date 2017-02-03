import { BetrayalCompanionPage } from './app.po';

describe('betrayal-companion App', function() {
  let page: BetrayalCompanionPage;

  beforeEach(() => {
    page = new BetrayalCompanionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
