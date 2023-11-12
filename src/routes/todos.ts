import { Router } from 'express';

import { Todo } from '../models/todo';

import { json } from 'body-parser';

type requestBody = { text : string };

type requestParams = { todoId : string};

let todos: Todo[] = [] ;

const router = Router();

router.get('/',(req,res,next) => {
    res.status(200).json({ todos : todos});
})

router.post('/todo', (req,res,next) => {
    const body = req.body as requestBody;
    const newTodo : Todo = {
        id : new Date().toISOString(),
        text : body.text
    };

    todos.push(newTodo);
    res.status(200).json({"success":true , message : " Added todo", todo : newTodo , todos : todos})
});


router.put('/todo/:todoId',(req,res,next) => {

    const params = req.params as requestParams;
    const todoId = params.todoId;
    const body = req.body as requestBody;
    const todoIndex = todos.findIndex(todoItem => todoItem.id === todoId);
    if( todoIndex >= 0){
        todos[todoIndex] = { id : todos[todoIndex].id , text : body.text };
        return res.status(200).json({message : 'updated todo',todos : todos});
    }
    res.status(404).json({message : 'could not find todo for this id'});
    })

router.delete('/todo/:todoId',(req,res,next) => {

    todos = todos.filter(todoItem => todoItem.id !== req.params.todoId);

    res.status(200).json({message : "successfully deleted",todos : todos})
})


export default router;
