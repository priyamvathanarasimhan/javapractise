//const arr1 = ["list1","list2","list3","list4","list5"]

const todos= [{
    text:"list1",
    comletd:true
},{
    text:"list2",
    comletd:false
},{
    text:"list3",
    comletd:true
},{
    text:"list4",
    comletd:true
}]

const sortTodo = function (todos){
    todos.sort(function(a,b){
        if (a.comletd>b.comletd){
            return -1
        }
        else if(a.comletd<b.comletd){
            return 1
        }
        else {
            return 0
        }
    })
}

const sortTodo1 = function (todos){
    todos.sort(function(a,b){
        if (!a.comletd&&b.comletd){
            return -1
        }
        else if(!b.comletd&&a.comletd){

            return 1
        }
        else {
            return 0
        }
    })
}



const deleteTodo = function(todos, todoText){
    const index = todos.findIndex(function (todo){
        return todo.text.toLowerCase()===todoText.toLowerCase()
    })
    if(index>-1){
        todos.splice(index,1)
    }
} 

const getThingsTodo = function (todos){
    return todos.filter(function (todo){
        
        return todo.comletd === false
       })
   }

   //console.log(getThingsTodo(todos))
// deleteTodo(todos, 'list2')
// console.log(todos)

sortTodo1(todos)
console.log(todos) 