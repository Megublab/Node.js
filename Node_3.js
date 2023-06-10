function deepClone(obj) {
  // Перевірка, чи є переданий параметр об'єктом
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  // Створюємо новий об'єкт або масив
  const clone = Array.isArray(obj) ? [] : {};

  // Рекурсивно клонуємо кожну властивість об'єкта
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clone[key] = deepClone(obj[key]);
    }
  }

  return clone;
}

// Приклад використання:
const originalObj = {
  name: 'John',
  age: 30,
  address: {
    city: 'New York',
    country: 'USA'
  },
  hobbies: ['reading', 'running']
};

const clonedObj = deepClone(originalObj);

console.log(clonedObj);
console.log(originalObj === clonedObj); // Виведе: false
