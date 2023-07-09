import Component from '../../Component';
import state from '../../../data/state';
import levelsContent from '../../../data/levelsContent';
import EventEmitter from '../../../utils/EventEmitter';
import ResetButton from './ResetButton';
import Navigation from '../helpBlock/Navigation';
import CSSEditor from '../../gameUI/Editor/CSSEditor';

export default class LevelList extends Component {
  public static readonly destroyBoard = new EventEmitter();

  public static readonly boardUpdateElements = new EventEmitter();

  public static readonly invokeProgressWidth = new EventEmitter();

  public static readonly titleSetContent = new EventEmitter();

  public static readonly iconMenuToggleClass = new EventEmitter();

  public static readonly levelMenuToggleClass = new EventEmitter();

  public static readonly infoDestroyNode = new EventEmitter();

  public static readonly renderInfoBlock = new EventEmitter();

  public static readonly levelsListUpdateClasses = new EventEmitter();

  public static readonly markupDestroyNode = new EventEmitter();

  public static readonly renderMarkup = new EventEmitter();

  public static readonly setCheckmark = new EventEmitter();

  public static readonly orderChange = new EventEmitter();

  public static readonly gameUISetupHover = new EventEmitter();

  public static readonly infoBlockToggleLock = new EventEmitter();

  private checkmarks: Component[] = [];

  constructor() {
    super({
      tagName: 'ul',
      classNames: ['level-menu__levels-list'],
    });

    const levelsLength = Object.keys(levelsContent).length;

    for (let i = 1; i <= levelsLength; i += 1) {
      const levelClasses = ['level-menu__levels-item', 'level'];
      const checkmarkClasses: string[] = ['level__checkmark', 'checkmark'];

      if (state.currentLevel === i) {
        levelClasses.push('active');
      }

      const level = new Component({
        tagName: 'li',
        classNames: levelClasses,
        attributes: {
          'data-level': `${i}`,
        },
      });

      const link = new Component({
        tagName: 'a',
        classNames: ['level__link'],
        attributes: {
          href: '#',
        },
      });

      if (state.levels[i].completed && !state.levels[i].usedHint) {
        checkmarkClasses.push('checkmark_completed');
      } else if (state.levels[i].completed && state.levels[i].usedHint) {
        checkmarkClasses.push('checkmark_completed_hint');
      }

      const checkmark = new Component({
        tagName: 'span',
        classNames: checkmarkClasses,
      });

      this.checkmarks.push(checkmark);

      const number = new Component({
        tagName: 'span',
        classNames: ['level__number'],
        textContent: `${i}`,
      });

      const text = new Component({
        tagName: 'span',
        classNames: ['level__text'],
        textContent: `${levelsContent[i].levelName}`,
      });

      this.append(level);
      level.append(link);
      link.append(checkmark, number, text);

      ResetButton.chackmarkRemoveClass.subscribe('checkmark: remove-class', () => {
        if (checkmark.getNode().classList.contains('checkmark_completed')) {
          checkmark.removeClass('checkmark_completed');
        } else if (checkmark.getNode().classList.contains('checkmark_completed_hint')) {
          checkmark.removeClass('checkmark_completed_hint');
        }
      });
    }

    this.addListener('click', (event) => {
      const { target } = event;

      if (target == null || event.currentTarget == null) return;

      const li = (target as HTMLElement).closest('li');

      if (!li || !this.node.contains(li)) return;

      [...this.getNode().children].forEach((el) => {
        if (el instanceof HTMLElement) {
          if (el.classList.contains('active')) {
            el.classList.remove('active');
          }
        }
      });

      const levelData = li.dataset.level;

      state.currentLevel = Number(levelData);

      li.classList.add('active');

      LevelList.orderChange.emit('order: change');
      LevelList.destroyBoard.emit('board: destroy');
      LevelList.boardUpdateElements.emit('board: update-elements', `${state.currentLevel}`);
      LevelList.invokeProgressWidth.emit('progress: invoke-progressWidth');
      LevelList.titleSetContent.emit('title: set-content');
      LevelList.iconMenuToggleClass.emit('iconMenu: toggle-class');
      LevelList.levelMenuToggleClass.emit('levelMenu: toggle-class');
      LevelList.infoDestroyNode.emit('info: destroy-node');
      LevelList.renderInfoBlock.emit('render: info-block');
      LevelList.markupDestroyNode.emit('markup: destroy-node');
      LevelList.renderMarkup.emit('render: markup');
      LevelList.setCheckmark.emit('title: set-checkmark', `${state.currentLevel}`);
      LevelList.gameUISetupHover.emit('gameUI: setup-hover');
      LevelList.infoBlockToggleLock.emit('infoBlock: toggle-lock');

      const clearEditor = (): void => {
        const input = document.querySelector('.editor-panel__input') as HTMLInputElement;
        const selectorsBlock: HTMLElement | null = document.querySelector('.editor-panel__selectors-block');
        if (input) {
          input.value = '';
        }
        if (selectorsBlock) {
          selectorsBlock.innerHTML = 'Type in a CSS selector';
          selectorsBlock.classList.add('blink');
        }
      };

      clearEditor();
    });

    ResetButton.levelsListUpdateClasses.subscribe('levelsList: update-classes', () => this.updateLevelsListClasses());
    Navigation.levelsListUpdateClasses.subscribe('levelsList: update-classes', () => this.updateLevelsListClasses());
    CSSEditor.levelsListUpdateClasses.subscribe('levelsList: update-classes', () => this.updateLevelsListClasses());
    CSSEditor.levelsListUpdateCheckmarks.subscribe('levelsList: update-checkmarks', () => {
      [...this.getNode().children].forEach((el, index) => {
        const checkmark: Element | null = el.querySelector('.checkmark');

        if (checkmark) {
          const level = state.levels[index + 1];
          if (level.completed && !level.usedHint && !checkmark.classList.contains('checkmark_completed')) {
            checkmark.classList.add('checkmark_completed');
          } else if (level.completed && level.usedHint && !checkmark.classList.contains('checkmark_completed_hint')) {
            checkmark.classList.add('checkmark_completed_hint');
          }
        }
      });
    });
  }

  private updateLevelsListClasses(): void {
    [...this.getNode().children].forEach((el) => {
      if (el instanceof HTMLElement) {
        const currentLevel: number = Number(el.dataset.level);

        if (el.classList.contains('active')) {
          el.classList.remove('active');
        }

        if (currentLevel === state.currentLevel) {
          el.classList.add('active');
        }
      }
    });
  }
}
