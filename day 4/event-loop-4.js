const fs = require("fs")

setImmediate(()=>{console.log("SetImmediate Called")})

setTimeout(() => {
    console.log("SetTimeout Called")
}, 0);

Promise.resolve(()=>{console.log("Promise Resolved Called")})

fs.readFile("./file.txt","utf-8",(err,data)=>{
    console.log("File Reading Completed ==> ",data)
})
process.nextTick(()=>{
    process.nextTick(()=>{console.log("Nested Process NextTick Called")})
    console.log("Process NextTick Called")
})

console.log("Last Line of the Code")