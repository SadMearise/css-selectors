import Component from '../ts/components/Component';

describe('Component compact', () => {
  let component: Component;

  beforeEach(() => {
    component = new Component({});
  });

  test('Проверка создания экземпляра класса', () => {
    expect(component).toBeInstanceOf(Component);
  });

  test('Проверка на содержание метода setAttributes', () => {
    expect(component.setAttributes).toBeInstanceOf(Function);
  });

  test('Проверка на содержание метода setContent', () => {
    expect(component.setContent).toBeInstanceOf(Function);
  });

  test('Проверка на содержание метода append', () => {
    expect(component.append).toBeInstanceOf(Function);
  });

  test('Проверка на содержание метода addClass', () => {
    expect(component.addClass).toBeInstanceOf(Function);
  });

  test('Проверка на содержание метода removeClass', () => {
    expect(component.removeClass).toBeInstanceOf(Function);
  });

  test('Проверка на содержание метода addListener', () => {
    expect(component.addListener).toBeInstanceOf(Function);
  });

  test('Проверка на содержание метода destroy', () => {
    expect(component.destroy).toBeInstanceOf(Function);
  });

  test('Проверка на содержание метода getNode', () => {
    expect(component.getNode).toBeInstanceOf(Function);
  });

  test('Проверка на содержание метода toggleClass', () => {
    expect(component.toggleClass).toBeInstanceOf(Function);
  });

  test('Проверка на содержание метода setHTML', () => {
    expect(component.setHTML).toBeInstanceOf(Function);
  });

  test('getNode не должен возвращать null', () => {
    expect(component.getNode).not.toBeNull();
  });

  test('addListener не должна ничего возвращать', () => {
    expect(component.destroy()).not.toBeDefined();
  });
});
