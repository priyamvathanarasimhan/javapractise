let add = function(a,b,c){
return a + b + c
}

let result = add(1,2,3)
console.log(result)

let getscoreText = function (name='Annonymous', score=0) {
   // let result1 = 'name: ' + name + ' - Score: '+ score
   let result1 = `name ${name} - Score ${score}`
    return result1
}

let value = getscoreText(undefined,10)
console.log(value)

let getTip = function(total , tipPercent=0.25){
    let percent = tipPercent*100
    let tip = total* tipPercent 
    return `A percent $${tipPercent*100}% tip on  ${total} would be $${tip}`
}
let tip = getTip(40,0.25)
console.log(tip)