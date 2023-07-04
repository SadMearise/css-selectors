import Component from '../Component';
import FooterContainer from './FooterContainer';

export default class Footer extends Component {
  constructor() {
    super({
      tagName: 'footer',
      classNames: ['footer'],
    });

    const footerContainer = new FooterContainer();
    const body = new Component({
      classNames: ['footer__body'],
    });
    const linkRS = new Component({
      tagName: 'a',
      classNames: ['footer__link'],
      attributes: {
        target: '_blank',
        href: 'https://rs.school/js/',
      },
    });
    const img = new Component({
      tagName: 'img',
      classNames: ['footer__img'],
      attributes: {
        src: './img/rsschool.svg',
        alt: 'RS School',
        width: '81',
        height: '30',
      },
    });
    const text = new Component({
      tagName: 'p',
      classNames: ['footer__text'],
      textContent: 'Copyright © 2023 Made by ',
    });
    const linkGh = new Component({
      tagName: 'a',
      classNames: ['footer__link'],
      textContent: '@SadMearise',
      attributes: {
        target: '_blank',
        href: 'https://github.com/SadMearise',
      },
    });

    this.append(footerContainer);
    footerContainer.append(body);
    body.append(linkRS, text);
    linkRS.append(img);
    text.append(linkGh);
  }
}
