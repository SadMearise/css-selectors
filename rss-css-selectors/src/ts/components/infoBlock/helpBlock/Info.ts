import Component from '../../Component';
import state from '../../../data/state';
import levelsContent from '../../../data/levelsContent';
import LevelList from '../levelMenu/LevelList';
import Navigation from './Navigation';
import ResetButton from '../levelMenu/ResetButton';
import CSSEditor from '../../gameUI/Editor/CSSEditor';

export default class Info extends Component {
  constructor() {
    super({
      classNames: ['help-block__info', 'info'],
    });

    const { currentLevel } = state;
    const currentLevelInfo = levelsContent[currentLevel];
    const examplesLength = currentLevelInfo.examples.length;

    if (currentLevelInfo.title) {
      const title = new Component({
        tagName: 'h2',
        classNames: ['info__title'],
        textContent: currentLevelInfo.title,
      });
      this.append(title);
    }

    if (currentLevelInfo.subtitle) {
      const subtitle = new Component({
        tagName: 'h3',
        classNames: ['info__subtitle'],
        textContent: currentLevelInfo.subtitle,
      });
      this.append(subtitle);
    }

    if (currentLevelInfo.levelName) {
      const levelName = new Component({
        tagName: 'span',
        classNames: ['info__level-name'],
        textContent: currentLevelInfo.levelName,
      });
      this.append(levelName);
    }

    if (currentLevelInfo.description) {
      const text = new Component({
        tagName: 'p',
        classNames: ['info__text', 'info-text'],
      });
      this.append(text);

      text.getNode().insertAdjacentHTML('afterbegin', currentLevelInfo.description);
    }

    if (examplesLength) {
      const examplesTitle = new Component({
        tagName: 'h4',
        classNames: ['info__examples-title'],
        textContent: 'Examples',
      });

      const examples = new Component({
        classNames: ['info__examples', 'examples'],
      });

      this.append(examplesTitle, examples);

      for (let i = 0; i < examplesLength; i += 1) {
        const example = new Component({
          classNames: ['examples__example'],
        });

        const text = new Component({
          tagName: 'p',
          classNames: ['examples__text', 'info-text'],
        });

        examples.append(example);
        example.append(text);

        text.getNode().insertAdjacentHTML('afterbegin', currentLevelInfo.examples[i]);
      }
    }

    LevelList.infoDestroyNode.subscribe('info: destroy-node', () => this.destroy());
    Navigation.infoDestroyNode.subscribe('info: destroy-node', () => this.destroy());
    ResetButton.infoDestroyNode.subscribe('info: destroy-node', () => this.destroy());
    CSSEditor.infoDestroyNode.subscribe('info: destroy-node', () => this.destroy());
  }
}
