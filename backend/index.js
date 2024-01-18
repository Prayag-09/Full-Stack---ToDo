const express = require('express');
const app = express();
app.use(express.json());
const zod = require('zod');

import { createTodo,updateTodo } from '../types';
app.post('/todos' , (req,res) => {
    const {title,desc} = req.body;
    const obj = {title,desc};
    const validate = createTodo.safeParse(obj);
    if(validate){
        
    }
})

app.get('/todos' , (req,res) => {
    
})
app.put('/completed' , (req,res) => {
    const ID = req.body.id;
    const validate = updateTodo.safeParse(ID);

    if(validate){

    }
})
app.listen(3000);