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
```get
 /api/tasks
```
```post
 /api/tasks
```

```delete
/api/tasks/:id
```

```put
/api/tasks/:id
```
