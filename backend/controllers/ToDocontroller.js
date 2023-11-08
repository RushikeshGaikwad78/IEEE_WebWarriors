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

// module.exports.saveToDo = async(req,resp) => {
//     const {title, description} = req.body

//     ToDomodel
//     .create({title,description})
//     .then((data)=>{
//         console.log("Added  Successfully")
//         console.log(data)
//         resp.send(data)
//     })
// }


module.exports.saveToDo = async(req,resp) => {
    const {title, description, priority, actions} = req.body

    ToDomodel
    .create({title, description, priority, actions})
    .then((data)=>{
        console.log("Added Successfully")
        console.log(data)
        resp.send({
          id: data._id,
          title: data.title,
          description: data.description,
          priority: data.priority,
          actions : data.actions
        });
    })
}

// module.exports.updateToDo= async (req,resp) => {
//     const{_id,title,description, priority, actions} =  req.body
//     ToDomodel
//     .findByIdAndUpdate(_id, {title}, {description}, {priority}, {actions})
//     .then(()=> resp.send("updated successfully...."))
//     .catch((err)=> console.log(err))
// }

// module.exports.DeleteToDo= async (req,resp) => {
//     const{_id,title, description, priority, actions} =  req.body
//     ToDomodel
//     .findByIdAndDelete(_id, {title}, {description}, {priority}, {actions})
//     .then(()=> resp.send("Deleted successfully...."))
//     .catch((err)=> console.log(err))
// }

module.exports.updateToDo = async (req, resp) => {
    const { _id, title, description, priority, actions } = req.body;
    ToDomodel.findByIdAndUpdate(_id, { title, description, priority, actions })
        .then(() => resp.send("Updated successfully..."))
        .catch((err) => console.log(err));
}

module.exports.DeleteToDo = async (req, resp) => {
    const { _id } = req.body;
    console.log("Received _id for delete:", _id); // Add this line to log the _id

    if (!_id) {
        return resp.status(400).send('Missing _id parameter for delete');
    }

    ToDomodel.findByIdAndDelete(_id)
        .then(() => resp.send("Deleted successfully..."))
        .catch((err) => {
            console.error('Error deleting todo:', err);
            resp.status(500).send('Internal Server Error');
        });
};




// module.exports.saveToDo = async(req,resp) => {
//     const {text} = req.body

//     ToDomodel
//     .create({text})
//     .then((data)=>{
//         console.log("Added  Successfully")
//         console.log(data)
//         resp.send(data)
//     })
// }
module.exports.saveToDo = async(req,resp) => {
    const {title, description, priority, actions} = req.body

    ToDomodel
    .create({title, description, priority, actions})
    .then((data)=>{
        console.log("Added Successfully")
        console.log(data)
        resp.send({
          id: data._id,
          title: data.title,
          description: data.description,
          priority: data.priority,
          actions: data.actions
        });
    })
}