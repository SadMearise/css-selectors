import Component from '../Component';
import state from '../../data/state';
import levelsContent from '../../data/levelsContent';
import Navigator from '../infoBlock/helpBlock/Navigation';
import CSSEditor from './Editor/CSSEditor';
import LevelList from '../infoBlock/levelMenu/LevelList';
import ResetButton from '../infoBlock/levelMenu/ResetButton';

export default class Order extends Component {
  constructor() {
    const { currentLevel } = state;
    const { order } = levelsContent[currentLevel];

    super({
      tagName: 'h2',
      classNames: ['game-ui__order'],
      textContent: order,
    });

    Navigator.orderChange.subscribe('order: change', () => this.setContent(levelsContent[state.currentLevel].order));
    CSSEditor.orderChange.subscribe('order: change', () => this.setContent(levelsContent[state.currentLevel].order));
    LevelList.orderChange.subscribe('order: change', () => this.setContent(levelsContent[state.currentLevel].order));
    ResetButton.orderChange.subscribe('order: change', () => this.setContent(levelsContent[state.currentLevel].order));
  }
}
