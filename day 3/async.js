const https = require("https")
const fs = require("fs")

fs.readFileSync("./file.txt","utf-8")
console.log("lalalla")

console.log("Hello Usman and Zaheen")

const a = 50
const b = 100 

https.get("https://dummyjson.com/products/1",(req,res)=>{
    console.log("Fetched Data Successfully")
})

setTimeout(()=>{
    console.log("SetTimeOut Executed")
},5000)

fs.readFile("./file.txt","utf-8",(err,data)=>{
    console.log("File Readed Successfully ", data)
})

function multiply(){
    let result = a * b
    return result
}

const c = multiply(a,b)
console.log("Multiply result "+c)