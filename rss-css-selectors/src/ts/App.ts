import Wrapper from './components/Wrapper';
import Popup from './components/Popup';
import state from './data/state';

export default class App {
  private readonly body: HTMLElement;

  constructor() {
    this.body = document.body;
  }

  public start(): void {
    this.localStorage();

    const wrapper = new Wrapper();
    const popup = new Popup();

    this.body.prepend(popup.getNode());
    this.body.prepend(wrapper.getNode());
  }

  public localStorage(): void {
    const data: string | null = localStorage.getItem('state');

    if (data) {
      const parsedData = JSON.parse(data);

      state.currentLevel = parsedData.currentLevel;
      state.levels = parsedData.levels;
    } else {
      localStorage.setItem('state', JSON.stringify(state));
    }

    window.addEventListener('beforeunload', () => localStorage.setItem('state', JSON.stringify(state)));
  }
}
