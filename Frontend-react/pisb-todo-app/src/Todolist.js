import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { addToDo, getAllToDo } from './unts/handlejs';

const Todolist = ({ title, handleDelete, handleUpdate }) => {
  const [editableTodo, setEditableTodo] = useState(null);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000')
      .then(response => {
        console.log(response.data); // Add this line
        setTodos(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.error('Error fetching todos:', error);
      });
  },[]);

  // const handleEdit = (todo) => {
  //   setEditableTodo(todo);
  // };

  // const handleSave = () => {
  //   setEditableTodo(null);
  // };

  const handleEdit = (todo) => {
    setEditableTodo({...todo});
  };

  const handleSave = () => {
    // Send a request to update the TODO in the database
    axios
      .post('http://localhost:3000/update', editableTodo)
      .then((response) => {
        // Update the local state with the updated TODO
        // setEditableTodo(null);
        const updatedTodos = todos.map((todo) =>
          todo._id === editableTodo._id ? editableTodo : todo
        );
        setTodos(updatedTodos);
        setEditableTodo(null);
      })
      .catch((error) => {
        console.error('Error updating todo:', error);
      });
  };
  
  const handleDeleteTodo = (id) => {
    console.log("Deleting TODO with _id:", id); // Add this line for debugging
  
    // Send a request to delete the TODO from the database and pass the _id
    axios
      .post('http://localhost:3000/delete', { _id: id })
      .then((response) => {
        // Remove the TODO from the local state
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
        window.location.reload(false);
      })
      .catch((error) => {
        console.error('Error deleting todo:', error);
      });
  };
  
  

  const isEditing = (todo) => {
    return editableTodo && editableTodo.id === todo.id;
  };

  // const isEditing = (todo) => {
  //   return editableTodo && editableTodo.id === todo.id;
  // };

  return (
    <div className="todo-list">
      <h1>{title}</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Priority</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo._id}>
              {/* <td>
                {isEditing(todo) ? (
                  <input type="text" value={editableTodo.title} onChange={(e) => setEditableTodo({ ...editableTodo, title: e.target.value })} />
                ) : (
                  todo.title
                )}
              </td> */}

<td>
                {editableTodo && editableTodo._id === todo._id ? (
                  <input
                    type="text"
                    value={editableTodo.title}
                    onChange={(e) => setEditableTodo({ ...editableTodo, title: e.target.value })}
                  />
                ) : (
                  todo.title
                )}
              </td>


              {/* <td>
                {isEditing(todo) ? (
                  <textarea value={editableTodo.description} onChange={(e) => setEditableTodo({ ...editableTodo, description: e.target.value })} />
                ) : (
                  todo.description
                )}
              </td> */}

            <td>
                {editableTodo && editableTodo._id === todo._id ? (
                  <textarea
                    value={editableTodo.description}
                    onChange={(e) => setEditableTodo({ ...editableTodo, description: e.target.value })}
                  />
                ) : (
                  todo.description
                )}
              </td>


              {/* <td>
                {isEditing(todo) ? (
                  <select value={editableTodo.priority} onChange={(e) => setEditableTodo({ ...editableTodo, priority: e.target.value })}>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                ) : (
                  todo.priority
                )}
              </td> */}

              <td>
                {editableTodo && editableTodo._id === todo._id ? (
                  <select
                    value={editableTodo.priority}
                    onChange={(e) => setEditableTodo({ ...editableTodo, priority: e.target.value })}
                  >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                ) : (
                  todo.priority
                )}
              </td>



              {/* <td>
                <div className="actions-container">
                  {isEditing(todo) ? (
                    <button onClick={handleSave}>Save</button>
                  ) : ( */}
                  <td>
                <div className="actions-container">
                  {editableTodo && editableTodo._id === todo._id ? (
                    <button onClick={() => handleSave(editableTodo)}>Save</button>
                  ) : (
                    <>
                      {/* <i
                        className="fas fa-pen"
                        onClick={() => handleEdit(todo)}
                        style={{ color: 'black' }} 
                        title="Edit" 
                      ></i>
                      <i
                        className="fas fa-trash"
                        onClick={() => handleDeleteTodo(todo._id)} // Ensure you are using todo._id
                        style={{ color: 'black' }}
                        title="Delete"
                      ></i> */}

<i
                        className="fas fa-pen"
                        onClick={() => handleEdit(todo)}
                        style={{ color: 'black' }}
                        title="Edit"
                      ></i>
                      <i
                        className="fas fa-trash"
                        onClick={() => handleDeleteTodo(todo._id)}
                        style={{ color: 'black' }}
                        title="Delete"
                      ></i>

                    </>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Todolist;




