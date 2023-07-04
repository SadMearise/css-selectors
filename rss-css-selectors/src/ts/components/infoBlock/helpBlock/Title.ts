import Component from '../../Component';
import state from '../../../data/state';
import levelsContent from '../../../data/levelsContent';
import Navigation from './Navigation';
import ResetButton from '../levelMenu/ResetButton';
import LevelList from '../levelMenu/LevelList';
import CSSEditor from '../../gameUI/Editor/CSSEditor';

export default class Title extends Component {
  constructor() {
    super({
      tagName: 'h3',
      classNames: ['help-block__title'],
    });

    const levelsLength = Object.keys(levelsContent).length;
    const textContent = `Level ${state.currentLevel} of ${levelsLength}`;
    const checkmarkClasses = ['help-block__checkmark', 'checkmark', 'checkmark_size_big'];
    const { currentLevel, levels } = state;

    if (levels[currentLevel].completed && !levels[currentLevel].usedHint) {
      checkmarkClasses.push('checkmark_completed');
    } else if (levels[currentLevel].completed && levels[currentLevel].usedHint) {
      checkmarkClasses.push('checkmark_completed_hint');
    }

    const textTitle = new Component({
      tagName: 'span',
      classNames: ['help-block__title-text'],
      textContent,
    });

    const checkmark = new Component({
      tagName: 'span',
      classNames: checkmarkClasses,
    });

    this.append(textTitle, checkmark);

    CSSEditor.titleSetContent.subscribe('title: set-content', () => this.setTextContent(textTitle));
    Navigation.titleSetContent.subscribe('title: set-content', () => this.setTextContent(textTitle));
    ResetButton.titleSetContent.subscribe('title: set-content', () => this.setTextContent(textTitle));
    LevelList.titleSetContent.subscribe('title: set-content', () => this.setTextContent(textTitle));

    const setCheckmark = (data: string | undefined): void => {
      if (data !== undefined) {
        const level = state.levels[Number(data)];

        if (checkmark.getNode().classList.contains('checkmark_completed')) {
          checkmark.removeClass('checkmark_completed');
        } else if (checkmark.getNode().classList.contains('checkmark_completed_hint')) {
          checkmark.removeClass('checkmark_completed_hint');
        }

        if (level.completed && level.usedHint) {
          checkmark.addClass('checkmark_completed_hint');
        } else if (level.completed && !level.usedHint) {
          checkmark.addClass('checkmark_completed');
        }
      }
    };

    Navigation.setCheckmark.subscribe('title: set-checkmark', setCheckmark);
    LevelList.setCheckmark.subscribe('title: set-checkmark', setCheckmark);
    CSSEditor.setCheckmark.subscribe('title: set-checkmark', setCheckmark);
    ResetButton.setCheckmark.subscribe('title: set-checkmark', setCheckmark);
  }

  private setTextContent(element: Component): void {
    const levelsLength = Object.keys(levelsContent).length;
    const textContent = `Level ${state.currentLevel} of ${levelsLength}`;

    element.setContent(textContent);
  }
}
