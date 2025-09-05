
const numbers = [1, 2, 3];
const user = { name: "Miguel", age: 21 }; 


const newNumbers = [...numbers, 4, 5];
console.log("Original numbers:", numbers);
console.log("Extended numbers:", newNumbers);


const updatedUser = { ...user, city: "Pampanga" };
console.log("Original user:", user);
console.log("Updated user:", updatedUser);


function sum(...args) {
  return args.reduce((total, num) => total + num, 0);
}
console.log("Sum:", sum(1, 2, 3, 4, 5));
