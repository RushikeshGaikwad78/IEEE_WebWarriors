import React from 'react';
import './landing.css';
import IMAGE1 from './team checklist-rafiki.png';
// import { Link } from 'react-router-dom';
import Navbar1 from './Navbar1';
import {Link,useHistory} from 'react-router-dom';

export default function Landing() {
  const history = useHistory();
  const handleGetStarted = () => {
    history.push('/login?');
  };

  return (
   <>
   <Navbar1/>
    <div className='landing-container'>
      
      <section id="hero">
        <div className='Img-container'>
          <img
            src={IMAGE1}
            alt="Todo App"
            className="hero-image"
          />
        </div>
        <div className='content-container'>
          <div className="hero-content">
            <h1 className='title1'>Find a better way to work!!!</h1>
            <p>Unleash the power of productivity in the palm of your hand and transform your daily grind into a symphony of accomplishments. Get things done effortlessly, beautifully, and on your own terms with our task management app, where your to-do list becomes a roadmap to success, one task at a time.</p>
            {/* <Link to="/login" className="cta-button">Get Started</Link> */}
            <button className="cta-button" onClick={handleGetStarted}>
          Get Started
        </button>
        
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
