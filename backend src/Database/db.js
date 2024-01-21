const mongoose = require('mongoose');
const todoSchema = require('./schema')
const dbLink = require('./env');

mongoose.connect(dbLink);

const todo = mongoose.model("Todos",todoSchema);

module.exports = todo;