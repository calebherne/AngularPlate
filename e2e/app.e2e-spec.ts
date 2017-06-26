import { AngularPlateTemplatePage } from './app.po';

describe('abp-project-name-template App', function() {
  let page: AngularPlateTemplatePage;

  beforeEach(() => {
    page = new AngularPlateTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
