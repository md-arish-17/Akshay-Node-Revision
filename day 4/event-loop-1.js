const fs = require("fs")

const a = 100

setImmediate(()=>{console.log("SetImmediate Called")})

fs.readFile("./file.txt","utf-8",(err,data)=>{
    console.log("File Data Fetched ==> ",data)
})

setTimeout(()=>{
    console.log("SetTimeout Called")
},0)

function myFunc(){
    console.log("A Value ==> ",a) 
}
myFunc()
console.log("Last Line of the Code")