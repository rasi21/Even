
function even(numbers) {
    let even = [];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        even.push(numbers[i]);
      }
    }
    return even;
  }
  
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(even(numbers)); 
  