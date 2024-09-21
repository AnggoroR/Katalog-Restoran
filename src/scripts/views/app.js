import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];

    if (page) {
      try {
        this._content.innerHTML = await page.render();
        await page.afterRender();
      } catch (error) {
        this._content.innerHTML = 'Gagal memuat halaman.';
        console.error(error);
      }
    } else {
      this._content.innerHTML = 'Halaman tidak ditemukan.';
    }
  }
}

export default App;
