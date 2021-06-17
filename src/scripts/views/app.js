import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({
    button, content, navlist, hero, navlink, footer,
  }) {
    this._button = button;
    this._content = content;
    this._navlist = navlist;
    this._hero = hero;
    this._navlink = navlink;
    this._footer = footer;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      content: this._content,
      navlist: this._navlist,
      hero: this._hero,
      navlink: this._navlink,
      footer: this._footer,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
