let myBook = {
    title :'1984',
    author:'George Orwell',
    pageCounts: 299
}
let otherBook = {
    title :'animal',
    author:'Howard zim',
    pageCounts: 500
}

let getSummary = function(book){
   return{
       summary : `${book.author} wrote ${book.title}`,
       pageCount : `${book.pageCounts}`
   }
    console.log(`${book.author} wrote ${book.title}`)
}

let obj1=getSummary(myBook)
let obj2 =getSummary(otherBook)

console.log(obj1)
console.log(obj2)
console.log(obj1.summary)
