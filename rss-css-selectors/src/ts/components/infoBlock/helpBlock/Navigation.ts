import Component from '../../Component';
import state from '../../../data/state';
import levelsContent from '../../../data/levelsContent';
import EventEmitter from '../../../utils/EventEmitter';

export default class Navigation extends Component {
  public static readonly destroyBoard = new EventEmitter();

  public static readonly boardUpdateElements = new EventEmitter();

  public static readonly titleSetContent = new EventEmitter();

  public static readonly levelsListUpdateClasses = new EventEmitter();

  public static readonly invokeProgressWidth = new EventEmitter();

  public static readonly infoDestroyNode = new EventEmitter();

  public static readonly renderInfoBlock = new EventEmitter();

  public static readonly markupDestroyNode = new EventEmitter();

  public static readonly renderMarkup = new EventEmitter();

  public static readonly inputClear = new EventEmitter();

  public static readonly setCheckmark = new EventEmitter();

  public static readonly orderChange = new EventEmitter();

  public static readonly gameUISetupHover = new EventEmitter();

  constructor() {
    super({
      classNames: ['help-block__navigation'],
    });
    const levelsLength = Object.keys(levelsContent).length;

    const navigationButtonPrev = new Component({
      tagName: 'button',
      classNames: ['help-block__navigation-btn-prev', 'btn', 'btn_nav', 'btn_nav_prev'],
      attributes: {
        type: 'button',
      },
    });

    const navigationButtonNext = new Component({
      tagName: 'button',
      classNames: ['help-block__navigation-btn-next', 'btn', 'btn_nav', 'btn_nav_next'],
      attributes: {
        type: 'button',
      },
    });

    this.append(navigationButtonPrev, navigationButtonNext);

    navigationButtonPrev.addListener('click', () => {
      if (state.currentLevel > 1 && state.currentLevel <= levelsLength) {
        state.currentLevel -= 1;

        Navigation.orderChange.emit('order: change');
        Navigation.destroyBoard.emit('board: destroy');
        Navigation.boardUpdateElements.emit('board: update-elements', `${state.currentLevel}`);
        Navigation.titleSetContent.emit('title: set-content');
        Navigation.levelsListUpdateClasses.emit('levelsList: update-classes');
        Navigation.invokeProgressWidth.emit('progress: invoke-progressWidth');
        Navigation.infoDestroyNode.emit('info: destroy-node');
        Navigation.renderInfoBlock.emit('render: info-block');
        Navigation.markupDestroyNode.emit('markup: destroy-node');
        Navigation.renderMarkup.emit('render: markup');
        Navigation.inputClear.emit('input: clear');
        Navigation.setCheckmark.emit('title: set-checkmark', `${state.currentLevel}`);
        Navigation.gameUISetupHover.emit('gameUI: setup-hover');
      }
    });

    navigationButtonNext.addListener('click', () => {
      if (state.currentLevel > 0 && state.currentLevel < levelsLength) {
        state.currentLevel += 1;

        Navigation.orderChange.emit('order: change');
        Navigation.destroyBoard.emit('board: destroy');
        Navigation.boardUpdateElements.emit('board: update-elements', `${state.currentLevel}`);
        Navigation.titleSetContent.emit('title: set-content');
        Navigation.levelsListUpdateClasses.emit('levelsList: update-classes');
        Navigation.invokeProgressWidth.emit('progress: invoke-progressWidth');
        Navigation.infoDestroyNode.emit('info: destroy-node');
        Navigation.renderInfoBlock.emit('render: info-block');
        Navigation.markupDestroyNode.emit('markup: destroy-node');
        Navigation.renderMarkup.emit('render: markup');
        Navigation.inputClear.emit('input: clear');
        Navigation.setCheckmark.emit('title: set-checkmark', `${state.currentLevel}`);
        Navigation.gameUISetupHover.emit('gameUI: setup-hover');
      }
    });
  }
}
