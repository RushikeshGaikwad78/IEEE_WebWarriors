import React, { useState } from 'react';

const Todolist = ({ todos, title, handleDelete, handleUpdate }) => {
  const [editableTodo, setEditableTodo] = useState(null);

  const handleEdit = (todo) => {
    setEditableTodo(todo);
  };

  const handleSave = () => {
    setEditableTodo(null);
  };

  const isEditing = (todo) => {
    return editableTodo && editableTodo.id === todo.id;
  };

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
            <tr key={todo.id}>
              <td>
                {isEditing(todo) ? (
                  <input type="text" value={editableTodo.title} onChange={(e) => setEditableTodo({ ...editableTodo, title: e.target.value })} />
                ) : (
                  todo.title
                )}
              </td>
              <td>
                {isEditing(todo) ? (
                  <textarea value={editableTodo.description} onChange={(e) => setEditableTodo({ ...editableTodo, description: e.target.value })} />
                ) : (
                  todo.description
                )}
              </td>
              <td>
                {isEditing(todo) ? (
                  <select value={editableTodo.priority} onChange={(e) => setEditableTodo({ ...editableTodo, priority: e.target.value })}>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                ) : (
                  todo.priority
                )}
              </td>
              <td>
                <div className="actions-container">
                  {isEditing(todo) ? (
                    <button onClick={handleSave}>Save</button>
                  ) : (
                    <>
                      <i
                        className="fas fa-pen"
                        onClick={() => handleEdit(todo)}
                        style={{ color: 'black' }} 
                        title="Edit" 
                      ></i>
                      <i
                        className="fas fa-trash"
                        onClick={() => handleDelete(todo.id)}
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
