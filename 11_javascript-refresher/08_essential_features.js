const hobbies = ["Wallking", "Eating", "Playing Volleyball"]

hobbies.map(hobby => {
    console.log(hobby)
})

const student = {
    name: "Nathaniel",
    age: 21
}

const { name, age} = student;

console.log(name)
console.log(age)


const number = [1, 2, 3,]

const newNumber = [...number, 4, 5]

console.log(newNumber)