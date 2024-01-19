import mongoose from 'mongoose';
import todoSchema from './schema'
import env from 'dotenv'
env.config();

mongoose.connect(process.env.MONGO_URL);
const todo = mongoose.model("Todos",todoSchema);

module.exports = todo;

