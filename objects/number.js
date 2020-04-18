let num = 123.956 


// console.log(num.toFixed(2)) //123.96

// console.log(Math.round(num)) //124 
// console.log(Math.ceil(num)) //124 
// console.log(Math.floor(num)) //123
//console.log(Math.random()) 

// let min = 10
// let max = 20 
// let randomNumner = Math.floor(Math.random() * (max-min+1)) + min
// console.log(randomNumner)

makeGuess = function (guess){
    let min = 1
    let max = 10
    let randomNumner = Math.floor(Math.random() * (max-min+1)) + min
    return guess === randomNumner
}
console.log( makeGuess(1))
