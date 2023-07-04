import Component from './Component';
import InfoBlock from './infoBlock/InfoBlock';

export default class RightCol extends Component {
  constructor() {
    super({
      classNames: ['right-col'],
    });

    const infoBlock = new InfoBlock();

    this.append(infoBlock);
  }
}
