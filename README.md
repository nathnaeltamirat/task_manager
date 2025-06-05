# task_manager

## Basic Funtionality

1. Add task - CRUD operation used (POST)
2. Delete task - CRUD operation used (DELETE)  
3. Update task - CRUD operation used (UPDATE)  
4. Delete task - CRUD operation used (DELETE)
5. VIEW task - CRUD operation used (GET)

## How the code base handled
why all operation is stacked in index.js and not separated in to controllers and routers:  
1. Due to usage of an array ( difficult to main consistency)
2. Additional point simplicity of an array

## Bonus Features added
1. Validation of all inputs on post route
2. Validation of id existed or not before adding it
3. Validation of an id before updating
4. validation of an id before deleting

# Routes
GET  
```bash
 /api/tasks
```
RESPONSE  
```json
[
    {
        "id": 1,
        "title": "Buy groceries",
        "completed": false
    },
    {
        "id": 2,
        "title": "Read a book",
        "completed": true
    },
    {
        "id": "3",
        "title": "Getting internship",
        "completed": "false"
    }
]
```

POST  
```bash
 /api/tasks
```
INPUTS - query
```bash
id:int 
title:string  
compeleted:bool 
```
RESPONSE  
```bash
"Task updated or Error updating task with same id found or input errror"
```

Update Status  
```bash
/api/tasks/:id
```
INPUT params  
```bash
id:int  
```
Response    
```bash
"task sucesfully completed"
```

Delete Status  

```bash
/api/tasks/:id
```

INPUT params  
```bash
id:int
```
Response  
```bash
"task sucesfully deleted"
```
