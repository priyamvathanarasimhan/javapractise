// let name = " Pri Simh "
 
// //length property 
// console.log(name.length) 

// //convert to uppper case 
// console.log(name.toUpperCase())

// let password = '123abc234'
// console.log(password.includes('2'))

// trim ()  removes the space from both ends 

let validatePassword = function (validPassword) {
    if (validPassword.length > 8 && !validPassword.toLowerCase().includes('password')){
        console.log("password entered is valid")
    }
    else {
       
        console.log("Enter a password greater than 8 characters or dont include password")
    }
}

validatePassword("asf")
validatePassword("Password")
validatePassword("123PASSWORDqw")
validatePassword("fghjk4567*")