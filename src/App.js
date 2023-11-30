import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './Home';
import Auth from './Auth';

function App() {
  return (
    // <div>Home</div>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/auth" element={<Auth/>}/>
        <Route path="/next" element={<Next/>}/>
    </Routes>
  );
}

export default App;
