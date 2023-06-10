function createCacheWrapper(func) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache.hasOwnProperty(key)) {
      console.log(`Result from cache: ${cache[key]}`);
      return cache[key];
    }

    const result = func(...args);
    cache[key] = result;
    console.log(`Calculated result: ${result}`);

    return result;
  };
}

// Приклад використання:
const add = (a, b, c) => a + b + c;
const cachedAdd = createCacheWrapper(add);

cachedAdd(2, 2, 3); // Calculated result: 7
cachedAdd(5, 8, 1); // Calculated result: 14
cachedAdd(2, 2, 3); // Result from cache: 7
