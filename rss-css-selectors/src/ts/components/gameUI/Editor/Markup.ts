import { getHighlightedCode } from '../../../highlight';
import Component from '../../Component';
import state from '../../../data/state';
import levelsContent from '../../../data/levelsContent';
import Navigation from '../../infoBlock/helpBlock/Navigation';
import LevelList from '../../infoBlock/levelMenu/LevelList';
import CSSEditor from './CSSEditor';
import { ViewerMarkup } from '../../../types';

export default class Markup extends Component {
  constructor() {
    super({
      classNames: ['editor-panel__markup', 'markup'],
    });

    const { currentLevel } = state;
    const { markup } = levelsContent[currentLevel];

    this.renderMarkupStructure(this.getNode(), markup);

    Navigation.markupDestroyNode.subscribe('markup: destroy-node', () => this.destroy());
    CSSEditor.markupDestroyNode.subscribe('markup: destroy-node', () => this.destroy());
    LevelList.markupDestroyNode.subscribe('markup: destroy-node', () => this.destroy());
  }

  private renderMarkupStructure(parent: HTMLElement, markup: ViewerMarkup[]): void {
    const node = parent;
    const html: string[] = [];

    markup.forEach((el) => {
      const div: HTMLDivElement = document.createElement('div');
      div.classList.add('markup__block');

      let classes = '';
      if (el.class) {
        classes = `class="${el.class}"`;
      }

      const { attributes } = el;

      let attrs: string = '';
      if (attributes) {
        const keys = Object.keys(attributes);

        keys.forEach((key) => {
          if (!key.startsWith('data')) {
            attrs += `${key}="${attributes[key]}" `;
          } else {
            div.setAttribute(key, attributes[key]);
          }
        });
      }

      if (el.child) {
        this.renderMarkupStructure(div, el.child);

        div.insertAdjacentHTML('afterbegin', getHighlightedCode(`<${el.selector} ${classes} ${attrs}>`));
        div.insertAdjacentHTML('beforeend', getHighlightedCode(`</${el.selector}>`));

        html.push(div.outerHTML);
      } else {
        div.innerHTML = getHighlightedCode(`<${el.selector} ${classes} ${attrs}/>`);

        html.push(div.outerHTML);
      }
    });

    node.innerHTML = html.join('');
  }
}
