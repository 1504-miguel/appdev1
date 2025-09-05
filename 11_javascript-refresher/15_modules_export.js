

export default function greet() {
  return "Hello! Welcome to my module.";
}

export const myInfo = {
  name: "Miguel",
  age: 21
};

console.log(greet()); 
console.log(`Name: ${myInfo.name}, Age: ${myInfo.age}`);