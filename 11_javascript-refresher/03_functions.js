function greet(name){
    return `Hello my name is ${name}`
}
console.log(greet("Nathaniel"))

const square = num => num * num
console.log(square(5))

function calculator(a, b) {
  const sum = a + b;
  const product = a * b;
  
  return {
    sum: sum,
    product: product
  };
}

const result = calculator(2, 7);
console.log("Sum:", result.sum)
console.log("Product:", result.product)