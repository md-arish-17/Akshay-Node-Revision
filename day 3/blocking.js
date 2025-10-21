const crypto = require("crypto")

crypto.pbkdf2Sync("password","salt",5000000,50,"sha512")
console.log("key is generated")

crypto.pbkdf2("password","salt",50000,50,"sha512",(error,key)=>{
    console.log("Async key generated successfully ",key)
})

let a = 25
let b = 50

function multiply(){
    let result = a * b
    return result
}

const c = multiply(a,b)
console.log(c)