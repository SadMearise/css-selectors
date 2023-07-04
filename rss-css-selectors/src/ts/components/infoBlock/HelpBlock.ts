import Component from '../Component';
import Title from './helpBlock/Title';
import Navigation from './helpBlock/Navigation';
import LevelProgress from './helpBlock/LevelProgress';
import Info from './helpBlock/Info';
import LevelList from './levelMenu/LevelList';
import ResetButton from './levelMenu/ResetButton';
import CSSEditor from '../gameUI/Editor/CSSEditor';

export default class HelpBlock extends Component {
  constructor() {
    super({
      classNames: ['info-block__help', 'help-block'],
    });

    const title = new Title();
    const navigation = new Navigation();
    const levelProgress = new LevelProgress();
    const info = new Info();

    this.append(title, navigation, levelProgress, info);

    LevelList.renderInfoBlock.subscribe('render: info-block', () => this.append(new Info()));
    Navigation.renderInfoBlock.subscribe('render: info-block', () => this.append(new Info()));
    ResetButton.renderInfoBlock.subscribe('render: info-block', () => this.append(new Info()));
    CSSEditor.renderInfoBlock.subscribe('render: info-block', () => this.append(new Info()));
  }
}
