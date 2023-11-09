// LoginForm.js
import React, { useState } from 'react';
import './LoginForm.css'; 

import loginImage from './login.png';
import {Link,useHistory} from 'react-router-dom';
import axios from 'axios'


function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  // const handleLogin = () => {
  //   if(email === "prasad.gujar2004@gmail.com" && password==="password"){
  //     history.push('/homepage');
  //   }
  //   else{
  //     alert("Enter Valid Credentials !!");
  //   }
  // };

  async function handleLogin(e){
    e.preventDefault();

    try{
      await axios.post("http://localhost:3000/login",{
        email, password
      })

      .then(resp=>{
        if(resp.data === "exist"){
          history.push("/homepage",{state: {id:email}})
        }
        else if(resp.data === "notexist"){
          alert("user is not loged in ")
        }
      })
      .catch(e=>{
        alert("wrong details")
        console.log(e)
      })
    }
    catch{
        console.log(e)
    }
  }

  return (
    
    <div className="login-form-container">
  
       
      <div className='Content'>
        <div className='log-img'>
       
        <img src={loginImage} alt="" />
        </div>
      <div className="auth-form">
      
       <h2 className='title'>Login</h2>
        <form>
          
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
        <div className='footer'>
        <h5>Don't Have an account? <a href="/signup">Signup</a></h5>
        </div>

      </form>
    </div>
    </div>
    </div>
    
  );
}

export default LoginForm;
