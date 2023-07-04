import Component from '../../Component';
import Editor from './Editor';
import levelsContent from '../../../data/levelsContent';
import state from '../../../data/state';
import Hint from '../Hint';
import { getHighlightedCode } from '../../../highlight';
import EventEmitter from '../../../utils/EventEmitter';
import { keyCodes } from '../../../constants';
import Navigation from '../../infoBlock/helpBlock/Navigation';

export default class CSSEditor extends Component {
  public static readonly orderChange = new EventEmitter();

  public static readonly invokeTypewriter = new EventEmitter();

  public static readonly selectorsBlockRemoveClass = new EventEmitter();

  public static readonly editorShake = new EventEmitter();

  public static readonly boardClean = new EventEmitter();

  public static readonly titleSetContent = new EventEmitter();

  public static readonly markupDestroyNode = new EventEmitter();

  public static readonly renderMarkup = new EventEmitter();

  public static readonly levelsListUpdateClasses = new EventEmitter();

  public static readonly levelsListUpdateCheckmarks = new EventEmitter();

  public static readonly invokeProgressWidth = new EventEmitter();

  public static readonly infoDestroyNode = new EventEmitter();

  public static readonly renderInfoBlock = new EventEmitter();

  public static readonly endGamePopup = new EventEmitter();

  public static readonly setCheckmark = new EventEmitter();

  public static readonly gameUISetupHover = new EventEmitter();

  private selectorsBlock: Component;

  constructor() {
    super({
      classNames: ['editor__panel', 'editor-panel'],
    });

    const workspace = new Component({
      classNames: ['editor-panel__workspace'],
    });

    const enterBtn = new Component({
      tagName: 'button',
      classNames: ['editor-panel__enter-btn', 'btn', 'btn_enter'],
      textContent: 'enter',
      attributes: {
        type: 'button',
      },
    });

    const input = new Component({
      tagName: 'input',
      classNames: ['editor-panel__input'],
      attributes: {
        type: 'text',
      },
    });

    this.selectorsBlock = new Component({
      classNames: ['editor-panel__selectors-block', 'blink'],
      textContent: 'Type in a CSS selector',
    });

    const text = new Component({
      tagName: 'p',
      classNames: ['editor-panel__text'],
    });

    Editor.renderHeader(this, 'CSS Editor', 'style.css');
    Editor.renderWindow(this, ['editor-panel__lines']);
    if (Editor.window !== null) {
      Editor.window.append(workspace);
    }
    workspace.append(enterBtn, input, this.selectorsBlock, text);

    text.getNode().insertAdjacentHTML('afterbegin', '{<br>/* Styles would go here. */<br>}');

    input.addListener('keyup', (event: Event | KeyboardEvent): void => {
      event.preventDefault();
      let val: string = (input.getNode() as HTMLInputElement).value;
      if (event instanceof KeyboardEvent) {
        const { code } = event;

        if (code === 'Backspace') {
          if (val.length === 0) {
            this.selectorsBlock.setHTML('Type in a CSS selector');
            this.selectorsBlock.addClass('blink');
          } else {
            this.selectorsBlock.setHTML(getHighlightedCode(val, 'css'));
          }

          val = val.slice(0, val.length);
        } else if (keyCodes.includes(code)) {
          if (this.selectorsBlock.getNode().classList.contains('blink')) {
            this.selectorsBlock.removeClass('blink');
          }
          this.selectorsBlock.setHTML(getHighlightedCode(val, 'css'));
        }
      }
    });

    enterBtn.addListener('click', () => {
      enterBtn.addClass('enterpressed');
      setTimeout(() => enterBtn.removeClass('enterpressed'), 100);

      this.compareResults(input);
    });
    document.body.addEventListener('keydown', (event: Event | KeyboardEvent): void => {
      if (event instanceof KeyboardEvent && event.code === 'Enter') {
        enterBtn.addClass('enterpressed');
        setTimeout(() => enterBtn.removeClass('enterpressed'), 100);

        this.compareResults(input);
      }
    });

    CSSEditor.selectorsBlockRemoveClass.subscribe('selectorsBlock: remove-class', () => this.selectorsBlock.removeClass('blink'));
    Hint.selectorsBlockRemoveClass.subscribe('selectorsBlock: remove-class', () => this.selectorsBlock.removeClass('blink'));
    Hint.invokeTypewriter.subscribe('invoke: typewriter', () => this.typewriter(input, this.selectorsBlock));
    Navigation.inputClear.subscribe('input: clear', () => this.clearEditor(input));
  }

