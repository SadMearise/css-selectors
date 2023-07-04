import Component from '../Component';
import Order from './Order';
import Hint from './Hint';
import EditorWrapper from './EditorWrapper';
import Game from './Game';
import ResetButton from '../infoBlock/levelMenu/ResetButton';
import LevelList from '../infoBlock/levelMenu/LevelList';
import CSSEditor from './Editor/CSSEditor';
import Navigation from '../infoBlock/helpBlock/Navigation';

export default class GameUI extends Component {
  constructor() {
    super({
      classNames: ['game-ui'],
    });

    const order = new Order();
    const hint = new Hint();
    const game = new Game();
    const editorWrapper = new EditorWrapper();

    this.append(order, hint, game, editorWrapper);

    const getPosition = (el: HTMLElement): Record<string, number> => {
      const pos = el.getBoundingClientRect();

      return { left: pos.left, top: pos.top };
    };

    const hover = (event: Event, action: string, checkParent: boolean): void => {
      const { target }: {
        target: EventTarget | null,
        currentTarget: EventTarget | null
      } = event;

      if (target && target instanceof HTMLElement) {
        let data: string | undefined;

        if (checkParent) {
          const parent: Element | null = target.closest('.markup__block');

          if (parent && parent instanceof HTMLElement) {
            data = parent.dataset.hl;
          }
        } else {
          data = target.dataset.hl;
        }

        if (data) {
          const editorTargetElement: Element | null = editorWrapper.getNode().querySelector(`[data-hl="${data}"]`);

          if (editorTargetElement) {
            if (action === 'add') {
              editorWrapper.getNode().querySelectorAll('[data-hl]').forEach((el) => {
                if (el.classList.contains('hover')) {
                  el.classList.remove('hover');
                }
              });

              game.getNode().querySelectorAll('[data-hl]').forEach((el) => {
                if (el.classList.contains('hover')) {
                  el.classList.remove('hover');
                }
              });

              editorTargetElement.classList.add('hover');
            } else {
              editorTargetElement.classList.remove('hover');
            }
          }

          const gameTargetElement: Element | null = game.getNode().querySelector(`[data-hl="${data}"]`);

          if (gameTargetElement && gameTargetElement instanceof HTMLElement) {
            const dataHTML: string | undefined = gameTargetElement.dataset.html;

            if (action === 'add') {
              gameTargetElement.classList.add('hover');

              if (dataHTML) {
                const topIndent = -50;
                let leftIndent = 30;

                if (window.innerWidth < 992) {
                  if (getPosition(gameTargetElement).left < 280) {
                    leftIndent = 0;
                  } else if (getPosition(gameTargetElement).left < 800) {
                    if (dataHTML.length > 15) {
                      leftIndent = -150;
                    }
                  }
                }
                if (window.innerWidth < 768) {
                  if (getPosition(gameTargetElement).left < 200) {
                    if (dataHTML.length > 20) {
                      leftIndent = -40;
                    } else {
                      leftIndent = 0;
                    }
                  } else if (getPosition(gameTargetElement).left < 280) {
                    if (dataHTML.length > 20) {
                      leftIndent = -100;
                    } else {
                      leftIndent = 0;
                    }
                  } else if (getPosition(gameTargetElement).left < 500) {
                    if (dataHTML.length > 20) {
                      leftIndent = -200;
                    } else {
                      leftIndent = -80;
                    }
                  }
                }

                game.htmlCode.getNode().style.left = `${getPosition(gameTargetElement).left + leftIndent}px`;
                game.htmlCode.getNode().style.top = `${getPosition(gameTargetElement).top + topIndent}px`;

                game.htmlCode.setContent(dataHTML);
                game.htmlCode.getNode().style.display = 'block';
              }
            } else {
              gameTargetElement.classList.remove('hover');

              if (dataHTML) {
                game.htmlCode.getNode().style.display = 'none';
              }
            }
          }
        }
      }
    };

    const setupListeners = (): void => {
      const markupBlocks = editorWrapper.getNode().querySelectorAll('.markup__block');
      const tableItems = game.getNode().querySelectorAll('.game__table-item');

      markupBlocks.forEach((el) => {
        el.addEventListener('mouseover', (event) => hover(event, 'add', true));
        el.addEventListener('mouseout', (event) => hover(event, 'remove', false));
      });

      tableItems.forEach((el) => {
        el.addEventListener('mouseover', (event) => hover(event, 'add', false));
        el.addEventListener('mouseout', (event) => hover(event, 'remove', false));
      });
    };

    setupListeners();

    ResetButton.gameUISetupHover.subscribe('gameUI: setup-hover', () => setupListeners());
    LevelList.gameUISetupHover.subscribe('gameUI: setup-hover', () => setupListeners());
    CSSEditor.gameUISetupHover.subscribe('gameUI: setup-hover', () => setupListeners());
    Navigation.gameUISetupHover.subscribe('gameUI: setup-hover', () => setupListeners());
  }
}
