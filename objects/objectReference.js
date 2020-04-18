let myAccount = {
    name: 'Andrew Mead',
    expenses: 0,
    income: 0
   }

   let otherAccount = myAccount
   otherAccount.income = 1000
   otherAccount = {}

   let addExpense = function (account, amount) {
       //account = { } wont work. giving a new value to the object, breaks the object
       //reference bonding
    account.expenses = account.expenses + amount // object reference is there
    console.log(account)
   }
   addExpense(myAccount, 2000)
   console.log(myAccount)
   console.log (otherAccount)