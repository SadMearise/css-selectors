import Component from '../Component';
import EventEmitter from '../../utils/EventEmitter';
import state from '../../data/state';

export default class Hint extends Component {
  public static readonly invokeTypewriter = new EventEmitter();

  public static readonly selectorsBlockRemoveClass = new EventEmitter();

  constructor() {
    super({
      classNames: ['game-ui__hint', 'hint'],
    });

    const btn = new Component({
      tagName: 'button',
      classNames: ['hint__btn', 'btn', 'btn_dark'],
      textContent: 'Help, I\'m stuck!',
      attributes: {
        type: 'button',
      },
    });

    this.append(btn);

    btn.addListener('click', () => {
      const { currentLevel, levels } = state;
      levels[currentLevel].usedHint = true;

      Hint.selectorsBlockRemoveClass.emit('selectorsBlock: remove-class');
      Hint.invokeTypewriter.emit('invoke: typewriter');
      btn.getNode().blur();
    });
  }
}
