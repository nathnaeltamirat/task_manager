const express = require('express')
const app = express();
let temp = [ { id: 1, title: 'Buy groceries', completed: false }, { id: 2, title: 'Read a book', completed: true } ];


app.get("/api/tasks",(req,res)=>{
    res.json(temp)
})
app.delete("/api/tasks/:id",(req,res)=>{
    const id = req.params.id;
    new_temp = []
    let found = false;
    for(let i = 0; i < temp.length; i++){
        if(id != temp[i].id){
            new_temp.push(temp[i])
        }else{
            found = true;
        }
    }
    temp = new_temp;
    if (found){
        res.json(`task sucesfully deleted`).status(200);
    }else{
        res.json(`task not found`).status(404);
    }

}
)

app.put("/api/tasks/:id",(req,res)=>{
    const id = req.params.id;
    existing = false
    new_temp = []
    let found = false;
    for(let i = 0; i < temp.length; i++){
        if(id == temp[i].id && !temp[i].completed){
            temp[i].completed = true;
            found = true;
            break;
        }else if( id == temp[i].id && temp[i].completed){
            existing = true;
            found = true;
            break;
        }
    }
    if (found && !existing){
        res.json(`task sucesfully completed`).status(200);
    }
    else if(found && existing){
        res.json(`task is already completed`).status(200);
    }
    else{
        res.json(`task not found`).status(404);
    }

}
)
app.post("/api/tasks/",(req,res)=>{
    const {id,title,completed} = req.query;
    if(!title || !id || !completed){
        res.json("inputs must not be empty")
    }
    console.log(id,title,completed);
    new_task = {id:id,title:title,completed:completed};
    let existing = false;
    for(let i = 0; i < temp.length; i++){
        if(id == temp[i].id){
            existing = true;
            break;
        }
    }
    if(new_task && !existing){
        temp.push(new_task);
        res.json("Task updated").status(200);
    }else if(new_task && existing){
        res.json("Error updating task with same id found").status(501);
    }
    res.json("input error").status(401);
})


app.listen(5000,function(){
        console.log("server is listening")
});
