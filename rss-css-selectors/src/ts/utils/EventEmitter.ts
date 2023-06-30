type Subscriber = (data?: string) => void;

export default class EventEmitter {
  private readonly events: Record<string, Subscriber[]>;

  constructor() {
    this.events = {};
  }

  public emit(eventName: string, data?: string | undefined): void {
    const functions: Subscriber[] = this.events[eventName];

    if (functions) {
      functions.forEach((fn) => {
        fn.call(null, data);
      });
    }
  }

  public subscribe(eventName: string, fn: Subscriber): Subscriber {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    this.events[eventName].push(fn);

    return (): void => {
      this.events[eventName] = this.events[eventName].filter((eventFn) => fn !== eventFn);
    };
  }
}
