const foods = ["Chocolate", "TortangTalong", "Sinigang"]

foods.push("IceCream")
foods.shift("Chocolate")
console.log(foods)

for (const food of foods) {
    console.log(food)
}

const likedfoods = foods.map(food => `I like ${food}`)

console.log(likedfoods)