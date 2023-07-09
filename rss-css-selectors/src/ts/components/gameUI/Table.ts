import Component from '../Component';
import state from '../../data/state';
import levelsContent from '../../data/levelsContent';
import CSSEditor from './Editor/CSSEditor';
import Navigation from '../infoBlock/helpBlock/Navigation';
import EventEmitter from '../../utils/EventEmitter';
import LevelList from '../infoBlock/levelMenu/LevelList';
import { Board } from '../../types';
import ResetButton from '../infoBlock/levelMenu/ResetButton';

export default class Table extends Component {
  public static readonly destroyBoard = new EventEmitter();

  public static readonly boardUpdateElements = new EventEmitter();

  private strobeElements: Component[];

  constructor() {
    super({
      classNames: ['game__table', 'table'],
    });

    const { currentLevel } = state;
    const { board } = levelsContent[currentLevel];

    this.strobeElements = [];
    this.insertBoardToTable(this, board);

    CSSEditor.boardClean.subscribe('board: clean', () => {
      this.strobeElements.forEach((el) => {
        el.addClass('clean');
        el.removeClass('strobe');

        const promise = new Promise((resolve) => {
          setTimeout(() => resolve(el.removeClass('clean')), 500);
        });

        promise.then(() => {
          this.destroyBoard();
          Table.boardUpdateElements.emit('board: update-elements', `${state.currentLevel}`);
          CSSEditor.gameUISetupHover.emit('gameUI: setup-hover');
        });
      });
    });

    Navigation.destroyBoard.subscribe('board: destroy', () => this.destroyBoard());
    Navigation.boardUpdateElements.subscribe('board: update-elements', (data) => {
      this.strobeElements = [];

      if (data) {
        this.insertBoardToTable(this, levelsContent[Number(data)].board);
      }
    });

    Table.destroyBoard.subscribe('board: destroy', () => this.destroyBoard());
    Table.boardUpdateElements.subscribe('board: update-elements', (data) => {
      this.strobeElements = [];

      if (data) {
        this.insertBoardToTable(this, levelsContent[Number(data)].board);
      }
    });

    LevelList.destroyBoard.subscribe('board: destroy', () => this.destroyBoard());
    LevelList.boardUpdateElements.subscribe('board: update-elements', (data) => {
      this.strobeElements = [];

      if (data) {
        this.insertBoardToTable(this, levelsContent[Number(data)].board);
      }
    });

    ResetButton.destroyBoard.subscribe('board: destroy', () => this.destroyBoard());
    ResetButton.boardUpdateElements.subscribe('board: update-elements', (data) => {
      this.strobeElements = [];

      if (data) {
        this.insertBoardToTable(this, levelsContent[Number(data)].board);
      }
    });
  }

  private destroyBoard(): void {
    [...this.getNode().children].forEach((el) => el.remove());
  }

  private insertBoardToTable(parent: Component, board: Board[]): void {
    board.forEach((el) => {
      const { classes, attributes } = el;

      const tableElement = new Component({
        tagName: `${el.selector}`,
        classNames: classes,
        attributes,
      });

      parent.append(tableElement);

      if (classes) {
        if (classes.includes('strobe')) {
          this.strobeElements.push(tableElement);
        }
      }

      if (el.child) {
        this.insertBoardToTable(tableElement, el.child);
      }
    });
  }
}
