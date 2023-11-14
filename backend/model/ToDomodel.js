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
})

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

// const collections = mongoose.model("collection", todoSchema)
// module.exports=collections
const ToDoCollection = mongoose.model("ToDo", todoSchema);
const UserCollection = mongoose.model("User", userSchema);

module.exports = {
    ToDoCollection,
    UserCollection
};
