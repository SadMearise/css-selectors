import Component from './Component';
import LeftCol from './LeftCol';
import RightCol from './RightCol';

export default class Wrapper extends Component {
  constructor() {
    super({
      classNames: ['wrapper'],
    });

    const leftCol = new LeftCol();
    const rightCol = new RightCol();

    this.append(leftCol, rightCol);
  }
}
