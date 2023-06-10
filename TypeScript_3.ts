function deepClone<T>(obj: T): T {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  const clone = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clone[key] = deepClone(obj[key]);
    }
  }

  return clone as T;
}

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