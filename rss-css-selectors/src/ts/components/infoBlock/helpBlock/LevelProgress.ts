import Component from '../../Component';
import state from '../../../data/state';
import levelsContent from '../../../data/levelsContent';
import Navigation from './Navigation';
import LevelList from '../levelMenu/LevelList';
import ResetButton from '../levelMenu/ResetButton';
import CSSEditor from '../../gameUI/Editor/CSSEditor';

export default class LevelProgress extends Component {
  constructor() {
    super({
      classNames: ['help-block__level-progress', 'level-progress'],
    });

    const progress = new Component({
      classNames: ['level-progress__progress'],
    });

    this.append(progress);

    this.progressWidth(progress);

    ResetButton.invokeProgressWidth.subscribe('progress: invoke-progressWidth', () => (this.progressWidth(progress)));
    LevelList.invokeProgressWidth.subscribe('progress: invoke-progressWidth', () => (this.progressWidth(progress)));
    Navigation.invokeProgressWidth.subscribe('progress: invoke-progressWidth', () => (this.progressWidth(progress)));
    CSSEditor.invokeProgressWidth.subscribe('progress: invoke-progressWidth', () => (this.progressWidth(progress)));
  }

  public progressWidth(progress: Component): void {
    const node = progress.getNode();

    node.style.width = `${(state.currentLevel / Object.keys(levelsContent).length) * 100}%`;
  }
}
