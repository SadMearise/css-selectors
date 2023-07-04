import Component from '../../Component';

export default class Editor {
  public static window: Component | null = null;

  public static renderHeader(
    parent: Component,
    textToName: string,
    textToFilename: string,
  ): void {
    const header = new Component({
      classNames: ['editor-panel__header'],
    });

    const name = new Component({
      classNames: ['editor-panel__name'],
      textContent: textToName,
    });

    const filename = new Component({
      classNames: ['editor-panel__filename'],
      textContent: textToFilename,
    });

    parent.append(header);
    header.append(name, filename);
  }

  public static renderWindow(parent: Component, linesClassnames: string[]): void {
    const window = new Component({
      classNames: ['editor-panel__window'],
    });

    const lines = new Component({
      classNames: linesClassnames,
    });

    parent.append(window);
    window.append(lines);

    lines.getNode().insertAdjacentHTML('afterbegin', '1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>');

    this.window = window;
  }
}
