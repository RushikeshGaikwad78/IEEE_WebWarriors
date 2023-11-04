const ToDomodel = require('../model/ToDomodel');

const getToDo = async (req, resp) => {
    try {
        const todo = await ToDomodel.find({});
        resp.send(todo);
    } catch (error) {
        resp.status(500).send('Internal Server Error');
        console.error('Error fetching ToDo items:', error);
    }
};
module.exports = getToDo;

module.exports.saveToDo = async(req,resp) => {
    const {text} = req.body

    ToDomodel
    .create({text})
    .then((data)=>{
        console.log("Added  Successfully")
        console.log(data)
        resp.send(data)
    })
}

module.exports.updateToDo= async (req,resp) => {
    const{_id,text} =  req.body
    ToDomodel
    .findByIdAndUpdate(_id, {text})
    .then(()=> resp.send("updated successfully...."))
    .catch((err)=> console.log(err))
}

module.exports.DeleteToDo= async (req,resp) => {
    const{_id,text} =  req.body
    ToDomodel
    .findByIdAndDelete(_id, {text})
    .then(()=> resp.send("Deleted successfully...."))
    .catch((err)=> console.log(err))
}