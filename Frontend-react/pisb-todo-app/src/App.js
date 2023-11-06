
import './App.css';
import React, { useState } from 'react';
// import Homepage from './Homepage';
// import Navbar from './Navbar';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

function App() {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <div className="App">
    {/* <LoginForm/> */}
    {/* <Navbar/>
    <div className="content">
    <Homepage/>
    </div> */}
     <div className="auth-container">
        {showLogin ? <LoginForm /> : <SignupForm />}
        {showLogin && (
          <p className="toggle-text">
            Don't have an account?{' '}
            <span onClick={() => setShowLogin(false)}>Sign Up</span>
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
