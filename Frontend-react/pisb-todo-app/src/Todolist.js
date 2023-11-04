import React from 'react';

const TodoList = ({ todos, title, handleDelete }) => {
  return (
    <div className='todo-list'>
      <h1>{title}</h1>
      {todos.map((todo) => (
        <div className="todos-preview" key={todo.id}>
          <h2>{todo.title}</h2>
          <h4>{todo.description}</h4>
          <button className='btn btn-primary' onClick={() => handleDelete(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
