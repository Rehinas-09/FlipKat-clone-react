
import './App.css';
import Category from './Components/Category';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="main-section">
           <Category/>
      </div>
    
    </div> 
  );
}

export default App;
