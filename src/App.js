import './App.css';
import React from 'react';
import { Route,Routes } from 'react-router-dom';
import HomePage from './pages/Home';
function App() {
  return (
    <div className="w-screen min-h-screen">
     <Routes>
      <Route
      path='/'  element={<HomePage/>}
      />
      
     </Routes>
    </div>
  );
}

export default App;
