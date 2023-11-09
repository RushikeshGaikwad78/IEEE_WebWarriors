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
    },
    email:{
         type: String,
         require: true,
    }, 
    password:{
        type: String,
        require: true,
    }, 
    // firstName:{
    //     type: String,
    //     require: true,
    // },
    // confirmPassword:{
    //     type: String,
    //     require: true,
    // }



}) 

const collections = mongoose.model("collection", todoSchema)
module.exports=collections
