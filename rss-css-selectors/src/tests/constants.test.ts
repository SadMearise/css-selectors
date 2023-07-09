import { KEY_CODES } from '../ts/constants';

describe('constants', () => {
  test('Проверка длины массива KEY_CODES', () => {
    expect(KEY_CODES).toHaveLength(62);
  });
});
