
function arrayChangeDelete<T>(
  array: T[],
  condition: (item: T) => boolean
): T[] {
  const deletedElements: T[] = [];
  const newArray: T[] = [];

  for (const item of array) {
    if (condition(item)) {
      deletedElements.push(item);
    } else {
      newArray.push(item);
    }
  }

  array.length = 0;
  array.push(...newArray);

  return deletedElements;
}
const array = [1, 2, 3, 6, 7, 9];
const deletedElements = arrayChangeDelete(array, (item) => item % 2 === 0);

console.log(array);
console.log(deletedElements);

