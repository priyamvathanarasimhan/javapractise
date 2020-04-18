let name 
name = 'jen'

if(name===undefined){
    console.log("enter a nmae")
}
else {
    console.log(name)
}

//undefined for function arguement 
let square = function (num){
    console.log (num)
}
let result = square()
console.log(result)

let age = 27
//age = undefined 
age = null
console.log (age)