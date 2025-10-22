const crypto = require("crypto")

process.env.UV_THREADPOOL_SIZE = 5

crypto.pbkdf2("password","salt",5000000,50,"sha512",()=>{
    console.log("Crypto 1st Called")
})

crypto.pbkdf2("password","salt",5000000,50,"sha512",()=>{
    console.log("Crypto 2nd Called")
})

crypto.pbkdf2("password","salt",5000000,50,"sha512",()=>{
    console.log("Crypto 3rd Called")
})

crypto.pbkdf2("password","salt",5000000,50,"sha512",()=>{
    console.log("Crypto 4th Called")
})

crypto.pbkdf2("password","salt",5000000,50,"sha512",()=>{
    console.log("Crypto 5th Called")
})