  private typewriter(input: Component, targetBlock: Component): void {
    const node = input.getNode() as HTMLInputElement;
    const { currentLevel } = state;
    const { result } = levelsContent[currentLevel];

    const print = (i = 0): void => {
      if (i === result.length) return;
      let val = node.value;

      if (val.length > 0) {
        CSSEditor.selectorsBlockRemoveClass.emit('this.selectorsBlock: remove-class');
      }

      val = result.substring(0, i + 1);
      targetBlock.setHTML(getHighlightedCode(val, 'css'));
      node.value = val;
      setTimeout(() => print(i + 1), 100);
    };

    print();
  }

  private clearEditor(input: Component): void {
    const node = input.getNode() as HTMLInputElement;
    node.value = '';

    this.selectorsBlock.setHTML('Type in a CSS selector');
    this.selectorsBlock.addClass('blink');
  }

  private compareResults(input: Component): void {
    const { currentLevel, levels } = state;
    const { strobeElements } = levelsContent[currentLevel];
    const { value } = input.getNode() as HTMLInputElement;

    const changeLevel = (i = 0): void => {
      const newLevel = currentLevel + 1 + i;

      if (levels[newLevel] === undefined) {
        const findUncompletedLevel = (): boolean => {
          for (let level = 1; level <= Object.keys(levels).length; level += 1) {
            if (!levels[level].completed) {
              state.currentLevel = level;
              return true;
            }
          }
          return false;
        };

        if (!findUncompletedLevel()) {
          CSSEditor.endGamePopup.emit('end-game: open-popup');
        }
      } else if (levels[newLevel].completed) {
        changeLevel(i + 1);
      } else {
        state.currentLevel = newLevel;
      }
    };

    try {
      if (value.length > 0) {
        const tableEl: HTMLElement | null = document.querySelector('.table');

        if (tableEl !== null) {
          const findEl: NodeListOf<Element> | null = tableEl.querySelectorAll(value);

          if (strobeElements === findEl.length && [...findEl].every((el) => el.classList.contains('strobe'))) {
            state.levels[currentLevel].completed = true;

            changeLevel();
            this.clearEditor(input);
            CSSEditor.orderChange.emit('order: change');
            CSSEditor.boardClean.emit('board: clean');
            CSSEditor.markupDestroyNode.emit('markup: destroy-node');
            CSSEditor.renderMarkup.emit('render: markup');
            CSSEditor.titleSetContent.emit('title: set-content');
            CSSEditor.levelsListUpdateClasses.emit('levelsList: update-classes');
            CSSEditor.levelsListUpdateCheckmarks.emit('levelsList: update-checkmarks');
            CSSEditor.invokeProgressWidth.emit('progress: invoke-progressWidth');
            CSSEditor.infoDestroyNode.emit('info: destroy-node');
            CSSEditor.renderInfoBlock.emit('render: info-block');
            CSSEditor.setCheckmark.emit('title: set-checkmark', `${state.currentLevel}`);
          } else {
            CSSEditor.editorShake.emit('editor: shake');
          }
        }
      } else {
        CSSEditor.editorShake.emit('editor: shake');
      }
    } catch (err) {
      CSSEditor.editorShake.emit('editor: shake');
    }
  }
}
