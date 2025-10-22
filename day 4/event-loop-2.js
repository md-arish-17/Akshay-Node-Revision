const fs = require("fs")

const a = 100
setImmediate(()=>{console.log("SetImmediate Called")})

Promise.resolve().then(()=>{console.log("Promise Resolved")})

fs.readFile("./file.txt","utf-8",(err,data)=>{
    console.log("File Data Fetched ==> ",data)
})

setTimeout(() => {
    console.log("SetTimeout Called")
}, 0);

process.nextTick(()=>{console.log("Process NextTick")})

function myFunc(){
    console.log("A ==> ",a)
}
myFunc()
console.log("Last line of the code")