let greetUser = function (){
    console.log("Welcome user")
}
greetUser()

let squa = function(num){
    console.log(num)
    let result = num* num
    return result
}
let num =3 ;
//console.log(squa(num));  // undefined
console.log(squa(num))

//squa(num);
let otherNum= squa(10)

console.log(otherNum)
