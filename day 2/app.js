const abc = require("./xyz")
const {myFunc,myFunc2} = require("./calculate/calculation")
const data = require("./data.json")

const myName = "Arish"
const a = 10
const b = 20

myFunc(a,b)
myFunc2(a,b)

console.log(myName)
console.log(data)
// console.log(a+b)