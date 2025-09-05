
const person = {
  name: "Nathaniel", 
  age: 21 
};


const { name, age } = person;
console.log(`Name: ${name}, Age: ${age}`);


const hobbies = ["volleyball", "video editing"];

const [hobby1, hobby2] = hobbies;
console.log(`Hobbies: ${hobby1}, ${hobby2}`);


function printName({ name }) {
  console.log(`Hello, ${name}!`);
}
printName(person);
