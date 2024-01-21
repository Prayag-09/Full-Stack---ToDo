const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    title: String,
    desc: String,
    finished: Boolean
});

module.exports = todoSchema;
