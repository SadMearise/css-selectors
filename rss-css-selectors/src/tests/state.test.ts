import state from '../ts/data/state';

describe('state', () => {
  const stateProps = ['currentLevel', 'levels'];

  test('Проверка на содержание свойств', () => {
    stateProps.forEach((prop) => {
      expect(state).toHaveProperty(prop);
    });
  });
});
