import Component from '../../Component';
import state from '../../../data/state';
import EventEmitter from '../../../utils/EventEmitter';

export default class ResetButton extends Component {
  public static readonly destroyBoard = new EventEmitter();

  public static readonly boardUpdateElements = new EventEmitter();

  public static readonly chackmarkRemoveClass = new EventEmitter();

  public static readonly levelMenuToggleClass = new EventEmitter();

  public static readonly iconMenuToggleClass = new EventEmitter();

  public static readonly titleSetContent = new EventEmitter();

  public static readonly levelsListUpdateClasses = new EventEmitter();

  public static readonly invokeProgressWidth = new EventEmitter();

  public static readonly infoDestroyNode = new EventEmitter();

  public static readonly renderInfoBlock = new EventEmitter();

  public static readonly setCheckmark = new EventEmitter();

  public static readonly infoBlockToggleLock = new EventEmitter();

  public static readonly orderChange = new EventEmitter();

  public static readonly gameUISetupHover = new EventEmitter();

  constructor() {
    super({
      tagName: 'button',
      classNames: ['level-menu__reset-btn', 'btn', 'btn_grey'],
      textContent: 'Reset Progress',
      attributes: {
        type: 'button',
      },
    });

    this.addListener('click', () => {
      Object.keys(state.levels).forEach((key: string): void => {
        state.levels[Number(key)].completed = false;
      });

      state.currentLevel = 1;
      ResetButton.destroyBoard.emit('board: destroy');
      ResetButton.boardUpdateElements.emit('board: update-elements', `${state.currentLevel}`);
      ResetButton.chackmarkRemoveClass.emit('checkmark: remove-class');
      ResetButton.levelMenuToggleClass.emit('levelMenu: toggle-class');
      ResetButton.iconMenuToggleClass.emit('iconMenu: toggle-class');
      ResetButton.levelsListUpdateClasses.emit('levelsList: update-classes');
      ResetButton.invokeProgressWidth.emit('progress: invoke-progressWidth');
      ResetButton.titleSetContent.emit('title: set-content');
      ResetButton.infoDestroyNode.emit('info: destroy-node');
      ResetButton.renderInfoBlock.emit('render: info-block');
      ResetButton.setCheckmark.emit('title: set-checkmark', `${state.currentLevel}`);
      ResetButton.infoBlockToggleLock.emit('infoBlock: toggle-lock');
      ResetButton.orderChange.emit('order: change');
      ResetButton.gameUISetupHover.emit('gameUI: setup-hover');
    });
  }
}
