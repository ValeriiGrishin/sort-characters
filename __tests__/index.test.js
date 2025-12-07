import sortCharacters from '../src/index.js';

describe('sortCharacters function', () => {
  test('should sort characters by health in descending order', () => {
    const characters = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];

    const result = sortCharacters(characters);

    // Используем toEqual (глубокое сравнение объектов)
    expect(result).toEqual([
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ]);

    // Проверяем, что оригинальный массив не изменился
    expect(characters).toEqual([
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ]);
  });

  test('should handle empty array', () => {
    expect(sortCharacters([])).toEqual([]);
  });

  test('should handle single character', () => {
    expect(sortCharacters([{ name: 'маг', health: 100 }]))
      .toEqual([{ name: 'маг', health: 100 }]);
  });

  test('should sort correctly with equal health values', () => {
    const characters = [
      { name: 'герой1', health: 50 },
      { name: 'герой2', health: 50 },
      { name: 'герой3', health: 30 },
    ];

    const result = sortCharacters(characters);
    
    // Первые два должны иметь health: 50 (порядок может сохраниться)
    expect(result[0].health).toBe(50);
    expect(result[1].health).toBe(50);
    expect(result[2].health).toBe(30);
  });
});