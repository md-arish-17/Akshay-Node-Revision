console.log("Hello world")

let a = 81
let b = 29

setTimeout(()=>{
    console.log("SetTimeout Executed")
},0)

function multiply(){
    let result = a * b
    return result
}

let c = multiply(a,b)
console.log(c)