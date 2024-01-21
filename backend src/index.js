const express = require('express');
const app = express();
app.use(express.json());

const { createTodo, updateTodo } = require('./types');
const todo = require('./Database/db.js')

const cors = require('cors');
app.use(cors());

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
        completed: false,
    });
    res.status(200).json("Created a ToDo");
})

app.get('/todos' , async (req,res) => {
    // const getTodo = await todo.find({});
    res.status(200).json({
        todos : []
    });
})

app.put('/completed', async (req, res) => {
    
    const input = req.body;
    const validate = createTodo.safeParse(input);
    
    if (!validate.success) {
        res.status(404).json({
            message: "Invalid ID"
        });
        return;
    }

    try {
        await todo.update({
            _id: req.body.id,
        }, {
            completed: true,
        });

        res.status(200).json({
            message: "Todo marked as completed successfully"
        });
    } catch (error) {
        console.error("Error updating todo:", error);
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
});

app.listen(3000,() => {
    console.log('Server running on Port 3000');
});