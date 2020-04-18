let tempConv = function (farenheit){
    let calcius = (farenheit-32) * 5/9
    return calcius
}
let temp1 = tempConv(32)
let temp2 = tempConv(68)
console.log(temp1,temp2)