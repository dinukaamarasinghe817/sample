import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './Home';
import Auth from './Auth';
import Next from './Next';
import NewComp from './NewComp';

function App() {
  return (
    // <div>Home</div>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/auth" element={<Auth/>}/>
        <Route path="/newcomponent" element={<NewComp/>}/>
        <Route path="/next" element={<Next/>}/>
    </Routes>
  );
}

export default App;
