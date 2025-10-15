import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Parent from './Parent';
import Parent2 from './Parent2';
import { SortProvider } from './Components2/Context';
import FilterContextProvider from './Components2/FilterContextProvider';
import FilterSm from './Components2/FilterSm';

function App() {
  return (
    <div className="App">
      <Router>
      <SortProvider>
        <FilterContextProvider>
          <Routes>
            <Route path="/" element={<Parent />} />
            <Route path="/product" element={<Parent2 />} />
            <Route path="/filter" element={<FilterSm />} />
          </Routes>
        </FilterContextProvider>
      </SortProvider>
    </Router>
    </div>
  );
}

export default App;



