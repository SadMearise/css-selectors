import Component from './Component';
import CSSEditor from './gameUI/Editor/CSSEditor';

export default class Popup extends Component {
  constructor() {
    super({
      classNames: ['popup'],
      attributes: {
        id: 'popup',
      },
    });

    const body = new Component({
      classNames: ['popup__body'],
    });

    const wrapper = new Component({
      classNames: ['popup__wrapper'],
    });

    const content = new Component({
      classNames: ['popup__content'],
    });

    const title = new Component({
      tagName: 'h3',
      classNames: ['popup__title'],
      textContent: 'Congrats!!!',
    });

    const text = new Component({
      tagName: 'p',
      classNames: ['popup__text'],
      textContent: 'You are successfully completed all levels.',
    });

    const gotItButton = new Component({
      tagName: 'button',
      classNames: ['popup__got-it-button', 'btn', 'btn_grey'],
      textContent: 'Got it',
    });

    this.append(body);
    body.append(wrapper);
    wrapper.append(content);
    content.append(title, text, gotItButton);

    gotItButton.addListener('click', () => {
      this.close(this);
    });

    CSSEditor.endGamePopup.subscribe('end-game: open-popup', () => this.open(this));
  }

  public open(currentPopup: Component): void {
    if (currentPopup) {
      document.body.classList.add('lock');
      currentPopup.addClass('open');
    }
  }

  private close(popupActive: Component): void {
    popupActive.removeClass('open');
    document.body.classList.remove('lock');
  }
}
