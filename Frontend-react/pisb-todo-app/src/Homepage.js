import React, { useState } from 'react';
import TodoList from './Todolist'; // Corrected import statement

const Homepage = () => {
  const [todos, setTodos] = useState([
    { title: 'Development', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem necessitatibus numquam, amet ex similique aperiam aut porro corrupti animi ali", id: 1 },
    { title: 'DSA', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem necessitatibus numquam, amet ex similique aperiam aut porro corrupti animi ali', id: 2 },
    { title: 'GYM', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem necessitatibus numquam, amet ex similique aperiam aut porro corrupti animi ali', id: 3 }
  ]);

  const handleDelete = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  }

  return (
    <div className="home">
      <TodoList todos={todos} title='All todos!' handleDelete={handleDelete} />
    </div>
  );
  }

export default Homepage;  //hi-rushi-here
