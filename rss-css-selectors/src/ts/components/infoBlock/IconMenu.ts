import EventEmitter from '../../utils/EventEmitter';
import Component from '../Component';
import LevelList from './levelMenu/LevelList';
import ResetButton from './levelMenu/ResetButton';
import { ICON_MENU_COLUMNS } from '../../constants';

export default class IconMenu extends Component {
  public static readonly levelMenuToggleClass = new EventEmitter();

  constructor() {
    super({
      classNames: ['info-block__icon', 'icon-menu'],
    });

    for (let i = 0; i < ICON_MENU_COLUMNS; i += 1) {
      const span = new Component({
        tagName: 'span',
      });

      this.append(span);
    }

    this.addListener('click', () => {
      this.toggleClass('active');

      IconMenu.levelMenuToggleClass.emit('levelMenu: toggle-class');
    });

    LevelList.iconMenuToggleClass.subscribe('iconMenu: toggle-class', () => this.toggleClass('active'));
    ResetButton.iconMenuToggleClass.subscribe('iconMenu: toggle-class', () => this.toggleClass('active'));
  }
}
