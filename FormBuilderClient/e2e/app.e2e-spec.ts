import { FormBuilderClientPage } from './app.po';

describe('form-builder-client App', () => {
  let page: FormBuilderClientPage;

  beforeEach(() => {
    page = new FormBuilderClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
