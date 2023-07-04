import Component from '../Component';
import IconMenu from './IconMenu';
import OpenMenuIcon from './OpenMenuIcon';
import HelpBlock from './HelpBlock';
import LevelMenu from './LevelMenu';
import ResetButton from './levelMenu/ResetButton';
import LevelList from './levelMenu/LevelList';

export default class InfoBlock extends Component {
  constructor() {
    super({
      classNames: ['info-block'],
    });

    const rightSide = new Component({
      classNames: ['info-block__right-side'],
    });

    const openMenuIcon = new OpenMenuIcon();
    const iconMenu = new IconMenu();
    const helpBlock = new HelpBlock();
    const levelMenu = new LevelMenu();

    this.append(openMenuIcon, rightSide);
    rightSide.append(iconMenu, helpBlock, levelMenu);

    iconMenu.addListener('click', () => {
      rightSide.toggleClass('lock');
    });

    ResetButton.infoBlockToggleLock.subscribe('infoBlock: toggle-lock', () => rightSide.toggleClass('lock'));
    LevelList.infoBlockToggleLock.subscribe('infoBlock: toggle-lock', () => rightSide.toggleClass('lock'));
    OpenMenuIcon.infoBlockToggleClass.subscribe('infoBlock: toggle-class', () => this.toggleClass('active'));
  }
}
