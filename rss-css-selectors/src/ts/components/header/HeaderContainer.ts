import Component from '../Component';
import Logo from './Logo';

export default class HeaderContainer extends Component {
  constructor() {
    super({
      classNames: ['header__container', 'container'],
    });

    const logo = new Logo();

    this.append(logo);
  }
}
