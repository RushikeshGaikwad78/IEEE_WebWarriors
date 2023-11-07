const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    description:{
        type: String,
        require: true,
    },
    priority:{
        type: String,
    },
    actions:{
        type: String,
        

    }


}) 

module.exports = mongoose.model('ToDo', todoSchema)
