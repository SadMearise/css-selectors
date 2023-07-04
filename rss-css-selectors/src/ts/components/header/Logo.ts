import Component from '../Component';

export default class Logo extends Component {
  constructor() {
    super({
      classNames: ['header__logo', 'logo'],
    });

    const img = new Component({
      tagName: 'img',
      classNames: ['logo__Img'],
      attributes: {
        src: 'img/logo.png',
        alt: 'logo',
        width: '20',
        height: '20',
      },
    });

    const title = new Component({
      tagName: 'h1',
      classNames: ['logo__title'],
      textContent: 'CSS Diner',
    });

    this.append(img, title);
  }
}
