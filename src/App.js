import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Parent from './Parent';
import Parent2 from './Parent2';
import { SortProvider } from './Components2/Context';
import FilterContextProvider from './Components2/FilterContextProvider';

function App() {
  return (
    <div className="App">
      <Router>
        <SortProvider>
          <Routes>
            <Route path='/' element={<Parent />} />
            <Route path='/product' element={
              <FilterContextProvider>
                <Parent2 />   
              </FilterContextProvider>
            } />
          </Routes> 
        </SortProvider>
      </Router>
    </div>
  );
}

export default App;



