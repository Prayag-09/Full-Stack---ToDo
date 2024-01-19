import mongoose from 'mongoose';
const todoSchema = mongoose.Schema({
    title : String,
    desc : String,
    finished : Boolean
})
module.exports = todoSchema;