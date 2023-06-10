function cacheWrapper<T extends (...args: any[]) => any>(func: T): T {
  const cache: Record<string, ReturnType<T>> = {};

  return function (...args: Parameters<T>): ReturnType<T> {
    const key = JSON.stringify(args);

    if (cache.hasOwnProperty(key)) {
      console.log('From cache');
      return cache[key];
    }

    const result = func(...args);
    cache[key] = result;
    console.log('Calculated');
    return result;
  } as T;
}

// Приклад використання:
function add(...numbers: number[]): { numbers: number[]; sum: number } {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return {
    numbers: numbers,
    sum: sum
  };
}

const cachedAdd = cacheWrapper(add);

console.log(cachedAdd(2, 2, 3)); // Виведе: Calculated 7
console.log(cachedAdd(5, 8, 1)); // Виведе: Calculated 14
console.log(cachedAdd(2, 2, 3)); // Виведе: From cache 7
