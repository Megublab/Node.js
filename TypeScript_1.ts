function add(...numbers: number[]): { numbers: number[], sum: number } {
  let sum = 0;
  
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  
  return {
    numbers: numbers,
    sum: sum
  };
}

const result = add(2, 5, 3, 8, 5);
console.log(result.numbers);
console.log(result.sum);
