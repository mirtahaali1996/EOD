import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import StoreAnalysis from './pages/storeAnalysis';
import NextDayBudgetGoals from './pages/nextDayBudgetGoals';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/2" element={<StoreAnalysis />}/>
          <Route path="/3" element={<NextDayBudgetGoals />}/>
        </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
