
import './App.css';
import Category from './Components/Category';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="main-section">
        <div className="main-subSection">
           <div className='sub'>
           <Category/> 
           </div>
           </div>
      </div>
    
    </div> 
  );
}

export default App;
