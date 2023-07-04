import EventEmitter from '../ts/utils/EventEmitter';

describe('EventEmitter compact', () => {
  let emitter: EventEmitter;

  beforeEach(() => {
    emitter = new EventEmitter();
  });

  test('Проверка создания экземпляра класса', () => {
    expect(emitter).toBeInstanceOf(EventEmitter);
  });
});
