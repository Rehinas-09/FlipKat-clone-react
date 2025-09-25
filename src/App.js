
import './App.css';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Parent from './Parent';
import Parent2 from './Parent2';




function App() {
  return (
    <div className="App" > 
       <Router>
        <Routes>
          <Route path='/' element={<Parent/>}/>
          <Route path='/product' element={<Parent2/>}/>
        </Routes>
       </Router>
       
        {/* <Navbar/> 
        <Navbar2/>
        <ProductHead/>
        <ProductData/> */}
    </div> 
  );
}

export default App;
