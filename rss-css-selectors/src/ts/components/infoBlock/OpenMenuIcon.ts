import EventEmitter from '../../utils/EventEmitter';
import Component from '../Component';

export default class OpenMenuIcon extends Component {
  public static readonly infoBlockToggleClass = new EventEmitter();

  constructor() {
    super({
      tagName: 'span',
      classNames: ['info-block__open-menu-icon', 'open-menu-icon'],
    });

    this.addListener('click', () => {
      OpenMenuIcon.infoBlockToggleClass.emit('infoBlock: toggle-class');
    });
  }
}
