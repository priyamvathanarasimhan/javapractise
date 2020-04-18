let myBook = {
    title :'1984',
    author:'George Orwell',
    pageCounts: 299
}
console.log(myBook)
console.log(myBook.author,myBook.pageCounts)
console.log(`${myBook.author} wrote ${myBook.title}`)

myBook.title='animal form'
console.log(`${myBook.author} wrote ${myBook.title}`)