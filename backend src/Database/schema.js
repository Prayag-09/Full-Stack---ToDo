import mongoose, { Mongoose } from 'mongoose';
const todoSchema = mongoose.Schema({
    title : String,
    desc : String,
    finished : Boolean
})
const todo =  mongoose.model("ToDo Schema",todoSchema);
module.exports = todo;