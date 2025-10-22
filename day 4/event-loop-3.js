const fs = require("fs")

setImmediate(()=>{console.log("SetImmediate 1st Called")})

setTimeout(() => {
    console.log("SetTimeout Outer Called")
}, 0);

Promise.resolve().then(()=>{console.log("Promise Resolved Outer")})

fs.readFile("./file.txt","utf-8",(err,data)=>{
    setTimeout(() => {
        console.log("SetTimeout Inner Called")
    }, 0);
    process.nextTick(()=>{console.log("Inner process nextTick Called")})
    setImmediate(()=>{console.log("Inner setImmediate called")})
    console.log("File Data Fetched Successfully ==> ",data)
})

process.nextTick(()=>{console.log("Outer process nextTick Called")})
console.log("Last Line of the Code")