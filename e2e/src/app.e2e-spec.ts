import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it(`should have 'A' button`, () => {
    page.navigateTo();
    expect(page.getAText()).toEqual('component-a works!');
  });
  it(`should have 'B' button`, () => {
    page.navigateTo();
    expect(page.getBText()).toEqual('component-b works!');
  });
  it(`should have 'C' button`, () => {
    page.navigateTo();
    expect(page.getDText()).toEqual('component-d works!');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
