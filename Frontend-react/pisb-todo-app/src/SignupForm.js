// SignupForm.js
import React, { useState } from 'react';
import './SignupForm.css';
import signupImage from './signup.png'; 

function SignupForm() {
  const [firstName, setFirstName] = useState('');
  
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
  
  };

  return (
    <div className="signup-form-container">
      {/* <h2>Sign Up</h2> */}
      <div className='Content'>
        <div className='log-img1'>
        {/* <ImageComponent /> */}
        <img src={signupImage} alt="" />
        </div>
       
       <div className='auth-form1'>
       <h2>Sign-Up</h2>
      <form>
        <div className="form-group">
          <label>Full Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
       
        <div className="form-group">
          <label>Mobile Number:</label>
          <input
            type="text"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
        </div>
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
        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button className="signup-button" onClick={handleSignup}>
          Sign Up
        </button>
      </form>
    </div>
    </div>
    </div>
  );
}

export default SignupForm;
