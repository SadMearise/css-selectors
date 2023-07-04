import Component from '../../Component';

export default class Title extends Component {
  constructor() {
    super({
      tagName: 'h2',
      classNames: ['level-menu__title'],
      textContent: 'Choose a level',
    });
  }
}
