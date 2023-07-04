import Component from '../Component';
import HeaderContainer from './HeaderContainer';

export default class Header extends Component {
  constructor() {
    super({
      tagName: 'header',
      classNames: ['header'],
    });

    const headerContainer = new HeaderContainer();

    this.append(headerContainer);
  }
}
