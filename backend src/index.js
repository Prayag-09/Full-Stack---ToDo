const express = require('express');
const app = express();
app.use(express.json());
import { createTodo,updateTodo } from './types';
const todo = require('./Database/db.js');
const zod = require('zod');


app.post('/todos' ,async  (req,res) => {
    const input = req.body;
    const validate = createTodo.safeParse(input);
    if(!validate.success){
        res.status(404).json({
            message : "Wrong inputs. Try Again"
        });
        return;
    }

    await todo.create({
        title : input.title,
        desc : input.desc,
        completed : false
    });
    res.status(200).json("Created a ToDo");
})

app.get('/todos' , async (req,res) => {
    const getTodo = await todo.find({});
    res.status(200).json({getTodo});
})
app.put('/completed' , async (req,res) => {
    const ID = req.body.id;
    const validate = updateTodo.safeParse(ID);

    if(!validate.success){
        res.status(404).json({
            message : "Invalid ID"
        })
        return;
    }

    await todo.update({
        _id : ID,
    },{
        completed : true,
    })
})
app.listen(3000);