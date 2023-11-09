// import React, { useState } from 'react';
// import Todolist from './Todolist';
// import AddTodo from './AddTodo';
// import Navbar from './Navbar';
// import IMAGE2 from './hp1.png';

// const Homepage = () => {
//   const [todos, setTodos] = useState([
//     { title: 'Development', description: 'Lorem ipsum...', priority: 'Medium', id: 1 },
//     { title: 'DSA', description: 'Lorem ipsum...', priority: 'Low', id: 2 },
//     { title: 'GYM', description: 'Lorem ipsum...', priority: 'High', id: 3 },
//   ]);

//   const handleDelete = (id) => {
//     const newTodos = todos.filter((todo) => todo.id !== id);
//     setTodos(newTodos);
//   };

  

//   const addTodo = (newTodo) => {
//     setTodos([...todos, { ...newTodo, id: todos.length + 1 }]);
//   };

//   return (
//     <>
//     <Navbar/>
//     <div className="home">
//     <img src={IMAGE2} alt="" className='HP-img'/>
//       <div className='main1'>
//       <AddTodo addTodo={addTodo} />
//       <Todolist todos={todos} title="All todos!" handleDelete={handleDelete}  />
//       </div>
      
//     </div>
//     </>
//   );
// };

// export default Homepage;


import React, {  useState,useEffect } from 'react';
import Todolist from './Todolist';
import AddTodo from './AddTodo';
import axios from 'axios';
import Navbar from './Navbar';
import IMAGE2 from './hp1.png';
// import { getAllToDo } from './unts/handlejs';
import { useLocation, useNavigate } from 'react-router-dom';

const Homepage = () => {
  const [todos, setTodos] = useState([]);
  // const [title, setTodos] = useState("");

  useEffect(() => {
    // Fetch all todos when the component mounts
    axios.get('http://localhost:3000/homepage')
      .then((response) => {
        console.log(response.data);
        setTodos(response.data);
      })
      .catch(error => {
        console.error('Error fetching todos:', error);
      });
  }, []);

  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  const location = useLocation()

  

  // const addTodo = (newTodo) => {
  //   setTodos([todos, { ...newTodo, id: todos.length + 1 }]);
  // };
  // const addTodo = (newTodo) => {
  //   axios.post('http://localhost:3000/save', newTodo)
  //     .then(response => {
  //       console.log('Todo added successfully:', response.data);
  //       setTodos([...todos, response.data]);
  //     })
  //     .catch(error => {
  //       console.error('Error adding todo:', error);
  //     });
  // };

//   return (
//     <div className="home">
//       <AddTodo addTodo={AddTodo} />
//       <Todolist todos={todos} title="All todos!" handleDelete={handleDelete}  />
//     </div>
//   );
// };

// export default Homepage;
  return (
    <>
    <Navbar/>
    <div className="homepage">
    <img src={IMAGE2} alt="" className='HP-img'/>
      <div className='main1'>
        <h1> {location.state.id} </h1>
      <AddTodo addTodo={AddTodo} />
      <Todolist todos={todos} title="All todos!" handleDelete={handleDelete}  />
      </div>
      
    </div>
    </>
  );
};

export default Homepage;