import React, { useState } from 'react';
import Todolist from './Todolist';
import AddTodo from './AddTodo';
import Navbar from './Navbar';
import IMAGE2 from './hp1.png';

const Homepage = () => {
  const [todos, setTodos] = useState([
    { title: 'Development', description: 'Lorem ipsum...', priority: 'Medium', id: 1 },
    { title: 'DSA', description: 'Lorem ipsum...', priority: 'Low', id: 2 },
    { title: 'GYM', description: 'Lorem ipsum...', priority: 'High', id: 3 },
  ]);

  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  

  const addTodo = (newTodo) => {
    setTodos([...todos, { ...newTodo, id: todos.length + 1 }]);
  };

  return (
    <>
    <Navbar/>
    <div className="home">
    <img src={IMAGE2} alt="" className='HP-img'/>
      <div className='main1'>
      <AddTodo addTodo={addTodo} />
      <Todolist todos={todos} title="All todos!" handleDelete={handleDelete}  />
      </div>
      
    </div>
    </>
  );
};

export default Homepage;
