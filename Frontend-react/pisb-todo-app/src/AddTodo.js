// import React, { useState } from 'react';

// const AddTodo = ({ addTodo }) => {
//   const [newTodo, setNewTodo] = useState({ title: '', description: '', priority: 'Low' });

//   const handleAddTodo = () => {
//     if (newTodo.title.trim() !== '') {
//       addTodo(newTodo);
//       setNewTodo({ title: '', description: '', priority: 'Low' });
//     }
//   };

//   return (
//     <div className="add-todo">
//       <h2>Add Todo</h2>
//       <input
//         type="text"
//         placeholder="Title"
//         value={newTodo.title}
//         onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
//       />
//       <textarea
//         placeholder="Description"
//         value={newTodo.description}
//         onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
//       />
//       <label htmlFor="priority">Priority:</label>
//       <select
//         id="priority"
//         value={newTodo.priority}
//         onChange={(e) => setNewTodo({ ...newTodo, priority: e.target.value })}
//       >
//         <option value="Low">Low</option>
        
//         <option value="High">High</option>
//       </select>
//       <button onClick={handleAddTodo}>Add Todo</button>
//     </div>
//   );
// };

// export default AddTodo;

import React, { useState } from 'react';
import axios from 'axios';
import { addToDo } from './unts/handlejs';
// import { addToDo, getAllToDo } from './unts/handlejs';

const AddTodo = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState({ title: '', description: '', priority: 'Select Priority' });

  const handleAddTodo = () => {
    if (newTodo.title.trim() !== '') {
      axios.post('http://localhost:3000/save', newTodo)
        .then(response => {
          console.log('Todo added successfully:');
          addTodo(response.data);
          setNewTodo({ title: '', description: '', priority: 'Select Priority' });

      
        })

        .catch(error => {
          console.error('Error adding todo:', error);
        });
    }
  };


  return (
    <div className="add-todo">
      <h2>Add Todo</h2>
      <input
        type="text"
        placeholder="Title"
        value={newTodo.title}
        onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
      />
      <textarea
        placeholder="Description"
        value={newTodo.description}
        onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
      />
      <label htmlFor="priority">Priority:</label>
      <select
        id="priority"
        value={newTodo.priority}
        onChange={(e) => setNewTodo({ ...newTodo, priority: e.target.value })}
      >
        <option value="Low">Low</option>
        <option value="High">High</option>
      </select>
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default AddTodo;