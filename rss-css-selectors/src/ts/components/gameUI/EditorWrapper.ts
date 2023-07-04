import Component from '../Component';
import HTMLViewer from './Editor/HTMLViewer';
import CSSEditor from './Editor/CSSEditor';

export default class EditorWrapper extends Component {
  constructor() {
    super({
      classNames: ['game-ui__editor', 'editor'],
    });

    const htmlViewer = new HTMLViewer();
    const cssEditor = new CSSEditor();

    this.append(cssEditor, htmlViewer);

    CSSEditor.editorShake.subscribe('editor: shake', () => {
      this.addClass('shake');
      setTimeout(() => this.removeClass('shake'), 500);
    });
  }
}
