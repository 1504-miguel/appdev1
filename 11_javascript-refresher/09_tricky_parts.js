console.log("5" == 5)
console.log("5" === 5)

let a
let b = null
console.log(a)
console.log(b)

const person = {
    name: "Nathaniel",

    regFunc: function() {
    console.log("Regular:", this.name)
    },

    arrowFunc: () => {
        console.log("Arrow:", this.name)
    }
}

person.regFunc()
person.arrowFunc()





let original = [1, 2, 3]
let copy = original

copy[0] = 78

console.log(original)
console.log(copy)


let original1 = [1, 2, 3]
let copy1 = [...original1]

copy1[0] = 70

console.log(original1)
console.log(copy1)