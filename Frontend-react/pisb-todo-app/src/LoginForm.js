// LoginForm.js
import React, { useState } from 'react';
import './LoginForm.css'; 
// import ImageComponent from './ImageComponent';
import loginImage from './login.png';
import {Link,useHistory} from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    history.push('/homepage');
  };

  return (
    
    <div className="login-form-container">
      {/* <h2>Login</h2> */}
       
      <div className='Content'>
        <div className='log-img'>
        {/* <ImageComponent /> */}
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
        

      </form>
    </div>
    </div>
    </div>
    
  );
}

export default LoginForm;
