import Component from './Component';
import GameUI from './gameUI/GameUI';

export default class Main extends Component {
  constructor() {
    super({
      tagName: 'main',
      classNames: ['main', 'container'],
    });

    const gameUI = new GameUI();

    this.append(gameUI);
  }
}
