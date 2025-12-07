![Tests](https://github.com/ValeriiGrishin/sort-characters/actions/workflows/tests.yml/badge.svg)

# Sort Characters Function

Функция для сортировки персонажей по уровню здоровья (по убыванию).

## Описание
Принимает массив объектов персонажей и возвращает новый отсортированный массив. Использует глубокое сравнение (`toEqual`) в тестах.

## Пример использования
```javascript
import sortCharacters from './src/index.js';

const characters = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

const sorted = sortCharacters(characters);
console.log(sorted);
// [
//   { name: 'маг', health: 100 },
//   { name: 'лучник', health: 80 },
//   { name: 'мечник', health: 10 }
// ]
