import Component from '../Component';
import Table from './Table';

export default class Game extends Component {
  public htmlCode: Component;

  constructor() {
    super({
      classNames: ['game-ui__game', 'game'],
    });

    const table = new Table();

    this.htmlCode = new Component({
      classNames: ['game__html-code'],
    });

    this.append(table, this.htmlCode);
  }
}
