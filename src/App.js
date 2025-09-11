
import './App.css';
import Bigbillio from './Components/Bigbillio';
import Category from './Components/Category';
import Navbar from './Components/Navbar';
import SlideImage from './Components/SlideImage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="main-section">
        <div className="main-subSection">
           <div className='sub'>
           <Category/> 
           <SlideImage/>
           <Bigbillio/>
           </div>
           </div>
      </div>
    
    </div> 
  );
}

export default App;
