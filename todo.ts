const todos : string[] =[];
function addTodos(todo:string):void{
    console.log(`todo "${todo}" add to the  list  `)
    todos.push(todo)
    console.log("-----------------------------------------");

    

    
};

function showTodos():void{
    console.log("***************************************");
    
    console.log("To-Do-List ");
    todos.forEach((val,index)=>{
        console.log(`${index+1}: ${val}`);
        
        
        
    });
    
}

export{
    addTodos,
    showTodos
}