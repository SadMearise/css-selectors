import Component from '../../Component';
import Navigation from '../../infoBlock/helpBlock/Navigation';
import LevelList from '../../infoBlock/levelMenu/LevelList';
import CSSEditor from './CSSEditor';
import Editor from './Editor';
import Markup from './Markup';

export default class HTMLViewer extends Component {
  constructor() {
    super({
      classNames: ['editor__panel', 'editor-panel', 'editor-panel_dark'],
    });
    const workspace = new Component({
      classNames: ['editor-panel__workspace', 'editor-panel__workspace_dark'],
    });
    const markup = new Markup();

    Editor.renderHeader(this, 'HTML Viewer', 'index.html');
    Editor.renderWindow(this, ['editor-panel__lines', 'editor-panel__lines_dark']);
    if (Editor.window) {
      Editor.window.append(workspace);
    }
    workspace.append(markup);

    Navigation.renderMarkup.subscribe('render: markup', () => workspace.append(new Markup()));
    LevelList.renderMarkup.subscribe('render: markup', () => workspace.append(new Markup()));
    CSSEditor.renderMarkup.subscribe('render: markup', () => workspace.append(new Markup()));
  }
}
