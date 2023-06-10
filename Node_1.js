function add(...numbers) {
  let sum = 0;
  
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  
  return {
    numbers: numbers,
    sum: sum
  };
}


const result = add(2, 4, 6, 8);
console.log(result.numbers); 
console.log(result.sum); 
  
