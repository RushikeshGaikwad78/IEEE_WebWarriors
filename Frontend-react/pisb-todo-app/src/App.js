
import './App.css';
import Homepage from './Homepage';
import Navbar from './Navbar';
// import LoginPage from './LoginPage';

function App() {
  return (
    <div className="App">
     {/* <LoginPage/> */}
    <Navbar/>
    <div className="content">
    <Homepage/>
    </div>
    </div>
  );
}

export default App;
