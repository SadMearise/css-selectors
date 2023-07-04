import { keyCodes } from '../ts/constants';

describe('constants', () => {
  test('Проверка длины массива keyCodes', () => {
    expect(keyCodes).toHaveLength(62);
  });
});
