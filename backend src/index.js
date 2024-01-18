const express = require('express');
const app = express();
app.use(express.json());
const zod = require('zod');

import { createTodo,updateTodo } from './types';
app.post('/todos' , (req,res) => {
    const obj = req.body;
    const validate = createTodo.safeParse(obj);
    if(!validate.success){
        res.status(404).json({
            message : "Wrong inputs. Try Again"
        });
        return;
    }
})

app.get('/todos' , (req,res) => {
    
})
app.put('/completed' , (req,res) => {
    const ID = req.body.id;
    const validate = updateTodo.safeParse(ID);

    if(!validate.success){
        res.status(404).json({
            message : "Invalid ID"
        })
        return;
    }
})
app.listen(3000);