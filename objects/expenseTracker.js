let myAccount = {
    name: 'Andrew Mead',
    expenses: 0,
    income: 0
   }

   let addExpense = function (account, amount) {   
    account.expenses = account.expenses + amount // object reference is there
   return account.expenses
   }

   let addIncome = function (account,amount){
    account.income = account.income + amount
    return account.income
   } 
   let resetAccount = function (account){
       account.expense = 0
       account.income=0
   }
   let accountSummary = function(account){
       let accountBalance= account.income-account.expenses
       //return `${accountBalance}`
       return accountBalance
       }

   let expens = addExpense(myAccount, 2000)
   console.log (expens)
   console.log(myAccount)
  let incomes = addIncome(myAccount,1000)
  console.log(incomes)
  console.log(myAccount)
    let balances = accountSummary(myAccount)
    console.log(balances) // I am getting Na
    console.log(myAccount)

    resetAccount(myAccount)
    console.log(myAccount)