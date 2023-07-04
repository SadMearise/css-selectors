import Component from './Component';
import Main from './Main';
import Footer from './footer/Footer';
import Header from './header/Header';

export default class LeftCol extends Component {
  constructor() {
    super({
      classNames: ['left-col'],
    });

    const header = new Header();
    const main = new Main();
    const footer = new Footer();

    this.append(header, main, footer);
  }
}
