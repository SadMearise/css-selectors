import Component from '../Component';
import LevelList from './levelMenu/LevelList';
import ResetButton from './levelMenu/ResetButton';
import Title from './levelMenu/Title';
import IconMenu from './IconMenu';

export default class LevelMenu extends Component {
  constructor() {
    super({
      classNames: ['info-block__level-menu', 'level-menu'],
    });

    const title = new Title();
    const levelList = new LevelList();
    const resetButton = new ResetButton();

    this.append(title, levelList, resetButton);

    IconMenu.levelMenuToggleClass.subscribe('levelMenu: toggle-class', () => this.toggleClass('active'));
    ResetButton.levelMenuToggleClass.subscribe('levelMenu: toggle-class', () => this.toggleClass('active'));
    LevelList.levelMenuToggleClass.subscribe('levelMenu: toggle-class', () => this.toggleClass('active'));
  }
}
